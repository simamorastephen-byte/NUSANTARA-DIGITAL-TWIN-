/**
 * NUSANTARA DIGITAL TWIN - CORE APPLICATION CONTROLLER
 * Menghubungkan State, Audio FX, UI Event Listeners, Data, GIS Peta, dan Grafik
 */

// ==========================================
// 1. WEB AUDIO API - SCI-FI SOUND EFFECTS
// ==========================================
class SoundFXController {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    }

    playTone(freq, type = 'sine', duration = 0.08, vol = 0.08) {
        if (this.isMuted) return;
        try {
            this.init();
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            // Audio error silently ignored
        }
    }

    playHover() {
        this.playTone(880, 'sine', 0.04, 0.03);
    }

    playClick() {
        this.playTone(1200, 'triangle', 0.08, 0.06);
    }

    playScan() {
        if (this.isMuted) return;
        this.playTone(600, 'sawtooth', 0.12, 0.05);
        setTimeout(() => this.playTone(950, 'sine', 0.1, 0.05), 50);
    }

    playAlert() {
        this.playTone(440, 'square', 0.15, 0.08);
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
}

const audioFX = new SoundFXController();
window.audioFX = audioFX;

// ==========================================
// 2. STATE MANAGER
// ==========================================
const AppState = {
    selectedProvince: null,
    selectedIslandFilter: "Semua",
    searchQuery: "",
    activeTab: "overview",
    compareProvinceA: null,
    compareProvinceB: null
};

// ==========================================
// 3. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTimezoneClocks();
    initUIEventListeners();
    renderProvinceSidebarList();

    // Default select DKI Jakarta or Kalimantan Timur (IKN)
    const defaultProvince = getProvinceById("ID-KI") || PROVINCES_DATA[0];
    
    // Inisialisasi Peta Leaflet
    initNusantaraMap((provId) => {
        selectProvinceById(provId);
    });

    // Select default province
    if (defaultProvince) {
        selectProvinceById(defaultProvince.id);
    }

    // Jalankan kalkulasi simulasi awal
    runSimulationAndRender();
});

// ==========================================
// 4. LIVE CLOCK TELEMETRY (WIB, WITA, WIT)
// ==========================================
function initTimezoneClocks() {
    function updateClocks() {
        const now = new Date();

        // WIB (UTC+7)
        const wibTime = new Date(now.getTime() + (now.getTimezoneOffset() + 420) * 60000);
        // WITA (UTC+8)
        const witaTime = new Date(now.getTime() + (now.getTimezoneOffset() + 480) * 60000);
        // WIT (UTC+9)
        const witTime = new Date(now.getTime() + (now.getTimezoneOffset() + 540) * 60000);

        const format = (d) => d.toTimeString().split(' ')[0];

        const wibEl = document.getElementById('clockWIB');
        const witaEl = document.getElementById('clockWITA');
        const witEl = document.getElementById('clockWIT');

        if (wibEl) wibEl.textContent = format(wibTime);
        if (witaEl) witaEl.textContent = format(witaTime);
        if (witEl) witEl.textContent = format(witTime);
    }

    updateClocks();
    setInterval(updateClocks, 1000);
}

// ==========================================
// 5. SIDEBAR PROVINCE LIST & SEARCH/FILTER
// ==========================================
function renderProvinceSidebarList() {
    const listContainer = document.getElementById('provinceListContainer');
    if (!listContainer) return;

    let filtered = PROVINCES_DATA;

    // Filter by Island
    if (AppState.selectedIslandFilter !== "Semua") {
        filtered = filtered.filter(p => p.island.toLowerCase().includes(AppState.selectedIslandFilter.toLowerCase()));
    }

    // Filter by Search Query
    if (AppState.searchQuery.trim() !== "") {
        const q = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.capital.toLowerCase().includes(q) ||
            p.island.toLowerCase().includes(q)
        );
    }

    listContainer.innerHTML = "";

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted);">Provinsi tidak ditemukan</div>`;
        return;
    }

    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = `province-item ${AppState.selectedProvince && AppState.selectedProvince.id === p.id ? 'active' : ''}`;
        item.id = `sidebar-prov-${p.id}`;

        let metricDisplay = `IPM: ${p.pendidikan.ipm}`;
        if (activeChoroplethMetric === 'kepadatan') metricDisplay = `${p.populasi.density}/km²`;
        if (activeChoroplethMetric === 'pdrb') metricDisplay = `Rp ${p.ekonomi.gdp}T`;
        if (activeChoroplethMetric === 'lingkungan') metricDisplay = `${p.lingkungan.forestPercentage}% Hutan`;
        if (activeChoroplethMetric === 'digital') metricDisplay = `Smart: ${p.infrastruktur.smartCityScore}`;

        item.innerHTML = `
            <div class="prov-info">
                <h4>${p.name}</h4>
                <span>${p.capital} • ${p.island}</span>
            </div>
            <div class="prov-meta">
                <span class="prov-metric-badge">${metricDisplay}</span>
            </div>
        `;

        item.addEventListener('mouseenter', () => audioFX.playHover());
        item.addEventListener('click', () => {
            audioFX.playClick();
            selectProvinceById(p.id);
            zoomToProvinceById(p.id);
        });

        listContainer.appendChild(item);
    });
}

// ==========================================
// 6. PROVINCE SELECTION & DOSSIER POPULATION
// ==========================================
function selectProvinceById(provId) {
    const province = getProvinceById(provId);
    if (!province) return;

    AppState.selectedProvince = province;

    // Update active highlight di sidebar
    document.querySelectorAll('.province-item').forEach(el => el.classList.remove('active'));
    const activeSidebarEl = document.getElementById(`sidebar-prov-${provId}`);
    if (activeSidebarEl) {
        activeSidebarEl.classList.add('active');
        activeSidebarEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Populate Dossier Header
    const nameEl = document.getElementById('dossierProvName');
    const capEl = document.getElementById('dossierCapital');
    const islandEl = document.getElementById('dossierIsland');
    const establishedEl = document.getElementById('dossierEstablished');

    if (nameEl) nameEl.textContent = province.name;
    if (capEl) capEl.textContent = `Ibukota: ${province.capital}`;
    if (islandEl) islandEl.textContent = province.island;
    if (establishedEl) establishedEl.textContent = `Est. ${province.establishedYear}`;

    // Populate Tabs Data
    populateOverviewTab(province);
    populateDemographicsTab(province);
    populateEconomyTab(province);
    populateEducationTab(province);
    populateInfrastructureTab(province);
    populateEnvironmentTab(province);
    populateTelemetryTab(province);

    // Render Charts
    renderProvinceRadarChart(province);
    renderAgeDistributionChart(province);
    renderSectorsChart(province);
}

function populateOverviewTab(p) {
    const el = document.getElementById('overviewTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card">
                <div class="hud-card-label">👥 Total Populasi</div>
                <div class="hud-card-value">${(p.populasi.total / 1000000).toFixed(2)} Jt</div>
                <div class="hud-card-sub">Kepadatan: ${p.populasi.density} Jiwa/km²</div>
            </div>
            <div class="hud-card accent-green">
                <div class="hud-card-label">📈 PDRB Daerah</div>
                <div class="hud-card-value">Rp ${p.ekonomi.gdp} T</div>
                <div class="hud-card-sub">Pertumbuhan: +${p.ekonomi.gdpGrowthRate}% /thn</div>
            </div>
            <div class="hud-card accent-amber">
                <div class="hud-card-label">🎓 Indeks IPM</div>
                <div class="hud-card-value">${p.pendidikan.ipm}</div>
                <div class="hud-card-sub">Literasi: ${p.pendidikan.literacyRate}%</div>
            </div>
            <div class="hud-card accent-purple">
                <div class="hud-card-label">🌿 Tutupan Hutan</div>
                <div class="hud-card-value">${p.lingkungan.forestPercentage}%</div>
                <div class="hud-card-sub">${(p.lingkungan.forestCoverHa / 1000000).toFixed(2)} Juta Hektar</div>
            </div>
        </div>

        <div class="chart-wrapper tall">
            <canvas id="provinceRadarChart"></canvas>
        </div>

        <div class="strategic-projects-box">
            <h4>⚡ Proyek Strategis Daerah</h4>
            ${p.strategicProjects.map(proj => `<div class="project-item">🔹 ${proj}</div>`).join('')}
        </div>
    `;
}

function populateDemographicsTab(p) {
    const el = document.getElementById('demographicsTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-3">
            <div class="hud-card">
                <div class="hud-card-label">Jumlah Penduduk</div>
                <div class="hud-card-value">${p.populasi.total.toLocaleString('id-ID')}</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Angkatan Kerja</div>
                <div class="hud-card-value">${(p.populasi.workforce / 1000000).toFixed(2)} Jt</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Tingkat Urbanisasi</div>
                <div class="hud-card-value">${p.populasi.urbanizationRate}%</div>
            </div>
        </div>

        <div class="hud-card" style="margin-bottom: 14px;">
            <div class="hud-card-label">Struktur Demografi Usia</div>
            <div class="chart-wrapper" style="height: 180px;">
                <canvas id="ageDistributionChart"></canvas>
            </div>
        </div>
    `;
}

function populateEconomyTab(p) {
    const el = document.getElementById('economyTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card accent-green">
                <div class="hud-card-label">PDRB Nominal</div>
                <div class="hud-card-value">Rp ${p.ekonomi.gdp} T</div>
                <div class="hud-card-sub">Laju: +${p.ekonomi.gdpGrowthRate}%</div>
            </div>
            <div class="hud-card accent-green">
                <div class="hud-card-label">PDRB Per Kapita</div>
                <div class="hud-card-value">Rp ${p.ekonomi.gdpPerCapita} Jt</div>
                <div class="hud-card-sub">Inflasi: ${p.ekonomi.inflation}%</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Investasi Asing Masuk</div>
                <div class="hud-card-value">$${p.ekonomi.foreignInvestment} Jt</div>
                <div class="hud-card-sub">PMA Tahunan</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Nilai Ekspor</div>
                <div class="hud-card-value">$${p.ekonomi.exportValue} Jt</div>
                <div class="hud-card-sub">Komoditas & Olahan</div>
            </div>
        </div>

        <div class="hud-card">
            <div class="hud-card-label">Sektor Unggulan Daerah</div>
            <div class="chart-wrapper" style="height: 170px;">
                <canvas id="economicSectorsChart"></canvas>
            </div>
        </div>
    `;
}

function populateEducationTab(p) {
    const el = document.getElementById('educationTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card accent-amber">
                <div class="hud-card-label">IPM (Indeks Pembangunan Manusia)</div>
                <div class="hud-card-value">${p.pendidikan.ipm}</div>
                <div class="hud-card-sub">Kategori: ${p.pendidikan.ipm >= 80 ? 'Sangat Tinggi' : p.pendidikan.ipm >= 70 ? 'Tinggi' : 'Sedang'}</div>
            </div>
            <div class="hud-card accent-amber">
                <div class="hud-card-label">Skor Talenta Digital</div>
                <div class="hud-card-value">${p.pendidikan.digitalTalentIndex} / 100</div>
                <div class="hud-card-sub">Kesiapan AI & Tech</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Angka Melek Huruf</div>
                <div class="hud-card-value">${p.pendidikan.literacyRate}%</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Rasio Pendidikan Tinggi</div>
                <div class="hud-card-value">${p.pendidikan.higherEducationRatio}%</div>
            </div>
        </div>

        <div class="stat-grid-2">
            <div class="hud-card">
                <div class="hud-card-label">Total Sekolah (SD/SMP/SMA)</div>
                <div class="hud-card-value">${p.pendidikan.totalSchools.toLocaleString('id-ID')}</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Jumlah Kampus / Perguruan Tinggi</div>
                <div class="hud-card-value">${p.pendidikan.totalUniversities} Kampus</div>
            </div>
        </div>
    `;
}

function populateInfrastructureTab(p) {
    const el = document.getElementById('infrastructureTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card accent-purple">
                <div class="hud-card-label">Penetrasi Internet & 5G</div>
                <div class="hud-card-value">${p.infrastruktur.internetPenetration}%</div>
                <div class="hud-card-sub">Koneksi Palapa Ring: ${p.infrastruktur.palapaRingConnected ? '✅ Terhubung' : '❌ Parsial'}</div>
            </div>
            <div class="hud-card accent-purple">
                <div class="hud-card-label">Kapasitas Pembangkit Listrik</div>
                <div class="hud-card-value">${p.infrastruktur.electricityCapacityMW} MW</div>
                <div class="hud-card-sub">Porsi EBT: ${p.infrastruktur.renewableEnergyShare}%</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Panjang Jaringan Jalan</div>
                <div class="hud-card-value">${p.infrastruktur.roadNetworkKm.toLocaleString('id-ID')} km</div>
                <div class="hud-card-sub">Jalan Tol: ${p.infrastruktur.tollRoadKm} km</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Hub Logistik</div>
                <div class="hud-card-value">${p.infrastruktur.portsCount} Pelabuhan</div>
                <div class="hud-card-sub">${p.infrastruktur.airportsCount} Bandara Udara</div>
            </div>
        </div>

        <div class="hud-card">
            <div class="hud-card-label">Smart City & Digital Infrastructure Score</div>
            <div class="hud-card-value">${p.infrastruktur.smartCityScore} / 100</div>
            <div class="hud-card-sub">Integrasi Command Center, IoT, & E-Government</div>
        </div>
    `;
}

function populateEnvironmentTab(p) {
    const el = document.getElementById('environmentTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card accent-green">
                <div class="hud-card-label">Luas Tutupan Hutan</div>
                <div class="hud-card-value">${(p.lingkungan.forestCoverHa / 1000000).toFixed(2)} Jt Ha</div>
                <div class="hud-card-sub">${p.lingkungan.forestPercentage}% dari Luas Wilayah</div>
            </div>
            <div class="hud-card accent-green">
                <div class="hud-card-label">Kualitas Udara (AQI)</div>
                <div class="hud-card-value">${p.lingkungan.aqiCurrent} AQI</div>
                <div class="hud-card-sub">${p.lingkungan.aqiCurrent < 50 ? '🟢 Baik & Sehat' : p.lingkungan.aqiCurrent < 100 ? '🟡 Sedang' : '🔴 Sensitif'}</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Emisi Karbon</div>
                <div class="hud-card-value">${p.lingkungan.carbonEmission} MT</div>
                <div class="hud-card-sub">CO2e per tahun</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">Serapan Karbon Alami</div>
                <div class="hud-card-value">${p.lingkungan.carbonAbsorption} MT</div>
                <div class="hud-card-sub">${p.lingkungan.carbonAbsorption > p.lingkungan.carbonEmission ? '🌿 Carbon Negative / Surplus' : '⚠️ Defisit Karbon'}</div>
            </div>
        </div>

        <div class="hud-card">
            <div class="hud-card-label">Potensi Energi Baru & Terbarukan (EBT)</div>
            <div class="stat-grid-2" style="margin-top: 8px; margin-bottom: 0;">
                <div>☀️ Surya: <strong>${p.lingkungan.renewablePotential.solar} MW</strong></div>
                <div>💧 Hidro: <strong>${p.lingkungan.renewablePotential.hydro} MW</strong></div>
                <div>🌋 Geothermal: <strong>${p.lingkungan.renewablePotential.geothermal} MW</strong></div>
                <div>💨 Angin: <strong>${p.lingkungan.renewablePotential.wind} MW</strong></div>
            </div>
        </div>
    `;
}

function populateTelemetryTab(p) {
    const el = document.getElementById('telemetryTabContent');
    if (!el) return;

    el.innerHTML = `
        <div class="stat-grid-2">
            <div class="hud-card">
                <div class="hud-card-label">🌡️ Suhu Udara Rata-rata</div>
                <div class="hud-card-value">${p.telemetry.temperature}</div>
            </div>
            <div class="hud-card">
                <div class="hud-card-label">⚡ Beban Jaringan Listrik (Grid)</div>
                <div class="hud-card-value">${p.telemetry.gridLoad}</div>
            </div>
        </div>

        <div class="hud-card" style="margin-bottom: 10px;">
            <div class="hud-card-label">🌋 Sensor Seismik BMKG (Gempa / Vulkanik)</div>
            <div style="color: #f8fafc; font-size: 0.82rem; margin-top: 4px;">${p.telemetry.seismicStatus}</div>
        </div>

        <div class="hud-card" style="margin-bottom: 10px;">
            <div class="hud-card-label">🌊 Sensor Risiko Banjir & Muka Air DAS</div>
            <div style="color: #f8fafc; font-size: 0.82rem; margin-top: 4px;">${p.telemetry.floodRisk}</div>
        </div>

        <div class="hud-card">
            <div class="hud-card-label">🚗 Sensor Lalu Lintas & Arus Logistik</div>
            <div style="color: #f8fafc; font-size: 0.82rem; margin-top: 4px;">${p.telemetry.trafficStatus}</div>
        </div>
    `;
}

// ==========================================
// 7. SIMULATION RUNNER & MODAL LOGIC
// ==========================================
function runSimulationAndRender() {
    const simResult = simulator.runNationalSimulation();

    // Update Modal Results
    const growthEl = document.getElementById('simGrowthRate');
    const gdpEl = document.getElementById('simGdpTrillion');
    const gdpCapEl = document.getElementById('simGdpPerCapita');
    const ipmEl = document.getElementById('simIpm');
    const renewableEl = document.getElementById('simRenewableShare');
    const netZeroEl = document.getElementById('simNetZeroYear');
    const povertyEl = document.getElementById('simPovertyRate');
    const aiDiagList = document.getElementById('simAiDiagnosticList');

    if (growthEl) growthEl.textContent = `+${simResult.gdpAnnualGrowthRate}% /thn`;
    if (gdpEl) gdpEl.textContent = `Rp ${simResult.projectedGdpTrillionRp} T`;
    if (gdpCapEl) gdpCapEl.textContent = `$${simResult.projectedGdpPerCapitaUSD} USD`;
    if (ipmEl) ipmEl.textContent = simResult.projectedIpm;
    if (renewableEl) renewableEl.textContent = `${simResult.projectedRenewableShare}%`;
    if (netZeroEl) netZeroEl.textContent = simResult.netZeroYear;
    if (povertyEl) povertyEl.textContent = `${simResult.projectedPovertyRate}%`;

    if (aiDiagList) {
        aiDiagList.innerHTML = simResult.aiTakeaways.map(t => `<li>${t}</li>`).join('');
    }

    renderSimulationTrendChart(simResult);
}

// ==========================================
// 8. COMPARISON MODAL LOGIC
// ==========================================
function openComparisonModal() {
    const selectA = document.getElementById('compareSelectA');
    const selectB = document.getElementById('compareSelectB');

    if (selectA && selectB) {
        selectA.innerHTML = PROVINCES_DATA.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
        selectB.innerHTML = PROVINCES_DATA.map(p => `<option value="${p.id}">${p.name}</option>`).join('');

        // Defaults
        selectA.value = AppState.selectedProvince ? AppState.selectedProvince.id : "ID-JK";
        selectB.value = "ID-KI"; // IKN
    }

    updateComparisonView();
    document.getElementById('comparisonModalOverlay').classList.add('open');
    audioFX.playScan();
}

function updateComparisonView() {
    const selAVal = document.getElementById('compareSelectA').value;
    const selBVal = document.getElementById('compareSelectB').value;

    const pA = getProvinceById(selAVal);
    const pB = getProvinceById(selBVal);

    if (!pA || !pB) return;

    renderComparisonRadar(pA, pB);

    const compTable = document.getElementById('comparisonTableBody');
    if (!compTable) return;

    compTable.innerHTML = `
        <tr><td><strong>Populasi</strong></td><td>${(pA.populasi.total/1000000).toFixed(2)} Jt</td><td>${(pB.populasi.total/1000000).toFixed(2)} Jt</td></tr>
        <tr><td><strong>PDRB Daerah</strong></td><td>Rp ${pA.ekonomi.gdp} T</td><td>Rp ${pB.ekonomi.gdp} T</td></tr>
        <tr><td><strong>PDRB per Kapita</strong></td><td>Rp ${pA.ekonomi.gdpPerCapita} Jt</td><td>Rp ${pB.ekonomi.gdpPerCapita} Jt</td></tr>
        <tr><td><strong>IPM (Pendidikan)</strong></td><td>${pA.pendidikan.ipm}</td><td>${pB.pendidikan.ipm}</td></tr>
        <tr><td><strong>Tutupan Hutan</strong></td><td>${pA.lingkungan.forestPercentage}%</td><td>${pB.lingkungan.forestPercentage}%</td></tr>
        <tr><td><strong>Bauran Energi Hijau</strong></td><td>${pA.infrastruktur.renewableEnergyShare}%</td><td>${pB.infrastruktur.renewableEnergyShare}%</td></tr>
        <tr><td><strong>Smart City Score</strong></td><td>${pA.infrastruktur.smartCityScore}/100</td><td>${pB.infrastruktur.smartCityScore}/100</td></tr>
    `;
}

// ==========================================
// 9. EVENT LISTENERS SETUP
// ==========================================
function initUIEventListeners() {
    // Audio FX Mute Toggle
    const muteBtn = document.getElementById('muteToggleBtn');
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            const isMuted = audioFX.toggleMute();
            muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
            muteBtn.title = isMuted ? 'Suara Dimatikan' : 'Suara Aktif';
        });
    }

    // Search Input
    const searchInput = document.getElementById('provinceSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            AppState.searchQuery = e.target.value;
            renderProvinceSidebarList();
        });
    }

    // Island Filter Buttons
    document.querySelectorAll('.filter-pills .pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audioFX.playClick();
            document.querySelectorAll('.filter-pills .pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.selectedIslandFilter = btn.getAttribute('data-island');
            renderProvinceSidebarList();
        });
    });

    // Choropleth Metric Selector
    document.querySelectorAll('.metric-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audioFX.playScan();
            document.querySelectorAll('.metric-select-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const metric = btn.getAttribute('data-metric');
            setChoroplethMetric(metric, (provId) => selectProvinceById(provId));
            renderProvinceSidebarList(); // Update badge numbers
        });
    });

    // GIS Layers Toggles (Palapa, Tol Laut, EBT)
    document.querySelectorAll('.layer-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audioFX.playClick();
            btn.classList.toggle('active');
            const layerKey = btn.getAttribute('data-layer');
            const isVis = btn.classList.contains('active');
            toggleGisLayer(layerKey, isVis);
        });
    });

    // Dossier Tabs Navigation
    document.querySelectorAll('.dossier-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audioFX.playClick();
            document.querySelectorAll('.dossier-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(`${tabId}TabContent`);
            if (targetContent) targetContent.classList.add('active');
        });
    });

    // What-If Simulation Modal Triggers
    const simModal = document.getElementById('simulationModalOverlay');
    const openSimBtn = document.getElementById('openSimulationModalBtn');
    const closeSimBtn = document.getElementById('closeSimulationModalBtn');

    if (openSimBtn) {
        openSimBtn.addEventListener('click', () => {
            audioFX.playScan();
            if (simModal) simModal.classList.add('open');
            runSimulationAndRender();
        });
    }

    if (closeSimBtn) {
        closeSimBtn.addEventListener('click', () => {
            audioFX.playClick();
            if (simModal) simModal.classList.remove('open');
        });
    }

    // Simulation Sliders
    const sliders = [
        { id: 'sliderGreenEnergy', key: 'greenEnergyBoost', valId: 'valGreenEnergy', unit: '%' },
        { id: 'sliderDigital', key: 'digitalBudgetBoost', valId: 'valDigital', unit: '%' },
        { id: 'sliderInfra', key: 'infraInvestmentBoost', valId: 'valInfra', unit: '%' },
        { id: 'sliderForest', key: 'reforestationTargetHa', valId: 'valForest', unit: ' Jt Ha' },
        { id: 'sliderIkn', key: 'iknAcceleration', valId: 'valIkn', unit: '%' }
    ];

    sliders.forEach(s => {
        const el = document.getElementById(s.id);
        const valEl = document.getElementById(s.valId);
        if (el) {
            el.addEventListener('input', (e) => {
                const v = e.target.value;
                if (valEl) valEl.textContent = `+${v}${s.unit}`;
                simulator.setParam(s.key, v);
                runSimulationAndRender();
            });
        }
    });

    // Simulation Presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audioFX.playClick();
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const presetKey = btn.getAttribute('data-preset');
            const applied = simulator.applyPreset(presetKey);

            if (applied) {
                // Sync sliders UI
                document.getElementById('sliderGreenEnergy').value = applied.greenEnergyBoost;
                document.getElementById('valGreenEnergy').textContent = `+${applied.greenEnergyBoost}%`;

                document.getElementById('sliderDigital').value = applied.digitalBudgetBoost;
                document.getElementById('valDigital').textContent = `+${applied.digitalBudgetBoost}%`;

                document.getElementById('sliderInfra').value = applied.infraInvestmentBoost;
                document.getElementById('valInfra').textContent = `+${applied.infraInvestmentBoost}%`;

                document.getElementById('sliderForest').value = applied.reforestationTargetHa;
                document.getElementById('valForest').textContent = `+${applied.reforestationTargetHa} Jt Ha`;

                document.getElementById('sliderIkn').value = applied.iknAcceleration;
                document.getElementById('valIkn').textContent = `+${applied.iknAcceleration}%`;

                runSimulationAndRender();
            }
        });
    });

    // Comparison Modal Triggers
    const compModal = document.getElementById('comparisonModalOverlay');
    const openCompBtn = document.getElementById('openCompareModalBtn');
    const closeCompBtn = document.getElementById('closeCompareModalBtn');

    if (openCompBtn) openCompBtn.addEventListener('click', () => openComparisonModal());
    if (closeCompBtn) closeCompBtn.addEventListener('click', () => {
        audioFX.playClick();
        if (compModal) compModal.classList.remove('open');
    });

    const selA = document.getElementById('compareSelectA');
    const selB = document.getElementById('compareSelectB');
    if (selA) selA.addEventListener('change', () => updateComparisonView());
    if (selB) selB.addEventListener('change', () => updateComparisonView());

    // Toggle Sidebars on Mobile
    const toggleLeftBtn = document.getElementById('toggleSidebarBtn');
    const leftSidebar = document.querySelector('.left-sidebar');
    if (toggleLeftBtn && leftSidebar) {
        toggleLeftBtn.addEventListener('click', () => {
            leftSidebar.classList.toggle('open');
            audioFX.playClick();
        });
    }

    const toggleDossierBtn = document.getElementById('toggleDossierBtn');
    const rightDossier = document.querySelector('.right-dossier');
    if (toggleDossierBtn && rightDossier) {
        toggleDossierBtn.addEventListener('click', () => {
            rightDossier.classList.toggle('open');
            audioFX.playClick();
        });
    }
}
