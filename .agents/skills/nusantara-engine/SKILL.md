---
name: nusantara-engine
description: Prosedur operasional, kalibrasi data 38 provinsi, layer GIS, dan mesin simulasi What-If Indonesia 2045.
---

# Nusantara Engine Skill Guide

Gunakan skill ini untuk mengelola, mengembangkan, dan memodifikasi komponen teknis platform **Nusantara Digital Twin**.

## 1. Modifikasi Data Provinsi (`js/data.js`)
Setiap provinsi dalam array `PROVINCES_DATA` memiliki skema terstruktur:
- `populasi`: `{ total, density, growthRate, ageStructure, urbanizationRate, workforce }`
- `ekonomi`: `{ gdp, gdpPerCapita, gdpGrowthRate, mainSectors, inflation, foreignInvestment, exportValue }`
- `pendidikan`: `{ ipm, literacyRate, higherEducationRatio, digitalTalentIndex, totalSchools, totalUniversities }`
- `infrastruktur`: `{ roadNetworkKm, tollRoadKm, portsCount, airportsCount, internetPenetration, electricityCapacityMW, renewableEnergyShare, palapaRingConnected, smartCityScore }`
- `lingkungan`: `{ forestCoverHa, forestPercentage, carbonEmission, carbonAbsorption, aqiCurrent, disasterRiskScore, renewablePotential }`
- `telemetry`: `{ airQuality, gridLoad, sparkline, seismicStatus, waterLevelStatus, logisticsStatus }`

## 2. Pengelolaan Peta GIS Leaflet (`js/map.js`)
- Basemap: Menggunakan **Esri World Dark Gray Base** dan **World Dark Gray Reference** untuk peta dunia lengkap tanpa watermark 'API Key Required'.
- Choropleth: Mendukung 5 mode metrik (`ipm`, `pdrb`, `kepadatan`, `lingkungan`, `digital`) dengan palet warna terkalibrasi di `CHOROPLETH_PALETTES`.
- Layers: `palapaRingLayerGroup`, `maritimeRoutesLayerGroup`, `renewablePlantsLayerGroup`, `iknHighlightLayer`.

## 3. Mesin Simulasi What-If 2045 (`js/simulation.js`)
- Parameter: `greenEnergyBoost`, `digitalBudgetBoost`, `infraInvestmentBoost`, `reforestationTargetHa`, `iknAcceleration`.
- Presets: `statusQuo`, `indonesiaEmas2045`, `netZero2050`, `digitalHub`.
- Kalkulasi: Laju PDB riil, PDB per kapita USD, proyeksi IPM, bauran energi hijau, tahun Net-Zero, dan generator diagnosis naratif eksekutif.
