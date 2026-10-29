/* ==========================================================================
   CCIT Arena Studio — Bank Soal & Pembahasan Lengkap (Bagian 2: Sub-Materi C & D)
   - Sub-Materi C: Mekanisme dan Proses Teknologi (20 Soal + Pembahasan Mendalam)
   - Sub-Materi D: Sejarah Jaringan Komputer (20 Soal + Pembahasan Mendalam)
   ========================================================================== */

QUIZ_QUESTIONS.push(
  /* ========================================================================
     SUB-MATERI C: MEKANISME DAN PROSES TEKNOLOGI (20 SOAL: q-sub-c-1 s/d q-sub-c-20)
     ======================================================================== */
  {
    id: "q-sub-c-1",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 1,
    title: "Konsep Dasar Arsitektur Klien-Server",
    prompt: `<p>Dalam mekanisme kerja jaringan komputer berarsitektur <strong>Klien-Server (<em>Client-Server</em>)</strong>, bagaimana pola interaksi komunikasi yang terjadi saat seorang pengguna membuka situs web menggunakan peramban (<em>browser</em>)?</p>`,
    options: [
      { key: "a", text: "Komputer Klien mengirimkan permintaan (Request) layanan, lalu komputer Server memproses dan mengirimkan balasan (Response)" },
      { key: "b", text: "Komputer Server meminta izin terlebih dahulu kepada Klien sebelum menyalakan monitor" },
      { key: "c", text: "Klien dan Server tidak pernah saling mengirim paket data melalui jaringan" },
      { key: "d", text: "Komputer Klien bertugas menyimpan seluruh basis data pusat milik semua pengguna di dunia" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Klien mengirim Request, Server memproses dan mengirim Response)</h4>
        <p>Prinsip utama arsitektur <strong>Client-Server</strong> adalah model <em>Request–Response</em>:
        <br/>• <strong>Klien (Client):</strong> Perangkat pengguna (browser/aplikasi) yang meminta layanan atau data (<em>Request</em>).
        <br/>• <strong>Server (Peladen):</strong> Komputer pusat yang mengolah permintaan tersebut dan mengirimkan hasilnya kembali ke klien (<em>Response</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-2",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 2,
    title: "Perbedaan Jaringan Client-Server dan Peer-to-Peer (P2P)",
    prompt: `<p>Berbeda dengan model <em>Client-Server</em> yang memiliki satu komputer pusat peladen, pada jaringan <strong>Peer-to-Peer (P2P)</strong> kedudukan setiap komputer yang terhubung adalah...</p>`,
    options: [
      { key: "a", text: "Setara, di mana setiap komputer dapat berperan sebagai Klien sekaligus Server bagi komputer lainnya" },
      { key: "b", text: "Hanya bisa menerima data tetapi tidak bisa mengirim data sama sekali" },
      { key: "c", text: "Wajib dikendalikan oleh satu mainframe militer di luar angkasa" },
      { key: "d", text: "Tidak membutuhkan kartu jaringan (NIC) maupun media transmisi" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Setara, setiap komputer dapat berperan sebagai Klien sekaligus Server)</h4>
        <p>Dalam arsitektur <strong>Peer-to-Peer (P2P)</strong>, tidak ada server khusus yang terpusat. Setiap <em>node</em> (komputer) memiliki hak yang sederajat untuk meminta file/layanan (sebagai klien) maupun membagikan sumber daya seperti file/printer kepada komputer lain (sebagai server).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-3",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 3,
    title: "Urutan Jenis Jaringan Berdasarkan Jangkauan Geografis",
    prompt: `<p>Jika diurutkan dari cakupan wilayah yang <strong>paling kecil (sempit) hingga paling luas (global)</strong>, urutan jenis jaringan komputer yang benar adalah...</p>`,
    options: [
      { key: "a", text: "WAN → MAN → LAN → PAN" },
      { key: "b", text: "PAN → LAN → MAN → WAN" },
      { key: "c", text: "LAN → PAN → WAN → MAN" },
      { key: "d", text: "MAN → WAN → PAN → LAN" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (PAN → LAN → MAN → WAN)</h4>
        <p>Gunakan jembatan keledai <strong>P – L – M – W</strong>:
        <br/>1) <strong>PAN (<em>Personal Area Network</em>):</strong> ±1–10 meter (Bluetooth/Tethering).
        <br/>2) <strong>LAN (<em>Local Area Network</em>):</strong> Satu ruangan, lab sekolah, atau gedung kantor.
        <br/>3) <strong>MAN (<em>Metropolitan Area Network</em>):</strong> Antar gedung dalam satu kota (10–50 km).
        <br/>4) <strong>WAN (<em>Wide Area Network</em>):</strong> Antar negara/benua (contoh terbesarnya: Internet).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-4",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 4,
    title: "Penerapan Jaringan LAN (Local Area Network)",
    prompt: `<p>Sebuah sekolah membangun jaringan komputer yang menghubungkan 40 unit PC di ruang laboratorium komputer dengan 1 komputer server sekolah menggunakan <strong>Switch</strong> dan kabel <strong>UTP RJ-45</strong>. Jenis jaringan yang diterapkan sekolah tersebut adalah...</p>`,
    options: [
      { key: "a", text: "LAN (Local Area Network)" },
      { key: "b", text: "WAN (Wide Area Network)" },
      { key: "c", text: "MAN (Metropolitan Area Network)" },
      { key: "d", text: "Interplanetary Network" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (LAN - Local Area Network)</h4>
        <p><strong>LAN (<em>Local Area Network</em>)</strong> adalah jaringan komputer yang mencakup area lokal terbatas seperti satu ruangan laboratorium, sekolah, rumah, atau satu gedung perkantoran.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-5",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 5,
    title: "Perbedaan Fungsi Perangkat Switch dan Router",
    prompt: `<p>Dalam perangkat keras jaringan komputer, apakah perbedaan fungsi utama antara <strong>Switch</strong> dan <strong>Router</strong>?</p>`,
    options: [
      { key: "a", text: "Switch menghubungkan banyak komputer di dalam satu jaringan lokal (LAN) yang sama, sedangkan Router menghubungkan dua atau lebih jaringan yang berbeda dan menentukan rute paket data" },
      { key: "b", text: "Switch berfungsi mencetak dokumen kertas, sedangkan Router berfungsi memindai sidik jari" },
      { key: "c", text: "Switch hanya bisa bekerja tanpa listrik, sedangkan Router menggunakan tenaga uap" },
      { key: "d", text: "Switch dan Router adalah nama bahasa pemrograman untuk membuat animasi" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Switch menghubungkan perangkat dalam satu LAN, Router menghubungkan jaringan berbeda)</h4>
        <p>• <strong>Switch</strong> bekerja pada Layer 2 (Data Link) menggunakan <em>MAC Address</em> untuk menghubungkan perangkat di dalam satu jaringan <strong>LAN</strong> yang sama.<br/>• <strong>Router</strong> bekerja pada Layer 3 (Network) menggunakan <em>IP Address</em> untuk menghubungkan jaringan yang berbeda (misal menghubungkan LAN sekolah ke jaringan WAN/Internet) dan memilihkan jalur terbaik (<em>routing</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-6",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 6,
    title: "Istilah Plaintext dan Ciphertext dalam Kriptografi",
    prompt: `<p>Dalam mekanisme kriptografi dan keamanan data, pesan atau informasi asli yang masih dapat dibaca secara langsung sebelum disandikan disebut <strong>(1) ...</strong>, sedangkan teks acak hasil proses enkripsi disebut <strong>(2) ...</strong></p>`,
    options: [
      { key: "a", text: "(1) Plaintext dan (2) Ciphertext" },
      { key: "b", text: "(1) Ciphertext dan (2) Plaintext" },
      { key: "c", text: "(1) Hypertext dan (2) Teletext" },
      { key: "d", text: "(1) Malware dan (2) Spyware" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A ((1) Plaintext dan (2) Ciphertext)</h4>
        <p>Ingat rumus dasar kriptografi <strong>P → E → C → D</strong>:
        <br/>• <strong>Plaintext:</strong> Pesan asli yang terbaca jelas.
        <br/>• <strong>Encryption (Enkripsi):</strong> Proses mengacak Plaintext menggunakan kunci.
        <br/>• <strong>Ciphertext:</strong> Pesan tersandi/acak hasil enkripsi.
        <br/>• <strong>Decryption (Dekripsi):</strong> Proses mengembalikan Ciphertext menjadi Plaintext semula.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-7",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 7,
    title: "Pengertian Proses Enkripsi dan Dekripsi",
    prompt: `<p>Ketika sebuah aplikasi pesan instan memiliki fitur <strong>End-to-End Encryption (E2EE)</strong>, proses mengubah kembali kode acak (<em>Ciphertext</em>) yang diterima di smartphone tujuan agar menjadi pesan asli (<em>Plaintext</em>) yang bisa dibaca oleh penerima disebut...</p>`,
    options: [
      { key: "a", text: "Dekripsi (Decryption)" },
      { key: "b", text: "Kompilasi (Compilation)" },
      { key: "c", text: "Fragmentasi (Fragmentation)" },
      { key: "d", text: "Instalasi (Installation)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Dekripsi / Decryption)</h4>
        <p>Pada <em>End-to-End Encryption</em>, perangkat pengirim melakukan <strong>Enkripsi</strong> (Plaintext → Ciphertext), lalu hanya perangkat penerima yang memiliki kunci rahasia untuk melakukan <strong>Dekripsi</strong> (Ciphertext → Plaintext).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-8",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 8,
    title: "Kriptografi Kunci Simetris (Symmetric Encryption)",
    prompt: `<p>Metode enkripsi yang menggunakan <strong>satu kunci rahasia yang sama persis</strong> baik untuk melakukan proses enkripsi maupun proses dekripsi—seperti algoritma <strong>AES (<em>Advanced Encryption Standard</em>)</strong>—disebut...</p>`,
    options: [
      { key: "a", text: "Enkripsi Simetris (Symmetric Key Cryptography)" },
      { key: "b", text: "Enkripsi Asimetris (Public Key Cryptography)" },
      { key: "c", text: "Topologi Ring" },
      { key: "d", text: "Unencrypted Broadcast" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Enkripsi Simetris / Symmetric Key Cryptography)</h4>
        <p><strong>Kriptografi Simetris</strong> (seperti <strong>AES, DES, 3DES, Blowfish</strong>) menggunakan <strong>1 kunci yang sama</strong> untuk mengunci (enkripsi) dan membuka (dekripsi) data. Kelebihannya adalah kecepatan komputasi yang sangat tinggi.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-9",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 9,
    title: "Kriptografi Kunci Asimetris (Public Key & Private Key)",
    prompt: `<p>Dalam sistem <strong>Kriptografi Asimetris</strong> (seperti algoritma <strong>RSA</strong>), setiap pengguna memiliki sepasang kunci berbeda yaitu <em>Public Key</em> dan <em>Private Key</em>. Jika Budi ingin mengirim pesan rahasia kepada Siti, kunci manakah yang digunakan Budi untuk mengenkripsi dan kunci mana yang dipakai Siti untuk mendekripsi?</p>`,
    options: [
      { key: "a", text: "Budi mengenkripsi dengan Public Key milik Siti, lalu Siti mendekripsi dengan Private Key rahasia milik Siti sendiri" },
      { key: "b", text: "Budi dan Siti menebak pesan tanpa menggunakan kunci apa pun" },
      { key: "c", text: "Siti membagikan Private Key rahasianya ke seluruh papan pengumuman publik" },
      { key: "d", text: "Pesan tidak pernah bisa didekripsi kembali oleh siapa pun" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Enkripsi dengan Public Key penerima, Dekripsi dengan Private Key penerima)</h4>
        <p>Dalam <strong>Kriptografi Asimetris</strong>:
        <br/>• <strong>Public Key (Kunci Publik)</strong> milik Siti bersifat terbuka untuk umum sehingga Budi dapat menggunakannya untuk mengenkripsi pesan.
        <br/>• Begitu pesan terkunci dengan Public Key Siti, hanya <strong>Private Key (Kunci Privat)</strong> yang disimpan rahasia oleh Siti sendiri yang sanggup membuka (mendekripsi) pesan tersebut!</p>
      </div>
    `
  },
  {
    id: "q-sub-c-10",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 10,
    title: "Fungsi Cryptographic Hashing (Satu Arah)",
    prompt: `<p>Mengapa sistem basis data situs web yang aman menggunakan algoritma <strong>Hashing satu arah</strong> (seperti <strong>SHA-256</strong> atau <strong>bcrypt</strong>) saat menyimpan password pengguna di dalam server?</p>`,
    options: [
      { key: "a", text: "Karena nilai Hash bersifat satu arah (tidak bisa didekripsi balik menjadi password asli), sehingga jika database bocor, password asli pengguna tetap terlindungi" },
      { key: "b", text: "Agar password pengguna dapat ditampilkan secara terbuka di halaman depan situs" },
      { key: "c", text: "Karena Hashing menghapus seluruh isi harddisk setiap 10 detik" },
      { key: "d", text: "Agar ukuran monitor komputer menjadi lebih lebar" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Hash bersifat satu arah / one-way sehingga tidak bisa didekripsi balik)</h4>
        <p>Berbeda dengan enkripsi yang dirancang untuk didekripsi kembali, <strong>Cryptographic Hash Function (SHA-256, bcrypt, Argon2)</strong> bersifat <strong>satu arah (<em>one-way</em>)</strong>. Saat pengguna login, sistem cukup melakukan hash pada password yang diketik lalu mencocokkannya dengan nilai hash di database tanpa perlu menyimpan password asli.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-11",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 11,
    title: "Fungsi Utama Firewall dalam Keamanan Jaringan",
    prompt: `<p>Apa fungsi utama dari pemasangan sistem keamanan <strong>Firewall</strong> di antara jaringan lokal internal perusahaan (LAN) dan jaringan publik eksternal (Internet)?</p>`,
    options: [
      { key: "a", text: "Memantau, menyaring (filtering), dan mengontrol lalu lintas paket data yang masuk maupun keluar berdasarkan aturan keamanan untuk mencegah akses ilegal" },
      { key: "b", text: "Memadamkan api fisik apabila terjadi kebakaran di ruang dapur kantor" },
      { key: "c", text: "Menambah kapasitas RAM komputer dari 8 GB menjadi 64 GB secara fisik" },
      { key: "d", text: "Mengubah layar monitor hitam putih menjadi layar sentuh berwarna" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Memantau, menyaring, dan mengontrol lalu lintas paket data)</h4>
        <p><strong>Firewall</strong> bertindak sebagai gerbang keamanan (pos pemeriksaan paket data) yang mengecek setiap paket yang masuk (<em>Inbound</em>) dan keluar (<em>Outbound</em>) berdasarkan aturan <strong>IP Address, Nomor Port, dan Protokol</strong>. Paket yang sah diizinkan lewat (<em>Allow</em>), sedangkan paket serangan diblokir (<em>Block/Drop</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-12",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 12,
    title: "Parameter Pemeriksaan Packet Filtering Firewall",
    prompt: `<p>Saat sebuah <strong>Packet Filtering Firewall</strong> memeriksa paket data yang melintas di gerbang jaringan, informasi apa saja pada kepala paket (<em>Packet Header</em>) yang umumnya diperiksa untuk menentukan apakah paket tersebut diizinkan (<em>Allow</em>) atau ditolak (<em>Deny/Drop</em>)?</p>`,
    options: [
      { key: "a", text: "Alamat IP Asal & Tujuan, Nomor Port (misal Port 80/443/22), serta Jenis Protokol (TCP/UDP/ICMP)" },
      { key: "b", text: "Merek meja kerja, warna cat dinding ruangan, dan ukuran sepatu pengguna" },
      { key: "c", text: "Kapasitas baterai mouse nirkabel dan resolusi webcam" },
      { key: "d", text: "Harga beli laptop dan tanggal kadaluarsa tinta printer" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Alamat IP Asal & Tujuan, Nomor Port, dan Jenis Protokol)</h4>
        <p>Sebuah <strong>Firewall</strong> mencocokkan informasi pada header paket terhadap tabel aturan (<em>Access Control List / Security Rules</em>) yang meliputi: <strong>Source IP, Destination IP, Source/Destination Port, dan Protocol (TCP, UDP, ICMP)</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-13",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 13,
    title: "Perbedaan HTTP dan HTTPS pada Keamanan Web",
    prompt: `<p>Ketika mengakses situs perbankan atau <em>e-commerce</em>, kita disarankan memastikan alamat URL diawali dengan <strong><code>https://</code></strong> (ditandai ikon gembok) dan bukan sekadar <code>http://</code>. Apa arti huruf <strong>"S"</strong> pada HTTPS dan bagaimana mekanisme pengamanannya?</p>`,
    options: [
      { key: "a", text: "Secure; seluruh komunikasi data antara browser klien dan web server dienkripsi menggunakan protokol TLS/SSL sehingga aman dari penyadapan" },
      { key: "b", text: "Slow; koneksi jaringan sengaja diperlambat agar hemat kuota" },
      { key: "c", text: "Simple; situs web tidak memiliki gambar dan hanya berisi teks biasa" },
      { key: "d", text: "Speaker; situs web otomatis mengeluarkan suara musik keras" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Secure; komunikasi dienkripsi dengan protokol TLS/SSL)</h4>
        <p><strong>HTTPS (<em>HyperText Transfer Protocol Secure</em>)</strong> bekerja pada <strong>Port 443</strong> dan melapisi protokol HTTP dengan enkripsi kriptografi <strong>TLS/SSL (<em>Transport Layer Security</em>)</strong>. Dengan demikian, password, nomor kartu, dan data pribadi tidak dikirim dalam bentuk <em>Plaintext</em>, melainkan <em>Ciphertext</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-14",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 14,
    title: "Konsep Tiga Pilar Keamanan Informasi (CIA Triad)",
    prompt: `<p>Dalam standar keamanan siber dan kriptografi internasional, terdapat tiga prinsip utama yang disingkat sebagai <strong>CIA Triad</strong>, yaitu...</p>`,
    options: [
      { key: "a", text: "Confidentiality (Kerahasiaan), Integrity (Keutuhan Data), dan Availability (Ketersediaan Layanan)" },
      { key: "b", text: "Computer, Internet, dan Application" },
      { key: "c", text: "Cable, Interface, dan Adapter" },
      { key: "d", text: "Copy, Insert, dan Append" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Confidentiality, Integrity, dan Availability)</h4>
        <p>Tiga pilar keamanan informasi (<strong>CIA Triad</strong>) adalah:
        <br/>1) <strong>Confidentiality (Kerahasiaan):</strong> Data hanya bisa diakses oleh pihak berwenang (dijaga dengan <em>Enkripsi</em>).
        <br/>2) <strong>Integrity (Keutuhan):</strong> Data tidak diubah/dipalsukan selama pengiriman (dijaga dengan <em>Hashing & Digital Signature</em>).
        <br/>3) <strong>Availability (Ketersediaan):</strong> Sistem/server selalu siap diakses kapan saja oleh pengguna sah (dijaga dengan <em>Firewall, Redundansi & Anti-DDoS</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-15",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 15,
    title: "Latihan Logika Sandi Geser Klasik (Caesar Cipher)",
    prompt: `<p>Dalam pembelajaran dasar kriptografi klasik, dikenal <strong>Caesar Cipher</strong> yang menggeser setiap huruf abjad sejauh kunci <em>K</em> langkah ke kanan. Jika Plaintext adalah kata <strong><code>DATA</code></strong> dan dienkripsi menggunakan kunci geser <strong>K = +2</strong> (A→C, B→D, C→E, D→F, dst.), maka Ciphertext yang dihasilkan adalah...</p>`,
    options: [
      { key: "a", text: "FCVC" },
      { key: "b", text: "EBEB" },
      { key: "c", text: "BZYZ" },
      { key: "d", text: "DATA" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (FCVC)</h4>
        <p>Mari kita geser setiap huruf pada kata <code>DATA</code> maju 2 langkah dalam urutan abjad:
        <br/>• <strong>D</strong> (+2: E, F) → <strong>F</strong>
        <br/>• <strong>A</strong> (+2: B, C) → <strong>C</strong>
        <br/>• <strong>T</strong> (+2: U, V) → <strong>V</strong>
        <br/>• <strong>A</strong> (+2: B, C) → <strong>C</strong>
        <br/>Sehingga Ciphertext yang terbentuk adalah <strong><code>FCVC</code></strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-16",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 16,
    title: "Mengenal Serangan DDoS dan Peran Firewall",
    prompt: `<p>Serangan siber di mana ribuan komputer yang telah terinfeksi (<em>botnet</em>) dikendalikan secara serentak untuk membanjiri sebuah server dengan jutaan permintaan palsu hingga server tersebut kewalahan (<em>down</em>) dan gagal melayani pengguna asli disebut serangan...</p>`,
    options: [
      { key: "a", text: "DDoS (Distributed Denial of Service)" },
      { key: "b", text: "Disk Defragmentation" },
      { key: "c", text: "Software Update" },
      { key: "d", text: "Cloud Backup" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (DDoS - Distributed Denial of Service)</h4>
        <p><strong>DDoS (<em>Distributed Denial of Service</em>)</strong> menyerang prinsip <em>Availability</em> (Ketersediaan) dengan membanjiri bandwidth dan kapasitas CPU server. Sistem <strong>Next-Generation Firewall (NGFW)</strong> dan layanan proteksi DDoS bertugas mengenali pola banjir trafik abnormal ini dan memblokirnya sebelum melumpuhkan server.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-17",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 17,
    title: "Fungsi VPN (Virtual Private Network)",
    prompt: `<p>Ketika seorang karyawan bekerja dari jaringan Wi-Fi publik di kafe, perusahaan mewajibkannya mengaktifkan <strong>VPN (<em>Virtual Private Network</em>)</strong>. Bagaimana mekanisme VPN melindungi koneksi jaringan karyawan tersebut?</p>`,
    options: [
      { key: "a", text: "Membangun jalur terowongan virtual terenkripsi (Encrypted Tunnel) di atas jaringan publik sehingga lalu lintas data tidak dapat diintip oleh pengguna Wi-Fi lain" },
      { key: "b", text: "Mematikan seluruh sinyal Wi-Fi dalam radius 10 kilometer" },
      { key: "c", text: "Mengganti sistem operasi laptop menjadi kalkulator mekanik" },
      { key: "d", text: "Menghapus password email karyawan secara permanen" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Membangun jalur terowongan virtual terenkripsi / Encrypted Tunnel)</h4>
        <p><strong>VPN (<em>Virtual Private Network</em>)</strong> memanfaatkan teknik <em>Tunneling</em> dan <em>Enkripsi Kriptografi</em> untuk membungkus seluruh paket data pengguna di jaringan publik seolah-olah terhubung langsung ke jaringan privat kantor yang aman.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-18",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 18,
    title: "Topologi Jaringan Star (Bintang)",
    prompt: `<p>Dalam perancangan jaringan lokal (LAN) modern di sekolah maupun perkantoran, setiap komputer dihubungkan masing-masing ke satu perangkat pusat pengatur lalu lintas (berupa <strong>Switch</strong>). Jika satu kabel komputer putus, komputer lain tetap berjalan normal. Pola susunan jaringan ini disebut...</p>`,
    options: [
      { key: "a", text: "Topologi Star (Bintang)" },
      { key: "b", text: "Topologi Bus (Tunggal)" },
      { key: "c", text: "Topologi Tanpa Kabel Listrik" },
      { key: "d", text: "Topologi Monolitik" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Topologi Star / Bintang)</h4>
        <p><strong>Topologi Star</strong> adalah topologi LAN paling populer saat ini karena menggunakan satu simpul pusat (<em>Switch</em> atau <em>Hub</em>). Keunggulan utamanya adalah kemudahan deteksi kerusakan dan isolasi gangguan: putusnya satu kabel ke satu PC tidak mematikan jaringan PC lainnya.</p>
      </div>
    `
  },
  {
    id: "q-sub-c-19",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 19,
    title: "Peran DHCP Server dalam Jaringan",
    prompt: `<p>Saat kita menghubungkan smartphone atau laptop ke jaringan Wi-Fi sekolah, perangkat kita langsung mendapatkan <strong>IP Address, Subnet Mask, dan Default Gateway</strong> secara otomatis tanpa harus mengetiknya satu per satu. Layanan protokol server yang membagikan alamat IP otomatis tersebut adalah...</p>`,
    options: [
      { key: "a", text: "DHCP (Dynamic Host Configuration Protocol)" },
      { key: "b", text: "SMTP (Simple Mail Transfer Protocol)" },
      { key: "c", text: "MP4 Video Codec" },
      { key: "d", text: "JPEG Image Compression" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (DHCP - Dynamic Host Configuration Protocol)</h4>
        <p><strong>DHCP Server</strong> bertugas meminjamkan dan mendistribusikan konfigurasi <em>IP Address</em> secara dinamis/otomatis kepada setiap klien yang baru bergabung ke jaringan, sehingga tidak terjadi bentrok alamat IP (<em>IP Conflict</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-c-20",
    chapterId: "bab-ccit",
    subtopicId: "sub-c",
    categoryLabel: "C. Mekanisme dan Proses Teknologi",
    number: 20,
    title: "Outbound Filtering pada Firewall",
    prompt: `<p>Selain menahan serangan masuk dari internet (<em>Inbound Traffic</em>), <strong>Firewall</strong> modern juga melakukan penyaringan lalu lintas keluar (<em>Outbound Filtering</em>). Apa manfaat penting dari fitur <em>Outbound Filtering</em> tersebut?</p>`,
    options: [
      { key: "a", text: "Mencegah program jahat (Spyware/Trojan) yang telanjur menginfeksi satu PC lokal agar tidak bisa mengirimkan data curian keluar ke server peretas" },
      { key: "b", text: "Mencegah pengguna mengetik huruf kapital di aplikasi pengolah kata" },
      { key: "c", text: "Mematikan kipas prosesor saat suhu komputer dingin" },
      { key: "d", text: "Mengurangi kontras warna pada layar monitor" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Mencegah malware mengirim data curian keluar ke server peretas)</h4>
        <p>Banyak <em>Trojan</em> dan <em>Ransomware</em> berusaha menghubungi server pengendali milik peretas (<em>Command & Control / C2 Server</em>) dari dalam jaringan. Dengan <strong>Outbound Filtering</strong>, Firewall memblokir koneksi keluar menuju port atau alamat IP mencurigakan sehingga kebocoran data dapat dicegah.</p>
      </div>
    `
  },

  /* ========================================================================
     SUB-MATERI D: SEJARAH JARINGAN KOMPUTER (20 SOAL: q-sub-d-1 s/d q-sub-d-20)
     ======================================================================== */
  {
    id: "q-sub-d-1",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 1,
    title: "Tahun Peluncuran dan Lembaga Pendiri ARPANET",
    prompt: `<p>Cikal bakal jaringan internet dunia berawal dari proyek jaringan eksperimental bernama <strong>ARPANET</strong> yang diluncurkan pada tahun <strong>1969</strong>. Lembaga manakah yang membentuk dan mendanai proyek ARPANET tersebut?</p>`,
    options: [
      { key: "a", text: "ARPA (Advanced Research Projects Agency) di bawah Departemen Pertahanan Amerika Serikat (DoD)" },
      { key: "b", text: "Organisasi Kesehatan Dunia (WHO) di Jenewa" },
      { key: "c", text: "Perusahaan pembuat gim konsol di Jepang" },
      { key: "d", text: "Asosiasi Perbankan Swasta Eropa" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ARPA di bawah Departemen Pertahanan Amerika Serikat / DoD)</h4>
        <p><strong>ARPANET</strong> dikembangkan oleh <strong>ARPA (<em>Advanced Research Projects Agency</em></strong>, kini DARPA) milik Departemen Pertahanan AS pada tahun <strong>1969</strong> untuk menciptakan jaringan komunikasi riset yang tangguh dan tetap berfungsi meskipun sebagian simpul jaringan mengalami kerusakan.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-2",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 2,
    title: "Empat Universitas Pertama yang Terhubung di ARPANET (1969)",
    prompt: `<p>Pada akhir tahun 1969, jaringan <strong>ARPANET</strong> pertama kali beroperasi dengan menghubungkan <strong>empat simpul (<em>node</em>) universitas/lembaga riset</strong> di Amerika Serikat, yaitu...</p>`,
    options: [
      { key: "a", text: "UCLA, SRI (Stanford Research Institute), UCSB (UC Santa Barbara), dan University of Utah" },
      { key: "b", text: "Oxford, Cambridge, Harvard, dan Tokyo University" },
      { key: "c", text: "MIT, Yale, Princeton, dan Sorbonne" },
      { key: "d", text: "NASA, CERN, Pentagon, dan Silicon Valley High School" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (UCLA, SRI, UCSB, dan University of Utah)</h4>
        <p>Empat simpul (<em>node</em>) pertama ARPANET pada tahun 1969 (ingat jembatan keledai <strong>U – S – U – U</strong>) adalah:
        <br/>1) <strong>UCLA</strong> (University of California, Los Angeles)
        <br/>2) <strong>SRI</strong> (Stanford Research Institute)
        <br/>3) <strong>UCSB</strong> (University of California, Santa Barbara)
        <br/>4) <strong>University of Utah</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-3",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 3,
    title: "Pesan Pertama yang Dikirim Melalui ARPANET (29 Oktober 1969)",
    prompt: `<p>Pada malam bersejarah tanggal <strong>29 Oktober 1969</strong>, mahasiswa programmer Charley Kline di UCLA mencoba mengirim kata perintah <strong><code>LOGIN</code></strong> ke komputer SRI Stanford melalui ARPANET. Namun komputer mengalami <em>crash</em> di tengah jalan sehingga pesan pertama yang tercatat berhasil terkirim dalam sejarah internet adalah...</p>`,
    options: [
      { key: "a", text: "\"LO\"" },
      { key: "b", text: "\"HELLO WORLD\"" },
      { key: "c", text: "\"PING 127.0.0.1\"" },
      { key: "d", text: "\"ARPANET READY\"" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A ("LO")</h4>
        <p>Saat Charley Kline mengetik huruf <strong>"L"</strong> dan <strong>"O"</strong> dari kata <code>LOGIN</code>, sistem komputer SDS Sigma 7 / PDP-10 mengalami <em>crash</em> sebelum huruf "G" sempat terkirim. Oleh karena itu, pesan pertama di sejarah ARPANET adalah dua huruf: <strong>"LO"</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-4",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 4,
    title: "Teknologi Packet Switching pada ARPANET",
    prompt: `<p>Keunggulan revolusioner ARPANET dibandingkan jaringan telepon lama (<em>Circuit Switching</em>) adalah penerapan teknologi <strong>Packet Switching</strong>. Bagaimana cara kerja dasar <em>Packet Switching</em>?</p>`,
    options: [
      { key: "a", text: "Pesan dipecah menjadi blok-blok kecil (paket data) yang dapat menempuh rute berbeda secara mandiri melalui jaringan lalu disusun kembali di komputer tujuan" },
      { key: "b", text: "Satu kabel fisik dikunci khusus hanya untuk dua orang selama 24 jam penuh" },
      { key: "c", text: "Data dicetak ke atas kertas lalu dikirim menggunakan burung merpati pos" },
      { key: "d", text: "Data hanya bisa dikirim jika seluruh komputer di dunia dimatikan terlebih dahulu" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Pesan dipecah menjadi paket-paket kecil yang menempuh rute mandiri lalu disusun kembali)</h4>
        <p>Konsep <strong>Packet Switching</strong> (dikembangkan oleh Leonard Kleinrock, Paul Baran, dan Donald Davies) memecah informasi menjadi paket-paket kecil. Jika satu jalur jaringan putus, paket otomatis mengambil jalur alternatif lain menuju tujuan.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-5",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 5,
    title: "Perangkat IMP (Cikal Bakal Router Pertama di ARPANET)",
    prompt: `<p>Untuk menghubungkan komputer mainframe yang berbeda merek di keempat universitas ARPANET, perusahaan BBN merancang komputer mini khusus bernama <strong>IMP (<em>Interface Message Processor</em>)</strong>. Fungsi IMP pada masa itu setara dengan perangkat jaringan modern, yaitu...</p>`,
    options: [
      { key: "a", text: "Router" },
      { key: "b", text: "Speaker Bluetooth" },
      { key: "c", text: "Scanner dokumen" },
      { key: "d", text: "Layar Proyektor" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Router)</h4>
        <p><strong>IMP (<em>Interface Message Processor</em>)</strong> yang berbasis komputer Honeywell DDP-516 bertugas menerima paket, memeriksa kesalahan, dan meneruskan paket antar simpul universitas—sehingga diakui sebagai <strong>Router generasi pertama di dunia</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-6",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 6,
    title: "Penemu Surat Elektronik (Email) & Simbol '@' (1971)",
    prompt: `<p>Pada tahun <strong>1971</strong>, seorang insinyur bernama <strong>Ray Tomlinson</strong> menciptakan inovasi komunikasi yang langsung menjadi aplikasi paling populer di jaringan ARPANET, yaitu...</p>`,
    options: [
      { key: "a", text: "Surat Elektronik (E-Mail) jaringan pertama dengan penggunaan simbol '@' (user@host)" },
      { key: "b", text: "Jaringan seluler 5G berkecepatan tinggi" },
      { key: "c", text: "Aplikasi media sosial berbagi video pendek" },
      { key: "d", text: "Kabel serat optik bawah laut trans-Pasifik" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (E-Mail jaringan pertama dengan simbol '@')</h4>
        <p><strong>Ray Tomlinson</strong> menciptakan sistem pengiriman pesan elektronik antar komputer yang berbeda di jaringan ARPANET pada tahun 1971 dan memilih karakter <strong><code>@</code></strong> untuk memisahkan nama pengguna dari nama komputer host tujuan.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-7",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 7,
    title: "Protokol Awal ARPANET Sebelum TCP/IP (NCP)",
    prompt: `<p>Sebelum mengadopsi protokol TCP/IP pada tahun 1983, jaringan ARPANET pada dekade 1970-an menggunakan protokol komunikasi host-ke-host generasi awal yang bernama...</p>`,
    options: [
      { key: "a", text: "NCP (Network Control Protocol / Network Control Program)" },
      { key: "b", text: "HTML5 (HyperText Markup Language v5)" },
      { key: "c", text: "Wi-Fi 6E" },
      { key: "d", text: "USB Type-C" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (NCP - Network Control Protocol)</h4>
        <p><strong>NCP (<em>Network Control Protocol</em>)</strong> diselesaikan pada tahun 1970 sebagai protokol standar pertama ARPANET. Namun karena NCP tidak mampu menghubungkan ARPANET dengan jaringan paket lain di luar ARPANET, dikembangkanlah protokol baru yang lebih fleksibel yaitu <strong>TCP/IP</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-8",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 8,
    title: "Tokoh Perancang Protokol TCP/IP (Bapak Internet)",
    prompt: `<p>Siapakah dua ilmuwan komputer yang merancang arsitektur protokol <strong>TCP/IP (<em>Transmission Control Protocol / Internet Protocol</em>)</strong> pada tahun 1974 sehingga dijuluki sebagai <strong>"Bapak Internet" (<em>Fathers of the Internet</em>)</strong>?</p>`,
    options: [
      { key: "a", text: "Vinton Cerf dan Robert (Bob) Kahn" },
      { key: "b", text: "Charles Babbage dan Blaise Pascal" },
      { key: "c", text: "Bill Gates dan Steve Jobs" },
      { key: "d", text: "John Mauchly dan J. Presper Eckert" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Vinton Cerf dan Robert [Bob] Kahn)</h4>
        <p><strong>Vinton Cerf</strong> dan <strong>Robert E. Kahn</strong> merancang protokol <strong>TCP/IP</strong> yang memungkinkan berbagai jaringan komputer yang berbeda arsitektur di seluruh dunia untuk saling berkomunikasi secara mulus (<em>Internetworking</em>).</p>
      </div>
    `
  },
  {
    id: "q-sub-d-9",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 9,
    title: "Tanggal Bersejarah Adopsi Resmi TCP/IP (1 Januari 1983)",
    prompt: `<p>Tanggal berapakah jaringan <strong>ARPANET</strong> secara resmi menghentikan penggunaan protokol NCP dan mewajibkan seluruh komputer beralih ke protokol <strong>TCP/IP</strong>—momen yang dikenal sebagai <em>"Flag Day"</em> dan diperingati sebagai hari lahirnya Internet modern?</p>`,
    options: [
      { key: "a", text: "1 Januari 1983" },
      { key: "b", text: "17 Agustus 1945" },
      { key: "c", text: "31 Desember 1999" },
      { key: "d", text: "10 November 1928" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (1 Januari 1983)</h4>
        <p>Pada <strong>1 Januari 1983</strong>, seluruh host di jaringan ARPANET melakukan transisi serentak dari NCP ke <strong>TCP/IP</strong>. Sejak saat itulah berbagai jaringan terpisah dapat terhubung membentuk satu jaringan global yang kita sebut <strong>Internet</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-10",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 10,
    title: "Pembagian Tugas antara TCP dan IP",
    prompt: `<p>Dalam kerja sama protokol <strong>TCP/IP</strong>, apakah perbedaan tugas utama antara protokol <strong>IP</strong> dan protokol <strong>TCP</strong>?</p>`,
    options: [
      { key: "a", text: "IP menangani pengalamatan (IP Address) dan pemilihan rute paket (routing), sedangkan TCP memastikan keutuhan paket, urutan data, dan pengiriman ulang jika ada paket yang hilang" },
      { key: "b", text: "IP bertugas mengatur kecerahan layar monitor, sedangkan TCP mengatur volume speaker" },
      { key: "c", text: "IP hanya bekerja untuk huruf vokal, sedangkan TCP hanya bekerja untuk angka ganjil" },
      { key: "d", text: "Keduanya berfungsi untuk memformat kapasitas Flashdisk menjadi kosong" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (IP mengatur pengalamatan & routing, TCP memastikan keandalan & urutan paket)</h4>
        <p>Ibarat layanan ekspedisi pos:
        <br/>• <strong>IP (<em>Internet Protocol</em>)</strong> adalah kurir dan alamat tujuan (<em>IP Address & Routing</em>) yang mengantar paket dari satu router ke router lain.
        <br/>• <strong>TCP (<em>Transmission Control Protocol</em>)</strong> adalah pemeriksa kualitas yang memecah barang ke dalam kotak bernomor urut, mengecek apakah semua kotak sampai dengan lengkap, dan meminta kirim ulang jika ada kotak yang tercecer.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-11",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 11,
    title: "Pemisahan Jaringan MILNET dari ARPANET (1983)",
    prompt: `<p>Pada tahun 1983, demi alasan keamanan operasional pertahanan, Departemen Pertahanan AS memecah jaringan ARPANET menjadi dua bagian: ARPANET tetap digunakan untuk riset akademik universitas, sedangkan jaringan khusus operasional militer dinamakan...</p>`,
    options: [
      { key: "a", text: "MILNET (Military Network)" },
      { key: "b", text: "SKYNET" },
      { key: "c", text: "GAMENET" },
      { key: "d", text: "SHOPNET" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (MILNET - Military Network)</h4>
        <p>Pada tahun 1983, dari 113 simpul (node) yang ada di ARPANET, 68 node dipindahkan ke jaringan baru bernama <strong>MILNET (<em>Military Network</em>)</strong> untuk komunikasi militer non-publik, sedangkan 45 node sisanya tetap di ARPANET untuk komunitas riset ilmiah dan akademik.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-12",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 12,
    title: "Penemuan DNS (Domain Name System) pada 1983",
    prompt: `<p>Agar pengguna internet tidak perlu lagi menghafal deretan angka IP Address (seperti <code>142.250.4.100</code>) saat ingin mengakses sebuah server, <strong>Paul Mockapetris</strong> pada tahun 1983 menciptakan sistem direktori penamaan otomatis yang menerjemahkan nama domain (seperti <code>google.com</code>) menjadi IP Address. Sistem ini disebut...</p>`,
    options: [
      { key: "a", text: "DNS (Domain Name System)" },
      { key: "b", text: "UPS (Uninterruptible Power Supply)" },
      { key: "c", text: "VGA (Video Graphics Array)" },
      { key: "d", text: "PDF (Portable Document Format)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (DNS - Domain Name System)</h4>
        <p><strong>DNS (<em>Domain Name System</em>)</strong> yang dirancang oleh Paul Mockapetris pada tahun 1983 juga memperkenalkan pembagian akhiran domain tingkat atas (<em>Top-Level Domains / TLD</em>) seperti <code>.com</code> (komersial), <code>.edu</code> (pendidikan), <code>.gov</code> (pemerintahan), <code>.mil</code> (militer), dan <code>.org</code> (organisasi).</p>
      </div>
    `
  },
  {
    id: "q-sub-d-13",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 13,
    title: "Penemu World Wide Web (WWW) di CERN (1989–1991)",
    prompt: `<p>Siapakah ilmuwan komputer asal Inggris yang pada tahun 1989–1991 di laboratorium fisika Eropa <strong>CERN (Swiss)</strong> menemukan <strong>World Wide Web (WWW)</strong> beserta standar bahasa <strong>HTML</strong>, protokol <strong>HTTP</strong>, dan pengalamatan <strong>URL</strong>?</p>`,
    options: [
      { key: "a", text: "Sir Tim Berners-Lee" },
      { key: "b", text: "Alan Turing" },
      { key: "c", text: "John von Neumann" },
      { key: "d", text: "Guglielmo Marconi" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Sir Tim Berners-Lee)</h4>
        <p><strong>Sir Timothy John Berners-Lee</strong> menciptakan <strong>World Wide Web (WWW)</strong> di CERN agar para ilmuwan di seluruh dunia dapat berbagi dokumen penelitian yang saling terhubung melalui tautan hiperteks (<em>Hyperlink</em>). Beliau memberikan teknologi WWW secara gratis tanpa paten agar internet dapat berkembang untuk seluruh umat manusia.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-14",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 14,
    title: "Perbedaan Mendasar antara Internet dan World Wide Web (WWW)",
    prompt: `<p>Banyak orang menganggap <strong>Internet</strong> dan <strong>World Wide Web (WWW)</strong> adalah hal yang sama, padahal keduanya berbeda secara teknis. Manakah pernyataan yang paling tepat menjelaskan perbedaan keduanya?</p>`,
    options: [
      { key: "a", text: "Internet adalah infrastruktur jaringan fisik global yang menghubungkan jutaan komputer, sedangkan WWW adalah layanan halaman informasi berbasis hiperteks (HTTP/HTML) yang berjalan di atas jaringan Internet" },
      { key: "b", text: "WWW ditemukan pada tahun 1946 sebelum komputer ada, sedangkan Internet baru ditemukan kemarin" },
      { key: "c", text: "Internet hanya bisa diakses menggunakan ponsel, sedangkan WWW hanya bisa diakses menggunakan televisi analog" },
      { key: "d", text: "WWW adalah nama kabel tembaga, sedangkan Internet adalah nama aplikasi pengolah kata" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Internet adalah infrastruktur jaringannya, WWW adalah layanan dokumen web di atasnya)</h4>
        <p>Analogi mudah diingat:
        <br/>• <strong>Internet</strong> adalah <strong>jalan raya dan rel kereta globalnya</strong> (infrastruktur jaringan TCP/IP).
        <br/>• <strong>World Wide Web (WWW)</strong> adalah salah satu jenis <strong>kendaraan layanan</strong> yang lewat di jalan raya tersebut (selain layanan lain seperti Email SMTP, FTP, SSH, dan VoIP).</p>
      </div>
    `
  },
  {
    id: "q-sub-d-15",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 15,
    title: "Peralihan dari ARPANET ke NSFNET dan Lahirnya Internet Komersial",
    prompt: `<p>Pada tahun 1990 proyek ARPANET resmi dihentikan, dan tulang punggung jaringan diambil alih oleh <strong>NSFNET</strong> sebelum akhirnya dibuka untuk penggunaan bisnis dan masyarakat umum pada awal dekade 1990-an. Perusahaan penyedia layanan akses internet berbayar bagi masyarakat dan bisnis yang muncul pada era komersial ini disebut...</p>`,
    options: [
      { key: "a", text: "ISP (Internet Service Provider / Penyedia Jasa Internet)" },
      { key: "b", text: "ALU (Arithmetic Logic Unit)" },
      { key: "c", text: "BIOS (Basic Input Output System)" },
      { key: "d", text: "IMP (Interface Message Processor)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ISP - Internet Service Provider)</h4>
        <p>Setelah pembatasan komersial dicabut pada awal 1990-an, lahirlah era <strong>Internet Komersial</strong> yang ditandai dengan munculnya perusahaan <strong>ISP (<em>Internet Service Provider</em>)</strong> yang menghubungkan rumah tangga dan perusahaan ke jaringan internet global.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-16",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 16,
    title: "Browser Grafis Populer Pertama di Era Internet Komersial (1993)",
    prompt: `<p>Ledakan popularitas internet komersial di kalangan masyarakat umum pada tahun 1993–1994 sangat didorong oleh hadirnya peramban web (<em>web browser</em>) grafis yang mampu menampilkan gambar bersama teks dalam satu halaman, yaitu...</p>`,
    options: [
      { key: "a", text: "NCSA Mosaic (yang kemudian melahirkan Netscape Navigator)" },
      { key: "b", text: "Microsoft Excel 95" },
      { key: "c", text: "Adobe Premiere Pro" },
      { key: "d", text: "AutoCAD 3D" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (NCSA Mosaic / Netscape Navigator)</h4>
        <p>Dirilis pada tahun 1993 oleh Marc Andreessen dan Eric Bina di NCSA, <strong>Mosaic</strong> adalah browser grafis pertama yang mudah digunakan di Windows dan Macintosh, yang kemudian berkembang menjadi <strong>Netscape Navigator</strong> dan memicu ledakan pengguna web pada dekade 1990-an.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-17",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 17,
    title: "Evolusi Media Transmisi: Dial-Up menuju Fiber Optik",
    prompt: `<p>Pada era 1990-an, koneksi internet rumah menggunakan modem <strong>Dial-Up</strong> lewat kabel telepon tembaga dengan kecepatan hanya sekitar 56 kbps. Kini, internet modern menggunakan kabel <strong>Serat Optik (<em>Fiber Optic</em>)</strong> yang mampu mencapai kecepatan gigabit karena mentransmisikan data dalam bentuk...</p>`,
    options: [
      { key: "a", text: "Pulsa cahaya (sinar laser / LED) di dalam serat kaca murni" },
      { key: "b", text: "Getaran suara akustik di dalam pipa air" },
      { key: "c", text: "Aliran uap panas bertekanan tinggi" },
      { key: "d", text: "Gerakan roda gigi mekanik di sepanjang jalan raya" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Pulsa cahaya di dalam serat kaca murni)</h4>
        <p>Kabel <strong>Fiber Optik</strong> menghantarkan data menggunakan <strong>gelombang cahaya</strong> yang memantul di dalam inti serat kaca halus. Karena cahaya merambat jauh lebih cepat dan bebas dari gangguan induksi elektromagnetik dibanding kabel tembaga, Fiber Optik mampu menyediakan bandwidth super besar hingga puluhan Gbps lintas benua.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-18",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 18,
    title: "Transisi Pengalamatan Jaringan dari IPv4 ke IPv6",
    prompt: `<p>Seiring meledaknya jumlah perangkat yang terhubung ke internet modern, alamat <strong>IPv4</strong> yang panjangnya 32-bit (±4,3 miliar alamat) mengalami keterbatasan kuota. Untuk mengatasi hal tersebut, internet modern mengadopsi protokol <strong>IPv6</strong> yang memiliki panjang alamat sebesar...</p>`,
    options: [
      { key: "a", text: "128-bit (ditulis dalam notasi heksadesimal, menyediakan sekitar 3,4 × 10³⁸ alamat unik)" },
      { key: "b", text: "4-bit (hanya cukup untuk 16 komputer)" },
      { key: "c", text: "8-bit (hanya cukup untuk 256 komputer)" },
      { key: "d", text: "16-bit (hanya cukup untuk satu gedung)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (128-bit)</h4>
        <p>Perbedaan penting untuk Cerdas Cermat IT:
        <br/>• <strong>IPv4:</strong> Panjang <strong>32-bit</strong> (4 oktet desimal, misal <code>192.168.1.1</code>) → sekitar 4,3 miliar alamat.
        <br/>• <strong>IPv6:</strong> Panjang <strong>128-bit</strong> (8 kelompok heksadesimal, misal <code>2001:0db8:85a3::8a2e:0370:7334</code>) → jumlah alamat nyaris tak terbatas untuk mendukung miliaran perangkat IoT.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-19",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 19,
    title: "Evolusi Jaringan Seluler 5G dan Ekosistem IoT",
    prompt: `<p>Pada era jaringan modern saat ini, kehadiran jaringan seluler generasi kelima (<strong>5G</strong>) memiliki keunggulan latensi yang sangat rendah (<em>Ultra-Low Latency</em> &lt; 5 milidetik). Teknologi ini sangat mendukung ekosistem <strong>IoT (<em>Internet of Things</em>)</strong>, yaitu...</p>`,
    options: [
      { key: "a", text: "Konsep di mana berbagai benda fisik sehari-hari (sensor rumah pintar, mobil otonom, alat medis, mesin pabrik) dilengkapi sensor dan terhubung ke internet untuk saling bertukar data secara otomatis" },
      { key: "b", text: "Penggunaan kembali komputer tabung hampa udara tahun 1946 di dalam saku baju" },
      { key: "c", text: "Penghapusan seluruh protokol TCP/IP dan kembali ke mesin telegraf" },
      { key: "d", text: "Larangan menghubungkan lebih dari empat komputer di seluruh dunia" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Benda-benda fisik dilengkapi sensor & terhubung ke internet secara otomatis)</h4>
        <p><strong>IoT (<em>Internet of Things</em>)</strong> memperluas jangkauan internet bukan hanya pada komputer dan smartphone, melainkan ke miliaran perangkat fisik pintar (<em>Smart Home, Smart City, Wearable Health Devices, Connected Cars</em>) yang saling berkomunikasi secara <em>realtime</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-d-20",
    chapterId: "bab-ccit",
    subtopicId: "sub-d",
    categoryLabel: "D. Sejarah Jaringan Komputer",
    number: 20,
    title: "Urutan Kronologis Sejarah Perkembangan Jaringan hingga Internet Modern",
    prompt: `<p>Manakah urutan tonggak sejarah perkembangan jaringan komputer dari yang <strong>paling awal hingga era modern</strong> yang paling tepat di bawah ini?</p>`,
    options: [
      { key: "a", text: "Peluncuran ARPANET (1969) → Email Pertama (1971) → Adopsi Protokol TCP/IP (1983) → Penemuan WWW di CERN (1989–1991) → Internet Komersial, Fiber Optik & 5G/IoT" },
      { key: "b", text: "Penemuan WWW (1969) → Jaringan 5G (1971) → Peluncuran ARPANET (1999)" },
      { key: "c", text: "Adopsi TCP/IP (1945) → Peluncuran ARPANET (1995) → Email Pertama (2010)" },
      { key: "d", text: "Internet Komersial (1950) → ARPANET (1983) → WWW (1969)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ARPANET 1969 → Email 1971 → TCP/IP 1983 → WWW 1989–1991 → Internet Komersial & Modern)</h4>
        <p>Ingat rumus garis waktu emas sejarah jaringan <strong>69 – 71 – 83 – 89 – 95</strong>:
        <br/>• <strong>1969:</strong> Peluncuran <strong>ARPANET</strong> (4 kampus AS, pesan pertama "LO").
        <br/>• <strong>1971:</strong> <strong>Email pertama</strong> oleh Ray Tomlinson (simbol <code>@</code>).
        <br/>• <strong>1 Januari 1983:</strong> Adopsi resmi protokol <strong>TCP/IP</strong> (Vint Cerf & Bob Kahn) & lahirnya DNS.
        <br/>• <strong>1989–1991:</strong> Penemuan <strong>World Wide Web (WWW, HTML, HTTP, URL)</strong> oleh Tim Berners-Lee di CERN.
        <br/>• <strong>1990-an – Sekarang:</strong> Era <strong>Internet Komersial</strong>, Broadband, Fiber Optik, 4G/5G, Cloud, dan IoT.</p>
      </div>
    `
  }
);
