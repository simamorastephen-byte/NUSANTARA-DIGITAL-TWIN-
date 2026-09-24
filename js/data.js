/**
 * NUSANTARA DIGITAL TWIN - PROVINCIAL DATABASE
 * Data komprehensif 38 Provinsi di Indonesia (Populasi, Ekonomi, Pendidikan, Infrastruktur, Lingkungan, IoT)
 */

const INDONESIA_NATIONAL_DATA = {
    totalProvinces: 38,
    totalPopulation: 281600000, // ~281.6 Juta Jiwa (2024-2025)
    nationalGDP: 22150, // Triliun Rupiah (~USD 1.4 Triliun)
    averageHDI: 74.39,
    forestCoverTotalHa: 95300000, // ~95.3 Juta Hektar
    renewableEnergyShare: 14.8, // %
    internetPenetration: 79.5, // %
    totalIslands: 17508,
    capitalCity: "IKN Nusantara (Kalimantan Timur) / DKI Jakarta",
    nationalGrowthRate: 5.05 // %
};

const PROVINCES_DATA = [
    // === PULAU SUMATERA ===
    {
        id: "ID-AC",
        name: "Aceh",
        capital: "Banda Aceh",
        island: "Sumatera",
        lat: 4.6951,
        lng: 96.7494,
        establishedYear: 1956,
        populasi: {
            total: 5510000,
            density: 96,
            growthRate: 1.42,
            ageStructure: { young: 28, productive: 66, elderly: 6 },
            urbanizationRate: 34.2,
            workforce: 2650000
        },
        ekonomi: {
            gdp: 215.4,
            gdpPerCapita: 39.1,
            gdpGrowthRate: 4.85,
            mainSectors: ["Pertanian & Perkebunan (Kopi & Sawit)", "Minyak & Gas Bumi", "Perdagangan", "Perikanan"],
            inflation: 2.1,
            foreignInvestment: 240,
            exportValue: 680
        },
        pendidikan: {
            ipm: 73.80,
            literacyRate: 98.4,
            higherEducationRatio: 26.5,
            digitalTalentIndex: 68.2,
            totalSchools: 5820,
            totalUniversities: 42
        },
        infrastruktur: {
            roadNetworkKm: 18450,
            tollRoadKm: 124,
            portsCount: 8,
            airportsCount: 4,
            internetPenetration: 76.4,
            electricityCapacityMW: 780,
            renewableEnergyShare: 24.5,
            palapaRingConnected: true,
            smartCityScore: 72.5
        },
        lingkungan: {
            forestCoverHa: 3012000,
            forestPercentage: 52.8,
            carbonEmission: 14.2,
            carbonAbsorption: 28.5,
            aqiCurrent: 28,
            disasterRiskScore: 65.0,
            renewablePotential: { solar: 4200, hydro: 2800, geothermal: 1100, wind: 650 }
        },
        telemetry: {
            airQuality: "Sangat Baik (28 AQI)",
            temperature: "28.4°C",
            seismicStatus: "Normal (Aktivitas Patahan Semangko Terpantau)",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (18% utilitas)",
            gridLoad: "64%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus Arun Lhokseumawe", "Tol Trans Sumatera Ruas Sigli-Banda Aceh", "Pusat Riset Kebencanaan Tsunami TDMRC"]
    },
    {
        id: "ID-SU",
        name: "Sumatera Utara",
        capital: "Medan",
        island: "Sumatera",
        lat: 2.1154,
        lng: 99.5451,
        establishedYear: 1948,
        populasi: {
            total: 15480000,
            density: 212,
            growthRate: 1.15,
            ageStructure: { young: 25, productive: 69, elderly: 6 },
            urbanizationRate: 54.8,
            workforce: 7820000
        },
        ekonomi: {
            gdp: 1045.2,
            gdpPerCapita: 67.5,
            gdpGrowthRate: 5.12,
            mainSectors: ["Industri Pengolahan", "Perkebunan Kelapa Sawit & Karet", "Perdagangan", "Pariwisata Danau Toba"],
            inflation: 2.4,
            foreignInvestment: 1250,
            exportValue: 9800
        },
        pendidikan: {
            ipm: 74.20,
            literacyRate: 98.9,
            higherEducationRatio: 29.8,
            digitalTalentIndex: 74.5,
            totalSchools: 12400,
            totalUniversities: 85
        },
        infrastruktur: {
            roadNetworkKm: 42300,
            tollRoadKm: 236,
            portsCount: 14,
            airportsCount: 6,
            internetPenetration: 81.2,
            electricityCapacityMW: 2650,
            renewableEnergyShare: 36.8,
            palapaRingConnected: true,
            smartCityScore: 78.4
        },
        lingkungan: {
            forestCoverHa: 1840000,
            forestPercentage: 25.2,
            carbonEmission: 38.5,
            carbonAbsorption: 22.1,
            aqiCurrent: 45,
            disasterRiskScore: 58.0,
            renewablePotential: { solar: 5100, hydro: 4200, geothermal: 1900, wind: 400 }
        },
        telemetry: {
            airQuality: "Sedang (45 AQI)",
            temperature: "30.1°C",
            seismicStatus: "Normal (Kaldera Toba Stabil)",
            floodRisk: "Waspada Medan Hilir",
            trafficStatus: "Padat Terkendali (62% utilitas)",
            gridLoad: "78%"
        },
        strategicProjects: ["Destinasi Super Prioritas Danau Toba", "Pelabuhan Hub Internasional Kuala Tanjung", "Kawasan Industri Sei Mangkei"]
    },
    {
        id: "ID-SB",
        name: "Sumatera Barat",
        capital: "Padang",
        island: "Sumatera",
        lat: -0.7399,
        lng: 100.8000,
        establishedYear: 1958,
        populasi: {
            total: 5720000,
            density: 136,
            growthRate: 1.10,
            ageStructure: { young: 26, productive: 67, elderly: 7 },
            urbanizationRate: 46.2,
            workforce: 2950000
        },
        ekonomi: {
            gdp: 302.8,
            gdpPerCapita: 52.9,
            gdpGrowthRate: 4.88,
            mainSectors: ["Pertanian & Perkebunan", "Pariwisata Kuliner & Budaya", "Industri Semen", "Perdagangan"],
            inflation: 2.3,
            foreignInvestment: 180,
            exportValue: 2450
        },
        pendidikan: {
            ipm: 74.88,
            literacyRate: 99.2,
            higherEducationRatio: 33.1,
            digitalTalentIndex: 73.0,
            totalSchools: 5900,
            totalUniversities: 48
        },
        infrastruktur: {
            roadNetworkKm: 21200,
            tollRoadKm: 36,
            portsCount: 6,
            airportsCount: 3,
            internetPenetration: 78.9,
            electricityCapacityMW: 920,
            renewableEnergyShare: 48.2,
            palapaRingConnected: true,
            smartCityScore: 76.1
        },
        lingkungan: {
            forestCoverHa: 2280000,
            forestPercentage: 54.3,
            carbonEmission: 12.8,
            carbonAbsorption: 26.4,
            aqiCurrent: 32,
            disasterRiskScore: 78.5,
            renewablePotential: { solar: 3800, hydro: 3100, geothermal: 1650, wind: 350 }
        },
        telemetry: {
            airQuality: "Baik (32 AQI)",
            temperature: "27.8°C",
            seismicStatus: "Waspada Aktivitas Vulkanik Marapi",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (24% utilitas)",
            gridLoad: "61%"
        },
        strategicProjects: ["Tol Padang - Pekanbaru", "Pembangkit Listrik Panas Bumi Muara Laboh Tahap II", "Revitalisasi Pelabuhan Teluk Bayur"]
    },
    {
        id: "ID-RI",
        name: "Riau",
        capital: "Pekanbaru",
        island: "Sumatera",
        lat: 0.2933,
        lng: 101.7068,
        establishedYear: 1958,
        populasi: {
            total: 6730000,
            density: 77,
            growthRate: 1.68,
            ageStructure: { young: 27, productive: 68, elderly: 5 },
            urbanizationRate: 42.1,
            workforce: 3380000
        },
        ekonomi: {
            gdp: 1020.5,
            gdpPerCapita: 151.6,
            gdpGrowthRate: 4.75,
            mainSectors: ["Minyak Bumi (Blok Rokan)", "Industri Pulp & Kertas", "Perkebunan Sawit Terbesar", "Industri Kimia"],
            inflation: 2.5,
            foreignInvestment: 2600,
            exportValue: 18500
        },
        pendidikan: {
            ipm: 74.45,
            literacyRate: 98.7,
            higherEducationRatio: 27.2,
            digitalTalentIndex: 71.8,
            totalSchools: 6300,
            totalUniversities: 40
        },
        infrastruktur: {
            roadNetworkKm: 28400,
            tollRoadKm: 195,
            portsCount: 18,
            airportsCount: 4,
            internetPenetration: 82.5,
            electricityCapacityMW: 1850,
            renewableEnergyShare: 12.4,
            palapaRingConnected: true,
            smartCityScore: 75.3
        },
        lingkungan: {
            forestCoverHa: 2650000,
            forestPercentage: 30.3,
            carbonEmission: 72.4,
            carbonAbsorption: 34.1,
            aqiCurrent: 52,
            disasterRiskScore: 68.0,
            renewablePotential: { solar: 6200, hydro: 1400, geothermal: 450, wind: 300 }
        },
        telemetry: {
            airQuality: "Sedang (52 AQI)",
            temperature: "31.2°C",
            seismicStatus: "Normal Rendah",
            floodRisk: "Waspada DAS Siak",
            trafficStatus: "Lancar (35% utilitas)",
            gridLoad: "71%"
        },
        strategicProjects: ["Optimalisasi Produksi Blok Rokan WK Migas", "Jaringan Tol Pekanbaru - Dumai - Rengat", "Pusat Hilirisasi Oleokimia Dumai"]
    },
    {
        id: "ID-KR",
        name: "Kepulauan Riau",
        capital: "Tanjungpinang",
        island: "Sumatera",
        lat: 3.9456,
        lng: 108.1428,
        establishedYear: 2002,
        populasi: {
            total: 2180000,
            density: 265,
            growthRate: 1.85,
            ageStructure: { young: 24, productive: 71, elderly: 5 },
            urbanizationRate: 84.1,
            workforce: 1120000
        },
        ekonomi: {
            gdp: 340.2,
            gdpPerCapita: 156.0,
            gdpGrowthRate: 5.65,
            mainSectors: ["Manufaktur Elektronik & Semikonduktor", "Shipyard / Galangan Kapal", "Pariwisata Nongsa & Bintan", "Logistik Selat Malaka"],
            inflation: 2.1,
            foreignInvestment: 2150,
            exportValue: 16200
        },
        pendidikan: {
            ipm: 78.48,
            literacyRate: 99.4,
            higherEducationRatio: 31.5,
            digitalTalentIndex: 82.1,
            totalSchools: 1850,
            totalUniversities: 22
        },
        infrastruktur: {
            roadNetworkKm: 5800,
            tollRoadKm: 0,
            portsCount: 32,
            airportsCount: 6,
            internetPenetration: 89.2,
            electricityCapacityMW: 1200,
            renewableEnergyShare: 18.5,
            palapaRingConnected: true,
            smartCityScore: 84.6
        },
        lingkungan: {
            forestCoverHa: 410000,
            forestPercentage: 50.1,
            carbonEmission: 16.5,
            carbonAbsorption: 14.8,
            aqiCurrent: 24,
            disasterRiskScore: 32.0,
            renewablePotential: { solar: 4500, hydro: 120, geothermal: 0, wind: 1200 }
        },
        telemetry: {
            airQuality: "Sangat Baik (24 AQI)",
            temperature: "29.3°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (28% utilitas)",
            gridLoad: "69%"
        },
        strategicProjects: ["Kawasan Perdagangan Bebas KPBPB Batam Bintan Karimun", "Pusat Data Center Nongsa Digital Park", "Jembatan Batam-Bintan (Babin)"]
    },
    {
        id: "ID-JA",
        name: "Jambi",
        capital: "Jambi",
        island: "Sumatera",
        lat: -1.6101,
        lng: 103.6131,
        establishedYear: 1958,
        populasi: {
            total: 3710000,
            density: 74,
            growthRate: 1.35,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 35.8,
            workforce: 1890000
        },
        ekonomi: {
            gdp: 285.4,
            gdpPerCapita: 76.9,
            gdpGrowthRate: 4.80,
            mainSectors: ["Perkebunan Sawit & Karet", "Pertambangan Batubara & Migas", "Kehutanan", "Perdagangan"],
            inflation: 2.2,
            foreignInvestment: 420,
            exportValue: 2850
        },
        pendidikan: {
            ipm: 73.12,
            literacyRate: 98.3,
            higherEducationRatio: 25.8,
            digitalTalentIndex: 67.4,
            totalSchools: 4200,
            totalUniversities: 24
        },
        infrastruktur: {
            roadNetworkKm: 16800,
            tollRoadKm: 34,
            portsCount: 6,
            airportsCount: 3,
            internetPenetration: 75.8,
            electricityCapacityMW: 650,
            renewableEnergyShare: 16.2,
            palapaRingConnected: true,
            smartCityScore: 71.8
        },
        lingkungan: {
            forestCoverHa: 2050000,
            forestPercentage: 41.0,
            carbonEmission: 29.4,
            carbonAbsorption: 25.8,
            aqiCurrent: 41,
            disasterRiskScore: 59.0,
            renewablePotential: { solar: 3900, hydro: 1800, geothermal: 850, wind: 250 }
        },
        telemetry: {
            airQuality: "Baik (41 AQI)",
            temperature: "29.7°C",
            seismicStatus: "Normal Terpantau",
            floodRisk: "Waspada Batanghari",
            trafficStatus: "Lancar (22% utilitas)",
            gridLoad: "58%"
        },
        strategicProjects: ["Tol Trans Sumatera Ruas Bayung Lencir - Tempino", "Pelabuhan Samudera Ujung Jabung", "Pembangkit Panas Bumi Sungai Penuh"]
    },
    {
        id: "ID-SS",
        name: "Sumatera Selatan",
        capital: "Palembang",
        island: "Sumatera",
        lat: -3.3194,
        lng: 104.9144,
        establishedYear: 1950,
        populasi: {
            total: 8850000,
            density: 96,
            growthRate: 1.22,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 40.5,
            workforce: 4480000
        },
        ekonomi: {
            gdp: 598.6,
            gdpPerCapita: 67.6,
            gdpGrowthRate: 5.08,
            mainSectors: ["Pertambangan Batubara & Gas", "Industri Pupuk & Kimia", "Perkebunan Karet & Kopi", "Logistik Transportasi LRT"],
            inflation: 2.3,
            foreignInvestment: 1100,
            exportValue: 6400
        },
        pendidikan: {
            ipm: 72.86,
            literacyRate: 98.6,
            higherEducationRatio: 26.9,
            digitalTalentIndex: 71.0,
            totalSchools: 8900,
            totalUniversities: 56
        },
        infrastruktur: {
            roadNetworkKm: 34500,
            tollRoadKm: 315,
            portsCount: 12,
            airportsCount: 4,
            internetPenetration: 77.3,
            electricityCapacityMW: 2400,
            renewableEnergyShare: 22.4,
            palapaRingConnected: true,
            smartCityScore: 76.5
        },
        lingkungan: {
            forestCoverHa: 3100000,
            forestPercentage: 34.0,
            carbonEmission: 56.0,
            carbonAbsorption: 38.0,
            aqiCurrent: 48,
            disasterRiskScore: 62.0,
            renewablePotential: { solar: 7400, hydro: 2200, geothermal: 2100, wind: 450 }
        },
        telemetry: {
            airQuality: "Sedang (48 AQI)",
            temperature: "30.5°C",
            seismicStatus: "Normal",
            floodRisk: "Waspada Musi Hilir",
            trafficStatus: "Sedang (45% utilitas LRT)",
            gridLoad: "66%"
        },
        strategicProjects: ["Kawasan Industri Pelabuhan Tanjung Carat", "Pengembangan PLTP Rantau Dedap", "Hilirisasi Gasifikasi Batubara DME"]
    },
    {
        id: "ID-BB",
        name: "Bangka Belitung",
        capital: "Pangkalpinang",
        island: "Sumatera",
        lat: -2.7411,
        lng: 106.4406,
        establishedYear: 2000,
        populasi: {
            total: 1530000,
            density: 93,
            growthRate: 1.28,
            ageStructure: { young: 25, productive: 69, elderly: 6 },
            urbanizationRate: 56.4,
            workforce: 780000
        },
        ekonomi: {
            gdp: 105.4,
            gdpPerCapita: 68.9,
            gdpGrowthRate: 4.45,
            mainSectors: ["Pertambangan & Peleburan Timah (Tin)", "Pariwisata Pantai Belitung", "Perkebunan Lada & Sawit", "Perikanan"],
            inflation: 2.0,
            foreignInvestment: 160,
            exportValue: 2100
        },
        pendidikan: {
            ipm: 73.18,
            literacyRate: 98.1,
            higherEducationRatio: 22.4,
            digitalTalentIndex: 69.2,
            totalSchools: 1450,
            totalUniversities: 12
        },
        infrastruktur: {
            roadNetworkKm: 7200,
            tollRoadKm: 0,
            portsCount: 16,
            airportsCount: 3,
            internetPenetration: 80.4,
            electricityCapacityMW: 450,
            renewableEnergyShare: 14.1,
            palapaRingConnected: true,
            smartCityScore: 73.2
        },
        lingkungan: {
            forestCoverHa: 620000,
            forestPercentage: 37.8,
            carbonEmission: 9.8,
            carbonAbsorption: 7.2,
            aqiCurrent: 26,
            disasterRiskScore: 35.0,
            renewablePotential: { solar: 2400, hydro: 80, geothermal: 0, wind: 600 }
        },
        telemetry: {
            airQuality: "Sangat Baik (26 AQI)",
            temperature: "28.9°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (14% utilitas)",
            gridLoad: "52%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus Pariwisata Tanjung Kelayang", "Pusat Riset Rare Earth Elements (Monasit) & Hilirisasi Timah", "PLTS Kabel Bawah Laut Interkoneksi Sumatera"]
    },
    {
        id: "ID-BE",
        name: "Bengkulu",
        capital: "Bengkulu",
        island: "Sumatera",
        lat: -3.5778,
        lng: 102.3464,
        establishedYear: 1968,
        populasi: {
            total: 2090000,
            density: 105,
            growthRate: 1.30,
            ageStructure: { young: 27, productive: 67, elderly: 6 },
            urbanizationRate: 34.0,
            workforce: 1060000
        },
        ekonomi: {
            gdp: 98.7,
            gdpPerCapita: 47.2,
            gdpGrowthRate: 4.62,
            mainSectors: ["Pertanian & Perkebunan Kopi/Sawit", "Pertambangan Batubara", "Perikanan Samudera Hindia", "Kehutanan"],
            inflation: 2.4,
            foreignInvestment: 95,
            exportValue: 380
        },
        pendidikan: {
            ipm: 73.05,
            literacyRate: 98.2,
            higherEducationRatio: 28.1,
            digitalTalentIndex: 66.8,
            totalSchools: 2400,
            totalUniversities: 18
        },
        infrastruktur: {
            roadNetworkKm: 9800,
            tollRoadKm: 18,
            portsCount: 4,
            airportsCount: 3,
            internetPenetration: 74.2,
            electricityCapacityMW: 380,
            renewableEnergyShare: 32.0,
            palapaRingConnected: true,
            smartCityScore: 70.4
        },
        lingkungan: {
            forestCoverHa: 980000,
            forestPercentage: 49.2,
            carbonEmission: 7.8,
            carbonAbsorption: 12.4,
            aqiCurrent: 22,
            disasterRiskScore: 82.0,
            renewablePotential: { solar: 2200, hydro: 1600, geothermal: 950, wind: 280 }
        },
        telemetry: {
            airQuality: "Sangat Baik (22 AQI)",
            temperature: "27.5°C",
            seismicStatus: "Waspada Megathrust Enggano",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (12% utilitas)",
            gridLoad: "54%"
        },
        strategicProjects: ["Pengembangan Pelabuhan Samudera Pulau Baai", "Tol Bengkulu - Lubuk Linggau", "Proyek Panas Bumi PLTP Hululais 110 MW"]
    },
    {
        id: "ID-LA",
        name: "Lampung",
        capital: "Bandar Lampung",
        island: "Sumatera",
        lat: -4.5586,
        lng: 105.4068,
        establishedYear: 1964,
        populasi: {
            total: 9380000,
            density: 279,
            growthRate: 1.12,
            ageStructure: { young: 26, productive: 67, elderly: 7 },
            urbanizationRate: 31.5,
            workforce: 4720000
        },
        ekonomi: {
            gdp: 462.8,
            gdpPerCapita: 49.3,
            gdpGrowthRate: 4.95,
            mainSectors: ["Agroindustri (Ubi Kayu, Kopi, Tebu, Nanas)", "Peternakan Sapi & Unggas", "Industri Pengolahan Makanan", "Logistik Gerbang Sumatera-Jawa"],
            inflation: 2.3,
            foreignInvestment: 750,
            exportValue: 4600
        },
        pendidikan: {
            ipm: 71.64,
            literacyRate: 98.4,
            higherEducationRatio: 24.5,
            digitalTalentIndex: 68.5,
            totalSchools: 9800,
            totalUniversities: 44
        },
        infrastruktur: {
            roadNetworkKm: 27900,
            tollRoadKm: 371,
            portsCount: 10,
            airportsCount: 3,
            internetPenetration: 76.8,
            electricityCapacityMW: 1450,
            renewableEnergyShare: 38.5,
            palapaRingConnected: true,
            smartCityScore: 74.0
        },
        lingkungan: {
            forestCoverHa: 1020000,
            forestPercentage: 30.4,
            carbonEmission: 24.5,
            carbonAbsorption: 15.2,
            aqiCurrent: 36,
            disasterRiskScore: 64.0,
            renewablePotential: { solar: 5800, hydro: 1900, geothermal: 1450, wind: 320 }
        },
        telemetry: {
            airQuality: "Baik (36 AQI)",
            temperature: "29.8°C",
            seismicStatus: "Waspada Gunung Anak Krakatau Level II",
            floodRisk: "Rendah",
            trafficStatus: "Padat Lancar Pelabuhan Bakauheni (55%)",
            gridLoad: "72%"
        },
        strategicProjects: ["Kawasan Terintegrasi Bakauheni Harbour City (BHC)", "Optimalisasi PLTP Ulubelu Unit 5-6", "Sentra Hilirisasi Singkong & Nanas Dunia"]
    },

    // === PULAU JAWA ===
    {
        id: "ID-JK",
        name: "DKI Jakarta",
        capital: "Jakarta Pusat",
        island: "Jawa",
        lat: -6.2088,
        lng: 106.8456,
        establishedYear: 1961,
        populasi: {
            total: 10680000,
            density: 16120,
            growthRate: 0.88,
            ageStructure: { young: 21, productive: 73, elderly: 6 },
            urbanizationRate: 100.0,
            workforce: 5450000
        },
        ekonomi: {
            gdp: 3450.0,
            gdpPerCapita: 323.0,
            gdpGrowthRate: 5.25,
            mainSectors: ["Jasa Keuangan & Asuransi", "Perdagangan Besar & Eceran", "Teknologi & FinTech", "Real Estate & Konstruksi"],
            inflation: 1.9,
            foreignInvestment: 5800,
            exportValue: 12400
        },
        pendidikan: {
            ipm: 83.55,
            literacyRate: 99.8,
            higherEducationRatio: 44.5,
            digitalTalentIndex: 94.2,
            totalSchools: 6800,
            totalUniversities: 190
        },
        infrastruktur: {
            roadNetworkKm: 7400,
            tollRoadKm: 180,
            portsCount: 4,
            airportsCount: 2,
            internetPenetration: 96.5,
            electricityCapacityMW: 8500,
            renewableEnergyShare: 8.5,
            palapaRingConnected: true,
            smartCityScore: 92.8
        },
        lingkungan: {
            forestCoverHa: 980,
            forestPercentage: 1.5,
            carbonEmission: 64.0,
            carbonAbsorption: 3.5,
            aqiCurrent: 112,
            disasterRiskScore: 72.0,
            renewablePotential: { solar: 2800, hydro: 0, geothermal: 0, wind: 50 }
        },
        telemetry: {
            airQuality: "Sensitif (112 AQI)",
            temperature: "32.4°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Pintu Air Manggarai: Siaga 3",
            trafficStatus: "Padat Sibuk (MRT 92% Kapasitas, Transjakarta 88%)",
            gridLoad: "91%"
        },
        strategicProjects: ["Transformasi Jakarta Global Financial & Business Hub", "MRT Jakarta Fase 2A & 2B (Bundaran HI - Ancol Barat)", "Tanggul Laut Raksasa NCICD & Revitalisasi Waduk"]
    },
    {
        id: "ID-JB",
        name: "Jawa Barat",
        capital: "Bandung",
        island: "Jawa",
        lat: -6.9175,
        lng: 107.6191,
        establishedYear: 1950,
        populasi: {
            total: 50350000,
            density: 1420,
            growthRate: 1.18,
            ageStructure: { young: 24, productive: 70, elderly: 6 },
            urbanizationRate: 78.5,
            workforce: 25400000
        },
        ekonomi: {
            gdp: 2680.0,
            gdpPerCapita: 53.2,
            gdpGrowthRate: 5.30,
            mainSectors: ["Manufaktur Otomotif & Elektronik", "Tekstil & Produk Tekstil", "Pusat Startup Digital Bandung", "Pertanian Pangan & Teh"],
            inflation: 2.2,
            foreignInvestment: 7200,
            exportValue: 36500
        },
        pendidikan: {
            ipm: 74.60,
            literacyRate: 99.1,
            higherEducationRatio: 28.5,
            digitalTalentIndex: 86.4,
            totalSchools: 34500,
            totalUniversities: 240
        },
        infrastruktur: {
            roadNetworkKm: 48200,
            tollRoadKm: 620,
            portsCount: 8,
            airportsCount: 4,
            internetPenetration: 85.0,
            electricityCapacityMW: 9200,
            renewableEnergyShare: 32.5,
            palapaRingConnected: true,
            smartCityScore: 86.2
        },
        lingkungan: {
            forestCoverHa: 820000,
            forestPercentage: 23.2,
            carbonEmission: 78.0,
            carbonAbsorption: 19.5,
            aqiCurrent: 78,
            disasterRiskScore: 76.0,
            renewablePotential: { solar: 9500, hydro: 4600, geothermal: 3200, wind: 900 }
        },
        telemetry: {
            airQuality: "Sedang (78 AQI)",
            temperature: "26.8°C",
            seismicStatus: "Waspada Pemantauan Sesar Lembang",
            floodRisk: "Waspada DAS Citarum",
            trafficStatus: "Kereta Cepat Whoosh Operasional Optimal (96%)",
            gridLoad: "86%"
        },
        strategicProjects: ["Kawasan Ekonomi Segitiga Rebana", "Pelabuhan Patimban Subang Fase 2", "PLTS Terapung Cirata 192 MWp"]
    },
    {
        id: "ID-JT",
        name: "Jawa Tengah",
        capital: "Semarang",
        island: "Jawa",
        lat: -7.1509,
        lng: 110.1402,
        establishedYear: 1950,
        populasi: {
            total: 37890000,
            density: 1150,
            growthRate: 0.74,
            ageStructure: { young: 22, productive: 69, elderly: 9 },
            urbanizationRate: 58.2,
            workforce: 20100000
        },
        ekonomi: {
            gdp: 1720.0,
            gdpPerCapita: 45.4,
            gdpGrowthRate: 5.15,
            mainSectors: ["Manufaktur Padat Karya & Garment", "Pertanian Padi & Jagung", "Industri Mebel & Kerajinan Ukir", "Pariwisata Budaya & Candi"],
            inflation: 2.0,
            foreignInvestment: 2900,
            exportValue: 11800
        },
        pendidikan: {
            ipm: 73.85,
            literacyRate: 98.5,
            higherEducationRatio: 26.2,
            digitalTalentIndex: 78.0,
            totalSchools: 28900,
            totalUniversities: 180
        },
        infrastruktur: {
            roadNetworkKm: 41200,
            tollRoadKm: 580,
            portsCount: 10,
            airportsCount: 4,
            internetPenetration: 81.6,
            electricityCapacityMW: 6800,
            renewableEnergyShare: 16.8,
            palapaRingConnected: true,
            smartCityScore: 82.5
        },
        lingkungan: {
            forestCoverHa: 640000,
            forestPercentage: 19.5,
            carbonEmission: 52.0,
            carbonAbsorption: 14.2,
            aqiCurrent: 62,
            disasterRiskScore: 71.0,
            renewablePotential: { solar: 8200, hydro: 2600, geothermal: 1800, wind: 650 }
        },
        telemetry: {
            airQuality: "Sedang (62 AQI)",
            temperature: "29.1°C",
            seismicStatus: "Aktivitas Gunung Merapi: Level Siaga (III)",
            floodRisk: "Pantura Rob Terkendali Tanggul Laut",
            trafficStatus: "Lancar (40% Trans Jawa)",
            gridLoad: "79%"
        },
        strategicProjects: ["Kawasan Industri Terpadu Batang (KITB)", "Kawasan Industri Kendal (KIK)", "Geothermal Dieng Ekspansi Unit 2"]
    },
    {
        id: "ID-YO",
        name: "DI Yogyakarta",
        capital: "Yogyakarta",
        island: "Jawa",
        lat: -7.7956,
        lng: 110.3695,
        establishedYear: 1950,
        populasi: {
            total: 3920000,
            density: 1250,
            growthRate: 1.05,
            ageStructure: { young: 19, productive: 71, elderly: 10 },
            urbanizationRate: 72.8,
            workforce: 2280000
        },
        ekonomi: {
            gdp: 188.5,
            gdpPerCapita: 48.1,
            gdpGrowthRate: 5.40,
            mainSectors: ["Pendidikan & Edutech", "Pariwisata Heritage & Budaya", "Industri Kreatif & Software", "Kuliner & Kerajinan"],
            inflation: 2.1,
            foreignInvestment: 220,
            exportValue: 620
        },
        pendidikan: {
            ipm: 81.09,
            literacyRate: 99.6,
            higherEducationRatio: 48.2,
            digitalTalentIndex: 91.5,
            totalSchools: 3800,
            totalUniversities: 120
        },
        infrastruktur: {
            roadNetworkKm: 5600,
            tollRoadKm: 22,
            portsCount: 2,
            airportsCount: 2,
            internetPenetration: 92.4,
            electricityCapacityMW: 650,
            renewableEnergyShare: 21.0,
            palapaRingConnected: true,
            smartCityScore: 89.4
        },
        lingkungan: {
            forestCoverHa: 48000,
            forestPercentage: 15.3,
            carbonEmission: 8.5,
            carbonAbsorption: 3.2,
            aqiCurrent: 38,
            disasterRiskScore: 78.0,
            renewablePotential: { solar: 1600, hydro: 180, geothermal: 0, wind: 450 }
        },
        telemetry: {
            airQuality: "Baik (38 AQI)",
            temperature: "27.2°C",
            seismicStatus: "Waspada Gunung Merapi & Sesar Opak",
            floodRisk: "Rendah",
            trafficStatus: "Ramai Wisatawan (KRL Yogya-Solo 85%)",
            gridLoad: "68%"
        },
        strategicProjects: ["Jalan Tol Solo-Yogyakarta-YIA Kulon Progo", "Kawasan Wisata Budaya Borobudur-Prambanan-Ratu Boko", "Pengembangan Kawasan Aerotropolis Bandara YIA"]
    },
    {
        id: "ID-JI",
        name: "Jawa Timur",
        capital: "Surabaya",
        island: "Jawa",
        lat: -7.5360,
        lng: 112.2384,
        establishedYear: 1950,
        populasi: {
            total: 41400000,
            density: 865,
            growthRate: 0.72,
            ageStructure: { young: 21, productive: 70, elderly: 9 },
            urbanizationRate: 59.8,
            workforce: 23200000
        },
        ekonomi: {
            gdp: 3050.0,
            gdpPerCapita: 73.6,
            gdpGrowthRate: 5.20,
            mainSectors: ["Manufaktur Makanan & Minuman", "Pabrik Semen & Bahan Bangunan", "Pertanian & Tembakau", "Logistik Maritim Tanjung Perak"],
            inflation: 2.1,
            foreignInvestment: 4100,
            exportValue: 24500
        },
        pendidikan: {
            ipm: 74.90,
            literacyRate: 98.8,
            higherEducationRatio: 29.1,
            digitalTalentIndex: 84.8,
            totalSchools: 31200,
            totalUniversities: 210
        },
        infrastruktur: {
            roadNetworkKm: 46800,
            tollRoadKm: 685,
            portsCount: 16,
            airportsCount: 5,
            internetPenetration: 84.2,
            electricityCapacityMW: 9800,
            renewableEnergyShare: 23.5,
            palapaRingConnected: true,
            smartCityScore: 87.5
        },
        lingkungan: {
            forestCoverHa: 1350000,
            forestPercentage: 28.2,
            carbonEmission: 65.0,
            carbonAbsorption: 26.5,
            aqiCurrent: 58,
            disasterRiskScore: 74.0,
            renewablePotential: { solar: 10400, hydro: 3800, geothermal: 2900, wind: 850 }
        },
        telemetry: {
            airQuality: "Sedang (58 AQI)",
            temperature: "31.0°C",
            seismicStatus: "Semeru Level Siaga (III), Bromo Waspada",
            floodRisk: "DAS Bengawan Solo Terpantau Normal",
            trafficStatus: "Ramai Lancar (Surabaya Gateway 60%)",
            gridLoad: "84%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus JIIPE Gresik (Smelter Freeport)", "Jalan Tol Probolinggo - Banyuwangi (Probowangi)", "Pengembangan Geothermal Ijen 110 MW"]
    },
    {
        id: "ID-BT",
        name: "Banten",
        capital: "Serang",
        island: "Jawa",
        lat: -6.4058,
        lng: 106.0640,
        establishedYear: 2000,
        populasi: {
            total: 12450000,
            density: 1290,
            growthRate: 1.25,
            ageStructure: { young: 24, productive: 71, elderly: 5 },
            urbanizationRate: 71.4,
            workforce: 6100000
        },
        ekonomi: {
            gdp: 840.0,
            gdpPerCapita: 67.5,
            gdpGrowthRate: 5.10,
            mainSectors: ["Industri Baja (Krakatau Steel)", "Petrokimia Cilegon", "Manufaktur Tangerang Raya", "Penyeberangan Selat Sunda"],
            inflation: 2.2,
            foreignInvestment: 3800,
            exportValue: 13500
        },
        pendidikan: {
            ipm: 74.25,
            literacyRate: 98.9,
            higherEducationRatio: 27.8,
            digitalTalentIndex: 81.2,
            totalSchools: 9400,
            totalUniversities: 65
        },
        infrastruktur: {
            roadNetworkKm: 14500,
            tollRoadKm: 220,
            portsCount: 8,
            airportsCount: 2,
            internetPenetration: 86.8,
            electricityCapacityMW: 6200,
            renewableEnergyShare: 11.2,
            palapaRingConnected: true,
            smartCityScore: 82.0
        },
        lingkungan: {
            forestCoverHa: 210000,
            forestPercentage: 21.8,
            carbonEmission: 58.0,
            carbonAbsorption: 8.5,
            aqiCurrent: 89,
            disasterRiskScore: 69.0,
            renewablePotential: { solar: 3200, hydro: 650, geothermal: 850, wind: 400 }
        },
        telemetry: {
            airQuality: "Sedang (89 AQI)",
            temperature: "31.5°C",
            seismicStatus: "Waspada Anak Krakatau",
            floodRisk: "Sungai Ciujung Terpantau Aman",
            trafficStatus: "Penyeberangan Merak-Bakauheni Berjalan Lancar (65%)",
            gridLoad: "88%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus Pariwisata Tanjung Lesung", "Tol Serang - Panimbang Akses Banten Selatan", "Kompleks Petrokimia Chandra Asri Krakatau (CAP 2)"]
    },

    // === BALI & NUSA TENGGARA ===
    {
        id: "ID-BA",
        name: "Bali",
        capital: "Denpasar",
        island: "Bali & Nusa Tenggara",
        lat: -8.4095,
        lng: 115.1889,
        establishedYear: 1958,
        populasi: {
            total: 4420000,
            density: 765,
            growthRate: 1.02,
            ageStructure: { young: 20, productive: 72, elderly: 8 },
            urbanizationRate: 70.8,
            workforce: 2680000
        },
        ekonomi: {
            gdp: 295.0,
            gdpPerCapita: 66.7,
            gdpGrowthRate: 5.85,
            mainSectors: ["Pariwisata Internasional (Hotel, MICE, Resort)", "Industri Kreatif, Seni & Budaya", "Digital Nomad Hub", "Pertanian Organik & Kopi Kintamani"],
            inflation: 2.6,
            foreignInvestment: 980,
            exportValue: 720
        },
        pendidikan: {
            ipm: 77.82,
            literacyRate: 99.1,
            higherEducationRatio: 36.4,
            digitalTalentIndex: 88.0,
            totalSchools: 4200,
            totalUniversities: 46
        },
        infrastruktur: {
            roadNetworkKm: 8900,
            tollRoadKm: 13,
            portsCount: 8,
            airportsCount: 2,
            internetPenetration: 91.5,
            electricityCapacityMW: 1250,
            renewableEnergyShare: 22.0,
            palapaRingConnected: true,
            smartCityScore: 88.6
        },
        lingkungan: {
            forestCoverHa: 135000,
            forestPercentage: 23.3,
            carbonEmission: 11.2,
            carbonAbsorption: 6.8,
            aqiCurrent: 28,
            disasterRiskScore: 54.0,
            renewablePotential: { solar: 2900, hydro: 220, geothermal: 350, wind: 380 }
        },
        telemetry: {
            airQuality: "Sangat Baik (28 AQI)",
            temperature: "28.6°C",
            seismicStatus: "Aktivitas Gunung Agung Normal (Level I)",
            floodRisk: "Rendah",
            trafficStatus: "Padat Kawasan Wisata Kuta-Seminyak (72%)",
            gridLoad: "77%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus Kesehatan Sanur", "Pusat Riset & Budaya Kura Kura Bali", "Bali Urban Subway / LRT Kereta Bawah Tanah"]
    },
    {
        id: "ID-NB",
        name: "Nusa Tenggara Barat",
        capital: "Mataram",
        island: "Bali & Nusa Tenggara",
        lat: -8.6529,
        lng: 117.3616,
        establishedYear: 1958,
        populasi: {
            total: 5560000,
            density: 276,
            growthRate: 1.45,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 48.0,
            workforce: 2980000
        },
        ekonomi: {
            gdp: 168.0,
            gdpPerCapita: 30.2,
            gdpGrowthRate: 6.10,
            mainSectors: ["Pertambangan Tembaga & Emas (Batu Hijau/Amman)", "Sport Tourism & Pariwisata Mandalika", "Pertanian Pangan & Jagung", "Perikanan Mutiara"],
            inflation: 2.4,
            foreignInvestment: 1650,
            exportValue: 2900
        },
        pendidikan: {
            ipm: 70.80,
            literacyRate: 97.2,
            higherEducationRatio: 24.1,
            digitalTalentIndex: 68.0,
            totalSchools: 5400,
            totalUniversities: 38
        },
        infrastruktur: {
            roadNetworkKm: 12400,
            tollRoadKm: 0,
            portsCount: 10,
            airportsCount: 3,
            internetPenetration: 75.4,
            electricityCapacityMW: 680,
            renewableEnergyShare: 24.8,
            palapaRingConnected: true,
            smartCityScore: 74.2
        },
        lingkungan: {
            forestCoverHa: 1050000,
            forestPercentage: 52.1,
            carbonEmission: 9.4,
            carbonAbsorption: 14.8,
            aqiCurrent: 21,
            disasterRiskScore: 75.0,
            renewablePotential: { solar: 4200, hydro: 480, geothermal: 620, wind: 550 }
        },
        telemetry: {
            airQuality: "Sangat Baik (21 AQI)",
            temperature: "29.4°C",
            seismicStatus: "Rinjani Normal Level I",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (Kawasan Sirkuit Mandalika Terkendali)",
            gridLoad: "62%"
        },
        strategicProjects: ["Kawasan Ekonomi Khusus Mandalika & Sirkuit Internasional", "Smelter Tembaga PT Amman Mineral Sumbawa Barat", "Bendungan Meninting & Bintang Bano"]
    },
    {
        id: "ID-NT",
        name: "Nusa Tenggara Timur",
        capital: "Kupang",
        island: "Bali & Nusa Tenggara",
        lat: -8.6573,
        lng: 121.0794,
        establishedYear: 1958,
        populasi: {
            total: 5610000,
            density: 118,
            growthRate: 1.38,
            ageStructure: { young: 29, productive: 64, elderly: 7 },
            urbanizationRate: 23.5,
            workforce: 2850000
        },
        ekonomi: {
            gdp: 128.5,
            gdpPerCapita: 22.9,
            gdpGrowthRate: 4.60,
            mainSectors: ["Pariwisata Labuan Bajo (Taman Nasional Komodo)", "Peternakan Sapi", "Pertanian Jagung & Garam", "Perikanan & Rumput Laut"],
            inflation: 2.3,
            foreignInvestment: 420,
            exportValue: 85
        },
        pendidikan: {
            ipm: 67.25,
            literacyRate: 96.5,
            higherEducationRatio: 21.0,
            digitalTalentIndex: 62.5,
            totalSchools: 6800,
            totalUniversities: 28
        },
        infrastruktur: {
            roadNetworkKm: 19800,
            tollRoadKm: 0,
            portsCount: 24,
            airportsCount: 14,
            internetPenetration: 68.2,
            electricityCapacityMW: 520,
            renewableEnergyShare: 39.5,
            palapaRingConnected: true,
            smartCityScore: 69.8
        },
        lingkungan: {
            forestCoverHa: 1680000,
            forestPercentage: 34.8,
            carbonEmission: 5.6,
            carbonAbsorption: 16.2,
            aqiCurrent: 18,
            disasterRiskScore: 78.0,
            renewablePotential: { solar: 8600, hydro: 650, geothermal: 1200, wind: 1400 }
        },
        telemetry: {
            airQuality: "Sangat Murni (18 AQI)",
            temperature: "30.0°C",
            seismicStatus: "Aktivitas Vulkanik Lewotobi Dalam Pemantauan Ketat",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (15% utilitas)",
            gridLoad: "56%"
        },
        strategicProjects: ["Destinasi Super Prioritas Labuan Bajo Premium Eco-Tourism", "Flores Geothermal Island (Pengembangan PLTP Ulumbu)", "Pusat Industri Garam Terintegrasi Teluk Kupang"]
    },

    // === PULAU KALIMANTAN ===
    {
        id: "ID-KB",
        name: "Kalimantan Barat",
        capital: "Pontianak",
        island: "Kalimantan",
        lat: -0.0263,
        lng: 109.3425,
        establishedYear: 1956,
        populasi: {
            total: 5540000,
            density: 38,
            growthRate: 1.34,
            ageStructure: { young: 27, productive: 67, elderly: 6 },
            urbanizationRate: 35.2,
            workforce: 2900000
        },
        ekonomi: {
            gdp: 275.0,
            gdpPerCapita: 49.6,
            gdpGrowthRate: 4.88,
            mainSectors: ["Smelter Bauksit & Alumina", "Perkebunan Kelapa Sawit & Karet", "Kehutanan", "Perdagangan Lintas Batas Malaysia"],
            inflation: 2.2,
            foreignInvestment: 1200,
            exportValue: 2400
        },
        pendidikan: {
            ipm: 70.47,
            literacyRate: 97.4,
            higherEducationRatio: 22.8,
            digitalTalentIndex: 67.2,
            totalSchools: 6200,
            totalUniversities: 32
        },
        infrastruktur: {
            roadNetworkKm: 24500,
            tollRoadKm: 0,
            portsCount: 12,
            airportsCount: 5,
            internetPenetration: 73.8,
            electricityCapacityMW: 850,
            renewableEnergyShare: 26.5,
            palapaRingConnected: true,
            smartCityScore: 72.8
        },
        lingkungan: {
            forestCoverHa: 6850000,
            forestPercentage: 46.5,
            carbonEmission: 42.0,
            carbonAbsorption: 64.0,
            aqiCurrent: 35,
            disasterRiskScore: 56.0,
            renewablePotential: { solar: 8800, hydro: 3400, geothermal: 120, wind: 350 }
        },
        telemetry: {
            airQuality: "Baik (35 AQI)",
            temperature: "30.4°C",
            seismicStatus: "Sangat Stabil (Bebas Gempa Megathrust)",
            floodRisk: "Waspada DAS Kapuas",
            trafficStatus: "Lancar (24% utilitas)",
            gridLoad: "63%"
        },
        strategicProjects: ["Pelabuhan Internasional Kijing di Mempawah", "Pusat Hilirisasi Bauksit SGAR Smelter Grade Alumina", "Pos Lintas Batas Negara (PLBN) Entikong Modern"]
    },
    {
        id: "ID-KT",
        name: "Kalimantan Tengah",
        capital: "Palangka Raya",
        island: "Kalimantan",
        lat: -1.6815,
        lng: 113.3824,
        establishedYear: 1957,
        populasi: {
            total: 2820000,
            density: 18,
            growthRate: 1.58,
            ageStructure: { young: 26, productive: 69, elderly: 5 },
            urbanizationRate: 38.6,
            workforce: 1520000
        },
        ekonomi: {
            gdp: 208.0,
            gdpPerCapita: 73.8,
            gdpGrowthRate: 5.10,
            mainSectors: ["Perkebunan Kelapa Sawit", "Pertambangan Batubara & Zirkon", "Kehutanan & Restorasi Gambut", "Pertanian Food Estate"],
            inflation: 2.3,
            foreignInvestment: 950,
            exportValue: 4800
        },
        pendidikan: {
            ipm: 73.10,
            literacyRate: 98.6,
            higherEducationRatio: 26.5,
            digitalTalentIndex: 70.4,
            totalSchools: 3900,
            totalUniversities: 22
        },
        infrastruktur: {
            roadNetworkKm: 21800,
            tollRoadKm: 0,
            portsCount: 8,
            airportsCount: 6,
            internetPenetration: 75.0,
            electricityCapacityMW: 680,
            renewableEnergyShare: 19.4,
            palapaRingConnected: true,
            smartCityScore: 73.5
        },
        lingkungan: {
            forestCoverHa: 8900000,
            forestPercentage: 57.9,
            carbonEmission: 38.5,
            carbonAbsorption: 82.0,
            aqiCurrent: 32,
            disasterRiskScore: 58.0,
            renewablePotential: { solar: 7900, hydro: 4200, geothermal: 210, wind: 280 }
        },
        telemetry: {
            airQuality: "Baik (32 AQI)",
            temperature: "29.9°C",
            seismicStatus: "Sangat Stabil",
            floodRisk: "Waspada DAS Kahayan",
            trafficStatus: "Lancar (16% utilitas)",
            gridLoad: "57%"
        },
        strategicProjects: ["Kawasan Food Estate Terpadu Pulang Pisau & Kapuas", "Pusat Konservasi Hutan Gambut Katingan Mentaya", "Pengembangan Bandara Tjilik Riwut"]
    },
    {
        id: "ID-KS",
        name: "Kalimantan Selatan",
        capital: "Banjarbaru",
        island: "Kalimantan",
        lat: -3.0926,
        lng: 115.2838,
        establishedYear: 1956,
        populasi: {
            total: 4220000,
            density: 109,
            growthRate: 1.26,
            ageStructure: { young: 25, productive: 69, elderly: 6 },
            urbanizationRate: 46.5,
            workforce: 2240000
        },
        ekonomi: {
            gdp: 272.0,
            gdpPerCapita: 64.5,
            gdpGrowthRate: 5.22,
            mainSectors: ["Pertambangan Batubara", "Perkebunan Kelapa Sawit & Karet", "Perdagangan & Jasa Logistik", "Pertanian Lahan Basah"],
            inflation: 2.1,
            foreignInvestment: 780,
            exportValue: 12800
        },
        pendidikan: {
            ipm: 74.05,
            literacyRate: 98.7,
            higherEducationRatio: 27.0,
            digitalTalentIndex: 72.8,
            totalSchools: 4800,
            totalUniversities: 34
        },
        infrastruktur: {
            roadNetworkKm: 16200,
            tollRoadKm: 0,
            portsCount: 10,
            airportsCount: 3,
            internetPenetration: 78.4,
            electricityCapacityMW: 920,
            renewableEnergyShare: 21.8,
            palapaRingConnected: true,
            smartCityScore: 76.4
        },
        lingkungan: {
            forestCoverHa: 1320000,
            forestPercentage: 34.1,
            carbonEmission: 44.0,
            carbonAbsorption: 19.5,
            aqiCurrent: 39,
            disasterRiskScore: 52.0,
            renewablePotential: { solar: 4800, hydro: 1600, geothermal: 180, wind: 420 }
        },
        telemetry: {
            airQuality: "Baik (39 AQI)",
            temperature: "30.6°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (30% utilitas)",
            gridLoad: "65%"
        },
        strategicProjects: ["Gerbang Logistik Penyangga IKN Nusantara", "Kawasan Industri Batulicin & Jorong", "Rehabilitasi Pegunungan Meratus Geopark"]
    },
    {
        id: "ID-KI",
        name: "Kalimantan Timur",
        capital: "Samarinda (Lokasi IKN Nusantara)",
        island: "Kalimantan",
        lat: 0.5387,
        lng: 116.4194,
        establishedYear: 1956,
        populasi: {
            total: 4050000,
            density: 32,
            growthRate: 2.45,
            ageStructure: { young: 24, productive: 71, elderly: 5 },
            urbanizationRate: 68.2,
            workforce: 2150000
        },
        ekonomi: {
            gdp: 860.0,
            gdpPerCapita: 212.3,
            gdpGrowthRate: 6.80,
            mainSectors: ["Konstruksi & Smart Infrastructure IKN", "Gas Alam Cair (LNG Bontang)", "Pertambangan Batubara", "Petrokimia & Pupuk"],
            inflation: 2.4,
            foreignInvestment: 3400,
            exportValue: 27500
        },
        pendidikan: {
            ipm: 78.20,
            literacyRate: 99.2,
            higherEducationRatio: 34.0,
            digitalTalentIndex: 85.5,
            totalSchools: 4600,
            totalUniversities: 40
        },
        infrastruktur: {
            roadNetworkKm: 18900,
            tollRoadKm: 145,
            portsCount: 16,
            airportsCount: 5,
            internetPenetration: 88.5,
            electricityCapacityMW: 2400,
            renewableEnergyShare: 35.0,
            palapaRingConnected: true,
            smartCityScore: 91.0
        },
        lingkungan: {
            forestCoverHa: 7850000,
            forestPercentage: 61.8,
            carbonEmission: 48.0,
            carbonAbsorption: 72.5,
            aqiCurrent: 22,
            disasterRiskScore: 30.0,
            renewablePotential: { solar: 9800, hydro: 6200, geothermal: 450, wind: 400 }
        },
        telemetry: {
            airQuality: "Sangat Baik (22 AQI)",
            temperature: "28.5°C",
            seismicStatus: "Sangat Stabil",
            floodRisk: "Rendah - Sistem Smart Water IKN Aktif",
            trafficStatus: "Terkendali (Sistem Transportasi Otomatis IKN)",
            gridLoad: "72%"
        },
        strategicProjects: ["Pembangunan KIPP IKN Nusantara", "Pusat Energi Hijau Smart Grid & PLTS IKN 50 MW", "Jalan Tol Bawah Laut Teluk Balikpapan"]
    },
    {
        id: "ID-KU",
        name: "Kalimantan Utara",
        capital: "Tanjung Selor",
        island: "Kalimantan",
        lat: 2.7259,
        lng: 116.3263,
        establishedYear: 2012,
        populasi: {
            total: 740000,
            density: 10,
            growthRate: 1.82,
            ageStructure: { young: 27, productive: 68, elderly: 5 },
            urbanizationRate: 40.2,
            workforce: 390000
        },
        ekonomi: {
            gdp: 135.0,
            gdpPerCapita: 182.4,
            gdpGrowthRate: 5.45,
            mainSectors: ["Kawasan Industri Hijau (KIPI Tanah Kuning)", "Pertambangan Batubara & Migas", "Perikanan & Tambak Udang Windu", "Kehutanan"],
            inflation: 2.0,
            foreignInvestment: 2800,
            exportValue: 2900
        },
        pendidikan: {
            ipm: 72.88,
            literacyRate: 98.4,
            higherEducationRatio: 23.5,
            digitalTalentIndex: 68.0,
            totalSchools: 1200,
            totalUniversities: 8
        },
        infrastruktur: {
            roadNetworkKm: 6400,
            tollRoadKm: 0,
            portsCount: 8,
            airportsCount: 6,
            internetPenetration: 76.2,
            electricityCapacityMW: 420,
            renewableEnergyShare: 45.0,
            palapaRingConnected: true,
            smartCityScore: 71.5
        },
        lingkungan: {
            forestCoverHa: 5400000,
            forestPercentage: 74.5,
            carbonEmission: 6.2,
            carbonAbsorption: 58.0,
            aqiCurrent: 16,
            disasterRiskScore: 32.0,
            renewablePotential: { solar: 5200, hydro: 11500, geothermal: 320, wind: 300 }
        },
        telemetry: {
            airQuality: "Sangat Murni (16 AQI)",
            temperature: "27.8°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Waspada DAS Kayan",
            trafficStatus: "Lancar (10% utilitas)",
            gridLoad: "48%"
        },
        strategicProjects: ["Kawasan Industri Hijau Indonesia (KIHI) Tanah Kuning", "Mega Proyek PLTA Kayan Cascade 9.000 MW", "PLBN Sebatik & Long Midang"]
    },

    // === PULAU SULAWESI ===
    {
        id: "ID-SA",
        name: "Sulawesi Utara",
        capital: "Manado",
        island: "Sulawesi",
        lat: 0.6247,
        lng: 123.9750,
        establishedYear: 1964,
        populasi: {
            total: 2680000,
            density: 193,
            growthRate: 1.10,
            ageStructure: { young: 23, productive: 69, elderly: 8 },
            urbanizationRate: 52.8,
            workforce: 1380000
        },
        ekonomi: {
            gdp: 162.0,
            gdpPerCapita: 60.4,
            gdpGrowthRate: 5.62,
            mainSectors: ["Pariwisata Bahari (Bunaken & Likupang)", "Pengolahan Kelapa & Minyak Goreng", "Perikanan Tuna Internasional", "Perdagangan Pasifik Rim"],
            inflation: 2.2,
            foreignInvestment: 680,
            exportValue: 1250
        },
        pendidikan: {
            ipm: 74.65,
            literacyRate: 99.6,
            higherEducationRatio: 32.4,
            digitalTalentIndex: 76.5,
            totalSchools: 3600,
            totalUniversities: 28
        },
        infrastruktur: {
            roadNetworkKm: 11200,
            tollRoadKm: 39,
            portsCount: 10,
            airportsCount: 4,
            internetPenetration: 82.5,
            electricityCapacityMW: 680,
            renewableEnergyShare: 42.0,
            palapaRingConnected: true,
            smartCityScore: 78.2
        },
        lingkungan: {
            forestCoverHa: 620000,
            forestPercentage: 44.6,
            carbonEmission: 8.2,
            carbonAbsorption: 9.8,
            aqiCurrent: 24,
            disasterRiskScore: 74.0,
            renewablePotential: { solar: 2800, hydro: 1200, geothermal: 1100, wind: 450 }
        },
        telemetry: {
            airQuality: "Sangat Baik (24 AQI)",
            temperature: "28.3°C",
            seismicStatus: "Gunung Ruang & Lokon Level Waspada",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (28% utilitas)",
            gridLoad: "64%"
        },
        strategicProjects: ["Destinasi Super Prioritas Likupang Eco-Tourism", "KEK Bitung Hub Logistik Pasifik", "PLTP Lahendong Unit 7-8"]
    },
    {
        id: "ID-GO",
        name: "Gorontalo",
        capital: "Gorontalo",
        island: "Sulawesi",
        lat: 0.6999,
        lng: 122.4467,
        establishedYear: 2000,
        populasi: {
            total: 1220000,
            density: 102,
            growthRate: 1.15,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 39.5,
            workforce: 620000
        },
        ekonomi: {
            gdp: 51.5,
            gdpPerCapita: 42.2,
            gdpGrowthRate: 4.82,
            mainSectors: ["Pertanian Jagung Nasional", "Perikanan Tangkap Teluk Tomini", "Industri Gula & Minyak Kelapa", "Pariwisata Hiu Paus Botubarani"],
            inflation: 2.1,
            foreignInvestment: 120,
            exportValue: 92
        },
        pendidikan: {
            ipm: 70.92,
            literacyRate: 98.1,
            higherEducationRatio: 26.2,
            digitalTalentIndex: 66.0,
            totalSchools: 1650,
            totalUniversities: 12
        },
        infrastruktur: {
            roadNetworkKm: 6800,
            tollRoadKm: 0,
            portsCount: 6,
            airportsCount: 2,
            internetPenetration: 74.0,
            electricityCapacityMW: 280,
            renewableEnergyShare: 31.5,
            palapaRingConnected: true,
            smartCityScore: 71.0
        },
        lingkungan: {
            forestCoverHa: 710000,
            forestPercentage: 59.1,
            carbonEmission: 3.4,
            carbonAbsorption: 11.2,
            aqiCurrent: 19,
            disasterRiskScore: 61.0,
            renewablePotential: { solar: 2400, hydro: 850, geothermal: 350, wind: 280 }
        },
        telemetry: {
            airQuality: "Sangat Murni (19 AQI)",
            temperature: "29.2°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (12% utilitas)",
            gridLoad: "52%"
        },
        strategicProjects: ["Pengembangan Pelabuhan Internasional Anggrek", "Sentra Jagung & Agroindustri Terpadu", "Bendungan Bulango Ulu"]
    },
    {
        id: "ID-ST",
        name: "Sulawesi Tengah",
        capital: "Palu",
        island: "Sulawesi",
        lat: -1.4300,
        lng: 121.4456,
        establishedYear: 1964,
        populasi: {
            total: 3120000,
            density: 50,
            growthRate: 1.62,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 30.5,
            workforce: 1640000
        },
        ekonomi: {
            gdp: 350.0,
            gdpPerCapita: 112.2,
            gdpGrowthRate: 11.85,
            mainSectors: ["Hilirisasi Nikel & Baterai EV (IMIP Morowali)", "Gas Alam Cair (Donggi Senoro LNG)", "Pertanian & Perkebunan Kakao", "Perikanan"],
            inflation: 2.3,
            foreignInvestment: 7900,
            exportValue: 21800
        },
        pendidikan: {
            ipm: 71.60,
            literacyRate: 98.2,
            higherEducationRatio: 24.8,
            digitalTalentIndex: 68.5,
            totalSchools: 4200,
            totalUniversities: 24
        },
        infrastruktur: {
            roadNetworkKm: 22100,
            tollRoadKm: 0,
            portsCount: 14,
            airportsCount: 7,
            internetPenetration: 75.6,
            electricityCapacityMW: 3200,
            renewableEnergyShare: 32.0,
            palapaRingConnected: true,
            smartCityScore: 73.0
        },
        lingkungan: {
            forestCoverHa: 4100000,
            forestPercentage: 66.3,
            carbonEmission: 36.0,
            carbonAbsorption: 48.0,
            aqiCurrent: 42,
            disasterRiskScore: 84.0,
            renewablePotential: { solar: 6500, hydro: 4800, geothermal: 750, wind: 320 }
        },
        telemetry: {
            airQuality: "Baik (42 AQI)",
            temperature: "30.8°C",
            seismicStatus: "Pemantauan Sensor Sesar Palu Koro",
            floodRisk: "Rendah",
            trafficStatus: "Padat Kawasan Industri Morowali",
            gridLoad: "82%"
        },
        strategicProjects: ["Indonesia Morowali Industrial Park (IMIP)", "PLTA Poso Energy 515 MW", "Kawasan Pangan Nusantara (KPN) Donggala"]
    },
    {
        id: "ID-SR",
        name: "Sulawesi Barat",
        capital: "Mamuju",
        island: "Sulawesi",
        lat: -2.8441,
        lng: 119.2321,
        establishedYear: 2004,
        populasi: {
            total: 1480000,
            density: 88,
            growthRate: 1.40,
            ageStructure: { young: 28, productive: 66, elderly: 6 },
            urbanizationRate: 26.2,
            workforce: 740000
        },
        ekonomi: {
            gdp: 59.8,
            gdpPerCapita: 40.4,
            gdpGrowthRate: 4.90,
            mainSectors: ["Perkebunan Sawit & Kakao", "Perikanan Tangkap & Budidaya", "Kehutanan", "Logistik Selat Makassar ke IKN"],
            inflation: 2.2,
            foreignInvestment: 110,
            exportValue: 620
        },
        pendidikan: {
            ipm: 68.12,
            literacyRate: 96.8,
            higherEducationRatio: 20.5,
            digitalTalentIndex: 63.4,
            totalSchools: 1950,
            totalUniversities: 10
        },
        infrastruktur: {
            roadNetworkKm: 7800,
            tollRoadKm: 0,
            portsCount: 6,
            airportsCount: 2,
            internetPenetration: 70.8,
            electricityCapacityMW: 240,
            renewableEnergyShare: 38.0,
            palapaRingConnected: true,
            smartCityScore: 68.5
        },
        lingkungan: {
            forestCoverHa: 1050000,
            forestPercentage: 62.5,
            carbonEmission: 3.8,
            carbonAbsorption: 15.6,
            aqiCurrent: 20,
            disasterRiskScore: 72.0,
            renewablePotential: { solar: 2800, hydro: 1800, geothermal: 320, wind: 240 }
        },
        telemetry: {
            airQuality: "Sangat Murni (20 AQI)",
            temperature: "28.7°C",
            seismicStatus: "Normal Terpantau Sensor BMKG",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (11% utilitas)",
            gridLoad: "51%"
        },
        strategicProjects: ["Pelabuhan Laut Belang-Belang Koridor IKN", "Bendungan Budong-Budong", "Sentra Hilirisasi Sawit & Kakao Sulbar"]
    },
    {
        id: "ID-SN",
        name: "Sulawesi Selatan",
        capital: "Makassar",
        island: "Sulawesi",
        lat: -3.6687,
        lng: 119.9740,
        establishedYear: 1960,
        populasi: {
            total: 9420000,
            density: 201,
            growthRate: 1.08,
            ageStructure: { young: 24, productive: 69, elderly: 7 },
            urbanizationRate: 46.2,
            workforce: 4780000
        },
        ekonomi: {
            gdp: 680.0,
            gdpPerCapita: 72.2,
            gdpGrowthRate: 5.48,
            mainSectors: ["Hub Maritim & Perdagangan Indonesia Timur", "Pertanian Padi & Jagung (Lumbung Pangan)", "Smelter Nikel Bantaeng & Luwu Timur", "Pariwisata Budaya Tana Toraja"],
            inflation: 2.1,
            foreignInvestment: 2100,
            exportValue: 3400
        },
        pendidikan: {
            ipm: 74.32,
            literacyRate: 98.9,
            higherEducationRatio: 33.2,
            digitalTalentIndex: 79.5,
            totalSchools: 11200,
            totalUniversities: 88
        },
        infrastruktur: {
            roadNetworkKm: 32500,
            tollRoadKm: 22,
            portsCount: 16,
            airportsCount: 6,
            internetPenetration: 83.2,
            electricityCapacityMW: 2150,
            renewableEnergyShare: 43.5,
            palapaRingConnected: true,
            smartCityScore: 84.8
        },
        lingkungan: {
            forestCoverHa: 2100000,
            forestPercentage: 45.0,
            carbonEmission: 22.0,
            carbonAbsorption: 26.5,
            aqiCurrent: 36,
            disasterRiskScore: 62.0,
            renewablePotential: { solar: 7200, hydro: 3900, geothermal: 850, wind: 2400 }
        },
        telemetry: {
            airQuality: "Baik (36 AQI)",
            temperature: "30.2°C",
            seismicStatus: "Normal Terpantau",
            floodRisk: "DAS Jeneberang Terpantau Aman",
            trafficStatus: "Makassar New Port Beroperasi Normal (68%)",
            gridLoad: "75%"
        },
        strategicProjects: ["Makassar New Port (MNP) Hub Transshipment", "Kereta Api Trans Sulawesi Makassar-Parepare", "Kawasan Industri Bantaeng (KIBA)"]
    },
    {
        id: "ID-SG",
        name: "Sulawesi Tenggara",
        capital: "Kendari",
        island: "Sulawesi",
        lat: -4.1449,
        lng: 122.1746,
        establishedYear: 1964,
        populasi: {
            total: 2780000,
            density: 73,
            growthRate: 1.55,
            ageStructure: { young: 26, productive: 68, elderly: 6 },
            urbanizationRate: 35.8,
            workforce: 1420000
        },
        ekonomi: {
            gdp: 185.0,
            gdpPerCapita: 66.5,
            gdpGrowthRate: 7.25,
            mainSectors: ["Smelter Nikel (VDNI Morosi & Konawe)", "Pertambangan Aspal Buton", "Pariwisata Bahari Wakatobi", "Perikanan & Kakao"],
            inflation: 2.3,
            foreignInvestment: 3200,
            exportValue: 6200
        },
        pendidikan: {
            ipm: 72.85,
            literacyRate: 98.4,
            higherEducationRatio: 28.6,
            digitalTalentIndex: 71.0,
            totalSchools: 3800,
            totalUniversities: 24
        },
        infrastruktur: {
            roadNetworkKm: 14800,
            tollRoadKm: 0,
            portsCount: 18,
            airportsCount: 5,
            internetPenetration: 77.0,
            electricityCapacityMW: 1600,
            renewableEnergyShare: 18.2,
            palapaRingConnected: true,
            smartCityScore: 74.0
        },
        lingkungan: {
            forestCoverHa: 2350000,
            forestPercentage: 61.8,
            carbonEmission: 28.5,
            carbonAbsorption: 31.0,
            aqiCurrent: 44,
            disasterRiskScore: 58.0,
            renewablePotential: { solar: 4800, hydro: 1400, geothermal: 650, wind: 380 }
        },
        telemetry: {
            airQuality: "Sedang (44 AQI)",
            temperature: "29.8°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (22% utilitas)",
            gridLoad: "74%"
        },
        strategicProjects: ["Kawasan Industri Konawe Smelter Nikel", "Optimalisasi Aspal Buton Jalan Nasional", "Cagar Biosfer Dunia Wakatobi"]
    },

    // === MALUKU & PAPUA ===
    {
        id: "ID-MA",
        name: "Maluku",
        capital: "Ambon",
        island: "Maluku",
        lat: -3.2385,
        lng: 130.1453,
        establishedYear: 1958,
        populasi: {
            total: 1920000,
            density: 41,
            growthRate: 1.25,
            ageStructure: { young: 28, productive: 65, elderly: 7 },
            urbanizationRate: 38.0,
            workforce: 950000
        },
        ekonomi: {
            gdp: 62.0,
            gdpPerCapita: 32.3,
            gdpGrowthRate: 5.12,
            mainSectors: ["Lumbung Ikan Nasional (Tuna, Cakalang, Udang)", "Rempah-Rempah (Pala & Cengkeh)", "Gas Alam Blok Masela", "Pariwisata Bahari Banda Neira"],
            inflation: 2.4,
            foreignInvestment: 1800,
            exportValue: 240
        },
        pendidikan: {
            ipm: 71.30,
            literacyRate: 98.8,
            higherEducationRatio: 29.5,
            digitalTalentIndex: 69.0,
            totalSchools: 2800,
            totalUniversities: 18
        },
        infrastruktur: {
            roadNetworkKm: 9200,
            tollRoadKm: 0,
            portsCount: 28,
            airportsCount: 11,
            internetPenetration: 72.5,
            electricityCapacityMW: 340,
            renewableEnergyShare: 28.5,
            palapaRingConnected: true,
            smartCityScore: 71.8
        },
        lingkungan: {
            forestCoverHa: 3600000,
            forestPercentage: 77.0,
            carbonEmission: 4.2,
            carbonAbsorption: 38.0,
            aqiCurrent: 15,
            disasterRiskScore: 75.0,
            renewablePotential: { solar: 4200, hydro: 650, geothermal: 850, wind: 820 }
        },
        telemetry: {
            airQuality: "Sangat Murni (15 AQI)",
            temperature: "28.1°C",
            seismicStatus: "Aktivitas Seismik Palung Banda Terpantau",
            floodRisk: "Rendah",
            trafficStatus: "Jembatan Merah Putih Ambon Beroperasi Lancar",
            gridLoad: "55%"
        },
        strategicProjects: ["Proyek Gas Abadi Blok Masela", "Program Maluku Lumbung Ikan Nasional (LIN)", "Pelabuhan Ambon New Port"]
    },
    {
        id: "ID-MU",
        name: "Maluku Utara",
        capital: "Sofifi (Ternate)",
        island: "Maluku",
        lat: 1.5709,
        lng: 127.8088,
        establishedYear: 1999,
        populasi: {
            total: 1350000,
            density: 42,
            growthRate: 1.72,
            ageStructure: { young: 27, productive: 67, elderly: 6 },
            urbanizationRate: 31.0,
            workforce: 680000
        },
        ekonomi: {
            gdp: 120.0,
            gdpPerCapita: 88.9,
            gdpGrowthRate: 18.50,
            mainSectors: ["Hilirisasi Nikel & Baterai (IWIP Weda Bay, Harita Obi)", "Pertambangan Emas (Gosowong)", "Rempah Cengkeh & Pala Ternate", "Perikanan Tangkap"],
            inflation: 2.2,
            foreignInvestment: 6500,
            exportValue: 9800
        },
        pendidikan: {
            ipm: 70.98,
            literacyRate: 98.4,
            higherEducationRatio: 26.0,
            digitalTalentIndex: 67.5,
            totalSchools: 2100,
            totalUniversities: 14
        },
        infrastruktur: {
            roadNetworkKm: 7400,
            tollRoadKm: 0,
            portsCount: 22,
            airportsCount: 8,
            internetPenetration: 73.0,
            electricityCapacityMW: 2600,
            renewableEnergyShare: 16.5,
            palapaRingConnected: true,
            smartCityScore: 70.5
        },
        lingkungan: {
            forestCoverHa: 2450000,
            forestPercentage: 76.5,
            carbonEmission: 29.0,
            carbonAbsorption: 26.0,
            aqiCurrent: 38,
            disasterRiskScore: 76.0,
            renewablePotential: { solar: 3100, hydro: 420, geothermal: 920, wind: 480 }
        },
        telemetry: {
            airQuality: "Baik (38 AQI)",
            temperature: "28.9°C",
            seismicStatus: "Gunung Ibu & Dukono Status Waspada Erupsi",
            floodRisk: "Rendah",
            trafficStatus: "Padat Kawasan Industri Weda Bay (IWIP)",
            gridLoad: "86%"
        },
        strategicProjects: ["Kawasan Industri Weda Bay Industrial Park (IWIP)", "Kawasan Industri Pulau Obi (Harita Nickel)", "Ibukota Sofifi Smart Administrative Center"]
    },
    {
        id: "ID-PB",
        name: "Papua Barat",
        capital: "Manokwari",
        island: "Papua",
        lat: -1.3361,
        lng: 133.1747,
        establishedYear: 1999,
        populasi: {
            total: 580000,
            density: 9,
            growthRate: 1.48,
            ageStructure: { young: 29, productive: 66, elderly: 5 },
            urbanizationRate: 34.5,
            workforce: 290000
        },
        ekonomi: {
            gdp: 98.0,
            gdpPerCapita: 169.0,
            gdpGrowthRate: 4.90,
            mainSectors: ["Gas Alam Cair Tangguh LNG (Teluk Bintuni)", "Perikanan & Konservasi Laut Teluk Cenderawasih", "Perkebunan Kelapa Sawit & Pala Fakfak", "Industri Kayu & Kehutanan"],
            inflation: 2.1,
            foreignInvestment: 2400,
            exportValue: 3800
        },
        pendidikan: {
            ipm: 67.50,
            literacyRate: 95.8,
            higherEducationRatio: 22.0,
            digitalTalentIndex: 63.8,
            totalSchools: 1250,
            totalUniversities: 8
        },
        infrastruktur: {
            roadNetworkKm: 5800,
            tollRoadKm: 0,
            portsCount: 8,
            airportsCount: 6,
            internetPenetration: 69.5,
            electricityCapacityMW: 480,
            renewableEnergyShare: 32.0,
            palapaRingConnected: true,
            smartCityScore: 68.0
        },
        lingkungan: {
            forestCoverHa: 5200000,
            forestPercentage: 86.4,
            carbonEmission: 12.0,
            carbonAbsorption: 68.0,
            aqiCurrent: 14,
            disasterRiskScore: 62.0,
            renewablePotential: { solar: 4800, hydro: 3800, geothermal: 250, wind: 320 }
        },
        telemetry: {
            airQuality: "Sangat Murni (14 AQI)",
            temperature: "27.6°C",
            seismicStatus: "Aman Terpantau",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (9% utilitas)",
            gridLoad: "53%"
        },
        strategicProjects: ["Kilang Tangguh LNG Train 3 Teluk Bintuni", "Kawasan Industri Petrokimia Pupuk Fakfak", "Provinsi Konservasi Teluk Cenderawasih"]
    },
    {
        id: "ID-PD",
        name: "Papua Barat Daya",
        capital: "Sorong",
        island: "Papua",
        lat: -0.8762,
        lng: 131.2558,
        establishedYear: 2022,
        populasi: {
            total: 620000,
            density: 16,
            growthRate: 1.65,
            ageStructure: { young: 28, productive: 67, elderly: 5 },
            urbanizationRate: 48.0,
            workforce: 315000
        },
        ekonomi: {
            gdp: 54.0,
            gdpPerCapita: 87.1,
            gdpGrowthRate: 5.60,
            mainSectors: ["Pariwisata Dunia Raja Ampat", "Hub Minyak & Gas Sorong", "Perikanan Tangkap & Budidaya Mutiara", "Logistik Pintu Masuk Papua"],
            inflation: 2.3,
            foreignInvestment: 650,
            exportValue: 890
        },
        pendidikan: {
            ipm: 68.20,
            literacyRate: 96.5,
            higherEducationRatio: 24.5,
            digitalTalentIndex: 67.0,
            totalSchools: 1100,
            totalUniversities: 10
        },
        infrastruktur: {
            roadNetworkKm: 4600,
            tollRoadKm: 0,
            portsCount: 10,
            airportsCount: 5,
            internetPenetration: 74.2,
            electricityCapacityMW: 260,
            renewableEnergyShare: 28.0,
            palapaRingConnected: true,
            smartCityScore: 71.2
        },
        lingkungan: {
            forestCoverHa: 3100000,
            forestPercentage: 82.5,
            carbonEmission: 4.8,
            carbonAbsorption: 42.0,
            aqiCurrent: 12,
            disasterRiskScore: 54.0,
            renewablePotential: { solar: 3400, hydro: 1800, geothermal: 180, wind: 450 }
        },
        telemetry: {
            airQuality: "Sangat Murni (12 AQI)",
            temperature: "28.0°C",
            seismicStatus: "Aman Stabil",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (20% utilitas pelabuhan Sorong)",
            gridLoad: "58%"
        },
        strategicProjects: ["KEK Sorong Terpadu", "Wisata Berkelanjutan Raja Ampat", "Pusat Riset Keanekaragaman Hayati Laut Wallacea"]
    },
    {
        id: "ID-PA",
        name: "Papua",
        capital: "Jayapura",
        island: "Papua",
        lat: -2.5916,
        lng: 140.6690,
        establishedYear: 1963,
        populasi: {
            total: 1080000,
            density: 13,
            growthRate: 1.42,
            ageStructure: { young: 28, productive: 67, elderly: 5 },
            urbanizationRate: 46.5,
            workforce: 540000
        },
        ekonomi: {
            gdp: 92.0,
            gdpPerCapita: 85.2,
            gdpGrowthRate: 5.15,
            mainSectors: ["Perdagangan & Jasa Kota Jayapura", "Perikanan Laut Pasifik & Danau Sentani", "Pertanian Kakao & Kopi", "Perbatasan Lintas Negara PNG"],
            inflation: 2.2,
            foreignInvestment: 420,
            exportValue: 650
        },
        pendidikan: {
            ipm: 71.85,
            literacyRate: 96.9,
            higherEducationRatio: 28.0,
            digitalTalentIndex: 72.0,
            totalSchools: 1850,
            totalUniversities: 18
        },
        infrastruktur: {
            roadNetworkKm: 8400,
            tollRoadKm: 0,
            portsCount: 8,
            airportsCount: 8,
            internetPenetration: 77.8,
            electricityCapacityMW: 380,
            renewableEnergyShare: 36.5,
            palapaRingConnected: true,
            smartCityScore: 75.0
        },
        lingkungan: {
            forestCoverHa: 6800000,
            forestPercentage: 84.0,
            carbonEmission: 5.8,
            carbonAbsorption: 88.0,
            aqiCurrent: 14,
            disasterRiskScore: 68.0,
            renewablePotential: { solar: 6500, hydro: 9500, geothermal: 350, wind: 400 }
        },
        telemetry: {
            airQuality: "Sangat Murni (14 AQI)",
            temperature: "28.2°C",
            seismicStatus: "Normal Terpantau BMKG Jayapura",
            floodRisk: "Rendah",
            trafficStatus: "Jembatan Youtefa Beroperasi Ramai Lancar",
            gridLoad: "61%"
        },
        strategicProjects: ["Jembatan Youtefa & Waterfront City Jayapura", "PLBN Skouw Perbatasan RI-PNG", "Kawasan Antariksa Biak Island"]
    },
    {
        id: "ID-PS",
        name: "Papua Selatan",
        capital: "Salor / Merauke",
        island: "Papua",
        lat: -7.5000,
        lng: 139.5000,
        establishedYear: 2022,
        populasi: {
            total: 530000,
            density: 4,
            growthRate: 1.30,
            ageStructure: { young: 29, productive: 65, elderly: 6 },
            urbanizationRate: 28.0,
            workforce: 270000
        },
        ekonomi: {
            gdp: 45.0,
            gdpPerCapita: 84.9,
            gdpGrowthRate: 5.80,
            mainSectors: ["Lumbung Pangan Padi Nasional (Merauke Food Estate)", "Perkebunan Tebu & Bioetanol", "Perikanan Laut Arafura", "Peternakan Sapi Terbuka"],
            inflation: 2.3,
            foreignInvestment: 1200,
            exportValue: 310
        },
        pendidikan: {
            ipm: 65.40,
            literacyRate: 94.2,
            higherEducationRatio: 19.8,
            digitalTalentIndex: 61.2,
            totalSchools: 980,
            totalUniversities: 6
        },
        infrastruktur: {
            roadNetworkKm: 4200,
            tollRoadKm: 0,
            portsCount: 6,
            airportsCount: 6,
            internetPenetration: 66.0,
            electricityCapacityMW: 180,
            renewableEnergyShare: 24.0,
            palapaRingConnected: true,
            smartCityScore: 66.5
        },
        lingkungan: {
            forestCoverHa: 9200000,
            forestPercentage: 78.5,
            carbonEmission: 4.1,
            carbonAbsorption: 95.0,
            aqiCurrent: 11,
            disasterRiskScore: 35.0,
            renewablePotential: { solar: 9200, hydro: 1200, geothermal: 0, wind: 850 }
        },
        telemetry: {
            airQuality: "Sangat Murni (11 AQI)",
            temperature: "29.4°C",
            seismicStatus: "Sangat Stabil Bebas Gempa",
            floodRisk: "Rendah",
            trafficStatus: "Lancar (6% utilitas)",
            gridLoad: "46%"
        },
        strategicProjects: ["Mega Food Estate Padi 1 Juta Hektar Merauke", "Kawasan Terpadu Tebu & Pabrik Bioetanol", "PLBN Sota Modern"]
    },
    {
        id: "ID-PT",
        name: "Papua Tengah",
        capital: "Nabire",
        island: "Papua",
        lat: -3.8000,
        lng: 136.5000,
        establishedYear: 2022,
        populasi: {
            total: 1430000,
            density: 22,
            growthRate: 1.52,
            ageStructure: { young: 31, productive: 64, elderly: 5 },
            urbanizationRate: 24.0,
            workforce: 710000
        },
        ekonomi: {
            gdp: 185.0,
            gdpPerCapita: 129.4,
            gdpGrowthRate: 6.90,
            mainSectors: ["Tambang Emas & Tembaga PT Freeport Indonesia (Grasberg)", "Perikanan Teluk Cenderawasih Nabire", "Pertanian Kopi Arabika Moanemani", "Kehutanan"],
            inflation: 2.4,
            foreignInvestment: 3800,
            exportValue: 6800
        },
        pendidikan: {
            ipm: 60.20,
            literacyRate: 88.5,
            higherEducationRatio: 17.5,
            digitalTalentIndex: 58.0,
            totalSchools: 1400,
            totalUniversities: 8
        },
        infrastruktur: {
            roadNetworkKm: 5100,
            tollRoadKm: 0,
            portsCount: 4,
            airportsCount: 12,
            internetPenetration: 64.5,
            electricityCapacityMW: 650,
            renewableEnergyShare: 25.0,
            palapaRingConnected: true,
            smartCityScore: 67.0
        },
        lingkungan: {
            forestCoverHa: 5800000,
            forestPercentage: 88.0,
            carbonEmission: 16.5,
            carbonAbsorption: 76.0,
            aqiCurrent: 15,
            disasterRiskScore: 72.0,
            renewablePotential: { solar: 4500, hydro: 6800, geothermal: 280, wind: 350 }
        },
        telemetry: {
            airQuality: "Sangat Murni (15 AQI)",
            temperature: "24.5°C (Pegunungan Sejuk)",
            seismicStatus: "Waspada Patahan Pegunungan Tengah",
            floodRisk: "Rendah",
            trafficStatus: "Operasional Tambang Freeport & Bandara Timika Optimal",
            gridLoad: "71%"
        },
        strategicProjects: ["Underground Mining Terbesar Dunia Grasberg Block Cave", "Bandara Baru Nabire & Ibukota Baru", "Sentra Kopi Arabika Moanemani"]
    },
    {
        id: "ID-PE",
        name: "Papua Pegunungan",
        capital: "Wamena (Jayawijaya)",
        island: "Papua",
        lat: -4.1000,
        lng: 138.9000,
        establishedYear: 2022,
        populasi: {
            total: 1450000,
            density: 28,
            growthRate: 1.48,
            ageStructure: { young: 32, productive: 63, elderly: 5 },
            urbanizationRate: 18.5,
            workforce: 720000
        },
        ekonomi: {
            gdp: 38.0,
            gdpPerCapita: 26.2,
            gdpGrowthRate: 4.80,
            mainSectors: ["Pertanian Sayur & Buah Dataran Tinggi Lembah Baliem", "Kopi Arabika Wamena Kelas Dunia", "Pariwisata Budaya Festival Lembah Baliem", "Peternakan Babi & Lebah Madu"],
            inflation: 2.8,
            foreignInvestment: 80,
            exportValue: 45
        },
        pendidikan: {
            ipm: 54.85,
            literacyRate: 82.0,
            higherEducationRatio: 14.2,
            digitalTalentIndex: 52.0,
            totalSchools: 1150,
            totalUniversities: 6
        },
        infrastruktur: {
            roadNetworkKm: 3800,
            tollRoadKm: 0,
            portsCount: 0,
            airportsCount: 18,
            internetPenetration: 58.0,
            electricityCapacityMW: 120,
            renewableEnergyShare: 42.0,
            palapaRingConnected: true,
            smartCityScore: 62.0
        },
        lingkungan: {
            forestCoverHa: 4600000,
            forestPercentage: 90.2,
            carbonEmission: 1.8,
            carbonAbsorption: 62.0,
            aqiCurrent: 9,
            disasterRiskScore: 68.0,
            renewablePotential: { solar: 3200, hydro: 5400, geothermal: 120, wind: 280 }
        },
        telemetry: {
            airQuality: "Paling Murni Nasional (9 AQI)",
            temperature: "18.2°C (Dataran Tinggi Dingin)",
            seismicStatus: "Aktivitas Seismik Minor Terpantau",
            floodRisk: "Rendah",
            trafficStatus: "Jembatan Udara Logistik Wamena Beroperasi Maksimal",
            gridLoad: "42%"
        },
        strategicProjects: ["Trans Papua Ruas Wamena - Jayapura", "Jembatan Udara Subsidi Tol Udara Kemenhub", "Pusat Hilirisasi & Sertifikasi Organik Kopi Wamena"]
    }
];

// Infrastructure & GIS Telemetry Network Data
const GIS_LAYERS_DATA = {
    // Jalur Kabel Serat Optik Palapa Ring
    palapaRingNodes: [
        { name: "Hub Jakarta", coords: [-6.2088, 106.8456], type: "Major Hub" },
        { name: "Hub Medan", coords: [3.5952, 98.6722], type: "West Gateway" },
        { name: "Hub Batam", coords: [1.1301, 104.0529], type: "International Gateway" },
        { name: "Hub Surabaya", coords: [-7.2575, 112.7521], type: "Major Hub" },
        { name: "Hub Denpasar", coords: [-8.6705, 115.2126], type: "Regional Hub" },
        { name: "Hub Balikpapan / IKN", coords: [-1.2379, 116.8529], type: "Core Hub" },
        { name: "Hub Makassar", coords: [-5.1477, 119.4327], type: "East Gateway" },
        { name: "Hub Manado", coords: [1.4748, 124.8428], type: "Pacific Gateway" },
        { name: "Hub Ambon", coords: [-3.6547, 128.1906], type: "Regional Hub" },
        { name: "Hub Sorong", coords: [-0.8762, 131.2558], type: "Papua Gateway" },
        { name: "Hub Jayapura", coords: [-2.5916, 140.6690], type: "Border Gateway" },
        { name: "Hub Kupang", coords: [-10.1772, 123.6070], type: "South Gateway" }
    ],
    palapaRingCables: [
        // Rute Barat
        [ [3.5952, 98.6722], [1.1301, 104.0529] ],
        [ [1.1301, 104.0529], [-6.2088, 106.8456] ],
        // Rute Jawa - Bali - Nusa Tenggara
        [ [-6.2088, 106.8456], [-7.2575, 112.7521] ],
        [ [-7.2575, 112.7521], [-8.6705, 115.2126] ],
        [ [-8.6705, 115.2126], [-10.1772, 123.6070] ],
        // Rute Kalimantan - IKN - Sulawesi
        [ [-6.2088, 106.8456], [-1.2379, 116.8529] ],
        [ [-1.2379, 116.8529], [-5.1477, 119.4327] ],
        [ [-5.1477, 119.4327], [1.4748, 124.8428] ],
        // Rute Maluku & Papua
        [ [-5.1477, 119.4327], [-3.6547, 128.1906] ],
        [ [1.4748, 124.8428], [-0.8762, 131.2558] ],
        [ [-3.6547, 128.1906], [-0.8762, 131.2558] ],
        [ [-0.8762, 131.2558], [-2.5916, 140.6690] ],
        [ [-10.1772, 123.6070], [-3.6547, 128.1906] ]
    ],
    // Jalur Maritim Tol Laut
    maritimeRoutes: [
        [ [-6.1000, 106.8800], [-7.2000, 112.7300] ], // Tanjung Priok - Tanjung Perak
        [ [-7.2000, 112.7300], [-5.1200, 119.4000] ], // Tanjung Perak - Makassar
        [ [-5.1200, 119.4000], [1.4500, 125.1800] ],  // Makassar - Bitung
        [ [-5.1200, 119.4000], [-3.7000, 128.1800] ], // Makassar - Ambon
        [ [-3.7000, 128.1800], [-0.8800, 131.2500] ], // Ambon - Sorong
        [ [-0.8800, 131.2500], [-2.5300, 140.7000] ], // Sorong - Jayapura
        [ [-7.2000, 112.7300], [-10.1800, 123.5800] ], // Tanjung Perak - Kupang
        [ [-6.1000, 106.8800], [3.8000, 98.7000] ]    // Tanjung Priok - Belawan
    ],
    // Pembangkit Listrik Energi Terbarukan Unggulan (EBT)
    renewablePlants: [
        { name: "PLTS Terapung Cirata (192 MWp)", coords: [-6.7025, 107.3625], type: "Solar Terapung", capacity: "192 MWp", province: "Jawa Barat" },
        { name: "PLTB Sidrap Kebun Angin (75 MW)", coords: [-3.8821, 119.8241], type: "Tenaga Angin", capacity: "75 MW", province: "Sulawesi Selatan" },
        { name: "PLTP Sarulla Geothermal (330 MW)", coords: [1.9056, 99.0345], type: "Panas Bumi", capacity: "330 MW", province: "Sumatera Utara" },
        { name: "PLTA Poso Energy (515 MW)", coords: [-1.7820, 120.6540], type: "Tenaga Air", capacity: "515 MW", province: "Sulawesi Tengah" },
        { name: "PLTP Wayang Windu (227 MW)", coords: [-7.2056, 107.6321], type: "Panas Bumi", capacity: "227 MW", province: "Jawa Barat" },
        { name: "PLTA Asahan I & II (600 MW)", coords: [2.5401, 99.2514], type: "Tenaga Air", capacity: "600 MW", province: "Sumatera Utara" },
        { name: "PLTS IKN Nusantara Smart (50 MW)", coords: [-0.9634, 116.7118], type: "Smart Solar Grid", capacity: "50 MW", province: "Kalimantan Timur" },
        { name: "PLTA Kayan Cascade (9.000 MW Mega Plan)", coords: [2.8500, 116.1200], type: "Mega Hydro", capacity: "9.000 MW", province: "Kalimantan Utara" }
    ]
};

// Helper Functions
function getProvinceById(id) {
    return PROVINCES_DATA.find(p => p.id === id);
}

function getProvincesByIsland(island) {
    if (!island || island === "Semua") return PROVINCES_DATA;
    return PROVINCES_DATA.filter(p => p.island.toLowerCase().includes(island.toLowerCase()));
}
