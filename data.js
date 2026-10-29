/* ==========================================================================
   CCIT Arena Studio — Materi Pembelajaran Interaktif Cerdas Cermat IT (CCIT)
   File: data.js
   Struktur Materi:
   - Bab / Sub-Materi A: Sejarah Teknologi Informasi
   - Bab / Sub-Materi B: Jenis dan Fungsi Teknologi Informasi
   - Bab / Sub-Materi C: Mekanisme dan Proses Teknologi
   - Bab / Sub-Materi D: Sejarah Jaringan Komputer
   Setiap Sub-Materi dilengkapi:
   1. Sub-Menu Terstruktur untuk Akordion Sidebar
   2. Narasi Audio Intisari (untuk dibacakan oleh fitur Voice Narrator)
   3. Ringkasan Pra-Soal & Jembatan Keledai (Mudah Dipahami & Diingat Murid)
   4. Kartu Flashcard Interaktif (Klik untuk Balik Jawaban)
   5. Penjabaran Materi Visual Lengkap (Tabel, Timeline, Kartu Profil Tokoh)
   6. Simulasi Interaktif Step-by-Step
   ========================================================================== */

const CURRICULUM_DATA = [
  {
    id: "bab-ccit",
    roman: "CCIT",
    title: "Materi Inti Cerdas Cermat IT",
    description:
      "Kurikulum terpadu Cerdas Cermat Teknologi Informasi (CCIT) yang mencakup Sejarah TI, Jenis & Fungsi Perangkat Keras/Lunak, Mekanisme Jaringan & Keamanan Kriptografi, serta Sejarah Evolusi ARPANET hingga Internet Modern.",
    subtopics: [
      /* ====================================================================
         SUB-MATERI A: SEJARAH TEKNOLOGI INFORMASI
         ==================================================================== */
      {
        id: "sub-a",
        code: "A",
        title: "A. Sejarah Teknologi Informasi",
        subtitle:
          "Perkembangan teknologi dari era komputer generasi pertama (ENIAC) hingga komputasi awan modern, serta profil tokoh penting: Charles Babbage, Alan Turing, dan John von Neumann.",
        narratorSummary:
          "Sub Materi A: Sejarah Teknologi Informasi. Untuk mengingat lima generasi komputer dengan mudah, gunakan jembatan keledai TA, TRA, IC, MIK, AI. Generasi pertama menggunakan Tabung Hampa Udara seperti komputer ENIAC tahun 1946. Generasi kedua menggunakan Transistor. Generasi ketiga menggunakan IC atau Sirkuit Terpadu. Generasi keempat menggunakan Mikroprosesor VLSI. Generasi kelima menggunakan Kecerdasan Buatan dan Komputasi Awan. Tiga tokoh utama yang wajib diingat adalah: Satu, Charles Babbage sebagai Bapak Komputer Dunia yang merancang Difference Engine dan Analytical Engine. Dua, Alan Turing sebagai Bapak Ilmu Komputer Modern dan AI yang menciptakan Turing Machine, memecahkan sandi Enigma, dan merumuskan Turing Test. Tiga, John von Neumann yang menggagas Arsitektur Von Neumann dengan konsep Stored Program, yaitu program dan data disimpan bersama di dalam memori.",
        sections: [
          {
            id: "sec-a1",
            label: "1. Era ENIAC hingga Cloud Modern"
          },
          {
            id: "sec-a2",
            label: "2. Tokoh Penting: Babbage, Turing, Von Neumann"
          },
          {
            id: "sec-a3",
            label: "3. Jembatan Keledai & Flashcard Hafalan"
          },
          {
            id: "sec-a4",
            label: "4. Simulasi Evolusi Komputer"
          }
        ],
        preQuizSummary: [
          {
            title: "Jembatan Keledai 5 Generasi Komputer",
            text: "Ingat rumus <strong>TA – TRA – IC – MIK – AI</strong>: Gen 1 = <strong>TA</strong>bung Hampa (ENIAC, UNIVAC), Gen 2 = <strong>TRA</strong>nsistor, Gen 3 = <strong>IC</strong> (Integrated Circuit), Gen 4 = <strong>MIK</strong>roprosesor (VLSI / Intel 4004), Gen 5 = <strong>AI & Cloud Computing</strong> (ULSI)."
          },
          {
            title: "Fakta Kunci ENIAC (1946)",
            text: "Singkatan dari <em>Electronic Numerical Integrator and Computer</em>. Dirancang oleh <strong>John Mauchly & J. Presper Eckert</strong> di University of Pennsylvania. Menggunakan ±18.000 tabung hampa udara, berat ±30 ton, daya 150 kW."
          },
          {
            title: "Trio Tokoh Bapak Komputer (BA-TU-NE)",
            text: "<strong>Charles Babbage</strong> = Bapak Komputer (Analytical Engine). <strong>Alan Turing</strong> = Bapak Ilmu Komputer & AI (Mesin Turing, pemecah Enigma, Turing Test). <strong>John von Neumann</strong> = Arsitektur Stored-Program (CPU + Memori Utama + I/O)."
          },
          {
            title: "Komputasi Awan Modern (Cloud)",
            text: "3 Layanan Utama Cloud: <strong>IaaS</strong> (Sewa Infrastruktur/Server virtual), <strong>PaaS</strong> (Platform buat developer koding), <strong>SaaS</strong> (Aplikasi siap pakai seperti Google Docs, Canva, Gmail)."
          }
        ],
        contentHtml: `
          <!-- BAGIAN JEMBATAN KELEDAI (MUDAH DIINGAT MURID) -->
          <div class="mnemonic-booster-card" id="sec-a3">
            <div class="mnemonic-header">
              <span class="mnemonic-badge">🧠 Jembatan Keledai & Rumus Cepat Hafal CCIT</span>
              <span style="font-size:12px;color:var(--text-muted);">Baca bagian ini selama 1 menit agar langsung hafal di luar kepala!</span>
            </div>
            <div class="mnemonic-grid">
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">1. Rumus 5 Generasi: "TA - TRA - IC - MIK - AI"</span>
                <p class="mnemonic-meaning">
                  • <strong>TA</strong> (Gen 1: 1940–1956) = <strong>Tabung Hampa Udara</strong> (<em>Vacuum Tube</em>) → Contoh: <strong>ENIAC & UNIVAC I</strong>.<br/>
                  • <strong>TRA</strong> (Gen 2: 1956–1963) = <strong>Transistor</strong> → Ukuran mengecil, hemat daya, bahasa Assembly/COBOL/FORTRAN.<br/>
                  • <strong>IC</strong> (Gen 3: 1964–1971) = <strong>Integrated Circuit</strong> (Chip Sirkuit Terpadu) → Multiprogramming (IBM S/360).<br/>
                  • <strong>MIK</strong> (Gen 4: 1971–Kini) = <strong>Mikroprosesor (VLSI)</strong> → Intel 4004, lahirnya PC, Laptop & Smartphone.<br/>
                  • <strong>AI</strong> (Gen 5: Kini–Masa Depan) = <strong>AI, ULSI & Cloud Computing</strong> → Komputasi Awan (IaaS, PaaS, SaaS) & IoT.
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">2. Rumus 3 Tokoh Utama: "BA - TU - NE"</span>
                <p class="mnemonic-meaning">
                  • <strong>BA (Charles Babbage)</strong> = <strong>Bapak Komputer Dunia</strong> → Merancang <em>Difference Engine</em> (1822) & <em>Analytical Engine</em> (1837).<br/>
                  • <strong>TU (Alan Turing)</strong> = <strong>Bapak Ilmu Komputer & AI</strong> → <em>Universal Turing Machine</em>, pemecah sandi <strong>Enigma</strong> (Mesin Bombe), & <strong>Turing Test</strong>.<br/>
                  • <strong>NE (John von Neumann)</strong> = <strong>Arsitek Komputer Modern</strong> → Konsep <em>Stored-Program</em> (program & data disimpan bersama di memori RAM).
                </p>
              </div>
            </div>

            <!-- KARTU FLASHCARD INTERAKTIF -->
            <div style="margin-top:16px;">
              <strong style="font-size:13px;color:var(--text-primary);display:block;margin-bottom:6px;">
                🃏 Kartu Flashcard Latihan Ingatan Cepat (Klik Kartu untuk Membuka Jawaban):
              </strong>
              <div class="flashcard-deck-grid">
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PERTANYAAN CEPAT #1</div>
                    <div class="flashcard-q">Komputer elektronik generasi pertama tahun 1946 yang berbobot 30 ton dan memakai 18.000 tabung hampa udara adalah?</div>
                    <div class="flashcard-a"><strong>ENIAC</strong> (<em>Electronic Numerical Integrator and Computer</em>), dirancang oleh <strong>John Mauchly</strong> & <strong>J. Presper Eckert</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PERTANYAAN CEPAT #2</div>
                    <div class="flashcard-q">Siapakah tokoh yang dijuluki Bapak Komputer karena merancang Analytical Engine pada abad ke-19?</div>
                    <div class="flashcard-a"><strong>Charles Babbage</strong> (Matematikawan Inggris, 1791–1871). Dibantu oleh <strong>Ada Lovelace</strong> sebagai programmer pertama.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PERTANYAAN CEPAT #3</div>
                    <div class="flashcard-q">Apa inti dari Arsitektur John von Neumann yang masih dipakai komputer & smartphone saat ini?</div>
                    <div class="flashcard-a">Konsep <strong>Stored-Program Computer</strong>: Instruksi program dan data disimpan bersama dalam satu memori utama (RAM) dan dieksekusi oleh CPU (ALU + CU).</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PERTANYAAN CEPAT #4</div>
                    <div class="flashcard-q">Apa kontribusi terbesar Alan Turing pada Perang Dunia II dan bidang Kecerdasan Buatan (AI)?</div>
                    <div class="flashcard-a">Memecahkan mesin sandi <strong>Enigma</strong> milik Jerman menggunakan mesin <em>Bombe</em>, serta menciptakan <strong>Turing Test</strong> (1950) dan konsep <strong>Turing Machine</strong> (1936).</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 1: PERKEMBANGAN TEKNOLOGI KOMPUTER PERTAMA HINGGA MODERN -->
          <div class="info-card" id="sec-a1">
            <h3>🏛️ 1. Perkembangan Teknologi: Dari Komputer Generasi Pertama (ENIAC) hingga Komputasi Awan Modern</h3>
            <p>
              Istilah <strong>Teknologi Informasi (Information Technology / IT)</strong> merujuk pada segala teknologi yang membantu manusia dalam membuat, mengubah, menyimpan, mengomunikasikan, dan menyebarkan informasi. Evolusi perangkat komputasi dibagi menjadi <strong>5 Generasi Utama</strong> berdasarkan komponen elektronik pengolah datanya:
            </p>

            <div class="ccit-timeline">
              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">GENERASI I (1940 – 1956) • TABUNG HAMPA UDARA (VACUUM TUBE)</span>
                <h4>Era Raksasa Elektronik: ENIAC, EDVAC, dan UNIVAC I</h4>
                <p>
                  Komputer generasi pertama mengandalkan <strong>Tabung Hampa Udara (<em>Vacuum Tube</em>)</strong> sebagai penguat sinyal dan sakelar elektronik. Ukurannya sebesar satu ruangan penuh, menghasilkan panas luar biasa, membutuhkan daya listrik sangat besar, dan diprogram langsung menggunakan <strong>Bahasa Mesin (Biner 0 dan 1)</strong>.
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>ENIAC (1946) — <em>Electronic Numerical Integrator and Computer</em>:</strong> Dikembangkan oleh <strong>John Mauchly</strong> dan <strong>J. Presper Eckert</strong> di University of Pennsylvania untuk menghitung tabel tembakan artileri militer AS. Memiliki <strong>±18.000 tabung hampa</strong>, berat <strong>30 ton</strong>, luas 167 m², dan daya 150.000 Watt.</li>
                  <li><strong>Colossus (1943):</strong> Komputer elektronik pemecah kode Lorenz di Inggris (dirancang Tommy Flowers).</li>
                  <li><strong>EDVAC (1949):</strong> Komputer yang mulai menerapkan konsep penyimpanan program di memori (<em>Stored-Program</em>).</li>
                  <li><strong>UNIVAC I (1951) — <em>Universal Automatic Computer I</em>:</strong> Komputer komersial pertama di dunia yang dijual ke Biro Sensus Amerika Serikat.</li>
                </ul>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">GENERASI II (1956 – 1963) • TRANSISTOR</span>
                <h4>Revolusi Semikonduktor & Bahasa Tingkat Tinggi Awal</h4>
                <p>
                  Penemuan <strong>Transistor</strong> di Bell Labs (oleh John Bardeen, Walter Brattain, dan William Shockley) menggantikan tabung hampa yang mudah terbakar. Komputer menjadi jauh lebih kecil, lebih cepat, lebih hemat energi, dan menggunakan memori inti magnetik (<em>Magnetic Core Memory</em>).
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li>Mulai menggunakan <strong>Bahasa Assembly</strong> serta bahasa pemrograman tingkat tinggi awal seperti <strong>FORTRAN</strong> (<em>Formula Translator</em>, untuk sains/teknik) dan <strong>COBOL</strong> (<em>Common Business Oriented Language</em>, dipelopori Grace Hopper untuk bisnis).</li>
                  <li>Contoh komputer: <strong>IBM 1401</strong>, <strong>IBM 7090</strong>, <strong>UNIVAC III</strong>, dan <strong>PDP-1</strong>.</li>
                </ul>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">GENERASI III (1964 – 1971) • INTEGRATED CIRCUIT (IC / SIRKUIT TERPADU)</span>
                <h4>Ratusan Transistor dalam Satu Keping Silikon</h4>
                <p>
                  Dikembangkan oleh <strong>Jack Kilby</strong> (Texas Instruments) dan <strong>Robert Noyce</strong> (Fairchild Semiconductor). Satu chip <strong>IC (Integrated Circuit)</strong> memadatkan ratusan transistor, resistor, dan kapasitor di atas keping silikon kecil.
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li>Komputer mulai menggunakan <strong>keyboard dan monitor</strong> (bukan lagi sekadar kartu berlubang / <em>punched card</em>).</li>
                  <li>Mendukung <strong>Sistem Operasi (Operating System)</strong> dan <strong>Multiprogramming</strong> (menjalankan beberapa program sekaligus).</li>
                  <li>Contoh legendaris: <strong>IBM System/360</strong> dan minikomputer <strong>DEC PDP-8</strong>.</li>
                </ul>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">GENERASI IV (1971 – SEKARANG) • MIKROPROSESOR (LSI & VLSI)</span>
                <h4>Lahirnya Personal Computer (PC), Laptop, dan Mobile</h4>
                <p>
                  Teknologi <strong>VLSI (<em>Very Large Scale Integration</em>)</strong> menyatukan ribuan hingga miliaran transistor ke dalam satu keping <strong>Mikroprosesor (CPU Chip)</strong>.
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Intel 4004 (1971):</strong> Mikroprosesor komersial pertama di dunia dalam satu chip tunggal (dirancang oleh Ted Hoff, Federico Faggin, dkk.).</li>
                  <li>Melahirkan era komputer pribadi: <strong>Altair 8800 (1975)</strong>, <strong>Apple I & Apple II (1976–1977 oleh Steve Jobs & Steve Wozniak)</strong>, serta <strong>IBM PC (1981)</strong> dengan sistem operasi MS-DOS dari Microsoft (Bill Gates & Paul Allen).</li>
                  <li>Munculnya antarmuka grafis <strong>GUI (<em>Graphical User Interface</em>)</strong> dan mouse (dipelopori Xerox PARC, dipopulerkan Apple Macintosh 1984 & Microsoft Windows).</li>
                </ul>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">GENERASI V & ERA MODERN (SEKARANG – MASA DEPAN) • ULSI, AI & CLOUD COMPUTING</span>
                <h4>Komputasi Awan (Cloud Computing), Kecerdasan Buatan (AI), dan Komputasi Kuantum</h4>
                <p>
                  Berbasis teknologi <strong>ULSI (<em>Ultra Large Scale Integration</em>)</strong>, pemrosesan paralel masif (GPU/TPU), <strong>Kecerdasan Buatan (<em>Artificial Intelligence / Machine Learning</em>)</strong>, dan <strong>Komputasi Awan (<em>Cloud Computing</em>)</strong>.
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Komputasi Awan (Cloud Computing):</strong> Penyediaan sumber daya komputasi (server, storage, database, software) secara <em>on-demand</em> melalui internet tanpa harus memiliki server fisik sendiri. Terbagi menjadi 3 model layanan utama:
                    <br/>1. <strong>IaaS (<em>Infrastructure as a Service</em>):</strong> Menyewa infrastruktur dasar seperti server virtual, jaringan, dan storage (Contoh: <em>AWS EC2, Google Compute Engine, Microsoft Azure VM</em>).
                    <br/>2. <strong>PaaS (<em>Platform as a Service</em>):</strong> Menyediakan lingkungan platform siap pakai bagi programmer untuk membangun & menguji aplikasi tanpa mengurus OS server (Contoh: <em>Google App Engine, Heroku, Vercel</em>).
                    <br/>3. <strong>SaaS (<em>Software as a Service</em>):</strong> Perangkat lunak siap pakai yang langsung diakses pengguna lewat browser/aplikasi (Contoh: <em>Google Workspace / Docs, Microsoft 365, Canva, Zoom</em>).
                  </li>
                </ul>
              </div>
            </div>

            <!-- TABEL RINGKASAN PERBANDINGAN 5 GENERASI KOMPUTER -->
            <div class="data-table-wrap" style="margin-top:16px;">
              <table class="logic-table">
                <thead>
                  <tr>
                    <th>Generasi</th>
                    <th>Periode Tahun</th>
                    <th>Komponen Utama</th>
                    <th>Bahasa & Sistem</th>
                    <th>Contoh Komputer Ikonik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Generasi I</strong></td>
                    <td>1940 – 1956</td>
                    <td><strong>Tabung Hampa Udara</strong> (<em>Vacuum Tube</em>)</td>
                    <td>Bahasa Mesin (Biner 0 & 1)</td>
                    <td><strong>ENIAC</strong>, EDVAC, UNIVAC I, Colossus</td>
                  </tr>
                  <tr>
                    <td><strong>Generasi II</strong></td>
                    <td>1956 – 1963</td>
                    <td><strong>Transistor</strong> & Memori Inti Magnetik</td>
                    <td>Assembly, FORTRAN, COBOL</td>
                    <td>IBM 1401, IBM 7090, PDP-1</td>
                  </tr>
                  <tr>
                    <td><strong>Generasi III</strong></td>
                    <td>1964 – 1971</td>
                    <td><strong>IC (Integrated Circuit)</strong> / Chip Silikon</td>
                    <td>Sistem Operasi & Multiprogramming</td>
                    <td>IBM System/360, DEC PDP-8</td>
                  </tr>
                  <tr>
                    <td><strong>Generasi IV</strong></td>
                    <td>1971 – Sekarang</td>
                    <td><strong>Mikroprosesor (LSI / VLSI)</strong></td>
                    <td>GUI, C, Python, Java, Windows/macOS/Linux</td>
                    <td>Intel 4004, Apple II, IBM PC, Laptop</td>
                  </tr>
                  <tr>
                    <td><strong>Generasi V & Modern</strong></td>
                    <td>Sekarang – Masa Depan</td>
                    <td><strong>ULSI, AI Accelerator (GPU/NPU) & Cloud</strong></td>
                    <td>Natural Language, AI/ML, Cloud (IaaS/PaaS/SaaS)</td>
                    <td>AWS/GCP Cloud, Superkomputer AI, Quantum PC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SUB-POIN 2: PROFIL TOKOH-TOKOH PENTING SEJARAH TI -->
          <div class="info-card" id="sec-a2" style="margin-top:16px;">
            <h3>👨‍🔬 2. Tokoh-Tokoh Penting dalam Sejarah Teknologi Informasi</h3>
            <p>
              Dalam perlombaan <strong>Cerdas Cermat IT (CCIT)</strong>, terdapat tiga tokoh fondasi utama yang wajib dikuasai secara mendalam (<strong>Charles Babbage, Alan Turing, dan John von Neumann</strong>) beserta tokoh pelopor pendukungnya:
            </p>

            <div class="tokoh-grid">
              <!-- Tokoh 1: Charles Babbage -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">⚙️</div>
                  <div class="tokoh-title-wrap">
                    <h4>Charles Babbage (1791–1871)</h4>
                    <span class="tokoh-role-pill">Bapak Komputer Dunia (Father of the Computer)</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li>Matematikawan dan penemu asal Inggris yang pertama kali menggagas konsep <strong>komputer mekanik yang dapat diprogram</strong>.</li>
                  <li><strong>Difference Engine (1822):</strong> Mesin hitung mekanik otomatis untuk menghitung tabel matematika/polinomial tanpa kesalahan manusia.</li>
                  <li><strong>Analytical Engine (1837):</strong> Rancangan komputer tujuan umum (<em>general-purpose computer</em>) pertama di dunia. Sudah memiliki 4 komponen dasar komputer modern:
                    <br/>• <em>The Mill</em> (setara <strong>ALU / CPU</strong>)
                    <br/>• <em>The Store</em> (setara <strong>Memori / RAM</strong>)
                    <br/>• <em>Reader</em> (Input kartu berlubang / <em>Punched Cards</em>)
                    <br/>• <em>Printer</em> (Output)
                  </li>
                </ul>
                <div class="tokoh-key-quote">
                  💡 <strong>Kata Kunci Soal CCIT:</strong> Jika soal menyebut <em>"Bapak Komputer"</em>, <em>"Difference Engine"</em>, atau <em>"Analytical Engine"</em> → Jawabannya pasti <strong>Charles Babbage</strong>!
                </div>
              </div>

              <!-- Tokoh 2: Alan Turing -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">🔐</div>
                  <div class="tokoh-title-wrap">
                    <h4>Alan Mathison Turing (1912–1954)</h4>
                    <span class="tokoh-role-pill">Bapak Ilmu Komputer Modern & Kecerdasan Buatan (AI)</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li><strong>Mesin Turing (<em>Universal Turing Machine</em>, 1936):</strong> Model matematika teoretis yang menjadi fondasi seluruh algoritma dan cara kerja CPU modern dalam memproses simbol pada pita memori.</li>
                  <li><strong>Pemecah Sandi Enigma (Perang Dunia II):</strong> Di pusat kriptografi <em>Bletchley Park</em> (Inggris), Turing merancang mesin elektromekanis bernama <strong>The Bombe</strong> untuk mendekripsi komunikasi rahasia mesin <strong>Enigma</strong> milik militer Nazi Jerman.</li>
                  <li><strong>Turing Test (1950):</strong> Dalam makalah <em>"Computing Machinery and Intelligence"</em>, ia mengusulkan uji eksperimen (awalnya disebut <em>Imitation Game</em>) untuk menilai apakah sebuah mesin mampu menunjukkan perilaku cerdas setara manusia.</li>
                  <li>Penghargaan tertinggi di bidang ilmu komputer dunia dinamai <strong>ACM A.M. Turing Award</strong> (setara Nobel Ilmu Komputer).</li>
                </ul>
                <div class="tokoh-key-quote">
                  💡 <strong>Kata Kunci Soal CCIT:</strong> Jika soal menyebut <em>"Universal Turing Machine"</em>, <em>"Sandi Enigma / Mesin Bombe"</em>, atau <em>"Turing Test (Uji Kecerdasan Buatan)"</em> → Jawabannya <strong>Alan Turing</strong>!
                </div>
              </div>

              <!-- Tokoh 3: John von Neumann -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">🧠</div>
                  <div class="tokoh-title-wrap">
                    <h4>John von Neumann (1903–1957)</h4>
                    <span class="tokoh-role-pill">Bapak Arsitektur Komputer Modern (Stored-Program)</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li>Matematikawan dan fisikawan Amerika-Hungaria yang menulis dokumen bersejarah <em>"First Draft of a Report on the EDVAC"</em> pada tahun <strong>1945</strong>.</li>
                  <li><strong>Arsitektur Von Neumann:</strong> Sebelumnya (pada ENIAC), mengubah program komputer mengharuskan teknisi mencabut dan memasang ulang ratusan kabel fisik. Von Neumann merevolusi hal ini dengan konsep <strong>Stored-Program Computer</strong>.</li>
                  <li><strong>Prinsip Stored-Program:</strong> Baik <strong>instruksi program</strong> maupun <strong>data</strong> disimpan bersama dalam satu ruang alamat <strong>Memori Utama (RAM)</strong> yang sama dalam bentuk kode biner.</li>
                  <li>Membagi arsitektur komputer menjadi 3 bagian utama yang terhubung oleh <em>System Bus</em>: <strong>1) CPU (Control Unit + ALU)</strong>, <strong>2) Memory Unit (RAM)</strong>, dan <strong>3) Input/Output (I/O)</strong>.</li>
                </ul>
                <div class="tokoh-key-quote">
                  💡 <strong>Kata Kunci Soal CCIT:</strong> Jika soal menyebut <em>"Stored-Program Concept"</em>, <em>"Program dan data disimpan dalam satu memori"</em>, atau <em>"Laporan EDVAC 1945"</em> → Jawabannya <strong>John von Neumann</strong>!
                </div>
              </div>
            </div>

            <!-- Tokoh Pendukung Penting Lainnya -->
            <div style="margin-top:16px;padding:14px;background:var(--bg-surface-elevated);border-radius:10px;border:1px solid var(--border-subtle);">
              <h4 style="margin-bottom:8px;color:var(--accent-primary);">🌟 Tokoh Pelopor TI Pendukung yang Sering Muncul di Soal Cerdas Cermat:</h4>
              <div class="concept-grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;">
                <div>
                  <strong>• Ada Lovelace (Augusta Ada King):</strong> Putri penyair Lord Byron yang menulis algoritma pertama untuk mesin <em>Analytical Engine</em> milik Charles Babbage → Dijuluki <strong>Programmer Komputer Pertama di Dunia</strong>.
                </div>
                <div>
                  <strong>• Grace Hopper:</strong> Ilmuwan komputer Angkatan Laut AS yang menciptakan <strong>Compiler pertama (A-0)</strong>, mempelopori bahasa <strong>COBOL</strong>, dan mempopulerkan istilah <em>"debugging"</em> (menemukan ngengat asli di komputer Mark II).
                </div>
                <div>
                  <strong>• George Boole:</strong> Penemu <strong>Aljabar Boolean</strong> (Logika Benar/Salah: AND, OR, NOT) yang menjadi dasar rangkaian gerbang logika digital biner.
                </div>
                <div>
                  <strong>• Blaise Pascal & Gottfried Wilhelm Leibniz:</strong> Penemu kalkulator mekanik awal pada abad ke-17 (<em>Pascaline</em> tahun 1642 untuk tambah/kurang & <em>Stepped Reckoner</em> untuk kali/bagi).
                </div>
              </div>
            </div>
          </div>
        `,
        simulator: {
          title: "Simulasi Interaktif: Jejak Evolusi Generasi Komputer & Arsitektur Von Neumann",
          codeLines: [
            "// TELUSURI EVOLUSI KOMPUTER DARI ERA MEKANIK HINGGA CLOUD MODERN",
            "Step 1: [1837] Charles Babbage merancang Analytical Engine (Mill + Store)",
            "Step 2: [1936-1943] Alan Turing: Universal Turing Machine & Mesin Bombe (Enigma)",
            "Step 3: [1945] John von Neumann merumuskan Stored-Program Architecture (EDVAC)",
            "Step 4: [1946 - Gen I] ENIAC menyala: 18.000 Tabung Hampa, 30 Ton, Bahasa Biner",
            "Step 5: [1956 - Gen II] Transistor menggantikan Tabung Hampa (Hemat Daya, COBOL/FORTRAN)",
            "Step 6: [1964 - Gen III] Integrated Circuit (IC): Ratusan transistor dalam 1 Chip Silikon",
            "Step 7: [1971 - Gen IV] Mikroprosesor Intel 4004 (VLSI) -> Lahirnya PC & Laptop",
            "Step 8: [Era Modern - Gen V] Cloud Computing (IaaS, PaaS, SaaS) & Kecerdasan Buatan (AI)"
          ],
          steps: [
            {
              line: 1,
              vars: { Era: "Abad ke-19 (1837)", Tokoh: "Charles Babbage & Ada Lovelace", Komponen: "Roda Gigi Mekanik (Mill & Store)", Status: "Konsep Dasar CPU & Memori" },
              explanation: "Charles Babbage merancang Analytical Engine yang memiliki unit pemroses (Mill) dan penyimpanan (Store). Ada Lovelace menyusun algoritma pertamanya.",
              output: "[1837] Analytical Engine dirancang -> Fondasi komputer programmable pertama."
            },
            {
              line: 2,
              vars: { Era: "1936 – 1945", Tokoh: "Alan Turing", Komponen: "Turing Machine & Mesin Bombe", Status: "Fondasi Algoritma & Kriptanalisis" },
              explanation: "Alan Turing membuktikan bahwa satu mesin universal dapat menjalankan algoritma apa pun yang dikodekan, lalu memecahkan sandi Enigma di Bletchley Park.",
              output: "[1936-1943] Turing Machine & Dekripsi Enigma berhasil dijalankan."
            },
            {
              line: 3,
              vars: { Era: "1945", Tokoh: "John von Neumann", Komponen: "CPU (ALU+CU) + RAM + I/O", Status: "Stored-Program Concept" },
              explanation: "John von Neumann mengusulkan agar instruksi program dan data disimpan bersama dalam satu memori elektronik (RAM) sehingga tidak perlu mengubah kabel fisik.",
              output: "[1945] Arsitektur Von Neumann diadopsi -> Standar komputer modern hingga kini."
            },
            {
              line: 4,
              vars: { Era: "Generasi I (1946)", Komputer: "ENIAC (Mauchly & Eckert)", Komponen: "18.000 Tabung Hampa Udara", Berat_Daya: "30 Ton / 150 kW" },
              explanation: "Generasi Pertama menggunakan Tabung Hampa Udara (Vacuum Tube). ENIAC mampu melakukan 5.000 operasi penjumlahan per detik namun sangat besar dan panas.",
              output: "[GEN-1] ENIAC Aktif: Komponen = Tabung Hampa | Bahasa = Mesin Biner (0/1)."
            },
            {
              line: 5,
              vars: { Era: "Generasi II (1956-1963)", Komputer: "IBM 1401 / IBM 7090", Komponen: "Transistor Semikonduktor", Bahasa: "Assembly, FORTRAN, COBOL" },
              explanation: "Generasi Kedua mengganti tabung hampa dengan Transistor. Ukuran komputer menyusut drastis, lebih cepat, dan mulai menggunakan bahasa FORTRAN & COBOL.",
              output: "[GEN-2] Transistor Aktif: Ukuran mengecil, efisiensi daya meningkat tajam."
            },
            {
              line: 6,
              vars: { Era: "Generasi III (1964-1971)", Komputer: "IBM System/360", Komponen: "IC (Integrated Circuit)", Fitur: "Sistem Operasi & Multiprogramming" },
              explanation: "Generasi Ketiga memadatkan ratusan transistor ke dalam keping silikon Integrated Circuit (IC). Komputer mulai memakai monitor, keyboard, dan sistem operasi.",
              output: "[GEN-3] Integrated Circuit (IC) Aktif: Multiprogramming berjalan serentak."
            },
            {
              line: 7,
              vars: { Era: "Generasi IV (1971-Kini)", Komputer: "Intel 4004, Apple II, IBM PC", Komponen: "Mikroprosesor (VLSI)", Fitur: "GUI, Mouse, PC & Mobile" },
              explanation: "Generasi Keempat menyatukan seluruh unit CPU ke dalam satu chip Mikroprosesor (VLSI). Melahirkan komputer rumah (PC), laptop, dan smartphone.",
              output: "[GEN-4] Mikroprosesor VLSI Aktif -> Era Personal Computer & Mobile dimulai."
            },
            {
              line: 8,
              vars: { Era: "Generasi V & Modern", Teknologi: "Cloud Computing & AI", Layanan_Cloud: "IaaS, PaaS, SaaS", Komponen: "ULSI, GPU/NPU Cluster, Quantum" },
              explanation: "Era modern menggabungkan Komputasi Awan (IaaS, PaaS, SaaS) dengan Kecerdasan Buatan (AI/Machine Learning) yang dapat diakses dari mana saja melalui internet.",
              output: "[GEN-5 MODERN] Cloud & AI Aktif -> Komputasi terdistribusi global siap melayani!"
            }
          ]
        }
      },

      /* ====================================================================
         SUB-MATERI B: JENIS DAN FUNGSI TEKNOLOGI INFORMASI
         ==================================================================== */
      {
        id: "sub-b",
        code: "B",
        title: "B. Jenis dan Fungsi Teknologi Informasi",
        subtitle:
          "Kategori perangkat keras (Hardware) dan perangkat lunak (Software), serta fungsi dan penerapan nyata teknologi informasi di bidang pendidikan, bisnis, dan kesehatan.",
        narratorSummary:
          "Sub Materi B: Jenis dan Fungsi Teknologi Informasi. Komponen sistem komputer terdiri dari Hardware, Software, dan Brainware. Pertama, Hardware atau perangkat keras dibagi menjadi empat kelompok sesuai siklus I P O S, yaitu: Input untuk memasukkan data seperti Keyboard, Mouse, dan Scanner. Process untuk mengolah data seperti CPU, ALU, Control Unit, GPU, dan RAM. Output untuk menampilkan hasil seperti Monitor, Printer, dan Speaker. Storage untuk menyimpan data permanen seperti SSD, Harddisk, dan Flashdisk. Kedua, Software atau perangkat lunak dibagi menjadi Sistem Operasi seperti Windows dan Linux, Perangkat Lunak Aplikasi seperti MS Office dan Browser, Bahasa Pemrograman seperti Python dan Java, serta Utility seperti Antivirus. Ketiga, penerapan TI sangat vital di bidang Pendidikan melalui LMS dan CBT, bidang Bisnis melalui E-Commerce, ERP, dan POS, serta bidang Kesehatan melalui Rekam Medis Elektronik dan Telemedicine.",
        sections: [
          {
            id: "sec-b1",
            label: "1. Kategori Perangkat Keras (Hardware)"
          },
          {
            id: "sec-b2",
            label: "2. Kategori Perangkat Lunak (Software)"
          },
          {
            id: "sec-b3",
            label: "3. Fungsi & Penerapan (Pendidikan, Bisnis, Kesehatan)"
          },
          {
            id: "sec-b4",
            label: "4. Jembatan Keledai & Simulasi IPO-S"
          }
        ],
        preQuizSummary: [
          {
            title: "Siklus Hardware: Rumus I – P – O – S",
            text: "<strong>Input</strong> (Keyboard, Mouse, Scanner, Mic) → <strong>Process</strong> (CPU: ALU + CU + Register, GPU, RAM) → <strong>Output</strong> (Monitor, Printer, Proyektor, Speaker) → <strong>Storage</strong> (SSD, HDD, Flashdisk)."
          },
          {
            title: "Perbedaan RAM vs ROM & SSD vs HDD",
            text: "<strong>RAM</strong> = <em>Volatile</em> (data hilang saat listrik mati, tempat kerja sementara CPU). <strong>ROM</strong> = <em>Non-Volatile</em> (berisi BIOS/UEFI). <strong>SSD</strong> menggunakan chip <em>Flash Memory</em> (tanpa piringan berputar, jauh lebih cepat & tahan guncangan dibanding HDD magnetik)."
          },
          {
            title: "4 Kategori Software: Rumus S – A – B – U",
            text: "<strong>S</strong>istem Operasi (Windows, Linux, macOS, Android), <strong>A</strong>plikasi (Word, Excel, Chrome, Canva), <strong>B</strong>ahasa Pemrograman (Python, Java, C++), <strong>U</strong>tility/Program Bantu (Antivirus, WinRAR, Disk Cleanup)."
          },
          {
            title: "Penerapan 3 Bidang Utama (Pendidikan, Bisnis, Kesehatan)",
            text: "<strong>Pendidikan</strong>: LMS (Moodle/Classroom), CBT, E-Library. <strong>Bisnis</strong>: E-Commerce, ERP, CRM, POS Kasir, FinTech/QRIS. <strong>Kesehatan</strong>: Rekam Medis Elektronik (RME/EHR), Telemedicine, SIMRS, CT-Scan/MRI Digital."
          }
        ],
        contentHtml: `
          <!-- BAGIAN JEMBATAN KELEDAI SUB-MATERI B -->
          <div class="mnemonic-booster-card" id="sec-b4">
            <div class="mnemonic-header">
              <span class="mnemonic-badge">🧠 Jembatan Keledai & Rumus Cepat Hafal Sub-Materi B</span>
              <span style="font-size:12px;color:var(--text-muted);">Pahami pola singkat ini sebelum mengerjakan 20 soal latihan!</span>
            </div>
            <div class="mnemonic-grid">
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">1. Siklus Hardware: "I - P - O - S"</span>
                <p class="mnemonic-meaning">
                  • <strong>I (Input Device)</strong> = Masuk data → <em>Keyboard, Mouse, Scanner, Barcode Reader, Webcam, Mic</em>.<br/>
                  • <strong>P (Process Device)</strong> = Olah data → <em>CPU (ALU + CU + Register), GPU, Motherboard, RAM</em>.<br/>
                  • <strong>O (Output Device)</strong> = Keluar hasil → <em>Monitor, Printer, Plotter, Proyektor, Speaker</em>.<br/>
                  • <strong>S (Storage Device)</strong> = Simpan permanen → <em>SSD (Flash), HDD (Magnetik), Flashdisk, Optical Disc</em>.
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">2. Kategori Software: "S - A - B - U"</span>
                <p class="mnemonic-meaning">
                  • <strong>S (Sistem Operasi / OS)</strong> = Pengatur utama hardware → <em>Windows, Linux, macOS, Android, iOS</em>.<br/>
                  • <strong>A (Aplikasi)</strong> = Penunjang tugas user → <em>Word, Excel, PowerPoint, Chrome, Photoshop</em>.<br/>
                  • <strong>B (Bahasa Pemrograman)</strong> = Pembuat software → <em>Python, Java, C++, JavaScript</em>.<br/>
                  • <strong>U (Utility / Program Bantu)</strong> = Pemelihara sistem → <em>Antivirus, WinRAR, Disk Defragmenter</em>.
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">3. Enam Fungsi Dasar TI: "C - P - G - S - R - T"</span>
                <p class="mnemonic-meaning">
                  <strong>Capture</strong> (Menangkap data input) → <strong>Processing</strong> (Mengolah data) → <strong>Generating</strong> (Menghasilkan informasi/laporan) → <strong>Storage</strong> (Menyimpan data) → <strong>Retrieval</strong> (Mengambil/mencari kembali data) → <strong>Transmission</strong> (Mengirimkan data lewat jaringan).
                </p>
              </div>
            </div>

            <!-- KARTU FLASHCARD INTERAKTIF SUB-B -->
            <div style="margin-top:16px;">
              <strong style="font-size:13px;color:var(--text-primary);display:block;margin-bottom:6px;">
                🃏 Kartu Flashcard Latihan Ingatan Cepat Sub-Materi B (Klik Kartu untuk Balik):
              </strong>
              <div class="flashcard-deck-grid">
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">HARDWARE #1</div>
                    <div class="flashcard-q">Bagian di dalam CPU yang bertugas melakukan perhitungan matematika dan perbandingan logika adalah?</div>
                    <div class="flashcard-a"><strong>ALU (<em>Arithmetic Logic Unit</em>)</strong>. Sedangkan yang mengatur alur instruksi adalah <strong>CU (<em>Control Unit</em>)</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">MEMORI #2</div>
                    <div class="flashcard-q">Apa perbedaan sifat penyimpanan antara RAM dan SSD/Harddisk?</div>
                    <div class="flashcard-a"><strong>RAM bersifat Volatile</strong> (data hilang saat listrik mati). <strong>SSD/HDD bersifat Non-Volatile</strong> (data tetap tersimpan permanen meski komputer dimatikan).</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">SOFTWARE #3</div>
                    <div class="flashcard-q">Perangkat lunak yang berfungsi mengelola sumber daya hardware dan menjadi jembatan bagi aplikasi disebut?</div>
                    <div class="flashcard-a"><strong>Sistem Operasi (<em>Operating System / OS</em>)</strong>, contohnya Linux, Windows, macOS, Android, dan iOS.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PENERAPAN TI #4</div>
                    <div class="flashcard-q">Apa istilah untuk layanan konsultasi medis jarak jauh antara dokter dan pasien menggunakan teknologi informasi?</div>
                    <div class="flashcard-a"><strong>Telemedicine (atau Telehealth)</strong>, yang didukung oleh <strong>RME (Rekam Medis Elektronik / EHR)</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 1: HARDWARE -->
          <div class="info-card" id="sec-b1">
            <h3>🖥️ 1. Kategori & Jenis Perangkat Keras (Hardware)</h3>
            <p>
              <strong>Perangkat Keras (<em>Hardware</em>)</strong> adalah seluruh komponen fisik sistem komputer yang dapat dilihat dan disentuh secara langsung. Berdasarkan alur pengolahan data (<strong>Siklus I-P-O-S</strong>), hardware diklasifikasikan menjadi 5 kategori:
            </p>

            <div class="concept-grid" style="margin-top:12px;">
              <div class="concept-box">
                <h4>1. Perangkat Masukan (Input Device)</h4>
                <p>Berfungsi menangkap data atau perintah dari pengguna/lingkungan luar dan mengubahnya menjadi sinyal digital biner untuk dikirim ke unit pemroses.</p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Pengetikan & Penunjuk:</strong> Keyboard, Mouse, Touchpad, Trackball, Stylus/Digitizer.</li>
                  <li><strong>Pemindai Optik & Visual:</strong> Scanner, Barcode/QR Reader, OCR (<em>Optical Character Recognition</em>), Kamera Digital/Webcam.</li>
                  <li><strong>Audio & Biometrik:</strong> Microphone, Fingerprint Sensor (Sidik Jari), Pemindai Retina/Wajah.</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>2. Perangkat Pemroses (Process Device)</h4>
                <p>Otak utama komputer yang mengeksekusi instruksi program dan mengolah data mentah menjadi informasi.</p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>CPU (<em>Central Processing Unit</em>):</strong> Terdiri dari 3 bagian inti:
                    <br/>• <strong>ALU (<em>Arithmetic Logic Unit</em>):</strong> Menghitung operasi aritmatika (+, -, ×, ÷) dan logika (AND, OR, perbandingan).
                    <br/>• <strong>CU (<em>Control Unit</em>):</strong> Mengatur dan mengendalikan jalannya instruksi antara memori, ALU, dan I/O.
                    <br/>• <strong>Register:</strong> Memori berukuran sangat kecil namun paling cepat di dalam CPU.
                  </li>
                  <li><strong>GPU (<em>Graphics Processing Unit</em>):</strong> Prosesor khusus pengolah grafis 3D, video, dan komputasi paralel AI.</li>
                  <li><strong>RAM (<em>Random Access Memory</em>):</strong> Memori utama bersifat <strong>Volatile</strong> (sementara; data hilang jika daya listrik mati) untuk menyimpan program yang sedang berjalan.</li>
                  <li><strong>ROM (<em>Read Only Memory</em>):</strong> Memori <strong>Non-Volatile</strong> berisi firmware <strong>BIOS / UEFI</strong> untuk menyalakan komputer pertama kali (<em>Booting</em>).</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>3. Perangkat Keluaran (Output Device)</h4>
                <p>Berfungsi menyajikan hasil pengolahan data dari komputer ke dalam bentuk yang dapat dipahami manusia (visual, suara, atau cetakan fisik).</p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Softcopy (Visual & Audio):</strong> Monitor (LCD, LED, OLED), Proyektor, Speaker, Headphone.</li>
                  <li><strong>Hardcopy (Cetakan Fisik):</strong> Printer (Inkjet, Laserjet, Dot Matrix, Thermal), <strong>Plotter</strong> (pencetak grafis ukuran besar seperti spanduk/peta teknik arsitektur), 3D Printer.</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>4. Perangkat Penyimpanan Sekunder (Storage Device)</h4>
                <p>Menyimpan data dan file secara <strong>permanen (Non-Volatile)</strong> meskipun komputer dimatikan.</p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>SSD (<em>Solid State Drive</em> — SATA / NVMe M.2):</strong> Menggunakan chip <em>Flash Memory</em> tanpa komponen bergerak; kecepatan baca/tulis sangat tinggi dan tahan guncangan.</li>
                  <li><strong>HDD (<em>Hard Disk Drive</em>):</strong> Menggunakan piringan cakram magnetik yang berputar (kapasitas besar, harga ekonomis).</li>
                  <li><strong>Portable & Optical:</strong> USB Flashdisk, Memory Card (SD Card), CD/DVD/Blu-ray Disc.</li>
                </ul>
              </div>
            </div>
            <p style="margin-top:10px;font-size:13px;color:var(--text-secondary);">
              <strong>5. Perangkat Tambahan / Jaringan (Periferal Komunikasi):</strong> <em>NIC (Network Interface Card / LAN Card), Wi-Fi Adapter, Modem, Router, dan Switch</em> yang memungkinkan komputer berkomunikasi dengan perangkat lain. *(Catatan khusus: <strong>Touchscreen / Layar Sentuh</strong> dan <strong>Modem</strong> termasuk perangkat <strong>Hibrida Input-Output / I/O</strong> karena menerima masukan sekaligus mengeluarkan hasil!)*
            </p>
          </div>

          <!-- SUB-POIN 2: SOFTWARE -->
          <div class="info-card" id="sec-b2" style="margin-top:16px;">
            <h3>💿 2. Kategori & Jenis Perangkat Lunak (Software)</h3>
            <p>
              <strong>Perangkat Lunak (<em>Software</em>)</strong> adalah kumpulan instruksi, kode program, dan prosedur digital yang memerintahkan perangkat keras tentang <em>apa yang harus dilakukan</em>. Tanpa software, hardware hanyalah benda mati.
            </p>

            <div class="data-table-wrap" style="margin-top:12px;">
              <table class="logic-table">
                <thead>
                  <tr>
                    <th>Kategori Software</th>
                    <th>Fungsi Utama</th>
                    <th>Contoh Populer yang Wajib Dihafal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Sistem Operasi (Operating System / OS)</strong></td>
                    <td>Perangkat lunak sistem paling mendasar yang mengelola seluruh sumber daya hardware (CPU, RAM, Disk), menyediakan antarmuka pengguna (GUI/CLI), dan menjadi wadah berjalannya aplikasi.</td>
                    <td>
                      • <strong>Desktop/Server:</strong> Microsoft Windows, Linux (Ubuntu, Debian, RedHat), macOS.<br/>
                      • <strong>Mobile:</strong> Android, Apple iOS.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>2. Perangkat Lunak Aplikasi (Application Software)</strong></td>
                    <td>Program yang dirancang khusus untuk membantu pengguna menyelesaikan tugas spesifik sehari-hari (dokumen, angka, desain, komunikasi).</td>
                    <td>
                      • <strong>Perkantoran:</strong> MS Word / Google Docs (Kata), MS Excel / Sheets (Angka/Tabel), PowerPoint (Presentasi).<br/>
                      • <strong>Desain & Multimedia:</strong> Adobe Photoshop, CorelDRAW, Figma, Blender, Premiere Pro.<br/>
                      • <strong>Peramban Web (Browser):</strong> Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>3. Bahasa Pemrograman (Programming Language)</strong></td>
                    <td>Perangkat lunak bahasa dan penerjemah (<em>Compiler / Interpreter</em>) serta IDE untuk menulis dan membangun program komputer baru.</td>
                    <td>Python, Java, C, C++, C#, JavaScript, PHP, Go, Kotlin, Swift (beserta IDE seperti VS Code, IntelliJ IDEA).</td>
                  </tr>
                  <tr>
                    <td><strong>4. Program Bantu (Utility Software)</strong></td>
                    <td>Perangkat lunak sistem untuk merawat, mengamankan, mengoptimalkan kinerja, dan memelihara kesehatan sistem komputer.</td>
                    <td>Antivirus (Windows Defender, Kaspersky), Kompresi File (WinRAR, 7-Zip), Disk Defragmenter, Backup & Recovery Tool.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SUB-POIN 3: FUNGSI & PENERAPAN TI DALAM KEHIDUPAN SEHARI-HARI -->
          <div class="info-card" id="sec-b3" style="margin-top:16px;">
            <h3>🌍 3. Fungsi Teknologi Informasi & Penerapan di Bidang Pendidikan, Bisnis, dan Kesehatan</h3>
            <p>
              Secara teoritis, terdapat <strong>6 Fungsi Utama Teknologi Informasi (C-P-G-S-R-T)</strong>:
              <strong>1) Capture</strong> (Menangkap data masukan), <strong>2) Processing</strong> (Mengolah/menghitung/menganalisis data), <strong>3) Generating</strong> (Menghasilkan informasi berupa tabel, grafik, laporan), <strong>4) Storage</strong> (Menyimpan data ke media rekam), <strong>5) Retrieval</strong> (Mencari & mengambil kembali data yang tersimpan), dan <strong>6) Transmission</strong> (Mengirimkan informasi dari satu lokasi ke lokasi lain melalui jaringan).
            </p>
            <p style="margin-top:8px;">
              Berikut adalah penjabaran penerapan nyata Teknologi Informasi di <strong>3 Bidang Strategis Kehidupan Sehari-hari</strong>:
            </p>

            <div class="tokoh-grid" style="margin-top:12px;">
              <!-- Bidang Pendidikan -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">🎓</div>
                  <div class="tokoh-title-wrap">
                    <h4>A. Bidang Pendidikan (Education)</h4>
                    <span class="tokoh-role-pill">Transformasi Belajar Digital & Merata</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li><strong>LMS (<em>Learning Management System</em>):</strong> Platform pengelolaan kelas digital untuk distribusi materi, pengumpulan tugas, dan diskusi (Contoh: <em>Google Classroom, Moodle, Canvas, Edmodo</em>).</li>
                  <li><strong>E-Learning & Video Conference:</strong> Pembelajaran jarak jauh sinkron maupun asinkron (<em>Ruangguru, Coursera, Zoom, Google Meet</em>).</li>
                  <li><strong>CBT (<em>Computer Based Test</em>):</strong> Pelaksanaan ujian dan asesmen nasional berbasis komputer dengan koreksi skor otomatis yang jujur dan cepat.</li>
                  <li><strong>Perpustakaan Digital (<em>E-Library</em>) & Jurnal Online:</strong> Akses ribuan e-book dan karya ilmiah dari mana saja, ditambah laboratorium virtual (<em>Virtual Lab</em>) untuk simulasi praktikum.</li>
                </ul>
                <div class="tokoh-key-quote">
                  🎯 <strong>Manfaat Utama:</strong> Pembelajaran tidak terbatas ruang dan waktu, hemat kertas (<em>paperless</em>), serta memvisualisasikan konsep abstrak secara interaktif.
                </div>
              </div>

              <!-- Bidang Bisnis -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">💼</div>
                  <div class="tokoh-title-wrap">
                    <h4>B. Bidang Bisnis & Ekonomi (Business)</h4>
                    <span class="tokoh-role-pill">Otomasi Perusahaan & Ekonomi Digital</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li><strong>E-Commerce & Marketplace:</strong> Perdagangan barang dan jasa secara daring 24 jam (B2B, B2C, C2C seperti <em>Tokopedia, Shopee, Amazon</em>) yang memperluas pasar UMKM ke seluruh dunia.</li>
                  <li><strong>ERP (<em>Enterprise Resource Planning</em>):</strong> Sistem informasi terintegrasi yang menyatukan divisi keuangan, gudang/stok, produksi, dan SDM dalam satu database perusahaan (Contoh: <em>SAP, Odoo, Oracle</em>).</li>
                  <li><strong>CRM (<em>Customer Relationship Management</em>):</strong> Sistem pengelolaan data dan layanan pelanggan untuk meningkatkan loyalitas konsumen (Contoh: <em>Salesforce, HubSpot</em>).</li>
                  <li><strong>POS (<em>Point of Sale</em>) & FinTech:</strong> Mesin kasir digital yang otomatis memotong stok gudang saat barang di-scan barcode, terintegrasi dengan pembayaran non-tunai (<strong>QRIS, E-Wallet, Mobile Banking</strong>).</li>
                </ul>
                <div class="tokoh-key-quote">
                  🎯 <strong>Manfaat Utama:</strong> Efisiensi biaya operasional, transaksi instan tanpa uang tunai (<em>cashless</em>), dan pengambilan keputusan bisnis berbasis data (<em>Big Data Analytics</em>).
                </div>
              </div>

              <!-- Bidang Kesehatan -->
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">🏥</div>
                  <div class="tokoh-title-wrap">
                    <h4>C. Bidang Kesehatan / Medis (Healthcare)</h4>
                    <span class="tokoh-role-pill">Presisi Diagnosis & Layanan Pasien Cepat</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li><strong>Rekam Medis Elektronik (RME / <em>Electronic Health Record - EHR</em>):</strong> Penyimpanan riwayat penyakit, alergi obat, dan hasil laboratorium pasien secara digital terpusat sehingga dokter dapat mengaksesnya dengan cepat dan akurat.</li>
                  <li><strong>Telemedicine & Telehealth:</strong> Konsultasi medis jarak jauh antara pasien dan dokter melalui video/chat serta penebusan resep obat digital (Contoh: <em>Halodoc, Alodokter, SatuSehat</em>).</li>
                  <li><strong>SIMRS (Sistem Informasi Manajemen Rumah Sakit):</strong> Mengatur pendaftaran antrean online, ketersediaan kamar rawat inap, stok apotek, hingga klaim BPJS secara otomatis.</li>
                  <li><strong>Pencitraan Medis Digital & AI Kesehatan:</strong> Perangkat <em>CT-Scan, MRI, USG 4D, Rontgen Digital</em>, robot bedah presisi (<em>Da Vinci Surgical System</em>), dan <em>Smartwatch</em> pemantau detak jantung/oksigen darah (IoT Medis).</li>
                </ul>
                <div class="tokoh-key-quote">
                  🎯 <strong>Manfaat Utama:</strong> Meminimalkan kesalahan pembacaan resep/riwayat medis, mempercepat penanganan darurat, dan menjangkau pasien di daerah terpencil.
                </div>
              </div>
            </div>
          </div>
        `,
        simulator: {
          title: "Simulasi Interaktif: Siklus Pengolahan Data I-P-O-S (Hardware, OS, & Aplikasi)",
          codeLines: [
            "// SIMULASI ALUR KERJA HARDWARE & SOFTWARE SAAT KASIR SCAN BARCODE",
            "Step 1: [INPUT DEVICE] Barcode Scanner memindai kode barang -> sinyal biner",
            "Step 2: [SYSTEM BUS & OS] Sistem Operasi meneruskan interupsi input ke RAM",
            "Step 3: [PROCESS - CPU CU] Control Unit mengambil instruksi aplikasi POS dari RAM",
            "Step 4: [PROCESS - CPU ALU] ALU menghitung: Total = Harga_Barang * Jumlah - Diskon",
            "Step 5: [OUTPUT DEVICE] Monitor menampilkan struk & Printer Thermal mencetak nota",
            "Step 6: [STORAGE & TRANSMISSION] SSD menyimpan transaksi & kirim ke Cloud ERP"
          ],
          steps: [
            {
              line: 1,
              vars: { Tahap: "1. INPUT (Capture)", Hardware: "Barcode Scanner (Optik)", Software: "Driver Input OS", Data_Masuk: "Kode: 89910021 (2 Item)" },
              explanation: "Tahap INPUT: Barcode Scanner menangkap pantulan cahaya dari garis kode barang lalu mengubahnya menjadi sinyal digital biner untuk dimasukkan ke komputer.",
              output: "[INPUT] Data tertangkap: Kode Barang #89910021 (Qty: 2)."
            },
            {
              line: 2,
              vars: { Tahap: "2. MEMORY LOAD", Hardware: "RAM (Volatile Memory)", Software: "Sistem Operasi (Windows/Linux)", Status_RAM: "Alamat 0x4F20 terisi data transaksi" },
              explanation: "Sistem Operasi menerima sinyal input dan menempatkan data sementara di dalam RAM (Random Access Memory) agar siap diakses dengan cepat oleh CPU.",
              output: "[OS -> RAM] Data transaksi dimuat ke memori utama (RAM)."
            },
            {
              line: 3,
              vars: { Tahap: "3. PROCESS (Control Unit)", Hardware: "CPU - Control Unit (CU)", Software: "Aplikasi Kasir POS", Instruksi: "FETCH & DECODE Harga Barang" },
              explanation: "Control Unit (CU) di dalam CPU mengambil (fetch) dan menerjemahkan (decode) instruksi dari aplikasi Point of Sale (POS) untuk mencocokkan harga barang.",
              output: "[CPU-CU] Instruksi diambil: Harga satuan = Rp 25.000, Diskon = Rp 5.000."
            },
            {
              line: 4,
              vars: { Tahap: "4. PROCESS (ALU)", Hardware: "CPU - Arithmetic Logic Unit", Operasi: "(25000 * 2) - 5000", Hasil_Hitung: "Rp 45.000" },
              explanation: "Arithmetic Logic Unit (ALU) mengeksekusi perhitungan aritmatika: (2 x Rp 25.000) - Rp 5.000 = Rp 45.000 dan menyimpannya ke Register CPU lalu ke RAM.",
              output: "[CPU-ALU] Perhitungan selesai: Total Bayar = Rp 45.000."
            },
            {
              line: 5,
              vars: { Tahap: "5. OUTPUT (Generating)", Hardware: "Monitor LED & Printer Thermal", Bentuk_Output: "Softcopy (Layar) & Hardcopy (Struk)", Status: "Ditampilkan ke Kasir & Pembeli" },
              explanation: "Tahap OUTPUT: Informasi hasil olahan ditampilkan secara visual di layar Monitor (softcopy) dan dicetak menjadi struk kertas oleh Printer Thermal (hardcopy).",
              output: "[OUTPUT] Monitor: Rp 45.000 | Printer: Mencetak struk pembayaran..."
            },
            {
              line: 6,
              vars: { Tahap: "6. STORAGE & TRANSMISSION", Hardware: "SSD NVMe & Router Jaringan", Sifat_Simpan: "Non-Volatile (Permanen)", Sinkronisasi: "Terkirim ke Server ERP Pusat" },
              explanation: "Tahap STORAGE & TRANSMISSION: Rekaman transaksi disimpan permanen ke SSD (Non-Volatile) dan dikirim melalui jaringan internet ke database Cloud ERP perusahaan.",
              output: "[STORAGE] Data tersimpan permanen di SSD & tersinkron ke Cloud ERP!"
            }
          ]
        }
      },

      /* ====================================================================
         SUB-MATERI C: MEKANISME DAN PROSES TEKNOLOGI
         ==================================================================== */
      {
        id: "sub-c",
        code: "C",
        title: "C. Mekanisme dan Proses Teknologi",
        subtitle:
          "Cara kerja jaringan komputer (konsep Klien-Server & jenis jaringan PAN/LAN/MAN/WAN), mekanisme enkripsi, dasar kriptografi, serta fungsi Firewall untuk melindungi jaringan dari serangan.",
        narratorSummary:
          "Sub Materi C: Mekanisme dan Proses Teknologi. Pertama, dalam jaringan komputer terdapat model Klien-Server, di mana Klien meminta layanan atau Request, dan Server memberikan balasan atau Response. Berdasarkan cakupan wilayahnya dari terkecil ke terbesar, gunakan jembatan keledai P, L, M, W, yaitu: PAN untuk area pribadi seperti Bluetooth, LAN untuk satu ruangan atau gedung, MAN untuk satu kota, dan WAN untuk antar negara seperti Internet. Kedua, kriptografi dan enkripsi mengamankan data dengan mengubah Plaintext atau teks asli menjadi Ciphertext atau teks acak menggunakan algoritma dan kunci. Enkripsi Simetris memakai satu kunci yang sama seperti AES, sedangkan Enkripsi Asimetris memakai sepasang Public Key dan Private Key seperti RSA pada HTTPS. Ketiga, Firewall berfungsi sebagai dinding pertahanan keamanan jaringan yang memantau, menyaring, dan memblokir lalu lintas paket data berbahaya berdasarkan aturan IP Address, Port, dan Protokol.",
        sections: [
          {
            id: "sec-c1",
            label: "1. Cara Kerja Jaringan: Klien-Server & Jenis Jaringan"
          },
          {
            id: "sec-c2",
            label: "2. Mekanisme Enkripsi & Dasar Kriptografi"
          },
          {
            id: "sec-c3",
            label: "3. Fungsi & Cara Kerja Firewall"
          },
          {
            id: "sec-c4",
            label: "4. Jembatan Keledai & Simulasi Enkripsi + Firewall"
          }
        ],
        preQuizSummary: [
          {
            title: "Model Klien-Server vs Peer-to-Peer (P2P)",
            text: "<strong>Client (Klien)</strong> = Pengirim <em>Request</em> (permintaan data, misal Browser). <strong>Server (Peladen)</strong> = Pengolah & pengirim <em>Response</em> (balasan layanan, misal Web/Database Server). <strong>P2P</strong> = Tiap komputer setara (bisa jadi klien sekaligus server)."
          },
          {
            title: "Urutan Jaringan (Kecil ke Besar): P – L – M – W",
            text: "<strong>PAN</strong> (Personal, kilku meter/Bluetooth) → <strong>LAN</strong> (Local, 1 gedung/sekolah/kantor) → <strong>MAN</strong> (Metropolitan, 1 kota 10–50 km) → <strong>WAN</strong> (Wide, antar negara/benua, contohnya Internet)."
          },
          {
            title: "Rumus Kriptografi: Plaintext → [Enkripsi + Kunci] → Ciphertext",
            text: "<strong>Plaintext</strong> = Pesan asli. <strong>Ciphertext</strong> = Pesan acak rahasia. <strong>Dekripsi</strong> = Mengembalikan Ciphertext ke Plaintext. <strong>Simetris (AES)</strong> = 1 kunci sama. <strong>Asimetris (RSA)</strong> = 2 kunci (<em>Public Key</em> untuk enkripsi, <em>Private Key</em> untuk dekripsi)."
          },
          {
            title: "Fungsi Utama Firewall",
            text: "Bertindak sebagai <strong>pos penjaga / penyaring (Packet Filtering)</strong> antara jaringan internal (LAN) dan jaringan luar (Internet) untuk mengizinkan (<em>Allow</em>) paket aman dan memblokir (<em>Block/Drop</em>) serangan hacker/malware."
          }
        ],
        contentHtml: `
          <!-- BAGIAN JEMBATAN KELEDAI SUB-MATERI C -->
          <div class="mnemonic-booster-card" id="sec-c4">
            <div class="mnemonic-header">
              <span class="mnemonic-badge">🧠 Jembatan Keledai & Rumus Cepat Hafal Sub-Materi C</span>
              <span style="font-size:12px;color:var(--text-muted);">Kunci sukses menjawab soal Jaringan, Kriptografi & Firewall!</span>
            </div>
            <div class="mnemonic-grid">
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">1. Skala Jaringan: "P - L - M - W" (Kecil → Besar)</span>
                <p class="mnemonic-meaning">
                  • <strong>PAN</strong> (<em>Personal Area Network</em>) = Jarak ±1–10 meter (Bluetooth, TWS, Hotspot HP).<br/>
                  • <strong>LAN</strong> (<em>Local Area Network</em>) = Satu ruangan, lab sekolah, atau gedung kantor (Switch + Kabel UTP / Wi-Fi).<br/>
                  • <strong>MAN</strong> (<em>Metropolitan Area Network</em>) = Antar gedung dalam 1 kota (±10–50 km).<br/>
                  • <strong>WAN</strong> (<em>Wide Area Network</em>) = Antar negara & benua di seluruh dunia (Contoh: <strong>Internet</strong>).
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">2. Rumus Kriptografi: "P-E-C-D" & "S1 - A2"</span>
                <p class="mnemonic-meaning">
                  • <strong>P-E-C-D</strong>: <strong>P</strong>laintext (Teks Asli) → di-<strong>E</strong>nkripsi → menjadi <strong>C</strong>iphertext (Teks Sandi) → di-<strong>D</strong>ekripsi kembali ke Plaintext.<br/>
                  • <strong>S1 (Simetris = 1 Kunci Sama)</strong>: Kunci enkripsi = kunci dekripsi (Contoh: <strong>AES, DES</strong>).<br/>
                  • <strong>A2 (Asimetris = 2 Kunci Berbeda)</strong>: Pakai <strong>Public Key</strong> (Enkripsi) & <strong>Private Key</strong> (Dekripsi) (Contoh: <strong>RSA, ECC</strong>).
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">3. Segitiga Keamanan Data: "C - I - A Triad"</span>
                <p class="mnemonic-meaning">
                  • <strong>Confidentiality (Kerahasiaan)</strong>: Dijaga dengan <strong>Enkripsi</strong> agar tak dibaca penyadap.<br/>
                  • <strong>Integrity (Keutuhan Data)</strong>: Dijaga dengan <strong>Hashing (SHA-256)</strong> & Tanda Tangan Digital agar data tak diubah di jalan.<br/>
                  • <strong>Availability (Ketersediaan)</strong>: Dijaga dengan <strong>Firewall</strong> & Anti-DDoS agar server selalu bisa diakses pengguna sah.
                </p>
              </div>
            </div>

            <!-- KARTU FLASHCARD INTERAKTIF SUB-C -->
            <div style="margin-top:16px;">
              <strong style="font-size:13px;color:var(--text-primary);display:block;margin-bottom:6px;">
                🃏 Kartu Flashcard Latihan Ingatan Cepat Sub-Materi C (Klik Kartu untuk Balik):
              </strong>
              <div class="flashcard-deck-grid">
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">JARINGAN #1</div>
                    <div class="flashcard-q">Dalam arsitektur Klien-Server, siapakah yang mengirim Request dan siapa yang mengirim Response?</div>
                    <div class="flashcard-a"><strong>Klien (Client)</strong> mengirim <em>Request</em> (permintaan), sedangkan <strong>Server (Peladen)</strong> memproses dan mengirimkan <em>Response</em> (balasan).</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">KRIPTOGRAFI #2</div>
                    <div class="flashcard-q">Disebut apakah pesan/data asli yang belum dienkripsi, dan disebut apa setelah dienkripsi?</div>
                    <div class="flashcard-a">Data asli yang dapat dibaca disebut <strong>Plaintext</strong>. Setelah diacak melalui proses enkripsi disebut <strong>Ciphertext</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">ENKRIPSI #3</div>
                    <div class="flashcard-q">Pada kriptografi Asimetris (seperti RSA), kunci mana yang dipakai untuk mengenkripsi dan mana untuk mendekripsi pesan?</div>
                    <div class="flashcard-a"><strong>Public Key (Kunci Publik)</strong> digunakan pengirim untuk mengenkripsi pesan, sedangkan <strong>Private Key (Kunci Privat)</strong> disimpan rahasia oleh penerima untuk mendekripsi pesan.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">KEAMANAN #4</div>
                    <div class="flashcard-q">Apa fungsi utama dari Firewall pada sebuah jaringan komputer?</div>
                    <div class="flashcard-a"><strong>Menyaring (filtering), memantau, dan mengontrol lalu lintas paket data</strong> yang masuk dan keluar jaringan berdasarkan aturan keamanan (IP, Port, Protokol) untuk mencegah akses tidak sah.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 1: CARA KERJA JARINGAN KOMPUTER -->
          <div class="info-card" id="sec-c1">
            <h3>🌐 1. Cara Kerja Jaringan Komputer: Konsep Klien-Server & Jenis-Jenis Jaringan</h3>
            <p>
              <strong>Jaringan Komputer (<em>Computer Network</em>)</strong> adalah sistem yang menghubungkan dua atau lebih perangkat komputasi menggunakan media transmisi (kabel tembaga UTP, serat optik/<em>Fiber Optic</em>, atau gelombang radio nirkabel/Wi-Fi) serta aturan komunikasi (<strong>Protokol</strong>) agar dapat saling bertukar data dan berbagi sumber daya.
            </p>

            <div class="concept-grid" style="margin-top:12px;">
              <div class="concept-box">
                <h4>A. Arsitektur Klien-Server (Client-Server)</h4>
                <p>Model jaringan terpusat di mana peran pemberi layanan dan peminta layanan dipisahkan secara jelas:</p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Klien (<em>Client</em>):</strong> Perangkat pengguna (laptop, PC, smartphone melalui aplikasi/browser) yang aktif mengirimkan <strong>Permintaan (<em>Request</em>)</strong> ke server.</li>
                  <li><strong>Server (<em>Peladen</em>):</strong> Komputer berspesifikasi tinggi yang selalu menyala (24/7) untuk menunggu, memproses permintaan klien, dan mengirimkan <strong>Balasan (<em>Response</em>)</strong>.</li>
                  <li><strong>Contoh Server:</strong> <em>Web Server</em> (melayani halaman web HTTP/HTTPS), <em>Database Server</em> (menyimpan data MySQL/PostgreSQL), <em>DNS Server</em> (menerjemahkan nama domain ke IP Address), <em>File Server</em>, dan <em>Mail Server</em>.</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>B. Arsitektur Peer-to-Peer (P2P) & Pemecahan Paket Data</h4>
                <p>Selain Client-Server, terdapat model <strong>Peer-to-Peer (P2P)</strong> di mana tidak ada server khusus; setiap komputer memiliki kedudukan setara dan dapat berfungsi sebagai <strong>klien sekaligus server</strong> (misalnya berbagi file langsung antar 2 laptop atau jaringan Blockchain).</p>
                <p style="margin-top:6px;">
                  <strong>Cara Data Dikirim (Packet Switching):</strong> Saat mengirim file/pesan di jaringan, data tidak dikirim utuh sekaligus, melainkan:
                  <br/>1) Dipecah menjadi potongan kecil bernama <strong>Paket Data (<em>Packets</em>)</strong>.
                  <br/>2) Setiap paket diberi label <strong>IP Pengirim, IP Tujuan, dan Nomor Urut</strong>.
                  <br/>3) <strong>Router</strong> memilihkan jalur tercepat menuju tujuan, lalu paket disusun kembali di komputer penerima.
                </p>
              </div>
            </div>

            <!-- TABEL JENIS JARINGAN BERDASARKAN CAKUPAN GEOGRAFIS -->
            <h4 style="margin-top:16px;margin-bottom:8px;">📏 Jenis-Jenis Jaringan Komputer Berdasarkan Jangkauan Wilayah (PAN, LAN, MAN, WAN):</h4>
            <div class="data-table-wrap">
              <table class="logic-table">
                <thead>
                  <tr>
                    <th>Jenis Jaringan</th>
                    <th>Kepanjangan</th>
                    <th>Jangkauan Wilayah</th>
                    <th>Contoh Penerapan & Teknologi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. PAN</strong></td>
                    <td><em>Personal Area Network</em></td>
                    <td>1 – 10 Meter (Area Pribadi)</td>
                    <td>Menghubungkan smartphone ke headset TWS Bluetooth, Smartwatch, atau tethering ke laptop pribadi.</td>
                  </tr>
                  <tr>
                    <td><strong>2. LAN</strong></td>
                    <td><em>Local Area Network</em></td>
                    <td>10 Meter – 1 Km (1 Ruangan / Gedung / Sekolah)</td>
                    <td>Jaringan laboratorium komputer sekolah, jaringan kantor dalam satu gedung menggunakan <strong>Switch, Kabel UTP RJ-45, atau Access Point Wi-Fi</strong>.</td>
                  </tr>
                  <tr>
                    <td><strong>3. MAN</strong></td>
                    <td><em>Metropolitan Area Network</em></td>
                    <td>10 – 50 Km (Satu Kota / Antar Kampus)</td>
                    <td>Jaringan yang menghubungkan kantor pusat bank dengan kantor cabang di seluruh wilayah satu kota, atau jaringan Smart City pemerintah kota.</td>
                  </tr>
                  <tr>
                    <td><strong>4. WAN</strong></td>
                    <td><em>Wide Area Network</em></td>
                    <td>> 100 Km hingga Seluruh Dunia (Antar Negara/Benua)</td>
                    <td>Menghubungkan jaringan LAN/MAN lintas negara menggunakan kabel serat optik bawah laut dan satelit. Contoh terbesarnya adalah <strong>Internet</strong>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SUB-POIN 2: MEKANISME ENKRIPSI & KRIPTOGRAFI -->
          <div class="info-card" id="sec-c2" style="margin-top:16px;">
            <h3>🔐 2. Mekanisme Enkripsi dan Dasar Kriptografi dalam Keamanan Data</h3>
            <p>
              Ketika paket data dikirim melalui jaringan publik (Internet), data tersebut berisiko disadap oleh pihak ketiga (serangan <em>Man-in-the-Middle / Sniffing</em>). Untuk melindungi kerahasiaan data, digunakan ilmu <strong>Kriptografi (<em>Cryptography</em>)</strong>.
            </p>

            <div class="concept-grid" style="margin-top:12px;">
              <div class="concept-box">
                <h4>4 Komponen Dasar Mekanisme Enkripsi</h4>
                <ul class="clean-list">
                  <li><strong>1. Plaintext (Teks Asli):</strong> Informasi atau pesan asli yang masih dapat dibaca dan dipahami secara langsung (Contoh: <code>"PIN_SAYA_9988"</code>).</li>
                  <li><strong>2. Encryption (Enkripsi):</strong> Proses matematis mengubah <em>Plaintext</em> menjadi kode acak menggunakan algoritma sandi (<em>Cipher</em>) dan <strong>Kunci (<em>Key</em>)</strong>.</li>
                  <li><strong>3. Ciphertext (Teks Tersandi):</strong> Hasil dari proses enkripsi yang tampak acak dan tidak memiliki arti jika dibaca tanpa kunci (Contoh: <code>"8f#k9!xP2@mQ"</code>).</li>
                  <li><strong>4. Decryption (Dekripsi):</strong> Kebalikan dari enkripsi, yaitu proses mengubah kembali <em>Ciphertext</em> menjadi <em>Plaintext</em> asli menggunakan kunci yang sah.</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>Perbandingan 3 Teknik Kriptografi Modern</h4>
                <ul class="clean-list">
                  <li><strong>A. Kriptografi Simetris (<em>Symmetric Key</em>):</strong> Menggunakan <strong>1 Kunci Rahasia yang SAMA</strong> untuk mengenkripsi sekaligus mendekripsi data. Kelebihannya sangat cepat untuk file berukuran besar, namun tantangan utamanya adalah cara membagikan kunci secara aman. <br/><em>Contoh Algoritma:</em> <strong>AES (Advanced Encryption Standard)</strong>, DES, 3DES, Blowfish, Caesar Cipher (klasik).</li>
                  <li><strong>B. Kriptografi Asimetris (<em>Asymmetric / Public Key</em>):</strong> Menggunakan <strong>Sepasang Kunci Berbeda (2 Kunci)</strong> yang terhubung secara matematis:
                    <br/>• <strong>Public Key (Kunci Publik):</strong> Boleh dibagikan ke siapa saja untuk <strong>mengenkripsi</strong> pesan.
                    <br/>• <strong>Private Key (Kunci Privat):</strong> Disimpan rahasia oleh pemiliknya untuk <strong>mendekripsi</strong> pesan.
                    <br/><em>Contoh Algoritma:</em> <strong>RSA (Rivest-Shamir-Adleman)</strong>, ECC (Elliptic Curve), Diffie-Hellman. Dipakai pada gembok <strong>HTTPS (TLS/SSL)</strong>!
                  </li>
                  <li><strong>C. Fungsi Hash (<em>Cryptographic Hashing</em>):</strong> Pengacakan <strong>satu arah (<em>One-Way</em>, tidak bisa didekripsi balik)</strong> yang menghasilkan sidik jari digital berukuran tetap untuk menyimpan password di database dan mengecek keutuhan file (<em>Integrity</em>). <br/><em>Contoh:</em> <strong>SHA-256, SHA-3, bcrypt, MD5</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 3: FUNGSI FIREWALL -->
          <div class="info-card" id="sec-c3" style="margin-top:16px;">
            <h3>🛡️ 3. Fungsi dan Cara Kerja Firewall untuk Melindungi Jaringan dari Serangan</h3>
            <p>
              <strong>Firewall (Dinding Api)</strong> adalah sistem keamanan jaringan (dapat berupa perangkat keras khusus/<em>Hardware Appliance</em> maupun perangkat lunak/<em>Software</em> di sistem operasi) yang ditempatkan sebagai <strong>gerbang pembatas antara jaringan internal yang aman (Trusted LAN) dan jaringan eksternal yang tidak tepercaya (Untrusted Internet)</strong>.
            </p>

            <div class="tokoh-grid" style="margin-top:12px;">
              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">🚦</div>
                  <div class="tokoh-title-wrap">
                    <h4>Cara Kerja Firewall (Packet Filtering & Inspection)</h4>
                    <span class="tokoh-role-pill">Pos Pemeriksaan Paket Data</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li>Setiap paket data yang hendak masuk (<em>Inbound Traffic</em>) atau keluar (<em>Outbound Traffic</em>) diperiksa identitasnya berdasarkan <strong>Aturan Keamanan (<em>Security Rules / Access Control List</em>)</strong>.</li>
                  <li>Parameter yang diperiksa meliputi: <strong>1) Alamat IP Sumber & Tujuan</strong>, <strong>2) Nomor Port Layanan</strong> (misal Port 80/443 untuk Web, Port 22 untuk SSH), dan <strong>3) Jenis Protokol</strong> (TCP/UDP/ICMP).</li>
                  <li>Jika paket sesuai aturan aman → <strong>ALLOW / ACCEPT (Diizinkan lewat)</strong>. Jika mencurigakan atau melanggar aturan → <strong>DENY / DROP (Diblokir & dibuang)</strong>.</li>
                </ul>
              </div>

              <div class="tokoh-card">
                <div class="tokoh-head">
                  <div class="tokoh-icon">⚔️</div>
                  <div class="tokoh-title-wrap">
                    <h4>4 Fungsi Utama Firewall dalam Keamanan Jaringan</h4>
                    <span class="tokoh-role-pill">Perlindungan Aktif 24 Jam</span>
                  </div>
                </div>
                <ul class="tokoh-Contribution-list">
                  <li><strong>1. Mencegah Akses Tidak Sah (<em>Unauthorized Access</em>):</strong> Menghalangi peretas (<em>hacker</em>) dari internet yang mencoba meremote atau menyusup ke komputer dalam jaringan lokal.</li>
                  <li><strong>2. Memblokir Serangan Siber & Port Scanning:</strong> Menghentikan upaya pemindaian celah port terbuka, serangan <em>Brute-Force</em>, serta meredam banjir trafik berbahaya.</li>
                  <li><strong>3. Mencegah Kebocoran Data oleh Malware (<em>Outbound Filtering</em>):</strong> Jika ada komputer di dalam LAN yang terinfeksi <em>Trojan/Spyware</em>, Firewall dapat memblokir upaya malware tersebut mengirim data curian ke server peretas.</li>
                  <li><strong>4. Mencatat Aktivitas Jaringan (<em>Security Logging & Auditing</em>):</strong> Merekam seluruh lalu lintas dan percobaan serangan sebagai bukti audit bagi Administrator Jaringan.</li>
                </ul>
              </div>
            </div>
          </div>
        `,
        simulator: {
          title: "Simulasi Interaktif: Transmisi Klien-Server, Enkripsi HTTPS & Penyaringan Firewall",
          codeLines: [
            "// SIMULASI KEAMANAN TRANSAKSI JARINGAN KLIEN-SERVER",
            "Step 1: [CLIENT] Pengguna mengetik Plaintext: 'TRANSFER Rp 1.000.000'",
            "Step 2: [ENKRIPSI] Kriptografi mengubah Plaintext -> Ciphertext (9x#A7!kL2)",
            "Step 3: [PACKET SWITCHING] Data dipecah menjadi Paket TCP/IP menuju Port 443",
            "Step 4: [FIREWALL CHECK #1] Paket Port 443 (HTTPS) diperiksa -> STATUS: ALLOW",
            "Step 5: [FIREWALL CHECK #2] Hacker menyerang Port 23 (Telnet) -> STATUS: BLOCK/DROP!",
            "Step 6: [SERVER DEKRIPSI & RESPONSE] Server mendekripsi paket sah & kirim Bukti Sukses"
          ],
          steps: [
            {
              line: 1,
              vars: { Peran: "Client (Browser/App)", Data_Asli: "Plaintext: 'TRANSFER Rp 1.000.000'", Status_Keamanan: "Belum Terenkripsi (Rawan Sadap)" },
              explanation: "Klien menyiapkan pesan transaksi asli (Plaintext). Sebelum dikirim ke jaringan internet (WAN), pesan ini wajib dienkripsi agar tidak bisa dibaca penyadap.",
              output: "[CLIENT] Plaintext siap: 'TRANSFER Rp 1.000.000'."
            },
            {
              line: 2,
              vars: { Proses: "Enkripsi TLS/AES-256", Input: "Plaintext + Kunci Enkripsi", Output_Sandi: "Ciphertext: '9x#A7!kL2$vP8'", Status_Keamanan: "Aman (Confidentiality Terjaga)" },
              explanation: "Mekanisme Enkripsi mengubah Plaintext menjadi Ciphertext menggunakan algoritma kriptografi dan kunci. Jika disadap di tengah jalan, peretas hanya melihat karakter acak.",
              output: "[CRYPTO] Enkripsi berhasil -> Ciphertext: '9x#A7!kL2$vP8'."
            },
            {
              line: 3,
              vars: { Proses: "Packet Switching (TCP/IP)", IP_Asal: "192.168.1.10 (Client)", IP_Tujuan: "203.0.113.50 (Server Bank)", Port_Tujuan: "443 (HTTPS Resmi)" },
              explanation: "Ciphertext dibungkus ke dalam paket data jaringan lengkap dengan alamat IP Pengirim, IP Tujuan Server, dan nomor Port 443 (jalur resmi HTTPS).",
              output: "[NETWORK] Paket dikirim: 192.168.1.10 -> 203.0.113.50:443 (TCP)."
            },
            {
              line: 4,
              vars: { Perangkat: "Firewall Server", Paket_Masuk: "IP: 192.168.1.10 | Port: 443 (HTTPS)", Aturan_Firewall: "Rule #1: Port 443 TCP -> ALLOW", Keputusan: "DIIZINKAN MASUK (ALLOWED)" },
              explanation: "Firewall memeriksa paket klien. Karena menggunakan Port 443 (HTTPS) yang sesuai dengan aturan keamanan, Firewall mengizinkan paket masuk ke Server.",
              output: "[FIREWALL] Paket Port 443 terverifikasi aman -> ACTION: ALLOW."
            },
            {
              line: 5,
              vars: { Perangkat: "Firewall Server", Paket_Penyusup: "IP Hacker: 185.99.2.9 | Port: 23 (Telnet)", Aturan_Firewall: "Rule #9: Port 23 Inbound -> DROP", Keputusan: "DIBLOKIR (BLOCKED / DROPPED)!" },
              explanation: "Secara bersamaan, seorang peretas mencoba menyusup lewat Port 23 (Telnet tidak aman). Firewall langsung mendeteksi pelanggaran aturan dan membuang (DROP) paket serangan tersebut!",
              output: "[FIREWALL ALERT] Serangan dari 185.99.2.9 ke Port 23 terdeteksi -> ACTION: DROP!"
            },
            {
              line: 6,
              vars: { Peran: "Server Bank", Proses: "Dekripsi Ciphertext -> Plaintext", Hasil_Dekripsi: "'TRANSFER Rp 1.000.000'", Response: "HTTP 200 OK (Transaksi Berhasil)" },
              explanation: "Server menerima paket sah yang lolos dari Firewall, melakukan Dekripsi menggunakan kunci yang tepat untuk membaca Plaintext, memproses transaksi, dan mengirim Response ke Klien.",
              output: "[SERVER] Dekripsi sukses! Mengirim Response: 'Transaksi Rp 1.000.000 Berhasil'."
            }
          ]
        }
      },

      /* ====================================================================
         SUB-MATERI D: SEJARAH JARINGAN KOMPUTER
         ==================================================================== */
      {
        id: "sub-d",
        code: "D",
        title: "D. Sejarah Jaringan Komputer",
        subtitle:
          "Sejarah perkembangan jaringan dari peluncuran ARPANET pada 1969, pesan pertama 'LO', adopsi protokol TCP/IP pada 1983, penemuan WWW, hingga evolusi internet komersial modern.",
        narratorSummary:
          "Sub Materi D: Sejarah Jaringan Komputer. Gunakan jembatan keledai lima tahun bersejarah berikut: Tahun 1969, peluncuran ARPANET oleh Departemen Pertahanan Amerika Serikat yang menghubungkan empat universitas pertama yaitu UCLA, SRI Stanford, UCSB, dan University of Utah. Pada 29 Oktober 1969, pesan pertama yang dikirim adalah kata LOGIN, namun sistem crash setelah huruf L dan O terkirim, sehingga pesan pertama di dunia adalah LO. Tahun 1971, Ray Tomlinson menciptakan Email pertama dan memperkenalkan simbol et. Tanggal 1 Januari 1983 adalah Flag Day, di mana ARPANET resmi mengadopsi protokol TCP IP rancangan Vinton Cerf dan Bob Kahn, sekaligus memisahkan jaringan militer MILNET. Tahun 1989 hingga 1991, Sir Tim Berners-Lee di CERN menciptakan World Wide Web, HTML, HTTP, dan URL. Akhirnya pada dekade 1990-an, internet dibuka secara komersial dan berkembang dari Dial-Up menjadi Broadband, Fiber Optik, 4G, 5G, serta Internet of Things.",
        sections: [
          {
            id: "sec-d1",
            label: "1. Peluncuran ARPANET (1969) & 4 Kampus Pertama"
          },
          {
            id: "sec-d2",
            label: "2. Adopsi Protokol TCP/IP (1983), DNS & WWW"
          },
          {
            id: "sec-d3",
            label: "3. Evolusi menuju Internet Komersial Modern"
          },
          {
            id: "sec-d4",
            label: "4. Jembatan Keledai & Simulasi Kronologi Internet"
          }
        ],
        preQuizSummary: [
          {
            title: "1969: Peluncuran ARPANET & 4 Universitas Pertama",
            text: "Dibangun oleh <strong>ARPA</strong> (Departemen Pertahanan AS). Menghubungkan 4 kampus: <strong>1) UCLA, 2) SRI (Stanford), 3) UCSB (Santa Barbara), 4) University of Utah</strong>. Pesan pertama (29 Okt 1969): mau ketik <code>LOGIN</code> tapi baru terkirim <strong>\"LO\"</strong> sistem <em>crash</em>."
          },
          {
            title: "1 Januari 1983: Adopsi Protokol TCP/IP (Bapak Internet)",
            text: "<strong>Vinton Cerf & Robert (Bob) Kahn</strong> merancang <strong>TCP/IP</strong>. Pada <strong>1 Januari 1983</strong> (<em>Flag Day</em>), ARPANET resmi mengganti protokol lama <strong>NCP</strong> menjadi <strong>TCP/IP</strong> dan memecah jaringan militer ke <strong>MILNET</strong>."
          },
          {
            title: "Tokoh Penting Jaringan: Tomlinson, Mockapetris, Berners-Lee",
            text: "<strong>Ray Tomlinson (1971)</strong> = Penemu Email & simbol <code>@</code>. <strong>Paul Mockapetris (1983)</strong> = Penemu <strong>DNS</strong> (Domain Name System). <strong>Tim Berners-Lee (1989–1991 di CERN)</strong> = Penemu <strong>WWW, HTML, HTTP, URL</strong>."
          },
          {
            title: "Evolusi Internet Komersial & Transmisi Modern",
            text: "Dari riset akademik <strong>NSFNET</strong> → pencabutan larangan komersial (1991–1995) → Browser <strong>Mosaic/Netscape</strong> → Transmisi: <strong>Dial-Up (Telepon) → ADSL → Fiber Optik (Cahaya) & 4G/5G/IoT</strong>."
          }
        ],
        contentHtml: `
          <!-- BAGIAN JEMBATAN KELEDAI SUB-MATERI D -->
          <div class="mnemonic-booster-card" id="sec-d4">
            <div class="mnemonic-header">
              <span class="mnemonic-badge">🧠 Jembatan Keledai & Rumus Cepat Hafal Sub-Materi D</span>
              <span style="font-size:12px;color:var(--text-muted);">Hafalkan 5 Angka Tahun Emas & Singkatan 4 Kampus ARPANET!</span>
            </div>
            <div class="mnemonic-grid">
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">1. Garis Waktu Emas: "69 - 71 - 83 - 89 - 95"</span>
                <p class="mnemonic-meaning">
                  • <strong>1969</strong> = <strong>ARPANET</strong> lahir (29 Okt 1969: pesan pertama <strong>"LO"</strong> dari kata LOGIN).<br/>
                  • <strong>1971</strong> = <strong>Ray Tomlinson</strong> mengirim <strong>Email pertama</strong> dengan simbol <strong><code>@</code></strong>.<br/>
                  • <strong>1 Jan 1983</strong> = ARPANET resmi mengadopsi <strong>TCP/IP</strong> (Vint Cerf & Bob Kahn) menggantikan NCP.<br/>
                  • <strong>1989–1991</strong> = <strong>Tim Berners-Lee (CERN)</strong> menemukan <strong>WWW (HTML, HTTP, URL)</strong>.<br/>
                  • <strong>1991–1995</strong> = Era <strong>Internet Komersial</strong> dibuka untuk publik & bisnis dunia.
                </p>
              </div>
              <div class="mnemonic-item">
                <span class="mnemonic-acronym">2. Empat Kampus Pertama ARPANET: "U - S - U - U"</span>
                <p class="mnemonic-meaning">
                  Pada akhir 1969, ARPANET menghubungkan 4 simpul (node) universitas di Amerika Serikat menggunakan komputer router bernama <strong>IMP (Interface Message Processor)</strong>:<br/>
                  1. <strong>UCLA</strong> (University of California, Los Angeles) — Node #1 (Prof. Leonard Kleinrock).<br/>
                  2. <strong>SRI</strong> (Stanford Research Institute) — Node #2 (Douglas Engelbart).<br/>
                  3. <strong>UCSB</strong> (University of California, Santa Barbara) — Node #3.<br/>
                  4. <strong>University of Utah</strong> — Node #4.
                </p>
              </div>
            </div>

            <!-- KARTU FLASHCARD INTERAKTIF SUB-D -->
            <div style="margin-top:16px;">
              <strong style="font-size:13px;color:var(--text-primary);display:block;margin-bottom:6px;">
                🃏 Kartu Flashcard Latihan Ingatan Cepat Sub-Materi D (Klik Kartu untuk Balik):
              </strong>
              <div class="flashcard-deck-grid">
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">SEJARAH 1969 #1</div>
                    <div class="flashcard-q">Apa nama jaringan cikal bakal internet yang diluncurkan oleh Departemen Pertahanan AS pada tahun 1969?</div>
                    <div class="flashcard-a"><strong>ARPANET</strong> (<em>Advanced Research Projects Agency Network</em>), yang pertama kali menerapkan teknologi <strong>Packet Switching</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PESAN PERTAMA #2</div>
                    <div class="flashcard-q">Apa isi pesan pertama yang berhasil terkirim melalui ARPANET antara UCLA dan SRI pada 29 Oktober 1969?</div>
                    <div class="flashcard-a">Hanya dua huruf: <strong>"LO"</strong>. Charley Kline bermaksud mengetik kata <code>LOGIN</code>, tetapi sistem komputer crash setelah huruf L dan O terkirim.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">PROTOKOL TCP/IP #3</div>
                    <div class="flashcard-q">Siapakah dua ilmuwan perancang protokol TCP/IP yang dijuluki sebagai "Bapak Internet", dan kapan TCP/IP resmi diadopsi ARPANET?</div>
                    <div class="flashcard-a"><strong>Vinton Cerf</strong> dan <strong>Robert (Bob) Kahn</strong>. Protokol TCP/IP resmi diadopsi menggantikan NCP pada tanggal <strong>1 Januari 1983</strong>.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
                <div class="ccit-flashcard" data-flashcard>
                  <div>
                    <div class="flashcard-tag">WEB MODERN #4</div>
                    <div class="flashcard-q">Siapakah penemu World Wide Web (WWW), HTML, dan HTTP di laboratorium CERN pada tahun 1989–1991?</div>
                    <div class="flashcard-a"><strong>Sir Tim Berners-Lee</strong>. Berkat WWW dan browser grafis (seperti Mosaic & Netscape), internet berkembang pesat menjadi internet komersial modern.</div>
                  </div>
                  <div class="flashcard-hint"><span>Klik untuk balik kartu</span><span>🔄</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 1: PELUNCURAN ARPANET 1969 -->
          <div class="info-card" id="sec-d1">
            <h3>🛰️ 1. Penggunaan Awal & Peluncuran ARPANET pada Tahun 1969</h3>
            <p>
              Pada era Perang Dingin tahun 1960-an, komunikasi mengandalkan sistem telepon berbasis <strong>Circuit Switching</strong> yang terpusat—jika satu pusat sambungan hancur akibat serangan, seluruh komunikasi lumpuh. Untuk mengatasi kelemahan tersebut, badan riset militer Amerika Serikat <strong>ARPA (<em>Advanced Research Projects Agency</em>, bagian dari Departemen Pertahanan AS / DoD)</strong> di bawah kepemimpinan <strong>Bob Taylor</strong> dan <strong>Larry Roberts</strong> membangun jaringan komunikasi terdesentralisasi bernama <strong>ARPANET</strong>.
            </p>

            <div class="concept-grid" style="margin-top:12px;">
              <div class="concept-box">
                <h4>A. Fondasi Teori: Packet Switching</h4>
                <p>
                  Sebelum ARPANET dibangun, tiga peneliti secara independen merumuskan konsep pengiriman data dalam potongan paket (<strong>Packet Switching</strong>):
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>Leonard Kleinrock (MIT/UCLA, 1961):</strong> Menerbitkan teori matematis aliran paket data dalam antrean jaringan.</li>
                  <li><strong>Paul Baran (RAND Corporation):</strong> Merancang jaringan terdistribusi tahan serangan nuklir tanpa titik pusat tunggal.</li>
                  <li><strong>Donald Davies (NPL Inggris):</strong> Menciptakan istilah <strong>"Packet"</strong> dan <strong>"Packet Switching"</strong>.</li>
                </ul>
              </div>

              <div class="concept-box">
                <h4>B. Momen Bersejarah 29 Oktober 1969 ("LO")</h4>
                <p>
                  Setiap universitas dihubungkan menggunakan komputer mini khusus bernama <strong>IMP (<em>Interface Message Processor</em>)</strong> buatan perusahaan BBN yang berfungsi sebagai cikal bakal <strong>Router</strong> pertama di dunia.
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li>Pada <strong>29 Oktober 1969 pukul 22.30 waktu setempat</strong>, mahasiswa programmer <strong>Charley Kline</strong> di bawah bimbingan Prof. <strong>Leonard Kleinrock</strong> di <strong>UCLA</strong> mencoba melakukan login jarak jauh ke komputer milik <strong>SRI (Stanford Research Institute)</strong> yang dijaga oleh <strong>Bill Duvall</strong>.</li>
                  <li>Kline mengetik huruf <strong>"L"</strong> dan <strong>"O"</strong> (dari kata <code>LOGIN</code>), namun sistem komputer SRI mengalami <em>crash</em> karena buffer memori penuh. Satu jam kemudian koneksi diperbaiki dan kata <code>LOGIN</code> berhasil dikirim utuh!</li>
                  <li>Hingga Desember 1969, <strong>4 simpul (node) pertama ARPANET</strong> resmi terhubung: <strong>1) UCLA</strong>, <strong>2) SRI (Stanford)</strong>, <strong>3) UC Santa Barbara (UCSB)</strong>, dan <strong>4) University of Utah</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 2: ADOPSI PROTOKOL TCP/IP & PENEMUAN WWW -->
          <div class="info-card" id="sec-d2" style="margin-top:16px;">
            <h3>🔗 2. Adopsi Protokol TCP/IP (1983), DNS, dan Lahirnya World Wide Web (WWW)</h3>
            <p>
              Pada awal tahun 1970-an, ARPANET menggunakan protokol komunikasi awal yang disebut <strong>NCP (<em>Network Control Protocol</em>)</strong>. Namun, NCP memiliki keterbatasan besar: ia hanya mampu menghubungkan komputer di dalam satu jaringan ARPANET yang sama dan tidak bisa menghubungkan jaringan yang berbeda (seperti jaringan satelit SATNET atau jaringan paket radio PRNET).
            </p>

            <div class="ccit-timeline" style="margin-top:12px;">
              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">1971 • KELAHIRAN SURAT ELEKTRONIK (E-MAIL)</span>
                <h4>Ray Tomlinson & Simbol "@"</h4>
                <p>
                  Insinyur BBN <strong>Ray Tomlinson</strong> menciptakan aplikasi pengiriman pesan antar komputer di jaringan ARPANET (program SNDMSG & CYPNET) dan memilih simbol <strong><code>@</code> (at)</strong> untuk memisahkan nama pengguna dari nama komputer tujuan (<code>user@host</code>). Email segera menjadi aplikasi paling populer di ARPANET.
                </p>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">1974 – 1 JANUARI 1983 • ADOPSI PROTOKOL TCP/IP (HARI LAHIR INTERNET MODERN)</span>
                <h4>Vinton Cerf & Robert Kahn Menciptakan Bahasa Universal Internet</h4>
                <p>
                  Pada tahun 1974, <strong>Vinton Cerf</strong> dan <strong>Robert (Bob) Kahn</strong> menerbitkan rancangan protokol baru yang memungkinkan berbagai jaringan komputer yang berbeda jenis untuk saling terhubung (<em>Inter-networking</em> → disingkat <strong>Internet</strong>). Protokol ini dibagi menjadi dua lapis kerja sama:
                </p>
                <ul class="clean-list" style="margin-top:6px;">
                  <li><strong>IP (<em>Internet Protocol</em>):</strong> Bertugas menangani pengalamatan (<strong>IP Address</strong>) dan pemilihan rute pengiriman paket data (<em>Routing</em>) dari pengirim ke penerima.</li>
                  <li><strong>TCP (<em>Transmission Control Protocol</em>):</strong> Bertugas memecah data menjadi paket-paket bernomor urut, memastikan tidak ada paket yang hilang/rusak di perjalanan (<em>Error Checking & Retransmission</em>), dan menyusunnya kembali secara utuh di tujuan.</li>
                  <li><strong>1 Januari 1983 (<em>Flag Day</em>):</strong> ARPANET secara resmi menghentikan protokol NCP dan mewajibkan seluruh komputer beralih ke <strong>TCP/IP</strong>. Pada tahun yang sama, bagian militer AS memisahkan diri menjadi jaringan <strong>MILNET</strong>, sedangkan ARPANET difokuskan untuk riset akademik.</li>
                </ul>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">1983 – 1984 • PENEMUAN DNS (DOMAIN NAME SYSTEM)</span>
                <h4>Paul Mockapetris Memudahkan Penamaan Alamat Internet</h4>
                <p>
                  Seiring bertambahnya ribuan komputer, menghafal deretan angka IP Address (seperti <code>192.0.2.1</code>) atau memperbarui file <code>HOSTS.TXT</code> secara manual menjadi mustahil. <strong>Paul Mockapetris</strong> menciptakan <strong>DNS (<em>Domain Name System</em>)</strong>—buku telepon internet yang menerjemahkan nama domain ramah manusia (seperti <code>.com</code>, <code>.edu</code>, <code>.gov</code>, <code>.org</code>, <code>.id</code>) menjadi alamat IP secara otomatis.
                </p>
              </div>

              <div class="ccit-timeline-item">
                <span class="timeline-era-badge">1989 – 1991 • KELAHIRAN WORLD WIDE WEB (WWW) DI CERN</span>
                <h4>Sir Tim Berners-Lee Membuka Era Informasi Hiperteks</h4>
                <p>
                  Sebelum tahun 1990, internet masih berbasis teks perintah (terminal) yang rumit bagi masyarakat awam. Ilmuwan Inggris <strong>Sir Tim Berners-Lee</strong> saat bekerja di laboratorium fisika nuklir Eropa <strong>CERN (Swiss)</strong> menciptakan <strong>World Wide Web (WWW)</strong> beserta tiga fondasi utamanya:
                  <br/>1) <strong>HTML (<em>HyperText Markup Language</em>):</strong> Bahasa markah untuk membuat halaman web.
                  <br/>2) <strong>HTTP (<em>HyperText Transfer Protocol</em>):</strong> Protokol pertukaran dokumen web antara browser dan server.
                  <br/>3) <strong>URL (<em>Uniform Resource Locator</em>):</strong> Alamat unik setiap halaman atau dokumen di web.
                  <br/><em>(Catatan Penting CCIT: <strong>Internet ≠ WWW!</strong> Internet adalah infrastruktur jaringan globalnya [jalan rayanya], sedangkan WWW adalah layanan informasi halaman web yang berjalan di atas jaringan internet [kendaraan di atas jalan raya tersebut]).</em>
                </p>
              </div>
            </div>
          </div>

          <!-- SUB-POIN 3: EVOLUSI TEKNOLOGI JARINGAN HINGGA INTERNET KOMERSIAL MODERN -->
          <div class="info-card" id="sec-d3" style="margin-top:16px;">
            <h3>🚀 3. Evolusi Teknologi Jaringan Menuju Internet Komersial Modern</h3>
            <p>
              Bagaimana jaringan yang awalnya eksklusif untuk militer dan universitas berubah menjadi internet komersial berkecepatan tinggi yang kita gunakan setiap detik hari ini? Perhatikan tahapan evolusinya:
            </p>

            <div class="data-table-wrap" style="margin-top:12px;">
              <table class="logic-table">
                <thead>
                  <tr>
                    <th>Periode / Era</th>
                    <th>Tonggak Evolusi Teknologi Jaringan</th>
                    <th>Karakteristik & Kecepatan Transmisi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1986 – 1990<br/>(Era NSFNET & Pensiunnya ARPANET)</strong></td>
                    <td><strong>National Science Foundation (NSF)</strong> membangun jaringan tulang punggung kecepatan tinggi <strong>NSFNET</strong> yang menghubungkan pusat superkomputer universitas. Pada tahun <strong>1990, proyek ARPANET resmi ditutup (decommissioned)</strong> karena perannya telah digantikan oleh infrastruktur NSFNET.</td>
                    <td>Jaringan akademik & riset ilmiah (Kecepatan backbone T1: 1,544 Mbps).</td>
                  </tr>
                  <tr>
                    <td><strong>1991 – 1995<br/>(Lahirnya Internet Komersial & Browser Grafis)</strong></td>
                    <td>Pemerintah AS mencabut larangan penggunaan komersial pada jaringan internet, memunculkan penyedia layanan internet komersial (<strong>ISP - Internet Service Provider</strong>). Tahun 1993 lahir browser grafis populer <strong>NCSA Mosaic</strong> (oleh Marc Andreessen) yang menjadi <strong>Netscape Navigator</strong>, diikuti berdirinya Amazon, Yahoo!, eBay, dan Google (1998).</td>
                    <td>Koneksi <strong>Dial-Up</strong> menggunakan kabel telepon rumah & modem analog (Kecepatan ±28,8 kbps – 56 kbps; telepon tidak bisa dipakai saat internetan).</td>
                  </tr>
                  <tr>
                    <td><strong>2000-an<br/>(Era Broadband, Web 2.0 & Wi-Fi)</strong></td>
                    <td>Peralihan dari Dial-Up ke koneksi <strong>Broadband ADSL (<em>Asymmetric Digital Subscriber Line</em>)</strong> dan jaringan nirkabel <strong>Wi-Fi (IEEE 802.11)</strong>. Internet beralih ke era <strong>Web 2.0</strong> yang interaktif: pengguna dapat membuat konten sendiri (Media Sosial, YouTube, Wikipedia, Blog).</td>
                    <td>Koneksi selalu aktif (<em>Always-On</em>) dengan kecepatan 1 Mbps – 20 Mbps serta lahirnya jaringan seluler <strong>3G (UMTS/HSDPA)</strong>.</td>
                  </tr>
                  <tr>
                    <td><strong>2010 – Sekarang<br/>(Fiber Optik, 4G/5G, Cloud, IoT & IPv6)</strong></td>
                    <td>Tulang punggung dan jaringan rumah menggunakan <strong>Serat Optik (<em>Fiber Optic / FTTH</em>)</strong> yang mentransmisikan data menggunakan <strong>pulsa cahaya</strong>. Jaringan seluler berevolusi ke <strong>4G LTE</strong> dan <strong>5G</strong> (latensi sangat rendah &lt; 5 ms). Karena alamat <strong>IPv4 (32-bit, ±4,3 miliar alamat)</strong> habis, diadopsi <strong>IPv6 (128-bit)</strong> untuk menghubungkan miliaran perangkat <strong>IoT (<em>Internet of Things</em>)</strong>.</td>
                    <td>Kecepatan ratusan Mbps hingga <strong>10+ Gbps</strong>, mendukung Streaming 4K/8K, Cloud Gaming, Kendaraan Otonom, dan AI Realtime.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        simulator: {
          title: "Simulasi Interaktif: Linimasa Evolusi Jaringan (ARPANET 1969 -> TCP/IP -> Internet 5G)",
          codeLines: [
            "// TELUSURI SEJARAH JARINGAN DARI ARPANET 1969 HINGGA INTERNET MODERN",
            "Step 1: [29 Okt 1969] ARPANET: Pesan pertama 'LO' dikirim dari UCLA ke SRI",
            "Step 2: [Des 1969] 4 Kampus Terhubung: UCLA, SRI, UCSB, University of Utah",
            "Step 3: [1971] Ray Tomlinson mengirim Email pertama dengan simbol '@'",
            "Step 4: [1 Jan 1983] Flag Day: ARPANET beralih dari NCP ke protokol TCP/IP",
            "Step 5: [1983-1984] Paul Mockapetris memperkenalkan DNS (.com, .edu, .org)",
            "Step 6: [1989-1991] Tim Berners-Lee (CERN) menciptakan WWW, HTML, HTTP & URL",
            "Step 7: [1995-Sekarang] Internet Komersial: Dial-Up -> Fiber Optik, 5G, IoT & IPv6"
          ],
          steps: [
            {
              line: 1,
              vars: { Tanggal: "29 Oktober 1969", Pengirim: "UCLA (Charley Kline & Kleinrock)", Penerima: "SRI Stanford (Bill Duvall)", Pesan_Terkirim: "'LO' (Target: LOGIN)" },
              explanation: "Pada 29 Oktober 1969, pengujian komunikasi paket data pertama ARPANET dilakukan antara UCLA dan SRI. Saat mengetik 'LOGIN', sistem crash setelah huruf 'L' dan 'O' terkirim.",
              output: "[1969-10-29] Transmisi IMP #1 (UCLA) -> IMP #2 (SRI): 'L'... 'O'... [SYSTEM CRASH]"
            },
            {
              line: 2,
              vars: { Periode: "Desember 1969", Jaringan: "ARPANET (DoD / ARPA)", Jumlah_Node: "4 Universitas AS", Daftar_Node: "UCLA, SRI, UCSB, Univ. of Utah" },
              explanation: "Menjelang akhir tahun 1969, empat universitas pertama resmi terhubung dalam topologi packet-switching ARPANET menggunakan router awal bernama IMP.",
              output: "[1969-12] 4 Node ARPANET Aktif: UCLA <-> SRI <-> UCSB <-> UTAH."
            },
            {
              line: 3,
              vars: { Tahun: "1971", Tokoh: "Ray Tomlinson", Inovasi: "Surat Elektronik (E-Mail)", Simbol_Khas: "user@host (Simbol @)" },
              explanation: "Ray Tomlinson mengembangkan program email jaringan pertama dan memilih karakter '@' untuk memisahkan identitas pengguna dan nama komputer tujuan.",
              output: "[1971] Email jaringan pertama berhasil dikirim menggunakan format user@host."
            },
            {
              line: 4,
              vars: { Tanggal: "1 Januari 1983 (Flag Day)", Perancang: "Vinton Cerf & Robert Kahn", Protokol_Lama: "NCP (Dihentikan)", Protokol_Baru: "TCP/IP (Standar Internet)" },
              explanation: "Tanggal 1 Januari 1983 menjadi hari lahir Internet modern ketika ARPANET resmi mengadopsi protokol TCP/IP rancangan Vint Cerf & Bob Kahn, serta memisahkan MILNET.",
              output: "[1983-01-01] MIGRASI SUKSES: NCP -> TCP/IP Aktif! Jaringan berbeda kini bisa terhubung."
            },
            {
              line: 5,
              vars: { Tahun: "1983 – 1984", Tokoh: "Paul Mockapetris", Inovasi: "DNS (Domain Name System)", Fungsi: "Ubah Domain (google.com) -> IP Address" },
              explanation: "Paul Mockapetris menciptakan DNS sehingga pengguna tidak perlu lagi menghafal deretan angka IP Address untuk mengakses komputer di jaringan.",
              output: "[1984] DNS Server Aktif: Menerjemahkan nama domain ke IP Address secara otomatis."
            },
            {
              line: 6,
              vars: { Tahun: "1989 – 1991", Tokoh: "Sir Tim Berners-Lee (CERN)", Inovasi: "World Wide Web (WWW)", Standar_Web: "HTML, HTTP, dan URL" },
              explanation: "Di laboratorium CERN Swiss, Tim Berners-Lee menciptakan World Wide Web (WWW), HTML, HTTP, dan URL sehingga informasi dapat diakses berupa halaman web yang saling tertaut.",
              output: "[1991] World Wide Web (WWW) diluncurkan ke publik oleh Tim Berners-Lee!"
            },
            {
              line: 7,
              vars: { Era: "1995 – Sekarang", Status: "Internet Komersial Global", Transmisi: "Fiber Optik (Cahaya) & Seluler 5G", Pengalamatan: "IPv4 (32-bit) & IPv6 (128-bit)" },
              explanation: "Setelah larangan komersial dicabut dan browser grafis hadir, internet berkembang dari modem Dial-Up menjadi jaringan Fiber Optik berkecepatan tinggi, 5G, Cloud, dan IoT.",
              output: "[MODERN ERA] Internet Komersial Global: Fiber Optik + 5G + IPv6 + Cloud & IoT Aktif!"
            }
          ]
        }
      }
    ]
  }
];
