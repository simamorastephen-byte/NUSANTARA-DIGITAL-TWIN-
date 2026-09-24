/**
 * NUSANTARA DIGITAL TWIN - CHARTS ENGINE
 * Visualisasi data menggunakan Chart.js (Radar, Doughnut, Line, Bar)
 */

let radarChartInstance = null;
let ageChartInstance = null;
let sectorsChartInstance = null;
let simulationChartInstance = null;
let comparisonChartInstance = null;

// Konfigurasi tema Chart.js untuk Dark Cyber HUD
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.08)';
Chart.defaults.font.family = "'Inter', 'Segoe UI', system-ui, sans-serif";

/**
 * Render Radar Chart 5 Pilar Provinsi
 */
function renderProvinceRadarChart(province) {
    const canvas = document.getElementById('provinceRadarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (radarChartInstance) {
        radarChartInstance.destroy();
    }

    // Skor normalisasi 0 - 100 untuk 5 pilar
    const economyScore = Math.min(100, Math.round((province.ekonomi.gdpPerCapita / 200) * 100));
    const educationScore = Math.min(100, Math.round((province.pendidikan.ipm / 85) * 100));
    const infraScore = Math.min(100, Math.round(province.infrastruktur.smartCityScore));
    const greenScore = Math.min(100, Math.round((province.lingkungan.forestPercentage + province.infrastruktur.renewableEnergyShare) / 1.5));
    const digitalScore = Math.min(100, Math.round(province.pendidikan.digitalTalentIndex));

    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Ekonomi', 'Pendidikan & SDM', 'Infrastruktur', 'Lingkungan Hijau', 'Kesiapan Digital'],
            datasets: [{
                label: province.name,
                data: [economyScore, educationScore, infraScore, greenScore, digitalScore],
                backgroundColor: 'rgba(0, 243, 255, 0.25)',
                borderColor: '#00f3ff',
                pointBackgroundColor: '#00f3ff',
                pointBorderColor: '#ffffff',
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#00f3ff',
                borderWidth: 2,
                pointRadius: 4
            }, {
                label: 'Rata-rata Nasional',
                data: [52, 74, 75, 58, 72],
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(148, 163, 184, 0.6)',
                pointBackgroundColor: '#94a3b8',
                borderDash: [4, 4],
                borderWidth: 1.5,
                pointRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: {
                        color: '#cbd5e1',
                        font: { size: 11, weight: '600' }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#64748b',
                        stepSize: 20,
                        min: 0,
                        max: 100
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#cbd5e1', boxWidth: 12, padding: 10 }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#00f3ff',
                    borderColor: 'rgba(0, 243, 255, 0.3)',
                    borderWidth: 1
                }
            }
        }
    });
}

/**
 * Render Demografi Demographics Chart
 */
function renderAgeDistributionChart(province) {
    const canvas = document.getElementById('ageDistributionChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (ageChartInstance) {
        ageChartInstance.destroy();
    }

    const { young, productive, elderly } = province.populasi.ageStructure;

    ageChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Usia Muda (0-14)', 'Usia Produktif (15-64)', 'Lansia (65+)'],
            datasets: [{
                data: [young, productive, elderly],
                backgroundColor: ['#00f3ff', '#10b981', '#f59e0b'],
                borderColor: '#0f172a',
                borderWidth: 3,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#cbd5e1', boxWidth: 10, padding: 8 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

/**
 * Render Sektor Ekonomi Chart
 */
function renderSectorsChart(province) {
    const canvas = document.getElementById('economicSectorsChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (sectorsChartInstance) {
        sectorsChartInstance.destroy();
    }

    const sectors = province.ekonomi.mainSectors;
    // Berikan estimasi porsi dinamis
    const dummyShares = [45, 25, 18, 12].slice(0, sectors.length);

    sectorsChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sectors.map(s => s.length > 22 ? s.substring(0, 20) + '...' : s),
            datasets: [{
                label: 'Estimasi Kontribusi Sektor (%)',
                data: dummyShares,
                backgroundColor: 'rgba(16, 185, 129, 0.7)',
                borderColor: '#10b981',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#64748b' }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#cbd5e1', font: { size: 10 } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

/**
 * Render Proyeksi Simulasi Line Chart (2025 -> 2045)
 */
function renderSimulationTrendChart(simData) {
    const canvas = document.getElementById('simulationTrendChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (simulationChartInstance) {
        simulationChartInstance.destroy();
    }

    const years = [2025, 2030, 2035, 2040, 2045];
    const baseGdp = 22150;
    const gdpGrowthRate = parseFloat(simData.gdpAnnualGrowthRate) / 100;

    const gdpProjections = years.map(y => {
        const span = y - 2025;
        return Math.round(baseGdp * Math.pow(1 + gdpGrowthRate, span));
    });

    simulationChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Proyeksi PDB Nasional (Triliun Rp)',
                data: gdpProjections,
                borderColor: '#00f3ff',
                backgroundColor: 'rgba(0, 243, 255, 0.1)',
                fill: true,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: '#00f3ff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: {
                        color: '#94a3b8',
                        callback: function(val) { return (val / 1000) + 'k T'; }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#cbd5e1', boxWidth: 12 }
                }
            }
        }
    });
}

/**
 * Render Radar Komparasi Multi-Provinsi
 */
function renderComparisonRadar(province1, province2) {
    const canvas = document.getElementById('comparisonRadarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (comparisonChartInstance) {
        comparisonChartInstance.destroy();
    }

    const getScores = (p) => [
        Math.min(100, Math.round((p.ekonomi.gdpPerCapita / 200) * 100)),
        Math.min(100, Math.round((p.pendidikan.ipm / 85) * 100)),
        Math.min(100, Math.round(p.infrastruktur.smartCityScore)),
        Math.min(100, Math.round((p.lingkungan.forestPercentage + p.infrastruktur.renewableEnergyShare) / 1.5)),
        Math.min(100, Math.round(p.pendidikan.digitalTalentIndex))
    ];

    comparisonChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['PDRB per Kapita', 'IPM (Pendidikan)', 'Infrastruktur', 'Kelestarian Hijau', 'Talenta Digital'],
            datasets: [{
                label: province1.name,
                data: getScores(province1),
                backgroundColor: 'rgba(0, 243, 255, 0.25)',
                borderColor: '#00f3ff',
                pointBackgroundColor: '#00f3ff',
                borderWidth: 2
            }, {
                label: province2.name,
                data: getScores(province2),
                backgroundColor: 'rgba(245, 158, 11, 0.25)',
                borderColor: '#f59e0b',
                pointBackgroundColor: '#f59e0b',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: { color: '#cbd5e1', font: { size: 11, weight: '600' } },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#cbd5e1', boxWidth: 12 }
                }
            }
        }
    });
}
