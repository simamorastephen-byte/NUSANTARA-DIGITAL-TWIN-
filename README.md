# 🌐 Nusantara Digital Twin Platform (Indonesia 2045)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Web GIS](https://img.shields.io/badge/Platform-Leaflet%20GIS%20%7C%20Chart.js-00f3ff.svg)](index.html)
[![Scope: 38 Provinces](https://img.shields.io/badge/Coverage-38%20Provinces%20Indonesia-10b981.svg)](docs/DATA_DICTIONARY.md)
[![Engineering: IT Del](https://img.shields.io/badge/Institution-Institut%20Teknologi%20Del-f59e0b.svg)](https://www.del.ac.id)

Platform Website Simulasi, Telemetri Geospasial, dan Analisis Kebijakan Interaktif Seluruh 38 Provinsi di Indonesia menuju Visi Indonesia Emas 2045 dengan antarmuka futuristik berkonsep *Cyber Command Center HUD*.

---

## 📚 Indeks Dokumentasi Lengkap

| Dokumen | Deskripsi | Tautan |
|---|---|---|
| 🏗️ **Arsitektur Sistem** | Desain modular client-side, state flow, lifecycle chart, dan performa | [ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| 📖 **Kamus Data** | Skema 38 provinsi, 5 choropleth, layer Palapa Ring, Tol Laut, & EBT | [DATA_DICTIONARY.md](docs/DATA_DICTIONARY.md) |
| 🧪 **Model Simulasi** | Model ekonometrika What-If Sandbox 2045 & AI Diagnostic Engine | [SIMULATION_MODEL.md](docs/SIMULATION_MODEL.md) |
| 📘 **Panduan Pengguna** | Manual pengoperasian command center, komparasi, dan pintasan keyboard | [USER_GUIDE.md](docs/USER_GUIDE.md) |
| 🔌 **API & Telemetri** | Integrasi Web Audio API synthesizer, sensor IoT, & ekspor data | [API_AND_INTEGRATION.md](docs/API_AND_INTEGRATION.md) |
| 🤝 **Panduan Kontribusi** | Standar kualitas kode, konvensi commit, dan checklist pengujian | [CONTRIBUTING.md](docs/CONTRIBUTING.md) |
| 🤖 **AI Agent Standards** | Panduan operasional agen AI & instruksi teknis repositori | [AGENTS.md](AGENTS.md) |

---

## 🚀 Fitur Unggulan

### 1. 🗺️ Peta Interaktif GIS & Choropleth Multi-Dimensi (38 Provinsi)
- Visualisasi batas wilayah seluruh 38 provinsi di Indonesia berbasis Leaflet GIS dengan **basemap global Esri World Dark Gray & World Reference** (bebas watermark 'API Key Required', cakupan dunia penuh tanpa batas).
- **5 Mode Heatmap / Choropleth**:
  - 🎓 **Indeks Pembangunan Manusia (IPM)**
  - 📈 **PDRB Daerah (Ekonomi)**
  - 👥 **Kepadatan Penduduk (Jiwa/km²)**
  - 🌿 **Tutupan Hutan & Lingkungan Hijau (%)**
  - ⚡ **Kesiapan Digital & Smart City Index**
- **Layer Telemetri Strategis**:
  - 🌐 **Palapa Ring**: Jalur kabel serat optik bawah laut dan hub gateway nasional.
  - 🚢 **Tol Laut**: Rute pelayaran maritim logistik antar pulau.
  - ⚡ **Pembangkit Listrik EBT**: Peta titik PLTS Terapung, Panas Bumi (Geothermal), PLTA, dan Kebun Angin (PLTB).
  - 🏛️ **IKN Nusantara Halo**: Beacon pusat gravitasi Ibukota Nusantara (Smart Forest City).

### 2. 📊 Dossier Analisis Provinsi Komprehensif
Saat provinsi diklik pada peta atau direktori, memunculkan inspektor panel dengan 7 tab analisis:
- 📑 **Ringkasan**: 4 KPI Utama, Radar Chart 5 Pilar Pembangunan, Proyek Strategis Daerah.
- 👥 **Demografi**: Total populasi, angkatan kerja, tingkat urbanisasi, dan diagram struktur usia (Doughnut Chart).
- 📈 **Ekonomi**: PDRB Nominal, PDRB per kapita, laju pertumbuhan, investasi asing (PMA), nilai ekspor, dan diagram kontribusi sektor (Bar Chart).
- 🎓 **Pendidikan & SDM**: IPM, skor talenta digital & kesiapan AI, angka melek huruf, rasio pendidikan tinggi, jumlah sekolah dan kampus.
- ⚡ **Infrastruktur**: Penetrasi internet & 5G, kapasitas pembangkit listrik (MW), bauran EBT %, panjang jalan & tol, pelabuhan dan bandara.
- 🌿 **Lingkungan**: Luas tutupan hutan (Ha), kualitas udara (AQI), emisi vs serapan karbon alami, potensi energi terbarukan (Surya, Hidro, Geothermal, Angin).
- 📡 **IoT Live**: Telemetri sensor real-time, beban grid listrik dengan grafik fluktuasi *sparkline*, pemantauan seismik BMKG (gempa/vulkanik), sensor muka air DAS, dan arus logistik.
- 🖨️ **Cetak & Ekspor PDF**: Tombol cepat untuk mencetak lembar dossier profil provinsi berformat laporan resmi eksekutif.

### 3. 🧪 Mesin Simulasi "What-If" (Indonesia Emas 2045 Sandbox)
- **Dukungan Lingkup Ganda**:
  - 🌏 **Level Nasional**: Proyeksi agregat ekonomi dan pembangunan Indonesia.
  - 🏛️ **Level Provinsi Terpilih**: Menghitung sensitivitas pertumbuhan khusus provinsi yang sedang diinspeksi.
- **Slider Kebijakan Interaktif**:
  - *Akselerasi Transisi EBT (Energi Bersih)*
  - *Investasi Talenta Digital, AI & Riset Pendidikan*
  - *Pembangunan Infrastruktur & Smart Logistics*
  - *Target Reforestasi & Konservasi Lahan Gambut*
  - *Akselerasi Integrasi IKN Nusantara*
- **Skenario Preset**: *Status Quo*, *⭐ Indonesia Emas 2045 (Optimal)*, *🌿 Super Green 2050 (Net-Zero)*, dan *⚡ High-Tech AI Hub*.
- Kalkulasi dinamis: laju PDB/PDRB, PDB per kapita USD, peningkatan IPM, bauran energi hijau, tahun estimasi Net-Zero Emission, penurunan angka kemiskinan (`simPovertyRate`), serta **Nusantara AI Executive Diagnostic**.

### 4. ⚖️ Komparasi Daerah & Analisis Delta (+/- %)
- Memilih 2 provinsi untuk dibandingkan langsung secara visual melalui Radar Chart multi-dimensi.
- **Tabel Delta Keunggulan**: Dilengkapi badge pemenang dan selisih persentase keuntungan tiap indikator.
- **Tombol Pintas Komparasi Populer**: *DKI vs IKN, Jabar vs Jatim, Bali vs NTB, Sumut vs Sulsel*.
- **Ekspor Komparasi**: Salin dan cetak tabel perbandingan.

### 5. 🚀 Mode Presentasi Kiosk (Auto-Tour)
- Tur otomatis yang memutar kamera peta menjelajahi provinsi dari Sabang sampai Merauke secara bergantian dengan visualisasi telemetri berdenyut.
- Kontrol lengkap: *Pause / Lanjut, Next, Stop*.

### 6. 📥 Ekspor Dataset 38 Provinsi
- Unduh basis data 38 provinsi ke format **CSV / Excel Spreadsheet** atau **JSON Object** untuk kebutuhan analisis data riset/skripsi.

### 7. ⌨️ Pintasan Keyboard (Shortcuts)
- `/` atau `Ctrl+K`: Fokus ke pencarian provinsi
- `Esc`: Menutup semua modal / tour aktif
- `Space`: Jeda (Pause) / Lanjut Auto Tour
- `M`: Mute / Unmute Efek Suara Cyber
- `?`: Buka panduan bantuan

---

## 📂 Struktur Berkas Proyek

```
indonesia digital/
├── .agents/                    # Konfigurasi agen AI, rules, dan skills
│   ├── rules/
│   │   └── coding-standards.md # Standar kode ES6+, Leaflet & CSS
│   └── skills/
│       └── nusantara-engine/   # Prosedur operasional dataset & simulasi
│           └── SKILL.md
├── docs/                       # Dokumentasi arsitektur, data, & panduan
│   ├── ARCHITECTURE.md         # Desain sistem & diagram data flow
│   ├── DATA_DICTIONARY.md      # Skema master 38 provinsi & layer telemetri
│   ├── SIMULATION_MODEL.md     # Model matematika & elastisitas What-If Sandbox
│   ├── USER_GUIDE.md           # Panduan lengkap pengguna & shortcuts
│   ├── API_AND_INTEGRATION.md  # Subsistem audio, export, & integrasi IoT
│   └── CONTRIBUTING.md         # Panduan kontribusi kode
├── css/
│   └── style.css               # Design system Cyber HUD Glassmorphism & responsive CSS
├── js/
│   ├── data.js                 # Dataset master 38 provinsi & layer telemetri GIS
│   ├── geojson.js              # Poligon koordinat batas wilayah 38 provinsi
│   ├── charts.js               # Visualisasi grafik Chart.js (Radar, Bar, Doughnut, Sparkline)
│   ├── simulation.js           # Mesin kalkulasi What-If 2045 & AI Diagnostic Engine
│   ├── map.js                  # Peta Leaflet GIS, choropleth 5 mode, layer switchers
│   └── app.js                  # State orchestrator, UI events, audio synthesizer, exports
├── index.html                  # Struktur semantik Command Center DOM
├── package.json                # Metadata & skrip utilitas npm
├── .editorconfig               # Standar formatting kode
├── .gitignore                  # Berkas yang diabaikan git
├── LICENSE                     # Lisensi MIT
├── README.md                   # Dokumentasi publik proyek
└── AGENTS.md                   # Panduan operasional AI agent
```

---

## 💻 Cara Menjalankan

Buka file `index.html` langsung di peramban web modern (Google Chrome, Microsoft Edge, Firefox) atau jalankan melalui dev server lokal:

```bash
# Menggunakan npm:
npm start

# Atau menggunakan Python:
python -m http.server 8080
```
Buka `http://localhost:8080` pada browser Anda.
