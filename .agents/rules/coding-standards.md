# Standar Penulisan Kode (Coding Standards) - Nusantara Digital Twin

Aturan rekayasa perangkat lunak untuk pemeliharaan dan ekspansi kode di repositori **Nusantara Digital Twin**:

## 1. JavaScript (ES6+ Modular)
- **Struktur Berkas**: Tetap pisahkan logika berdasarkan domain:
  - `data.js`: Master baseline dataset & koordinat GIS.
  - `geojson.js`: Poligon batas spasial 38 provinsi.
  - `charts.js`: Factory visualisasi grafik Chart.js.
  - `simulation.js`: Logika ekonometrika What-If 2045 Sandbox.
  - `map.js`: Leaflet GIS map controller & choropleth rendering.
  - `app.js`: State manager, audio FX, timezones, dan DOM event coordinator.
- **Pembersihan Canvas**: Setiap kali merender ulang Chart.js, selalu destroy instans yang sedang aktif untuk menghindari kebocoran memori (memory leak).
- **Audio Synthesizer**: Hindari penggunaan berkas audio eksternal (`.mp3`/`.wav`). Gunakan Web Audio API oscillator bawaan browser.

## 2. CSS & Design System
- **Tema Utama**: *Cybernetic Dark Command Center HUD* (`#050811`, `#0d1424`), efek *glassmorphism* (`backdrop-filter: blur(12px)`), dan aksen neon (*Cyan* `#00f3ff`, *Emerald* `#10b981`, *Amber* `#f59e0b`, *Purple* `#a855f7`).
- **Tipografi**: Gunakan Google Fonts (`Inter`, `Rajdhani`, `Share Tech Mono`).
- **Responsivitas**: Desain harus responsif di semua ukuran layar (Desktop >1200px, Laptop 1024px, Tablet 768px, Mobile <600px).

## 3. Basemap & GIS Tiles
- Gunakan basemap raster/vektor global bebas watermark dan tanpa batasan API key (seperti Esri World Dark Gray Base + World Reference Overlay).
- Dukung penjelajahan peta dunia secara utuh tanpa pemotongan area (`minZoom: 2`, `worldCopyJump: true`).
