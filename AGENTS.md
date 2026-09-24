# 🤖 Nusantara Digital Twin - AI Agent Guidelines & Engineering Standards

Dokumen instruksi operasional untuk AI Agent (Antigravity, Claude, Copilot, Gemini) yang bekerja di repositori **Nusantara Digital Twin (Indonesia 2045)**.

---

## 🎯 Identitas & Visi Proyek

- **Nama Proyek**: Nusantara Digital Twin (Indonesia 2045)
- **Institusi**: Institut Teknologi Del (IT Del) / Laguboti, Toba
- **Domain**: Geospasial GIS, Smart Governance, Econometric Simulation Sandbox, Live Telemetry Dashboard.
- **Tujuan**: Menyajikan platform visualisasi 38 provinsi di Indonesia yang memadukan data riil dan proyeksi ilmiah menuju Indonesia Emas 2045 dengan antarmuka futuristik *Cyber Command Center HUD*.

---

## 🏛️ Arsitektur Proyek & File Map

```
indonesia digital/
├── .agents/                    # Konfigurasi agen AI, rules, dan skills
│   ├── rules/                  # Aturan penulisan kode, arsitektur, dan performa
│   └── skills/                 # Prosedur operasional modul Nusantara Digital Twin
├── docs/                       # Dokumentasi arsitektur, data, simulasi & panduan
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
└── AGENTS.md                   # Panduan operasional AI agent (berkas ini)
```

---

## 📐 Aturan & Prinsip Rekayasa untuk Agen AI

### 1. Pertahankan Kemurnian Vanilla Stack (No Unnecessary Heavy Frameworks)
- Seluruh fitur UI dibangun dengan **HTML5 Semantik**, **Vanilla CSS3**, dan **Modular ES6+ JavaScript**.
- Jangan menambahkan framework berat seperti React/Vue/Angular atau bundler webpack/vite tanpa instruksi eksplisit dari pengguna.
- Pustaka pihak ketiga yang diizinkan hanya Leaflet GIS (CDN) dan Chart.js (CDN).

### 2. Manajemen Memori & Chart Lifecycle
- Selalu hancurkan instans Chart.js sebelum inisialisasi ulang (`if (chartInstance) chartInstance.destroy();`).
- Hindari pembuatan event listener berulang tanpa unbind/cleanup.

### 3. Preservasi Konsistensi Data 38 Provinsi
- Saat menambahkan field baru pada `PROVINCES_DATA` di `js/data.js`, pastikan seluruh 38 provinsi mendapatkan field yang sama dengan nilai baseline yang realistis dan terkalibrasi.
- Selalu sinkronkan perubahan data dengan `docs/DATA_DICTIONARY.md`.

### 4. Audio FX Berbasis Web Audio API
- Jangan menyertakan tautan file MP3/WAV eksternal. Gunakan sintesis frekuensi matematis pada modul audio `app.js`.

### 5. Komunikasi & Tanggapan
- Bersikap profesional, ringkas, dan fokus pada solusi rekayasa kelas industri.
- Selalu cantumkan tautan markdown GitHub (`[nama_file](file:///path)`) saat menyebutkan berkas.
