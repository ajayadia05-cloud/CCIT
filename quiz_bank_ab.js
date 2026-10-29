/* ==========================================================================
   CCIT Arena Studio — Bank Soal & Pembahasan Lengkap (Bagian 1: Sub-Materi A & B)
   - Sub-Materi A: Sejarah Teknologi Informasi (20 Soal + Pembahasan Mendalam)
   - Sub-Materi B: Jenis dan Fungsi Teknologi Informasi (20 Soal + Pembahasan Mendalam)
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ========================================================================
     SUB-MATERI A: SEJARAH TEKNOLOGI INFORMASI (20 SOAL: q-sub-a-1 s/d q-sub-a-20)
     ======================================================================== */
  {
    id: "q-sub-a-1",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 1,
    title: "Komponen Utama Komputer Generasi Pertama",
    prompt: `<p>Komputer elektronik generasi pertama (1940–1956) seperti <strong>ENIAC</strong> dan <strong>UNIVAC I</strong> memiliki ukuran sebesar satu ruangan penuh dan membutuhkan daya listrik sangat besar karena menggunakan komponen pengolah sinyal utama berupa...</p>`,
    options: [
      { key: "a", text: "Tabung Hampa Udara (Vacuum Tube)" },
      { key: "b", text: "Transistor Semikonduktor" },
      { key: "c", text: "Integrated Circuit (IC / Sirkuit Terpadu)" },
      { key: "d", text: "Mikroprosesor VLSI (Very Large Scale Integration)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Tabung Hampa Udara / Vacuum Tube)</h4>
        <p>Komputer Generasi Pertama (1940–1956) menggunakan <strong>Tabung Hampa Udara (<em>Vacuum Tube</em>)</strong> sebagai penguat sinyal dan sakelar elektronik. Sebagai contoh, ENIAC menggunakan sekitar 18.000 tabung hampa sehingga ukurannya sangat besar dan cepat panas.</p>
        <p><strong>💡 Jembatan Keledai 5 Generasi:</strong> Ingat rumus <strong>TA – TRA – IC – MIK – AI</strong> (Gen 1: <strong>TA</strong>bung Hampa, Gen 2: <strong>TRA</strong>nsistor, Gen 3: <strong>IC</strong>, Gen 4: <strong>MIK</strong>roprosesor, Gen 5: <strong>AI</strong>).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-2",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 2,
    title: "Perancang Komputer ENIAC (1946)",
    prompt: `<p>Komputer <strong>ENIAC</strong> (<em>Electronic Numerical Integrator and Computer</em>) yang selesai dibangun pada tahun 1946 di University of Pennsylvania dirancang oleh dua ilmuwan pelopor, yaitu...</p>`,
    options: [
      { key: "a", text: "Charles Babbage dan Ada Lovelace" },
      { key: "b", text: "John Mauchly dan J. Presper Eckert" },
      { key: "c", text: "Steve Jobs dan Steve Wozniak" },
      { key: "d", text: "Vinton Cerf dan Robert Kahn" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (John Mauchly dan J. Presper Eckert)</h4>
        <p><strong>ENIAC</strong> dirancang oleh <strong>John Mauchly</strong> dan <strong>J. Presper Eckert</strong> pada tahun 1943–1946 atas pesanan Angkatan Darat AS untuk menghitung tabel tembakan artileri dengan cepat. Keduanya kemudian juga merancang komputer komersial pertama, <strong>UNIVAC I</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-3",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 3,
    title: "Julukan Bapak Komputer Dunia",
    prompt: `<p>Matematikawan asal Inggris pada abad ke-19 yang mendapat julukan sebagai <strong>"Bapak Komputer" (<em>Father of the Computer</em>)</strong> karena merancang mesin hitung <em>Difference Engine</em> (1822) dan <em>Analytical Engine</em> (1837) adalah...</p>`,
    options: [
      { key: "a", text: "Alan Mathison Turing" },
      { key: "b", text: "John von Neumann" },
      { key: "c", text: "Charles Babbage" },
      { key: "d", text: "Blaise Pascal" }
    ],
    correctKey: "c",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: C (Charles Babbage)</h4>
        <p><strong>Charles Babbage (1791–1871)</strong> dijuluki sebagai <strong>Bapak Komputer</strong> karena rancangan <em>Analytical Engine</em> miliknya sudah menerapkan konsep komputer tujuan umum yang memiliki unit pemroses (<em>The Mill</em> / ALU), memori penyimpanan (<em>The Store</em>), input kartu berlubang, dan output.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-4",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 4,
    title: "Programmer Komputer Pertama di Dunia",
    prompt: `<p>Siapakah tokoh ilmuwan wanita yang menulis catatan algoritma pertama untuk dijalankan pada mesin <em>Analytical Engine</em> milik Charles Babbage sehingga diakui sebagai <strong>Programmer Komputer Pertama di Dunia</strong>?</p>`,
    options: [
      { key: "a", text: "Ada Lovelace (Augusta Ada King)" },
      { key: "b", text: "Grace Hopper" },
      { key: "c", text: "Margaret Hamilton" },
      { key: "d", text: "Hedy Lamarr" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Ada Lovelace)</h4>
        <p><strong>Ada Lovelace (1815–1852)</strong> menyusun algoritma perhitungan deret bilangan Bernoulli untuk mesin <em>Analytical Engine</em> Charles Babbage pada tahun 1843. Atas jasanya, ia dinobatkan sebagai <strong>programmer komputer pertama di dunia</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-5",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 5,
    title: "Kontribusi Alan Turing pada Perang Dunia II",
    prompt: `<p>Selain menggagas <em>Universal Turing Machine</em> (1936), <strong>Alan Turing</strong> berperan sangat krusial pada Perang Dunia II di pusat kriptografi <em>Bletchley Park</em> Inggris dengan merancang mesin <strong>The Bombe</strong> yang berfungsi untuk...</p>`,
    options: [
      { key: "a", text: "Mengendalikan radar pesawat tempur secara otomatis" },
      { key: "b", text: "Memecahkan kode sandi rahasia mesin Enigma milik militer Jerman" },
      { key: "c", text: "Menghitung lintasan roket luar angkasa Apollo 11" },
      { key: "d", text: "Menghubungkan jaringan empat universitas pertama di Amerika" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Memecahkan kode sandi rahasia mesin Enigma milik militer Jerman)</h4>
        <p>Di Bletchley Park, <strong>Alan Turing</strong> bersama timnya merancang mesin elektromekanis bernama <strong>The Bombe</strong> untuk mendekripsi pesan rahasia militer Nazi Jerman yang dienkripsi menggunakan mesin <strong>Enigma</strong>. Keberhasilan ini memperpendek Perang Dunia II dan menyelamatkan jutaan nyawa.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-6",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 6,
    title: "Konsep Turing Test (1950)",
    prompt: `<p>Pada tahun 1950, <strong>Alan Turing</strong> mempublikasikan makalah terkenal berjudul <em>"Computing Machinery and Intelligence"</em> yang memperkenalkan metode pengujian bernama <strong>Turing Test</strong>. Tujuan utama dari Turing Test adalah...</p>`,
    options: [
      { key: "a", text: "Menguji kecepatan baca dan tulis pada piringan Harddisk" },
      { key: "b", text: "Mengukur seberapa tahan baterai laptop saat menjalankan game berat" },
      { key: "c", text: "Menguji apakah sebuah mesin/komputer mampu menunjukkan perilaku cerdas setara manusia" },
      { key: "d", text: "Mengecek apakah kabel serat optik mengalami kebocoran cahaya" }
    ],
    correctKey: "c",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: C (Menguji apakah sebuah mesin/komputer mampu menunjukkan perilaku cerdas setara manusia)</h4>
        <p><strong>Turing Test</strong> (awalnya disebut <em>The Imitation Game</em>) melibatkan seorang penguji manusia yang bercakap-cakap melalui teks dengan seorang manusia dan sebuah mesin. Jika penguji tidak dapat membedakan mana mesin dan mana manusia, maka mesin tersebut dinyatakan lulus uji kecerdasan buatan (AI).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-7",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 7,
    title: "Prinsip Inti Arsitektur John von Neumann (1945)",
    prompt: `<p>Gagasan revolusioner yang dikemukakan oleh <strong>John von Neumann</strong> pada tahun 1945 dalam laporan rancangan komputer EDVAC—yang hingga kini menjadi standar arsitektur komputer modern—adalah konsep...</p>`,
    options: [
      { key: "a", text: "Stored-Program Computer, di mana instruksi program dan data disimpan bersama dalam satu memori utama" },
      { key: "b", text: "Penggunaan roda gigi mekanik bertenaga uap untuk mengolah angka desimal" },
      { key: "c", text: "Pemisahan fisik secara mutlak antara kabel program dan tabung data tanpa memori" },
      { key: "d", text: "Pengiriman data antar benua menggunakan satelit orbit rendah" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Stored-Program Computer)</h4>
        <p>Inti dari <strong>Arsitektur Von Neumann</strong> adalah konsep <strong>Stored-Program</strong>: baik <strong>instruksi program</strong> maupun <strong>data</strong> disimpan secara elektronik di dalam satu ruang alamat <strong>Memori Utama (RAM)</strong> yang sama, lalu diambil dan dieksekusi secara berurutan oleh CPU (Control Unit + ALU).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-8",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 8,
    title: "Komponen Utama Arsitektur Von Neumann",
    prompt: `<p>Dalam diagram <strong>Arsitektur John von Neumann</strong>, sebuah sistem komputer modern dibagi menjadi tiga bagian fungsional utama yang dihubungkan oleh jalur <em>System Bus</em>, yaitu...</p>`,
    options: [
      { key: "a", text: "Monitor, Printer, dan Speaker" },
      { key: "b", text: "CPU (Control Unit + ALU), Memory Unit (RAM), dan Input/Output (I/O)" },
      { key: "c", text: "Tabung Hampa, Roda Gigi, dan Kartu Berlubang" },
      { key: "d", text: "Browser, Search Engine, dan Media Sosial" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (CPU [Control Unit + ALU], Memory Unit [RAM], dan Input/Output [I/O])</h4>
        <p>Tiga blok utama dalam <strong>Arsitektur Von Neumann</strong> adalah:
        <br/>1) <strong>CPU</strong> yang terdiri atas <em>Control Unit (CU)</em> dan <em>Arithmetic Logic Unit (ALU)</em>,
        <br/>2) <strong>Main Memory Unit</strong> ( penyimpan data & instruksi), serta
        <br/>3) <strong>Input/Output System (I/O)</strong> untuk berinteraksi dengan dunia luar.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-9",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 9,
    title: "Ciri Khas Komputer Generasi Kedua (1956–1963)",
    prompt: `<p>Peralihan dari Komputer Generasi Pertama ke <strong>Komputer Generasi Kedua (1956–1963)</strong> ditandai dengan penggantian komponen Tabung Hampa Udara menjadi...</p>`,
    options: [
      { key: "a", text: "Transistor" },
      { key: "b", text: "Mikroprosesor Intel Core i9" },
      { key: "c", text: "Keping Kuantum Superkonduktor" },
      { key: "d", text: "Lampu pijar filamen tungsten" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Transistor)</h4>
        <p><strong>Komputer Generasi Kedua</strong> menggunakan <strong>Transistor</strong> (ditemukan di Bell Labs oleh Bardeen, Brattain, dan Shockley). Penggunaan transistor membuat ukuran komputer jauh lebih kecil, lebih cepat, lebih hemat listrik, dan mulai mendukung bahasa pemrograman tingkat tinggi awal seperti <strong>FORTRAN</strong> dan <strong>COBOL</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-10",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 10,
    title: "Penemuan Integrated Circuit (IC) pada Generasi Ketiga",
    prompt: `<p>Komputer Generasi Ketiga (1964–1971) seperti <strong>IBM System/360</strong> menjadi jauh lebih andal dan mampu menjalankan <em>multiprogramming</em> berkat penemuan komponen <strong>IC (<em>Integrated Circuit</em>)</strong> oleh...</p>`,
    options: [
      { key: "a", text: "Jack Kilby dan Robert Noyce" },
      { key: "b", text: "Blaise Pascal dan Gottfried Leibniz" },
      { key: "c", text: "Larry Page dan Sergey Brin" },
      { key: "d", text: "Mark Zuckerberg dan Elon Musk" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Jack Kilby dan Robert Noyce)</h4>
        <p><strong>Integrated Circuit (IC / Sirkuit Terpadu)</strong> dikembangkan secara terpisah oleh <strong>Jack Kilby</strong> (Texas Instruments) dan <strong>Robert Noyce</strong> (Fairchild Semiconductor). IC memadatkan ratusan transistor ke dalam satu keping silikon kecil dan menjadi ciri utama Komputer Generasi Ketiga.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-11",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 11,
    title: "Mikroprosesor Pertama di Dunia (Generasi Keempat)",
    prompt: `<p>Lahirnya <strong>Komputer Generasi Keempat (1971–Sekarang)</strong> dipicu oleh keberhasilan teknologi VLSI memadatkan seluruh komponen CPU ke dalam satu chip tunggal. Chip mikroprosesor komersial pertama di dunia yang dirilis pada tahun 1971 adalah...</p>`,
    options: [
      { key: "a", text: "AMD Ryzen 7000" },
      { key: "b", text: "Intel 4004" },
      { key: "c", text: "Apple M1 Max" },
      { key: "d", text: "NVIDIA GeForce RTX" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Intel 4004)</h4>
        <p>Dirilis pada November 1971 dan dirancang oleh Federico Faggin, Ted Hoff, dan Masatoshi Shima, <strong>Intel 4004</strong> adalah mikroprosesor komersial satu-chip (4-bit) pertama di dunia yang berisi 2.300 transistor, membuka jalan bagi lahirnya PC (Personal Computer).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-12",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 12,
    title: "Komputer Komersial Pertama (UNIVAC I)",
    prompt: `<p>Jika ENIAC dirancang untuk keperluan militer, maka komputer elektronik pertama di dunia yang diproduksi secara <strong>komersial</strong> dan diserahkan kepada Biro Sensus Amerika Serikat pada tahun 1951 adalah...</p>`,
    options: [
      { key: "a", text: "UNIVAC I (Universal Automatic Computer I)" },
      { key: "b", text: "Apple Macintosh 128K" },
      { key: "c", text: "Raspberry Pi 4" },
      { key: "d", text: "Analytical Engine" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (UNIVAC I)</h4>
        <p><strong>UNIVAC I (<em>Universal Automatic Computer I</em>)</strong>, yang juga dirancang oleh J. Presper Eckert dan John Mauchly, merupakan komputer komersial pertama yang dibuat untuk keperluan bisnis dan administrasi pemerintahan di Amerika Serikat pada tahun 1951.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-13",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 13,
    title: "Model Layanan Komputasi Awan: SaaS",
    prompt: `<p>Dalam teknologi modern <strong>Komputasi Awan (<em>Cloud Computing</em>)</strong>, layanan aplikasi siap pakai yang langsung dapat digunakan oleh pengguna akhir melalui internet/browser tanpa perlu menginstal atau mengelola server—seperti <strong>Google Docs, Canva, dan Microsoft 365 Web</strong>—termasuk dalam kategori...</p>`,
    options: [
      { key: "a", text: "IaaS (Infrastructure as a Service)" },
      { key: "b", text: "PaaS (Platform as a Service)" },
      { key: "c", text: "SaaS (Software as a Service)" },
      { key: "d", text: "BIOS (Basic Input Output System)" }
    ],
    correctKey: "c",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: C (SaaS - Software as a Service)</h4>
        <p>Ingat perbedaan 3 layanan Cloud:
        <br/>• <strong>SaaS (Software as a Service):</strong> Aplikasi jadi siap pakai untuk pengguna umum (Google Docs, Gmail, Canva, Zoom).
        <br/>• <strong>PaaS (Platform as a Service):</strong> Platform pengembangan untuk programmer menaruh kode aplikasi (Google App Engine, Heroku).
        <br/>• <strong>IaaS (Infrastructure as a Service):</strong> Penyewaan server virtual, storage, dan jaringan dasar (AWS EC2, Google Compute Engine).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-14",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 14,
    title: "Model Layanan Komputasi Awan: IaaS",
    prompt: `<p>Sebuah perusahaan rintisan (<em>startup</em>) menyewa mesin server virtual (VM), kapasitas penyimpanan (storage), dan jaringan dari Amazon Web Services (AWS EC2) lalu menginstal sendiri sistem operasi Linux di dalamnya. Model layanan <em>Cloud Computing</em> yang digunakan adalah...</p>`,
    options: [
      { key: "a", text: "IaaS (Infrastructure as a Service)" },
      { key: "b", text: "SaaS (Software as a Service)" },
      { key: "c", text: " Vacuum Tube Computing" },
      { key: "d", text: "Punched Card System" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (IaaS - Infrastructure as a Service)</h4>
        <p>Pada <strong>IaaS (<em>Infrastructure as a Service</em>)</strong>, penyedia cloud menyediakan infrastruktur perangkat keras virtual (CPU, RAM, Storage, Jaringan), sedangkan pengguna memiliki kendali penuh untuk memilih dan mengelola Sistem Operasi serta aplikasi di atasnya.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-15",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 15,
    title: "Asal-Usul Istilah 'Bug' dan 'Debugging'",
    prompt: `<p>Ilmuwan komputer wanita berpangkat Laksamana Muda Angkatan Laut AS yang menciptakan <strong>Compiler pertama</strong>, mempelopori bahasa <strong>COBOL</strong>, dan mempopulerkan istilah <em>"debugging"</em> setelah menemukan seekor ngengat terjebak di relai komputer Harvard Mark II adalah...</p>`,
    options: [
      { key: "a", text: "Grace Hopper" },
      { key: "b", text: "Ada Lovelace" },
      { key: "c", text: "Radia Perlman" },
      { key: "d", text: "Joan Clarke" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Grace Hopper)</h4>
        <p><strong>Grace Brewster Murray Hopper (1906–1992)</strong> adalah pelopor pemrograman komputer yang menciptakan <em>compiler</em> pertama (A-0) dan menginisiasi pengembangan bahasa bisnis <strong>COBOL</strong>. Pada tahun 1947, timnya menempelkan bangkai ngengat (<em>moth</em>) dari komputer Mark II ke buku log sebagai kasus aktual pertama ditemukannya <em>"bug"</em> komputer.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-16",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 16,
    title: "Bagian 'The Mill' dan 'The Store' pada Analytical Engine",
    prompt: `<p>Pada rancangan mesin <strong>Analytical Engine (1837)</strong> karya Charles Babbage, terdapat dua komponen utama yang disebut <em>"The Mill"</em> dan <em>"The Store"</em>. Jika disetarakan dengan komputer modern saat ini, kedua bagian tersebut berfungsi sebagai...</p>`,
    options: [
      { key: "a", text: "Keyboard dan Mouse" },
      { key: "b", text: "Prosesor/ALU (The Mill) dan Memori Penyimpanan (The Store)" },
      { key: "c", text: "Monitor (The Mill) dan Speaker (The Store)" },
      { key: "d", text: "Kabel Listrik dan Kipas Pendingin" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Prosesor/ALU [The Mill] dan Memori Penyimpanan [The Store])</h4>
        <p>Dalam arsitektur <em>Analytical Engine</em> Charles Babbage:
        <br/>• <strong>The Mill</strong> adalah unit yang mengeksekusi operasi hitung aritmatika (setara dengan <strong>ALU / CPU</strong>).
        <br/>• <strong>The Store</strong> adalah tempat menyimpan angka dan variabel sebelum/sesudah diolah (setara dengan <strong>Memori / RAM</strong>).</p>
      </div>
    `
  },
  {
    id: "q-sub-a-17",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 17,
    title: "Bahasa Pemrograman Komputer Generasi Pertama",
    prompt: `<p>Bagaimana cara para ilmuwan memberikan instruksi program kepada komputer generasi pertama seperti ENIAC sebelum adanya bahasa tingkat tinggi?</p>`,
    options: [
      { key: "a", text: "Menggunakan perintah suara berbahasa Inggris melalui mikrofon" },
      { key: "b", text: "Menggunakan Bahasa Mesin (kode biner 0 dan 1) serta pengaturan sakelar/kabel fisik (plugboard)" },
      { key: "c", text: "Mengetik kode Python pada layar sentuh OLED" },
      { key: "d", text: "Menggeser ikon grafis menggunakan mouse nirkabel" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Menggunakan Bahasa Mesin biner 0 dan 1 serta pengaturan sakelar/kabel fisik)</h4>
        <p>Komputer generasi pertama belum mengenal bahasa Assembly maupun bahasa tingkat tinggi. Pemrograman dilakukan langsung dalam <strong>Bahasa Mesin (Biner 0 dan 1)</strong>, kartu berlubang (<em>punched card</em>), atau dengan mengatur ulang ribuan kabel dan sakelar pada papan <em>plugboard</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-18",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 18,
    title: "Penemu Aljabar Boolean (Dasar Logika Biner)",
    prompt: `<p>Seluruh sirkuit digital dan mikroprosesor modern bekerja menggunakan logika biner (Benar/1 dan Salah/0) melalui gerbang logika AND, OR, dan NOT. Konsep logika matematika ini ditemukan pada abad ke-19 oleh...</p>`,
    options: [
      { key: "a", text: "George Boole" },
      { key: "b", text: "Isaac Newton" },
      { key: "c", text: "Albert Einstein" },
      { key: "d", text: "Guglielmo Marconi" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (George Boole)</h4>
        <p><strong>George Boole (1815–1864)</strong> menerbitkan buku <em>The Laws of Thought</em> (1854) yang merumuskan <strong>Aljabar Boolean</strong>. Pada tahun 1937, Claude Shannon membuktikan bahwa aljabar Boolean dapat diterapkan pada rangkaian sakelar elektrik untuk membangun komputer digital biner.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-19",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 19,
    title: "Ciri Utama Komputer Generasi Kelima & Modern",
    prompt: `<p>Komputer Generasi Kelima hingga era modern saat ini ditandai oleh integrasi komponen <strong>ULSI (<em>Ultra Large Scale Integration</em>)</strong>, pemrosesan paralel masif, serta fokus pada pengembangan teknologi...</p>`,
    options: [
      { key: "a", text: "Tabung vakum kaca berukuran raksasa" },
      { key: "b", text: "Kecerdasan Buatan (Artificial Intelligence / AI), Komputasi Awan (Cloud), dan Komputasi Kuantum" },
      { key: "c", text: "Mesin ketik pita tinta manual tanpa layar" },
      { key: "d", text: "Penyimpanan berbasis pita kertas berlubang (Paper Tape)" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Kecerdasan Buatan / AI, Komputasi Awan, dan Komputasi Kuantum)</h4>
        <p>Komputer Generasi Kelima berfokus pada teknologi <strong>ULSI</strong> (miliaran transistor dalam satu chip), pemrosesan paralel (GPU/NPU), <strong>Kecerdasan Buatan (AI & Machine Learning)</strong>, pemrosesan bahasa alami (<em>Natural Language Processing</em>), <strong>Cloud Computing</strong>, dan riset <strong>Quantum Computing</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-a-20",
    chapterId: "bab-ccit",
    subtopicId: "sub-a",
    categoryLabel: "A. Sejarah Teknologi Informasi",
    number: 20,
    title: "Urutan Kronologis Evolusi Komponen Komputer",
    prompt: `<p>Manakah urutan perkembangan komponen utama komputer dari <strong>Generasi Pertama hingga Generasi Keempat</strong> yang paling tepat di bawah ini?</p>`,
    options: [
      { key: "a", text: "Transistor → Tabung Hampa → Mikroprosesor → IC" },
      { key: "b", text: "Tabung Hampa Udara → Transistor → IC (Integrated Circuit) → Mikroprosesor (VLSI)" },
      { key: "c", text: "IC → Mikroprosesor → Tabung Hampa Udara → Transistor" },
      { key: "d", text: "Mikroprosesor → IC → Transistor → Tabung Hampa Udara" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Tabung Hampa Udara → Transistor → IC → Mikroprosesor)</h4>
        <p>Sesuai jembatan keledai <strong>TA – TRA – IC – MIK</strong>:
        <br/>1) Generasi I: <strong>Tabung Hampa Udara</strong> (<em>Vacuum Tube</em>)
        <br/>2) Generasi II: <strong>Transistor</strong>
        <br/>3) Generasi III: <strong>IC (Integrated Circuit)</strong>
        <br/>4) Generasi IV: <strong>Mikroprosesor (LSI/VLSI)</strong>.</p>
      </div>
    `
  },

  /* ========================================================================
     SUB-MATERI B: JENIS DAN FUNGSI TEKNOLOGI INFORMASI (20 SOAL: q-sub-b-1 s/d q-sub-b-20)
     ======================================================================== */
  {
    id: "q-sub-b-1",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 1,
    title: "Klasifikasi Perangkat Masukan (Input Device)",
    prompt: `<p>Perhatikan daftar perangkat keras berikut: <strong>(1) Scanner, (2) Plotter, (3) Barcode Reader, (4) Proyektor, (5) Microphone</strong>. Manakah yang seluruhnya termasuk dalam kategori <strong>Perangkat Masukan (<em>Input Device</em>)</strong>?</p>`,
    options: [
      { key: "a", text: "(1), (2), dan (3)" },
      { key: "b", text: "(1), (3), dan (5)" },
      { key: "c", text: "(2), (3), dan (4)" },
      { key: "d", text: "(2), (4), dan (5)" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B ((1) Scanner, (3) Barcode Reader, dan (5) Microphone)</h4>
        <p>• <strong>Scanner, Barcode Reader, dan Microphone</strong> adalah <strong>Input Device</strong> karena menangkap gambar, kode baris, dan suara dari luar untuk diubah menjadi data digital di dalam komputer.<br/>• Sedangkan <strong>Plotter</strong> (pencetak spanduk/grafis besar) dan <strong>Proyektor</strong> adalah <strong>Output Device</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-2",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 2,
    title: "Fungsi ALU dan Control Unit di dalam CPU",
    prompt: `<p>Di dalam prosesor (<strong>CPU</strong>), bagian yang bertugas khusus mengeksekusi perhitungan matematika (penjumlahan, pengurangan) dan perbandingan logika (AND, OR, lebih besar/kecil) disebut...</p>`,
    options: [
      { key: "a", text: "ALU (Arithmetic Logic Unit)" },
      { key: "b", text: "CU (Control Unit)" },
      { key: "c", text: "PSU (Power Supply Unit)" },
      { key: "d", text: "NIC (Network Interface Card)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ALU - Arithmetic Logic Unit)</h4>
        <p>CPU memiliki 3 komponen internal utama:
        <br/>1) <strong>ALU (<em>Arithmetic Logic Unit</em>):</strong> Melakukan seluruh operasi perhitungan aritmatika dan keputusan logika.
        <br/>2) <strong>CU (<em>Control Unit</em>):</strong> Mengatur lalu lintas dan urutan instruksi antara memori, ALU, dan perangkat I/O.
        <br/>3) <strong>Register:</strong> Memori berkecepatan super tinggi di dalam CPU.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-3",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 3,
    title: "Perbedaan Sifat Memori RAM dan ROM",
    prompt: `<p>Mengapa dokumen yang sedang kita ketik tetapi belum disimpan (<em>Save</em>) ke SSD/Harddisk akan hilang jika komputer tiba-tiba mati lampu?</p>`,
    options: [
      { key: "a", text: "Karena data yang sedang dikerjakan berada di RAM yang bersifat Volatile (membutuhkan aliran listrik agar data bertahan)" },
      { key: "b", text: "Karena data tersebut disimpan di dalam ROM yang bersifat permanen" },
      { key: "c", text: "Karena monitor langsung menghapus isi piringan Harddisk saat mati lampu" },
      { key: "d", text: "Karena keyboard menarik kembali huruf yang sudah diketik" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (RAM bersifat Volatile)</h4>
        <p><strong>RAM (<em>Random Access Memory</em>)</strong> adalah memori utama tempat CPU menaruh program dan dokumen yang sedang aktif dikerjakan. RAM bersifat <strong>Volatile</strong>, artinya isinya akan langsung menguap/hilang begitu pasokan listrik terputus. Agar permanen, data harus disimpan ke penyimpanan sekunder (SSD/HDD) yang bersifat <strong>Non-Volatile</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-4",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 4,
    title: "Keunggulan SSD dibanding HDD Konvensional",
    prompt: `<p>Komputer dan laptop modern kini beralih menggunakan <strong>SSD (<em>Solid State Drive</em>)</strong> untuk menggantikan <strong>HDD (<em>Hard Disk Drive</em>)</strong> sebagai media penyimpanan utama. Keunggulan teknis utama SSD dibandingkan HDD adalah...</p>`,
    options: [
      { key: "a", text: "Menggunakan piringan logam berputar yang menghasilkan suara keras" },
      { key: "b", text: "Menggunakan chip Flash Memory tanpa komponen bergerak sehingga kecepatan baca/tulis jauh lebih tinggi dan tahan guncangan" },
      { key: "c", text: "Menggunakan pita kaset magnetik yang harus digulung secara manual" },
      { key: "d", text: "Hanya bisa menyimpan data selama 5 menit sebelum terhapus otomatis" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Menggunakan chip Flash Memory tanpa komponen bergerak)</h4>
        <p>Berbeda dengan <strong>HDD</strong> yang menggunakan piringan cakram magnetik (<em>platter</em>) berputar dan lengan mekanik baca/tulis, <strong>SSD</strong> menyimpan data di dalam keping <strong>NAND Flash Memory</strong>. Karena tidak memiliki komponen bergerak, SSD jauh lebih cepat (terutama tipe NVMe M.2), hening, hemat baterai, dan tahan terhadap guncangan fisik.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-5",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 5,
    title: "Perangkat Keluaran Khusus Cetakan Ukuran Besar (Plotter)",
    prompt: `<p>Seorang arsitek dan desainer grafis ingin mencetak peta rancangan gedung berukuran sangat besar (A0) serta spanduk reklame dengan presisi garis vektor yang tinggi. Perangkat keras keluaran (<em>Output Device</em>) yang paling tepat digunakan adalah...</p>`,
    options: [
      { key: "a", text: "Barcode Scanner" },
      { key: "b", text: "Plotter" },
      { key: "c", text: "Speaker Aktif" },
      { key: "d", text: "Digitizer" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Plotter)</h4>
        <p><strong>Plotter</strong> adalah perangkat <em>Output Hardcopy</em> khusus yang dirancang untuk mencetak gambar vektor, peta teknik, cetak biru arsitektur (<em>blueprint</em>), dan banner berukuran lebar dengan akurasi tinggi.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-6",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 6,
    title: "Fungsi Sistem Operasi (Operating System)",
    prompt: `<p>Manakah dari kelompok perangkat lunak berikut yang seluruhnya merupakan <strong>Sistem Operasi (<em>Operating System</em>)</strong>?</p>`,
    options: [
      { key: "a", text: "Microsoft Word, Adobe Photoshop, dan Google Chrome" },
      { key: "b", text: "Linux Ubuntu, Microsoft Windows 11, macOS, dan Android" },
      { key: "c", text: "Python, Java, C++, dan JavaScript" },
      { key: "d", text: "WinRAR, Kaspersky Antivirus, dan CCleaner" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Linux Ubuntu, Microsoft Windows 11, macOS, dan Android)</h4>
        <p>• <strong>Linux Ubuntu, Windows, macOS, Android, dan iOS</strong> adalah <strong>Sistem Operasi (OS)</strong>.<br/>• Opsi A adalah <em>Software Aplikasi</em>, Opsi C adalah <em>Bahasa Pemrograman</em>, dan Opsi D adalah <em>Software Utility (Program Bantu)</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-7",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 7,
    title: "Perangkat Lunak Program Bantu (Utility Software)",
    prompt: `<p>Perangkat lunak seperti <strong>Antivirus (Windows Defender), WinRAR/7-Zip (kompresi file), dan Disk Defragmenter</strong> dikelompokkan ke dalam jenis perangkat lunak...</p>`,
    options: [
      { key: "a", text: "Program Bantu (Utility Software)" },
      { key: "b", text: "Perangkat Lunak Pengolah Angka (Spreadsheet)" },
      { key: "c", text: "Perangkat Keras Penyimpanan (Storage)" },
      { key: "d", text: "Sistem Manajemen Basis Data (DBMS)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Program Bantu / Utility Software)</h4>
        <p><strong>Utility Software</strong> adalah perangkat lunak sistem yang berfungsi membantu pemeliharaan, perlindungan keamanan (antivirus), pengoptimalan ruang penyimpanan (kompresi & defragmentasi), serta pencadangan (<em>backup</em>) komputer.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-8",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 8,
    title: "Peran ROM dan BIOS/UEFI saat Komputer Menyala",
    prompt: `<p>Saat tombol daya (<em>Power</em>) komputer ditekan, sebelum Sistem Operasi di SSD dimuat ke RAM, terdapat chip memori <strong>Non-Volatile</strong> di motherboard yang menjalankan pengecekan perangkat keras awal (<em>POST - Power-On Self-Test</em>). Chip memori dan firmware tersebut adalah...</p>`,
    options: [
      { key: "a", text: "ROM (Read Only Memory) yang berisi BIOS / UEFI" },
      { key: "b", text: "Mouse Optik dan Touchpad" },
      { key: "c", text: "Printer Inkjet dan Scanner" },
      { key: "d", text: "Aplikasi Microsoft PowerPoint" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ROM yang berisi BIOS / UEFI)</h4>
        <p><strong>ROM (<em>Read Only Memory</em>)</strong> bersifat <em>Non-Volatile</em> dan menyimpan instruksi dasar <strong>BIOS (<em>Basic Input Output System</em>)</strong> atau <strong>UEFI</strong>. Saat komputer baru dinyalakan, BIOS/UEFI memeriksa kesehatan hardware (RAM, Keyboard, VGA, Storage) melalui proses <em>POST</em> lalu memanggil <em>Bootloader</em> Sistem Operasi.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-9",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 9,
    title: "Penerapan TI di Bidang Pendidikan: LMS",
    prompt: `<p>Di bidang <strong>Pendidikan</strong>, sekolah dan universitas menggunakan platform seperti <strong>Google Classroom, Moodle, dan Canvas</strong> untuk membagikan materi ajar, mengumpulkan tugas, berdiskusi, dan mengelola nilai siswa secara terpusat. Platform semacam ini dikenal dengan istilah...</p>`,
    options: [
      { key: "a", text: "LMS (Learning Management System)" },
      { key: "b", text: "POS (Point of Sale)" },
      { key: "c", text: "EHR (Electronic Health Record)" },
      { key: "d", text: "BIOS (Basic Input Output System)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (LMS - Learning Management System)</h4>
        <p><strong>LMS (<em>Learning Management System</em>)</strong> adalah aplikasi perangkat lunak berbasis web yang dirancang khusus untuk merencanakan, melaksanakan, mendistribusikan, dan mengevaluasi proses pembelajaran secara daring maupun <em>blended learning</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-10",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 10,
    title: "Penerapan TI di Bidang Pendidikan: CBT",
    prompt: `<p>Pelaksanaan ujian sekolah atau Asesmen Nasional yang menggunakan perangkat komputer/laptop sehingga soal diacak otomatis dan nilai langsung keluar secara objektif disebut dengan istilah...</p>`,
    options: [
      { key: "a", text: "CBT (Computer Based Test)" },
      { key: "b", text: "ERP (Enterprise Resource Planning)" },
      { key: "c", text: "MRI (Magnetic Resonance Imaging)" },
      { key: "d", text: "CRM (Customer Relationship Management)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (CBT - Computer Based Test)</h4>
        <p><strong>CBT (<em>Computer Based Test</em>)</strong> menggantikan ujian berbasis kertas dan pensil (PBT). Keunggulannya adalah hemat kertas (<em>paperless</em>), distribusi soal aman, pengacakan nomor soal untuk mencegah kecurangan, dan penilaian otomatis secara instan.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-11",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 11,
    title: "Penerapan TI di Bidang Kesehatan: Telemedicine",
    prompt: `<p>Seorang pasien yang tinggal di pulau terpencil dapat berkonsultasi langsung mengenai gejala penyakitnya dengan dokter spesialis di kota besar melalui panggilan video dan menerima resep obat digital menggunakan aplikasi kesehatan. Penerapan TI di bidang kesehatan ini disebut...</p>`,
    options: [
      { key: "a", text: "E-Commerce B2B" },
      { key: "b", text: "Telemedicine (Layanan Medis Jarak Jauh)" },
      { key: "c", text: "Computer Aided Design (CAD)" },
      { key: "d", text: "Disk Defragmentation" }
    ],
    correctKey: "b",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: B (Telemedicine)</h4>
        <p><strong>Telemedicine</strong> (atau <em>Telehealth</em>) adalah pemanfaatan teknologi informasi dan telekomunikasi untuk memberikan layanan konsultasi klinis, diagnosis, dan pemantauan kesehatan pasien dari jarak jauh tanpa harus bertatap muka fisik di rumah sakit.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-12",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 12,
    title: "Penerapan TI di Bidang Kesehatan: RME / EHR",
    prompt: `<p>Transformasi digital di rumah sakit menggantikan map kertas status pasien menjadi basis data digital terpusat yang memuat riwayat penyakit, hasil laboratorium, alergi obat, dan riwayat tindakan medis pasien. Sistem ini disebut...</p>`,
    options: [
      { key: "a", text: "RME (Rekam Medis Elektronik) / EHR (Electronic Health Record)" },
      { key: "b", text: "POS (Point of Sale Kasir)" },
      { key: "c", text: "GIS (Geographic Information System)" },
      { key: "d", text: "LMS (Learning Management System)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (RME / Electronic Health Record - EHR)</h4>
        <p><strong>Rekam Medis Elektronik (RME / EHR)</strong> mendigitalkan seluruh data klinis pasien sehingga mudah diakses oleh tenaga medis yang berwenang, mencegah duplikasi pemeriksaan lab, dan meminimalkan risiko salah baca tulisan tangan pada resep obat.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-13",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 13,
    title: "Penerapan TI di Bidang Bisnis: Sistem ERP",
    prompt: `<p>Perusahaan manufaktur besar menggunakan perangkat lunak seperti <strong>SAP</strong> atau <strong>Odoo</strong> untuk mengintegrasikan divisi Keuangan, Gudang/Inventaris, Produksi, Pengadaan, dan SDM (HRD) ke dalam satu sistem basis data terpadu. Sistem informasi bisnis ini disebut...</p>`,
    options: [
      { key: "a", text: "ERP (Enterprise Resource Planning)" },
      { key: "b", text: "CBT (Computer Based Test)" },
      { key: "c", text: "MP3 Audio Player" },
      { key: "d", text: "Screen Saver" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (ERP - Enterprise Resource Planning)</h4>
        <p><strong>ERP (<em>Enterprise Resource Planning</em>)</strong> adalah sistem perangkat lunak manajemen proses bisnis yang mengintegrasikan seluruh fungsi departemen perusahaan ke dalam satu sistem terpusat secara <em>realtime</em>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-14",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 14,
    title: "Penerapan TI di Bidang Bisnis: Sistem POS & FinTech",
    prompt: `<p>Saat berbelanja di minimarket modern, kasir memindai kode barang dan menggunakan sistem komputer kasir yang otomatis menghitung total belanja, memotong stok barang di gudang, serta menerima pembayaran kode <strong>QRIS</strong>. Sistem kasir digital tersebut dikenal sebagai...</p>`,
    options: [
      { key: "a", text: "POS (Point of Sale)" },
      { key: "b", text: "DNS (Domain Name System)" },
      { key: "c", text: "CT-Scan Medis" },
      { key: "d", text: "Compiler Bahasa C" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (POS - Point of Sale)</h4>
        <p><strong>POS (<em>Point of Sale</em>)</strong> adalah perpaduan hardware (komputer kasir, barcode scanner, printer struk) dan software ritel untuk memproses transaksi penjualan, memantau inventaris stok secara otomatis, dan menyusun laporan penjualan harian.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-15",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 15,
    title: "Enam Fungsi Utama Teknologi Informasi",
    prompt: `<p>Ketika sebuah aplikasi perbankan mengambil kembali data riwayat mutasi rekening nasabah bulan lalu dari dalam basis data (<em>database</em>) untuk ditampilkan di layar smartphone, fungsi dasar Teknologi Informasi yang sedang bekerja adalah...</p>`,
    options: [
      { key: "a", text: "Retrieval (Pengambilan / Pencarian Kembali Informasi)" },
      { key: "b", text: " Soldering (Penyolderan Kabel)" },
      { key: "c", text: "Formatting (Penghapusan Disk)" },
      { key: "d", text: "Cooling (Pendinginan Prosesor)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Retrieval)</h4>
        <p>Dalam 6 fungsi dasar TI (<strong>Capture, Processing, Generating, Storage, Retrieval, Transmission</strong>), <strong>Retrieval</strong> adalah proses menelusuri, mencari, dan mengambil kembali data yang sebelumnya telah disimpan di media penyimpanan.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-16",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 16,
    title: "Perangkat Hibrida Input sekaligus Output (I/O)",
    prompt: `<p>Perangkat keras pada smartphone atau mesin ATM yang berfungsi menampilkan gambar antarmuka secara visual sekaligus menerima perintah sentuhan jari pengguna secara langsung dikategorikan sebagai perangkat...</p>`,
    options: [
      { key: "a", text: "Touchscreen (Layar Sentuh) — Perangkat Hibrida Input/Output" },
      { key: "b", text: "Speaker Pasif" },
      { key: "c", text: "Kipas Heatsink CPU" },
      { key: "d", text: "Mouse Kabel Standar" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Touchscreen / Layar Sentuh)</h4>
        <p><strong>Touchscreen (Layar Sentuh)</strong> menggabungkan panel layar tampilan (<strong>Output</strong>) dan sensor sentuh kapasitif/resistif (<strong>Input</strong>) dalam satu komponen fisik sehingga disebut perangkat <strong>Input/Output (I/O) Hibrida</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-17",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 17,
    title: "Fungsi GPU (Graphics Processing Unit)",
    prompt: `<p>Mengapa komputer yang digunakan untuk mengedit video 4K, merender animasi 3D, dan melatih model <em>Artificial Intelligence</em> membutuhkan komponen perangkat keras <strong>GPU (<em>Graphics Processing Unit</em>)</strong> yang kuat?</p>`,
    options: [
      { key: "a", text: "Karena GPU memiliki ribuan inti pemroses paralel (cores) yang sangat efisien untuk perhitungan matriks dan grafis secara serentak" },
      { key: "b", text: "Karena GPU berfungsi untuk mencetak kertas ukuran A4 berwarna" },
      { key: "c", text: "Karena GPU adalah satu-satunya tempat menyimpan file dokumen Word secara permanen" },
      { key: "d", text: "Karena GPU menggantikan fungsi kabel listrik dari stopkontak" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (GPU memiliki ribuan inti pemroses paralel untuk matriks & grafis)</h4>
        <p>Berbeda dengan CPU yang memiliki sedikit inti (<em>cores</em>) namun sangat kuat untuk tugas berurutan (<em>serial</em>), <strong>GPU</strong> memiliki ribuan inti pemroses kecil yang dirancang untuk mengeksekusi ribuan perhitungan piksel grafis dan matriks AI secara <strong>paralel (serentak)</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-18",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 18,
    title: "Kategori Perangkat Lunak Aplikasi Pengolah Angka",
    prompt: `<p>Seorang bendahara sekolah ingin membuat tabel anggaran kegiatan, menghitung rumus rata-rata otomatis (<code>AVERAGE</code>, <code>SUM</code>), dan membuat grafik keuangan. Perangkat lunak aplikasi yang paling tepat digunakan adalah...</p>`,
    options: [
      { key: "a", text: "Aplikasi Spreadsheet / Pengolah Angka (Microsoft Excel / Google Sheets / LibreOffice Calc)" },
      { key: "b", text: "Aplikasi Pemutar Musik (Spotify / Winamp)" },
      { key: "c", text: "Aplikasi Antivirus (Avast / Kaspersky)" },
      { key: "d", text: "Driver Kartu Suara (Audio Driver)" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Aplikasi Spreadsheet / Pengolah Angka)</h4>
        <p>Aplikasi <strong>Spreadsheet (Pengolah Angka)</strong> seperti <strong>Microsoft Excel, Google Sheets, dan LibreOffice Calc</strong> dirancang khusus untuk mengolah data numerik dalam bentuk baris dan kolom (sel), rumus statistik/keuangan, tabel pivot, dan visualisasi grafik.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-19",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 19,
    title: "Perbedaan Compiler dan Interpreter pada Bahasa Pemrograman",
    prompt: `<p>Dalam perangkat lunak bahasa pemrograman, terdapat dua jenis penerjemah kode sumber (<em>Source Code</em>) menjadi bahasa mesin, yaitu <strong>Compiler</strong> dan <strong>Interpreter</strong>. Perbedaan utama keduanya adalah...</p>`,
    options: [
      { key: "a", text: "Compiler menerjemahkan seluruh kode program sekaligus menjadi file eksekusi, sedangkan Interpreter menerjemahkan dan menjalankan kode baris demi baris" },
      { key: "b", text: "Compiler adalah perangkat keras monitor, sedangkan Interpreter adalah perangkat keras keyboard" },
      { key: "c", text: "Compiler hanya bisa digunakan saat komputer mati, sedangkan Interpreter saat komputer menyala" },
      { key: "d", text: "Tidak ada perbedaan sama sekali antara Compiler dan Interpreter" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Compiler menerjemahkan seluruh kode sekaligus, Interpreter baris demi baris)</h4>
        <p>• <strong>Compiler</strong> (seperti pada C, C++, Go) menerjemahkan seluruh dokumen <em>source code</em> sekaligus menjadi file biner yang siap dieksekusi dengan sangat cepat.<br/>• <strong>Interpreter</strong> (seperti pada Python atau JavaScript standar) membaca, menerjemahkan, dan langsung mengeksekusi kode sumber <strong>baris demi baris</strong>.</p>
      </div>
    `
  },
  {
    id: "q-sub-b-20",
    chapterId: "bab-ccit",
    subtopicId: "sub-b",
    categoryLabel: "B. Jenis dan Fungsi TI",
    number: 20,
    title: "Tiga Komponen Utama Ekosistem Komputer",
    prompt: `<p>Agar sebuah sistem Teknologi Informasi dapat berjalan dan memberikan manfaat, dibutuhkan sinergi antara tiga elemen pokok yang tidak dapat dipisahkan, yaitu Perangkat Keras, Perangkat Lunak, dan Pengguna/Manusia yang mengoperasikannya. Dalam istilah TI, ketiga elemen tersebut dinamakan...</p>`,
    options: [
      { key: "a", text: "Hardware, Software, dan Brainware" },
      { key: "b", text: "Monitor, Mouse, dan Meja" },
      { key: "c", text: "Google, Yahoo, dan Bing" },
      { key: "d", text: "Kabel, Baterai, dan Sakelar" }
    ],
    correctKey: "a",
    explanation: `
      <div class="exp-section">
        <h4>🎯 Kunci Jawaban: A (Hardware, Software, dan Brainware)</h4>
        <p>Tiga pilar sistem komputer adalah:
        <br/>1) <strong>Hardware (Perangkat Keras):</strong> Komponen fisik komputer.
        <br/>2) <strong>Software (Perangkat Lunak):</strong> Sistem operasi dan program aplikasi.
        <br/>3) <strong>Brainware (Perangkat Akal / Pengguna):</strong> Manusia yang merancang, memprogram, mengelola, dan mengoperasikan komputer (Programmer, System Analyst, Administrator, Operator/User).</p>
      </div>
    `
  }
];
