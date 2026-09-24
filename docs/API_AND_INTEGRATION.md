# 🔌 Integrasi API, Telemetri, & Web Audio Subsystem

Dokumen ini menjelaskan antarmuka program, struktur integrasi data eksternal, dan subsistem audio pada **Nusantara Digital Twin**.

---

## 1. Web Audio API Subsystem

Platform menggunakan Web Audio API tanpa dependensi berkas suara biner (`.mp3` / `.wav`), sehingga menjamin beban muat instan dan zero latency.

### 1.1. Inisialisasi Audio Context
```javascript
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
```

### 1.2. Sound Event Generators (`app.js`)
- `playCyberBeep(frequency = 880, duration = 0.08, type = 'sine')`: Suara klik HUD halus saat navigasi tombol atau seleksi provinsi.
- `playChimeSound()`: Sintesis 2-tone frekuensi tinggi (587Hz -> 880Hz) saat modal simulasi atau komparasi dibuka.
- `playAlertBeep()`: Nada frekuensi persegi (Square wave) bernada rendah saat terjadi peringatan ekonometrika.

---

## 2. Struktur Ekspor Data (CSV & JSON)

### 2.1. Ekspor JSON Raw Data
Fungsi `exportDatabaseAsJSON()` mengekstrak array `PROVINCES_DATA` yang diformat dengan indentasi rapi (`JSON.stringify(data, null, 2)`), disajikan melalui object URL `Blob` tipe `application/json`.

### 2.2. Ekspor CSV Spreadsheet
Fungsi `exportDatabaseAsCSV()` meratakan (*flatten*) struktur objek nested:
- Menambahkan **UTF-8 Byte Order Mark (`\uFEFF`)** di awal berkas agar Microsoft Excel mendeteksi format UTF-8 secara otomatis.
- Memisahkan kolom dengan delimiter koma (`,`) standar dan membungkus teks dengan tanda kutip ganda (`"`).

---

## 3. Integrasi Live IoT Feed (Ekstensi Masa Depan)

Untuk menghubungkan platform dengan sensor IoT hardware (e.g. ESP32, MQTT Broker BMKG, atau REST API PLN):

```javascript
// Contoh pola integrasi polling / WebSocket:
async function fetchLiveProvinceTelemetry(provinceId) {
    try {
        const response = await fetch(`https://api.domain.ac.id/telemetry/${provinceId}`);
        const data = await response.json();
        
        // Update model data provinsi
        const target = PROVINCES_DATA.find(p => p.id === provinceId);
        if (target && data.sparkline) {
            target.telemetry.sparkline = data.sparkline;
            target.telemetry.airQuality = data.airQuality;
            // Render ulang dossier panel
            window.NusantaraApp.renderDossier(target);
        }
    } catch (err) {
        console.warn("Sensor telemetry offline, menggunakan fallback baseline data.", err);
    }
}
```
