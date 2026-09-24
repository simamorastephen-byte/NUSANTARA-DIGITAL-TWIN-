/**
 * NUSANTARA DIGITAL TWIN - MAP & GIS ENGINE
 * Peta interaktif Leaflet dengan choropleth dinamis, multi-layer telemetri, dan efek visual neon cyber
 */

let mapInstance = null;
let geojsonLayer = null;
let activeChoroplethMetric = 'ipm'; // Default choropleth metric
let palapaRingLayerGroup = null;
let maritimeRoutesLayerGroup = null;
let renewablePlantsLayerGroup = null;
let iknHighlightLayer = null;

// Palet warna choropleth cybernetic (Cyan, Emerald, Amber, Purple)
const CHOROPLETH_PALETTES = {
    ipm: {
        grades: [60, 70, 74, 78, 82],
        colors: ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
        legendTitle: "Indeks Pembangunan Manusia (IPM)"
    },
    kepadatan: {
        grades: [20, 100, 300, 1000, 5000],
        colors: ['#047857', '#10b981', '#f59e0b', '#ef4444', '#b91c1c'],
        legendTitle: "Kepadatan Penduduk (Jiwa/km²)"
    },
    pdrb: {
        grades: [50, 150, 300, 800, 2000],
        colors: ['#312e81', '#4f46e5', '#06b6d4', '#10b981', '#facc15'],
        legendTitle: "PDRB Daerah (Triliun Rupiah)"
    },
    lingkungan: {
        grades: [20, 40, 55, 70, 85],
        colors: ['#ef4444', '#f59e0b', '#84cc16', '#10b981', '#059669'],
        legendTitle: "Tutupan Hutan (% Luas Wilayah)"
    },
    digital: {
        grades: [60, 68, 75, 82, 90],
        colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#00f3ff', '#38bdf8'],
        legendTitle: "Kesiapan Digital & Smart City"
    }
};

/**
 * Inisialisasi Peta Leaflet
 */
function initNusantaraMap(onSelectProvinceCallback) {
    const mapElement = document.getElementById('mapContainer');
    if (!mapElement) return;

    // Center di tengah Indonesia (world overview)
    mapInstance = L.map('mapContainer', {
        center: [-1.8, 118.0],
        zoom: 5,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: false,
        worldCopyJump: true
    });

    // Custom Zoom Control di pojok kanan atas
    L.control.zoom({ position: 'topright' }).addTo(mapInstance);

    // Basemap: OpenStreetMap (World Map - Free, No API Key, No Watermark)
    const darkTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: false,
        crossOrigin: true
    }).addTo(mapInstance);

    // Layer Groups
    palapaRingLayerGroup = L.layerGroup().addTo(mapInstance);
    maritimeRoutesLayerGroup = L.layerGroup().addTo(mapInstance);
    renewablePlantsLayerGroup = L.layerGroup().addTo(mapInstance);

    // Load GeoJSON Choropleth
    loadGeoJsonLayer(onSelectProvinceCallback);

    // Render GIS Infrastructure Layers
    renderPalapaRingNetwork();
    renderMaritimeCorridors();
    renderRenewableEnergyNodes();
    renderIknCapitalMarker();

    // Render Legend
    updateMapLegend();

    // Resize listener
    window.addEventListener('resize', () => {
        mapInstance.invalidateSize();
    });
}

/**
 * Mendapatkan warna provinsi berdasarkan nilai metrik choropleth aktif
 */
function getChoroplethColor(value, metric) {
    const palette = CHOROPLETH_PALETTES[metric] || CHOROPLETH_PALETTES.ipm;
    const grades = palette.grades;
    const colors = palette.colors;

    if (value >= grades[4]) return colors[4];
    if (value >= grades[3]) return colors[3];
    if (value >= grades[2]) return colors[2];
    if (value >= grades[1]) return colors[1];
    return colors[0];
}

/**
 * Mengambil nilai metrik spesifik untuk provinsi
 */
function getProvinceMetricValue(provId, metric) {
    const p = getProvinceById(provId);
    if (!p) return 0;

    switch (metric) {
        case 'kepadatan': return p.populasi.density;
        case 'pdrb': return p.ekonomi.gdp;
        case 'ipm': return p.pendidikan.ipm;
        case 'lingkungan': return p.lingkungan.forestPercentage;
        case 'digital': return p.infrastruktur.smartCityScore;
        default: return p.pendidikan.ipm;
    }
}

/**
 * Load GeoJSON Polygons dengan style dinamis
 */
function loadGeoJsonLayer(onSelectCallback) {
    if (geojsonLayer) {
        mapInstance.removeLayer(geojsonLayer);
    }

    geojsonLayer = L.geoJSON(INDONESIA_GEOJSON, {
        smoothFactor: 0.5,
        style: function (feature) {
            const val = getProvinceMetricValue(feature.id, activeChoroplethMetric);
            const color = getChoroplethColor(val, activeChoroplethMetric);
            return {
                fillColor: color,
                weight: 1.5,
                opacity: 0.8,
                color: '#00f3ff',
                dashArray: '',
                fillOpacity: 0.55
            };
        },
        onEachFeature: function (feature, layer) {
            const p = getProvinceById(feature.id);
            const provName = p ? p.name : feature.properties.name;
            const provIpm = p ? p.pendidikan.ipm : '-';
            const provPop = p ? (p.populasi.total / 1000000).toFixed(1) + ' Juta' : '-';
            const provGdp = p ? 'Rp ' + p.ekonomi.gdp + ' T' : '-';

            // Custom Holographic Tooltip
            layer.bindTooltip(`
                <div class="custom-hud-tooltip">
                    <div class="tooltip-header">
                        <span class="pulse-indicator"></span>
                        <strong>${provName}</strong>
                    </div>
                    <div class="tooltip-grid">
                        <span>👥 Populasi:</span> <strong>${provPop}</strong>
                        <span>📈 PDRB:</span> <strong>${provGdp}</strong>
                        <span>🎓 IPM:</span> <strong>${provIpm}</strong>
                    </div>
                </div>
            `, {
                permanent: false,
                sticky: true,
                direction: 'top',
                className: 'hud-leaflet-tooltip'
            });

            // Hover & Click Events
            layer.on({
                mouseover: function (e) {
                    const targetLayer = e.target;
                    targetLayer.setStyle({
                        weight: 3,
                        color: '#ffffff',
                        fillOpacity: 0.85,
                        dashArray: ''
                    });
                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        targetLayer.bringToFront();
                    }
                    if (window.audioFX) window.audioFX.playHover();
                },
                mouseout: function (e) {
                    geojsonLayer.resetStyle(e.target);
                },
                click: function (e) {
                    if (onSelectCallback) {
                        onSelectCallback(feature.id);
                    }
                    mapInstance.flyToBounds(e.target.getBounds(), {
                        padding: [50, 50],
                        maxZoom: 7,
                        duration: 1.2
                    });
                    if (window.audioFX) window.audioFX.playClick();
                }
            });
        }
    }).addTo(mapInstance);
}

/**
 * Ubah mode choropleth metrik aktif
 */
function setChoroplethMetric(metricKey, onSelectCallback) {
    activeChoroplethMetric = metricKey;
    loadGeoJsonLayer(onSelectCallback);
    updateMapLegend();
}

/**
 * Perbarui UI Legend Peta
 */
function updateMapLegend() {
    const legendContainer = document.getElementById('mapLegendContent');
    if (!legendContainer) return;

    const palette = CHOROPLETH_PALETTES[activeChoroplethMetric] || CHOROPLETH_PALETTES.ipm;
    const { grades, colors, legendTitle } = palette;

    let html = `<div class="legend-title">${legendTitle}</div><div class="legend-scale">`;
    for (let i = 0; i < grades.length; i++) {
        const from = grades[i];
        const to = grades[i + 1];
        // First grade gets "< " prefix to indicate values below this threshold
        const label = i === 0 ? `< ${from}` : (i === grades.length - 1 ? `> ${from}` : `${from} – ${to}`);
        html += `
            <div class="legend-item">
                <span class="legend-color-box" style="background: ${colors[i]}; box-shadow: 0 0 6px ${colors[i]}"></span>
                <span>${label}</span>
            </div>
        `;
    }
    html += `</div>`;
    legendContainer.innerHTML = html;
}

/**
 * Render Layer Jaringan Palapa Ring
 */
function renderPalapaRingNetwork() {
    palapaRingLayerGroup.clearLayers();

    // Garis Neon Kabel Bawah Laut
    GIS_LAYERS_DATA.palapaRingCables.forEach(cable => {
        const polyline = L.polyline(cable, {
            color: '#00f3ff',
            weight: 2,
            opacity: 0.75,
            dashArray: '4, 8',
            className: 'palapa-cable-glow'
        });
        palapaRingLayerGroup.addLayer(polyline);
    });

    // Node Hub Palapa Ring
    GIS_LAYERS_DATA.palapaRingNodes.forEach(node => {
        const marker = L.circleMarker(node.coords, {
            radius: 5,
            fillColor: '#00f3ff',
            color: '#ffffff',
            weight: 1.5,
            opacity: 1,
            fillOpacity: 0.9,
            className: 'pulsating-hub-marker'
        }).bindPopup(`
            <div class="hud-popup-card">
                <div class="hud-tag cyber-cyan">PALAPA RING HUB</div>
                <h4>${node.name}</h4>
                <p>Status: <strong>Aktif 100 Gbps</strong></p>
                <p>Tipe: ${node.type}</p>
            </div>
        `);
        palapaRingLayerGroup.addLayer(marker);
    });
}

/**
 * Render Layer Tol Laut & Koridor Maritim
 */
function renderMaritimeCorridors() {
    maritimeRoutesLayerGroup.clearLayers();

    GIS_LAYERS_DATA.maritimeRoutes.forEach(route => {
        const polyline = L.polyline(route, {
            color: '#38bdf8',
            weight: 2.5,
            opacity: 0.6,
            dashArray: '8, 12',
            className: 'maritime-route-glow'
        });
        maritimeRoutesLayerGroup.addLayer(polyline);
    });
}

/**
 * Render Pembangkit EBT Unggulan
 */
function renderRenewableEnergyNodes() {
    renewablePlantsLayerGroup.clearLayers();

    GIS_LAYERS_DATA.renewablePlants.forEach(plant => {
        const iconHtml = `<div class="ebt-node-pin"><span class="ebt-pulse"></span>⚡</div>`;
        const customIcon = L.divIcon({
            html: iconHtml,
            className: 'ebt-div-icon',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const marker = L.marker(plant.coords, { icon: customIcon }).bindPopup(`
            <div class="hud-popup-card">
                <div class="hud-tag cyber-green">PEMBANGKIT HIJAU (EBT)</div>
                <h4>${plant.name}</h4>
                <p>Provinsi: <strong>${plant.province}</strong></p>
                <p>Tipe: <strong>${plant.type}</strong></p>
                <p>Kapasitas: <strong>${plant.capacity}</strong></p>
            </div>
        `);
        renewablePlantsLayerGroup.addLayer(marker);
    });
}

/**
 * Render Penanda Pusat IKN Nusantara
 */
function renderIknCapitalMarker() {
    const iknCoords = [-0.9634, 116.7118];

    // Halo Lingkaran Smart Capital
    L.circle(iknCoords, {
        radius: 35000,
        color: '#f59e0b',
        weight: 1.5,
        fillColor: '#f59e0b',
        fillOpacity: 0.12,
        dashArray: '6, 6'
    }).addTo(mapInstance);

    const iknIcon = L.divIcon({
        html: `<div class="ikn-beacon-pin"><div class="ikn-sonar-ring"></div>🏛️</div>`,
        className: 'ikn-div-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });

    L.marker(iknCoords, { icon: iknIcon }).bindPopup(`
        <div class="hud-popup-card">
            <div class="hud-tag cyber-gold">IBUKOTA NUSANTARA (IKN)</div>
            <h4>Pusat Gravitasi Baru Indonesia</h4>
            <p>Konsep: <strong>Smart Forest City (Net-Zero 2045)</strong></p>
            <p>Kawasan: <strong>KIPP 6.671 Ha</strong></p>
            <p>Bauran EBT: <strong>100% Energi Bersih</strong></p>
        </div>
    `).addTo(mapInstance);
}

/**
 * Toggle Visibilitas Layer Telemetri
 */
function toggleGisLayer(layerName, isVisible) {
    if (!mapInstance) return;

    if (layerName === 'palapa' && palapaRingLayerGroup) {
        if (isVisible) mapInstance.addLayer(palapaRingLayerGroup);
        else mapInstance.removeLayer(palapaRingLayerGroup);
    } else if (layerName === 'maritime' && maritimeRoutesLayerGroup) {
        if (isVisible) mapInstance.addLayer(maritimeRoutesLayerGroup);
        else mapInstance.removeLayer(maritimeRoutesLayerGroup);
    } else if (layerName === 'renewable' && renewablePlantsLayerGroup) {
        if (isVisible) mapInstance.addLayer(renewablePlantsLayerGroup);
        else mapInstance.removeLayer(renewablePlantsLayerGroup);
    }
}

/**
 * Fly To Province by ID
 */
function zoomToProvinceById(provId) {
    if (!mapInstance || !geojsonLayer) return;

    geojsonLayer.eachLayer(layer => {
        if (layer.feature && layer.feature.id === provId) {
            mapInstance.flyToBounds(layer.getBounds(), {
                padding: [50, 50],
                maxZoom: 7,
                duration: 1.2
            });
            layer.fire('mouseover');
        }
    });
}
