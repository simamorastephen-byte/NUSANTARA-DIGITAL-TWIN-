# 🧪 Model Matematis & Ekonometrika Simulasi (What-If 2045 Sandbox)

Dokumen ini menjelaskan model matematis, fungsi elastisitas, koefisien sensitivitas kebijakan, dan logika diagnostik AI yang tersemat pada `js/simulation.js`.

---

## 1. Parameter Input Kebijakan

Pengguna dapat memodulasi 5 variabel kebijakan interaktif:

| Parameter | Simbol / Variabel | Rentang Nilai | Dampak Langsung |
|---|---|---|---|
| **Akselerasi Transisi EBT** | $P_{green}$ | $0\% - 100\%$ | Bauran EBT, Tahun Net-Zero, Serapan Emisi |
| **Investasi Riset & Talenta Digital** | $P_{digital}$ | $0\% - 100\%$ | Pertumbuhan PDB, IPM, Skor Talenta Digital |
| **Pembangunan Infrastruktur Logistik** | $P_{infra}$ | $0\% - 100\%$ | Penurunan Biaya Logistik, Pertumbuhan PDB, Aksesibilitas |
| **Target Reforestasi Lahan** | $P_{forest}$ | $0 - 25\text{ Juta Ha}$ | Tutupan Hutan, Serapan Karbon Alam |
| **Akselerasi Integrasi IKN** | $P_{ikn}$ | $0\% - 100\%$ | Desentralisasi Ekonomi, PDRB Luar Jawa, Pemerataan |

---

## 2. Rumus Proyeksi Makroekonomi Nasional

Simulasi menghitung selang waktu proyeksi:
$$\Delta t = \max(1, \text{TargetYear} - 2025)$$
Faktor normalisasi 20 tahun:
$$\lambda = \frac{\Delta t}{20.0}$$

### 2.1. Laju Pertumbuhan PDB Riil Tahunan ($g$)
$$g = 5.0\% + (P_{infra} \times 0.025) + (P_{digital} \times 0.035) + (P_{green} \times 0.015) + (P_{ikn} \times 0.012)$$

- **PDB Proyeksi Nominal**:
  $$\text{GDP}_{target} = \text{GDP}_{2025} \times (1 + g)^{\Delta t}$$
- **PDB per Kapita (USD)**:
  $$\text{Pop}_{target} = \text{Pop}_{2025} \times (1.008)^{\Delta t}$$
  $$\text{GDP per Kapita (USD)} = \frac{\text{GDP}_{target} \times 10^{12}}{\text{Pop}_{target} \times 16.200}$$

### 2.2. Proyeksi Indeks Pembangunan Manusia ($\text{IPM}$)
$$\Delta\text{IPM} = \left( (P_{digital} \times 0.09) + (P_{infra} \times 0.04) + (P_{green} \times 0.02) \right) \times \lambda$$
$$\text{IPM}_{target} = \min(94.5, \; \text{IPM}_{2025} + \Delta\text{IPM})$$

### 2.3. Bauran Energi Terbarukan & Dekarbonisasi
$$\text{EBT}_{target} = \min(95.0\%, \; \text{EBT}_{2025} + (P_{green} \times 0.75 \times \lambda))$$
$$\text{Tahun Net-Zero} = \max(2040, \; \text{round}(2065 - (P_{green} \times 0.25) - (P_{forest} \times 0.5)))$$

### 2.4. Tingkat Kemiskinan Nasional
$$\Delta\text{Poverty} = \left( (P_{digital} \times 0.04) + (P_{infra} \times 0.04) + (P_{ikn} \times 0.02) \right) \times \lambda$$
$$\text{Poverty}_{target} = \max(1.8\%, \; \text{Poverty}_{2025} - \Delta\text{Poverty})$$

---

## 3. Sensitivitas Spesifik Level Provinsi

Ketika pengguna mengaktifkan simulasi pada provinsi tertentu (e.g. *Aceh, Papua, Jawa Timur, IKN*), mesin menerapkan pengali adaptif berdasarkan profil geografis:

```javascript
// Contoh: Bobot IKN & Luar Jawa mendapat pengali percepatan integrasi wilayah
let iknFactor = 1.0;
if (province.island === "Kalimantan") iknFactor = 1.45;
else if (province.island === "Sulawesi" || province.island === "Papua") iknFactor = 1.25;

const provGdpGrowth = baseGrowth + (this.params.iknAcceleration * 0.015 * iknFactor);
```

---

## 4. Mesin Diagnostik AI Eksekutif (*Nusantara AI Diagnostic*)

Mesin menghasilkan sintesis naratif otomatis dalam 3 level status:

1. **🚀 Status Optimum (High-Growth Tier)**:
   - Tercapai jika $g \ge 6.8\%$ dan $\text{EBT} \ge 40\%$.
   - Output: Analisis kualitatif mengenai lompatan *High-Income Country* dan kepemimpinan regional ASEAN.
2. **⚖️ Status Seimbang (Sustainable Transition Tier)**:
   - Tercapai jika $g \ge 5.5\%$ dengan kemajuan moderat pada dekarbonisasi.
   - Output: Rekomendasi akselerasi hilirisasi industri semi-konduktor & penguatan *Venture Capital* domestik.
3. **⚠️ Status Peringatan (Under-investment Alert)**:
   - Muncul jika $g < 5.5\%$ atau target Net-Zero melampaui 2060.
   - Output: Peringatan risiko *Middle-Income Trap* dan saran intervensi belanja modal publik.
