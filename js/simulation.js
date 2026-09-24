/**
 * NUSANTARA DIGITAL TWIN - WHAT-IF SIMULATION ENGINE
 * Mesin simulasi proyeksi masa depan Indonesia (Visi Indonesia Emas 2045)
 */

class SimulationEngine {
    constructor() {
        this.baseYear = 2025;
        this.targetYear = 2045;
        this.params = {
            greenEnergyBoost: 25,     // % tambahan bauran EBT
            digitalBudgetBoost: 30,    // % kenaikan investasi riset, AI & pendidikan digital
            infraInvestmentBoost: 20,  // % percepatan infrastruktur logistik & smart city
            reforestationTargetHa: 5,  // Juta Hektar reforestasi baru
            iknAcceleration: 40        // % akselerasi integrasi smart capital IKN
        };

        this.presets = {
            statusQuo: {
                name: "Business as Usual",
                greenEnergyBoost: 5,
                digitalBudgetBoost: 10,
                infraInvestmentBoost: 10,
                reforestationTargetHa: 1,
                iknAcceleration: 20,
                desc: "Pertumbuhan moderat mengikuti tren historis saat ini."
            },
            indonesiaEmas2045: {
                name: "Indonesia Emas 2045 (Optimal)",
                greenEnergyBoost: 45,
                digitalBudgetBoost: 50,
                infraInvestmentBoost: 35,
                reforestationTargetHa: 8,
                iknAcceleration: 60,
                desc: "Skenario percepatan transformasi ekonomi, pendidikan, infrastruktur, dan hilirisasi terintegrasi."
            },
            netZero2050: {
                name: "Nusantara Super Green (Net-Zero)",
                greenEnergyBoost: 80,
                digitalBudgetBoost: 35,
                infraInvestmentBoost: 25,
                reforestationTargetHa: 15,
                iknAcceleration: 50,
                desc: "Prioritas dekarbonisasi agresif, restorasi gambut & percepatan transisi energi terbarukan."
            },
            digitalHub: {
                name: "High-Tech AI & Digital Powerhouse",
                greenEnergyBoost: 35,
                digitalBudgetBoost: 85,
                infraInvestmentBoost: 50,
                reforestationTargetHa: 4,
                iknAcceleration: 75,
                desc: "Fokus pada digitalisasi total, talenta AI, semikonduktor, data center, dan smart city."
            }
        };
    }

    setParam(key, value) {
        if (this.params.hasOwnProperty(key)) {
            this.params[key] = parseFloat(value);
        }
    }

    setTargetYear(year) {
        this.targetYear = parseInt(year);
    }

    applyPreset(presetKey) {
        const preset = this.presets[presetKey];
        if (preset) {
            this.params.greenEnergyBoost = preset.greenEnergyBoost;
            this.params.digitalBudgetBoost = preset.digitalBudgetBoost;
            this.params.infraInvestmentBoost = preset.infraInvestmentBoost;
            this.params.reforestationTargetHa = preset.reforestationTargetHa;
            this.params.iknAcceleration = preset.iknAcceleration;
            return preset;
        }
        return null;
    }

    /**
     * Menghitung dampak simulasi pada level nasional
     */
    runNationalSimulation() {
        const yearsSpan = Math.max(1, this.targetYear - this.baseYear);
        const factor = yearsSpan / 20.0; // Normalisasi terhadap rentang 20 tahun (2025-2045)

        // Baseline 2025
        const baseGdp = INDONESIA_NATIONAL_DATA.nationalGDP; // 22,150 T
        const baseIpm = INDONESIA_NATIONAL_DATA.averageHDI; // 74.39
        const baseRenewable = INDONESIA_NATIONAL_DATA.renewableEnergyShare; // 14.8%
        const baseForest = INDONESIA_NATIONAL_DATA.forestCoverTotalHa / 1000000; // 95.3 Juta Ha
        const basePoverty = 8.5; // % kemiskinan nasional 2024/2025

        // Multiplier Dampak
        // 1. PDRB (GDP)
        const gdpAnnualGrowth = 5.0 + 
            (this.params.infraInvestmentBoost * 0.025) + 
            (this.params.digitalBudgetBoost * 0.035) + 
            (this.params.greenEnergyBoost * 0.015) +
            (this.params.iknAcceleration * 0.012);
        
        const projectedGdp = baseGdp * Math.pow(1 + (gdpAnnualGrowth / 100), yearsSpan);
        const projectedGdpPerCapitaUSD = (projectedGdp * 1000000000000 / (281600000 * Math.pow(1.008, yearsSpan))) / 16200;

        // 2. Indeks Pembangunan Manusia (IPM)
        const ipmGrowth = (
            (this.params.digitalBudgetBoost * 0.09) + 
            (this.params.infraInvestmentBoost * 0.04) + 
            (this.params.greenEnergyBoost * 0.02)
        ) * factor;
        const projectedIpm = Math.min(94.5, baseIpm + ipmGrowth);

        // 3. Bauran Energi Terbarukan
        const renewableGrowth = (this.params.greenEnergyBoost * 0.75) * factor;
        const projectedRenewable = Math.min(95.0, baseRenewable + renewableGrowth);

        // 4. Tutupan Hutan & Emisi
        const projectedForestHa = baseForest + (this.params.reforestationTargetHa * factor);
        const netZeroEstimatedYear = Math.max(2035, Math.round(2060 - (this.params.greenEnergyBoost * 0.25) - (this.params.reforestationTargetHa * 0.8)));

        // 5. Penurunan Kemiskinan
        const povertyDrop = ((this.params.digitalBudgetBoost * 0.04) + (this.params.infraInvestmentBoost * 0.05)) * factor;
        const projectedPoverty = Math.max(1.5, basePoverty - povertyDrop);

        // 6. Digital Readiness Index
        const digitalIndex = Math.min(98.0, 72.0 + (this.params.digitalBudgetBoost * 0.3) * factor);

        return {
            targetYear: this.targetYear,
            yearsSpan: yearsSpan,
            gdpAnnualGrowthRate: gdpAnnualGrowth.toFixed(2),
            projectedGdpTrillionRp: Math.round(projectedGdp).toLocaleString('id-ID'),
            projectedGdpPerCapitaUSD: Math.round(projectedGdpPerCapitaUSD).toLocaleString('id-ID'),
            projectedIpm: projectedIpm.toFixed(2),
            projectedRenewableShare: projectedRenewable.toFixed(1),
            projectedForestMillionHa: projectedForestHa.toFixed(1),
            netZeroYear: netZeroEstimatedYear,
            projectedPovertyRate: projectedPoverty.toFixed(2),
            digitalReadinessIndex: digitalIndex.toFixed(1),
            highIncomeStatus: projectedGdpPerCapitaUSD >= 13845 ? "Negara Berpenghasilan Tinggi (Maju)" : "Negara Menengah Atas (Upper-Middle)",
            aiTakeaways: this.generateAiDiagnostic(projectedGdpPerCapitaUSD, projectedRenewable, projectedIpm, netZeroEstimatedYear)
        };
    }

    /**
     * Menghitung proyeksi khusus untuk provinsi yang dipilih
     */
    runProvinceSimulation(province) {
        if (!province) return null;

        const yearsSpan = Math.max(1, this.targetYear - this.baseYear);
        const factor = yearsSpan / 20.0;

        // Sensitivitas berdasarkan karakteristik daerah
        const isResourceRich = ["Kalimantan Timur", "Riau", "Sulawesi Tengah", "Maluku Utara", "Papua Tengah"].includes(province.name);
        const isTechHub = ["DKI Jakarta", "Jawa Barat", "DI Yogyakarta", "Bali", "Kepulauan Riau"].includes(province.name);

        let boostMultiplier = 1.0;
        if (isResourceRich) boostMultiplier += (this.params.greenEnergyBoost * 0.005);
        if (isTechHub) boostMultiplier += (this.params.digitalBudgetBoost * 0.008);
        if (province.island === "Kalimantan") boostMultiplier += (this.params.iknAcceleration * 0.006);

        const annualGrowth = (province.ekonomi.gdpGrowthRate + (this.params.infraInvestmentBoost * 0.03 * boostMultiplier)).toFixed(2);
        const projectedGdp = (province.ekonomi.gdp * Math.pow(1 + (annualGrowth / 100), yearsSpan)).toFixed(1);
        
        const ipmGain = ((this.params.digitalBudgetBoost * 0.08) + (this.params.infraInvestmentBoost * 0.03)) * factor;
        const projectedIpm = Math.min(96.0, (province.pendidikan.ipm + ipmGain)).toFixed(2);

        const renewableGain = (this.params.greenEnergyBoost * 0.65) * factor;
        const projectedRenewable = Math.min(98.0, (province.infrastruktur.renewableEnergyShare + renewableGain)).toFixed(1);

        const smartCityScoreGain = ((this.params.digitalBudgetBoost * 0.15) + (this.params.infraInvestmentBoost * 0.12)) * factor;
        const projectedSmartCity = Math.min(99.0, (province.infrastruktur.smartCityScore + smartCityScoreGain)).toFixed(1);

        return {
            provinceId: province.id,
            provinceName: province.name,
            targetYear: this.targetYear,
            annualGrowthRate: annualGrowth,
            currentGdp: province.ekonomi.gdp,
            projectedGdp: projectedGdp,
            currentIpm: province.pendidikan.ipm,
            projectedIpm: projectedIpm,
            currentRenewable: province.infrastruktur.renewableEnergyShare,
            projectedRenewable: projectedRenewable,
            projectedSmartCity: projectedSmartCity
        };
    }

    generateAiDiagnostic(gdpPerCapitaUSD, renewableShare, ipm, netZeroYear) {
        const insights = [];

        if (gdpPerCapitaUSD >= 13845) {
            insights.push("🚀 Indonesia berhasil menembus perangkap pendapatan menengah (Middle-Income Trap) sebelum tahun 2045.");
        } else {
            insights.push("⚠️ Pertumbuhan saat ini mendekati ambang batas negara maju, disarankan meningkatkan akselerasi investasi digital & riset.");
        }

        if (renewableShare >= 50) {
            insights.push(`🌿 Sektor energi mengalami dekarbonisasi masif dengan Net-Zero Emission tercapai lebih cepat pada tahun ${netZeroYear}.`);
        } else {
            insights.push(`⚡ Transisi energi berjalan stabil, dengan target bauran EBT mencapai ${renewableShare.toFixed(1)}% pada tahun ${this.targetYear}.`);
        }

        if (ipm >= 80) {
            insights.push("🎓 Kualitas SDM nasional masuk kategori 'Sangat Tinggi' dengan adopsi talenta digital dan AI secara merata.");
        }

        return insights;
    }
}

// Global instance
const simulator = new SimulationEngine();
