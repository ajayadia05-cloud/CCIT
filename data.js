/* ==========================================================================
   EduLogic Java Studio — Complete Curriculum Dataset (data.js)
   Berisi Pembahasan Materi Mendalam, Implementasi Java, dan Contoh Terbahas
   di Setiap Poin Sub-Bab (A, B, C, dst.) untuk Bab I, II, III, dan IV.
   ========================================================================== */

const CURRICULUM_DATA = [
  /* ========================================================================
     BAB I. LOGIKA DAN ANALITIKA (Sub-Bab A s/d H — Konsep Umum & Analitika)
     ======================================================================== */
  {
    id: "bab-1",
    roman: "I",
    title: "Logika dan Analitika",
    description:
      "Materi ini menguji kemampuan peserta dalam memahami kondisi, menarik kesimpulan, dan menyelesaikan masalah secara logis. Peserta dapat diberikan suatu kondisi atau beberapa pernyataan dan diminta menentukan nilai benar/salah, kesimpulan, atau kemungkinan yang tepat.",
    subtopics: [
      {
        id: "1-a",
        code: "A",
        title: "Logika Dasar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧠 1. Pembahasan Materi: Hakikat Logika Dasar</h3>
              <p><strong>Logika dasar</strong> adalah ilmu dan kecakapan berpikir secara teratur, runtut, dan masuk akal untuk menarik kesimpulan yang <strong>sah (valid)</strong> dari sejumlah fakta atau informasi yang tersedia.</p>
              <ul>
                <li><strong>Premis (Pernyataan Dasar / Fakta Awal):</strong> Informasi, aturan, atau pernyataan yang dianggap benar pada soal sebagai landasan berpikir.</li>
                <li><strong>Inferensi (Proses Penalaran):</strong> Langkah menghubungkan premis-premis secara sistematis sesuai kaidah logika.</li>
                <li><strong>Konklusi (Kesimpulan):</strong> Pernyataan hasil akhir yang ditarik secara mutlak dari premis-premis yang ada.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔍 2. Tiga Prinsip Utama Berpikir Logis</h3>
              <ul>
                <li><strong>Prinsip Bebas Asumsi Luar:</strong> Kesimpulan hanya boleh ditarik dari fakta yang tertulis pada premis. Jangan menambahkan opini pribadi di luar informasi soal.</li>
                <li><strong>Prinsip Identitas &amp; Non-Kontradiksi:</strong> Suatu pernyataan tidak mungkin bernilai benar sekaligus salah pada waktu dan kondisi yang sama.</li>
                <li><strong>Kebenaran Faktual vs Kesahihan (Validitas):</strong> Suatu kesimpulan disebut <em>valid</em> apabila alur penalarannya mengikuti aturan logika yang benar dari premisnya.</li>
              </ul>
            </div>
          </div>
          <div class="info-card">
            <h3>📖 3. Contoh Pembahasan Kasus Penalaran Logika Dasar</h3>
            <p><strong>Kasus 1 (Batas Informasi Premis):</strong><br>
            <em>Premis 1:</em> Semua peserta ujian yang datang terlambat wajib melapor ke panitia.<br>
            <em>Premis 2:</em> Raka melapor ke panitia.<br>
            <strong>Analisis:</strong> Apakah Raka pasti datang terlambat? <strong>Belum tentu!</strong> Premis hanya menyatakan bahwa yang terlambat wajib melapor, tetapi tidak melarang peserta yang datang tepat waktu untuk melapor ke panitia karena keperluan lain.</p>
            <p style="margin-top:8px;"><strong>Kasus 2 (Sifat Transitif Perbandingan):</strong><br>
            Gedung A lebih tinggi daripada Gedung B. Gedung B lebih tinggi daripada Gedung C.<br>
            <strong>Kesimpulan Pasti:</strong> Urutan tinggi gedung dari yang tertinggi adalah <strong>A &gt; B &gt; C</strong>, sehingga Gedung A pasti lebih tinggi daripada Gedung C.</p>
          </div>
        `
      },
      {
        id: "1-b",
        code: "B",
        title: "Pernyataan Benar dan Salah",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⚖️ 1. Pembahasan Materi: Pernyataan (Proposisi) vs Bukan Pernyataan</h3>
              <p>Dalam logika, <strong>Pernyataan (Proposisi)</strong> adalah kalimat berita (deklaratif) yang memiliki nilai kebenaran pasti: <strong>Benar (B)</strong> saja atau <strong>Salah (S)</strong> saja, tidak boleh meragukan atau bermakna ganda.</p>
              <ul>
                <li><strong>Pernyataan Benar (B):</strong> <em>"Ibu kota negara Indonesia adalah Jakarta"</em> atau <em>"Hasil dari 12 ditambah 8 adalah 20."</em></li>
                <li><strong>Pernyataan Salah (S):</strong> <em>"Satu minggu terdiri dari 10 hari"</em> atau <em>"Bilangan 9 adalah bilangan prima."</em></li>
                <li><strong>Bukan Pernyataan:</strong> Kalimat tanya (<em>"Jam berapa rapat dimulai?"</em>), kalimat perintah (<em>"Tutup pintu itu!"</em>), atau kalimat harapan/opini subjektif (<em>"Lukisan itu sangat indah"</em>).</li>
                <li><strong>Kalimat Terbuka:</strong> Kalimat yang masih mengandung variabel yang belum diketahui nilainya, misalnya <em>"Kota X terletak di Pulau Jawa"</em> atau <em>"x + 5 = 12"</em>. Kalimat terbuka baru menjadi pernyataan setelah variabelnya diganti dengan objek/nilai tertentu.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔄 2. Nilai Kebenaran &amp; Ingkaran Pernyataan Tunggal</h3>
              <p>Setiap pernyataan tunggal P memiliki <strong>ingkaran (negasi)</strong> yang dilambangkan dengan ~ P atau ¬ P, yaitu pernyataan baru yang bernilai kebalikan dari pernyataan semula:</p>
              <ul>
                <li>Jika pernyataan P bernilai <strong>Benar (B)</strong>, maka ingkarannya (¬ P) bernilai <strong>Salah (S)</strong>.</li>
                <li>Jika pernyataan P bernilai <strong>Salah (S)</strong>, maka ingkarannya (¬ P) bernilai <strong>Benar (B)</strong>.</li>
                <li><strong>Contoh Hati-hati pada Perbandingan:</strong> Ingkaran dari <em>"Skor ujian Andi lebih dari 75"</em> (x &gt; 75) bukanlah <em>"kurang dari 75"</em>, melainkan <strong>"Skor ujian Andi kurang dari atau sama dengan 75"</strong> (x ≤ 75).</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "1-c",
        code: "C",
        title: "AND, OR, NOT",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔗 1. Pembahasan Materi: Operator Logika Dasar (AND, OR, NOT)</h3>
              <p>Dua atau lebih pernyataan tunggal dapat digabungkan menjadi <strong>pernyataan majemuk</strong> menggunakan kata hubung logika:</p>
              <ul>
                <li><strong>Konjungsi — DAN (AND / ∧):</strong> Pernyataan majemuk <em>"P dan Q"</em> bernilai <strong>Benar (B)</strong> HANYA JIKA kedua pernyataan P dan Q sama-sama bernilai <strong>Benar</strong>. Jika salah satu saja Salah, maka keseluruhannya bernilai <strong>Salah (S)</strong>.</li>
                <li><strong>Disjungsi — ATAU (OR / ∨):</strong> Pernyataan majemuk <em>"P atau Q"</em> bernilai <strong>Benar (B)</strong> apabila <strong>minimal salah satu</strong> dari P atau Q bernilai Benar. Hanya bernilai <strong>Salah (S)</strong> jika keduanya sama-sama Salah.</li>
                <li><strong>Negasi — TIDAK / BUKAN (NOT / ¬):</strong> Membalik nilai kebenaran suatu pernyataan (NOT Benar = Salah, NOT Salah = Benar).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>📊 2. Tabel Kebenaran Lengkap (AND, OR, NOT)</h3>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>P</th><th>Q</th><th>NOT P (¬ P)</th><th>P AND Q (P ∧ Q)</th><th>P OR Q (P ∨ Q)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td></tr>
                    <tr><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="info-card">
            <h3>💡 3. Hukum De Morgan (Ingkaran Kalimat "DAN" serta "ATAU")</h3>
            <ul>
              <li><strong>Ingkaran dari Konjungsi ¬(P  DAN  Q) ≡ ¬ P  ATAU  ¬ Q:</strong><br>
              Ingkaran dari <em>"Budi membawa KTP <strong>dan</strong> memakai kemeja putih"</em> adalah <em>"Budi <strong>tidak</strong> membawa KTP <strong>atau</strong> Budi <strong>tidak</strong> memakai kemeja putih."</em></li>
              <li><strong>Ingkaran dari Disjungsi ¬(P  ATAU  Q) ≡ ¬ P  DAN  ¬ Q:</strong><br>
              Ingkaran dari <em>"Hari ini turun hujan <strong>atau</strong> angin bertiup kencang"</em> adalah <em>"Hari ini <strong>tidak</strong> turun hujan <strong>dan</strong> angin <strong>tidak</strong> bertiup kencang."</em></li>
            </ul>
          </div>
        `
      },
      {
        id: "1-d",
        code: "D",
        title: "Implikasi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➡️ 1. Pembahasan Materi: Pernyataan Bersyarat / Implikasi (P → Q)</h3>
              <p><strong>Implikasi</strong> adalah pernyataan majemuk bersyarat berbentuk <strong>"Jika P, maka Q"</strong> (P → Q), di mana P disebut <em>anteseden</em> (sebab / syarat cukup) dan Q disebut <em>konsekuen</em> (akibat / syarat perlu).</p>
              <ul>
                <li><strong>Aturan Kebenaran Implikasi:</strong> Implikasi P → Q diibaratkan sebagai sebuah <strong>janji</strong>. Janji tersebut <strong>HANYA bernilai SALAH (S)</strong> apabila syarat P terpenuhi (<strong>Benar</strong>), tetapi janji Q diingkari (<strong>Salah</strong>).</li>
                <li>Apabila syarat P tidak terjadi (<strong>Salah</strong>), maka apa pun kondisi Q (baik Benar maupun Salah), pernyataan implikasi P → Q tetap dianggap <strong>Benar (B)</strong> karena janji tidak dilanggar.</li>
              </ul>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>Sebab (P)</th><th>Akibat (Q)</th><th>Jika P maka Q (P → Q)</th><th>Keterangan Logis</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td>Syarat terpenuhi, janji ditepati</td></tr>
                    <tr><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td>Syarat terpenuhi, janji diingkari!</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td>Syarat tidak terjadi, aturan tetap sah</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td>Syarat tidak terjadi, aturan tetap sah</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="info-card">
              <h3>🔄 2. Konvers, Invers, Kontraposisi &amp; Ingkaran Implikasi</h3>
              <p>Dari sebuah implikasi awal <strong>"Jika P, maka Q"</strong> (P → Q), terdapat 3 bentuk turunan dan 1 bentuk ingkaran yang sangat sering diujikan:</p>
              <ul>
                <li><strong>Konvers (Q → P):</strong> <em>"Jika Q, maka P"</em> (Membalik posisi sebab dan akibat — <strong>belum tentu setara</strong> dengan kalimat asli).</li>
                <li><strong>Invers (¬ P → ¬ Q):</strong> <em>"Jika tidak P, maka tidak Q"</em> (Menegasikan kedua ruas tanpa membalik posisi — setara dengan Konvers).</li>
                <li><strong>Kontraposisi (¬ Q → ¬ P):</strong> <em>"Jika tidak Q, maka tidak P"</em> (Membalik sekaligus menegasikan — <strong>SELALU SETARA / EKUIVALEN</strong> dengan implikasi asli P → Q!).</li>
                <li><strong>Bentuk Disjungsi Setara (¬ P ∨ Q):</strong> <em>"Tidak P atau Q"</em>.</li>
                <li><strong>Ingkaran / Negasi Implikasi (P ∧ ¬ Q):</strong> <em>"P terjadi, <strong>tetapi</strong> Q tidak terjadi."</em> (Hati-hati: ingkaran dari "Jika P maka Q" BUKANLAH kalimat "Jika...", melainkan kata hubung DAN/TETAPI!).</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "1-e",
        code: "E",
        title: "Jika dan Hanya Jika (Biimplikasi / Iff)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>↔️ 1. Pembahasan Materi: Biimplikasi (P ↔ Q)</h3>
              <p><strong>Biimplikasi</strong> adalah pernyataan majemuk dengan kata hubung <strong>"... jika dan hanya jika ..."</strong> (dalam bahasa Inggris: <em>If and only if / Iff</em>), yang dilambangkan dengan P ↔ Q.</p>
              <ul>
                <li><strong>Makna Dua Arah:</strong> Pernyataan P ↔ Q bermakna (P → Q)  DAN  (Q → P). Artinya, P adalah syarat perlu dan cukup bagi Q, begitu pula sebaliknya.</li>
                <li><strong>Aturan Nilai Kebenaran:</strong> Biimplikasi P ↔ Q bernilai <strong>Benar (B)</strong> apabila kedua pernyataan P dan Q memiliki <strong>nilai kebenaran yang SAMA / KEMBAR</strong> (sama-sama Benar, atau sama-sama Salah).</li>
                <li>Jika salah satu bernilai Benar sedangkan yang lain bernilai Salah, maka biimplikasi bernilai <strong>Salah (S)</strong>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>📊 2. Tabel Kebenaran &amp; Contoh Analisis Biimplikasi</h3>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>P</th><th>Q</th><th>P ↔ Q (Jika dan hanya jika)</th><th>Status Nilai Kebenaran</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td class="val-true">Benar (B)</td><td>Kedua pernyataan sama-sama Benar</td></tr>
                    <tr><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td>Nilai kebenaran berbeda</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td class="val-false">Salah (S)</td><td>Nilai kebenaran berbeda</td></tr>
                    <tr><td class="val-false">Salah (S)</td><td class="val-false">Salah (S)</td><td class="val-true">Benar (B)</td><td>Kedua pernyataan sama-sama Salah</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="margin-top:10px;"><strong>Contoh:</strong> Pernyataan <em>"Sebuah segitiga disebut sama sisi jika dan hanya jika ketiga sisinya sama panjang."</em> Jika sebuah segitiga ketiga sisinya tidak sama panjang (Salah), maka ia pasti bukan segitiga sama sisi (Salah), sehingga aturan biimplikasi tersebut tetap bernilai <strong>Benar</strong>.</p>
            </div>
          </div>
        `
      },
      {
        id: "1-f",
        code: "F",
        title: "Analisis Kondisi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧩 1. Pembahasan Materi: Empat Tipe Soal Analisis Kondisi</h3>
              <p>Soal <strong>Analisis Kondisi (Analytical Reasoning)</strong> menguji kemampuan memetakan sejumlah syarat/batasan (<em>constraints</em>) untuk menentukan kemungkinan atau kepastian yang tepat:</p>
              <ol>
                <li><strong>Analisis Urutan / Peringkat (Ordering):</strong> Menyusun urutan objek berdasarkan petunjuk perbandingan (<em>lebih tinggi, sebelum, tepat sesudah, di antara</em>).</li>
                <li><strong>Analisis Posisi Tempat Duduk (Seating Arrangement):</strong> Menyusun posisi sebaris atau melingkar dengan memperhatikan syarat <em>bersebelahan</em>, <em>berhadapan</em>, atau <em>di ujung</em>.</li>
                <li><strong>Analisis Seleksi &amp; Penjadwalan (Grouping):</strong> Memilih anggota tim atau menyusun jadwal dengan memperhatikan syarat wajib bersama (A → B) dan syarat saling menolak (A → ¬ B).</li>
                <li><strong>Teka-Teki Pernyataan Jujur–Bohong (Saksi):</strong> Menentukan fakta sebenarnya ketika diketahui hanya sejumlah tertentu pernyataan yang bernilai benar.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>🕵️ 2. Pembahasan Lengkap Kasus Interogasi Pencurian Rumah Duduy</h3>
              <p><strong>Soal Klasik:</strong> Tiga orang (Angga, Bandi, Cinta) diinterogasi terkait pencurian di rumah Duduy:<br>
              • <strong>Angga:</strong> (1) Saya pengacara. (2) Saya tidak terlibat.<br>
              • <strong>Bandi:</strong> (1) Saya bukan pengacara. (2) Saya tahu pencurinya.<br>
              • <strong>Cinta:</strong> (1) Saya pengacara. (2) Saya tidak tahu pencurinya.<br>
              <em>Kondisi:</em> Hanya <strong>1 pernyataan yang benar</strong> dari total 6 kalimat, dan <strong>2 di antara mereka adalah pengacara</strong>.</p>
              <ul>
                <li><strong>Langkah 1 (Uji klaim profesi A<sub>1</sub>, B<sub>1</sub>, C<sub>1</sub>):</strong>
                  <br>• Jika Angga &amp; Cinta pengacara → A<sub>1</sub>, B<sub>1</sub>, C<sub>1</sub> ketiganya benar (3 benar → mustahil).
                  <br>• Jika Angga &amp; Bandi pengacara → hanya A<sub>1</sub> benar (1 benar).
                  <br>• Jika Bandi &amp; Cinta pengacara → hanya C<sub>1</sub> benar (1 benar).
                </li>
                <li><strong>Langkah 2 (Tarik kesimpulan):</strong> Dalam kondisi yang mungkin, 1 pernyataan yang benar pasti berada di pernyataan profesi (A<sub>1</sub> atau C<sub>1</sub>). Artinya, seluruh pernyataan kedua (A<sub>2</sub>, B<sub>2</sub>, C<sub>2</sub>) <strong>pasti SALAH</strong>!</li>
                <li>Karena pernyataan Angga <em>"Saya tidak terlibat"</em> (A<sub>2</sub>) bernilai <strong>SALAH</strong>, maka fakta sebenarnya adalah <strong>Angga terlibat (Angga adalah pencurinya)</strong>!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "1-g",
        code: "G",
        title: "Induksi dan Deduksi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔽 1. Pembahasan Materi: Penalaran Deduktif (Umum → Khusus)</h3>
              <p><strong>Penalaran Deduktif</strong> adalah proses menarik kesimpulan khusus yang <strong>pasti benar</strong> dari premis-premis umum menggunakan empat kaidah baku:</p>
              <ul>
                <li><strong>Modus Ponens:</strong><br>
                Premis 1: Jika P maka Q (P → Q)<br>
                Premis 2: P terjadi (Benar)<br>
                <strong>Kesimpulan:</strong> Maka <strong>Q pasti terjadi</strong>.</li>
                <li><strong>Modus Tollens:</strong><br>
                Premis 1: Jika P maka Q (P → Q)<br>
                Premis 2: Q tidak terjadi (¬ Q)<br>
                <strong>Kesimpulan:</strong> Maka <strong>P pasti tidak terjadi (¬ P)</strong>.</li>
                <li><strong>Silogisme Hipotetis (Rantai Sebab-Akibat):</strong><br>
                Premis 1: Jika P maka Q (P → Q)<br>
                Premis 2: Jika Q maka R (Q → R)<br>
                <strong>Kesimpulan:</strong> Maka <strong>Jika P maka R (P → R)</strong>.</li>
                <li><strong>Silogisme Disjungtif:</strong><br>
                Premis 1: P atau Q (P ∨ Q)<br>
                Premis 2: Ternyata bukan P (¬ P)<br>
                <strong>Kesimpulan:</strong> Maka <strong>pasti Q</strong>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔼 2. Penalaran Induktif &amp; Jebakan Sesat Pikir (Fallacy)</h3>
              <p><strong>Penalaran Induktif (Khusus → Umum):</strong> Mengamati sejumlah fakta, data, atau kejadian khusus yang berulang, lalu menarik kesimpulan umum (generalisasi) atau memprediksi pola berikutnya.</p>
              <ul>
                <li><strong>Contoh Induksi:</strong> Mengamati bahwa besi memuai saat dipanaskan, tembaga memuai saat dipanaskan, dan aluminium memuai saat dipanaskan → <em>Kesimpulan Induktif:</em> Semua logam memuai jika dipanaskan.</li>
                <li><strong>Waspadai Dua Jebakan Deduksi yang TIDAK SAH (Fallacy):</strong>
                  <br>1. <em>Affirming the Consequent:</em> Diketahui P → Q dan fakta Q terjadi, lalu menyimpulkan P pasti terjadi. (<strong>SALAH!</strong> Contoh: "Jika hujan maka jalan basah. Jalan basah." Belum tentu hujan, bisa saja jalan baru disiram).
                  <br>2. <em>Denying the Antecedent:</em> Diketahui P → Q dan fakta ¬ P, lalu menyimpulkan ¬ Q. (<strong>SALAH!</strong>).
                </li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "1-h",
        code: "H",
        title: "Problem Solving dan Penalaran Logis",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🛠️ 1. Pembahasan Materi: Penalaran Kuantor &amp; Himpunan Sifat</h3>
              <p>Dalam menyelesaikan masalah penalaran logis, perhatikan perbedaan cakupan kata depan (<strong>kuantor</strong>):</p>
              <ul>
                <li><strong>Kuantor Universal (Semua / Setiap / Seluruh):</strong> Berlaku tanpa terkecuali. Untuk membuktikan pernyataan <em>"Semua A adalah B"</em> bernilai SALAH, cukup ditemukan <strong>satu contoh penyangkal (counterexample)</strong> yaitu satu anggota A yang bukan B.</li>
                <li><strong>Kuantor Eksistensial (Ada / Beberapa / Sebagian / Sementara):</strong> Berlaku untuk minimal satu anggota (tetapi tidak harus semuanya).</li>
                <li><strong>Aturan Ingkaran Kuantor:</strong>
                  <br>• Ingkaran dari <em>"Semua peserta lulus ujian"</em> adalah <strong>"Ada (minimal satu) peserta yang tidak lulus ujian"</strong> (Bukan "Semua peserta tidak lulus!").
                  <br>• Ingkaran dari <em>"Ada peserta yang datang terlambat"</em> adalah <strong>"Semua peserta tidak datang terlambat"</strong> (atau <em>"Tidak ada peserta yang datang terlambat"</em>).
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🎯 2. Strategi Problem Solving Analitis</h3>
              <ol>
                <li><strong>Metode Tabel Silang (Matriks Eliminasi):</strong> Saat mencocokkan beberapa orang dengan profesi/kota/pilihan yang berbeda, buat tabel baris-kolom lalu beri tanda × pada pasangan yang mustahil dan ✓ pada pasangan yang sudah pasti.</li>
                <li><strong>Prinsip Kemungkinan Terburuk (Pigeonhole Principle):</strong> Untuk mencari jumlah pengambilan minimum agar <em>pasti</em> mendapatkan kondisi tertentu, hitung skenario terburuk terlebih dahulu lalu tambahkan 1.</li>
                <li><strong>Analisis Irisan Minimum:</strong> Jika dari N orang terdapat A orang menyukai kopi dan B orang menyukai teh, maka jumlah minimum orang yang menyukai keduanya adalah (A + B) - N.</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB II. ARITMATIKA DAN MATEMATIKA DASAR (Sub-Bab A s/d L — Konsep & Rumus Matematika Umum)
     ======================================================================== */
  {
    id: "bab-2",
    roman: "II",
    title: "Aritmatika dan Matematika Dasar",
    description:
      "Materi ini menguji kemampuan menghitung sekaligus memahami pola dan hubungan antarbilangan. Soal dapat berupa perhitungan langsung maupun masalah yang membutuhkan penalaran dan penyusunan langkah penyelesaian.",
    subtopics: [
      {
        id: "2-a",
        code: "A",
        title: "Operasi Dasar: Penjumlahan, Pengurangan, Perkalian, dan Pembagian",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➕ 1. Pembahasan Materi: Empat Operasi Dasar &amp; Aturan Bilangan Bertanda</h3>
              <ul>
                <li><strong>Penjumlahan (+) &amp; Pengurangan (-) Bilangan Positif dan Negatif:</strong>
                  <br>• Menjumlahkan bilangan negatif sama dengan mengurangi: a + (-b) = a - b (Contoh: 18 + (-7) = 11).
                  <br>• Mengurangi dengan bilangan negatif sama dengan menjumlahkan: a - (-b) = a + b (Contoh: 12 - (-5) = 17).
                </li>
                <li><strong>Perkalian (×) &amp; Pembagian (÷) Bilangan Bertanda:</strong>
                  <br>• Tanda <strong>sama</strong> menghasilkan <strong>positif (+)</strong>: (+) × (+) = (+) dan (-) × (-) = (+), begitu pula (-) ÷ (-) = (+).
                  <br>• Tanda <strong>berbeda</strong> menghasilkan <strong>negatif (-)</strong>: (+) × (-) = (-) dan (-) ÷ (+) = (-).
                </li>
                <li><strong>Sifat Nol (0) dan Satu (1):</strong>
                  <br>• Identitas penjumlahan: a + 0 = a. Identitas perkalian: a × 1 = a.
                  <br>• Perkalian dengan nol: a × 0 = 0. Pembagian nol oleh bilangan tak-nol: 0 ÷ a = 0.
                  <br>• Pembagian bilangan apa pun dengan 0 (a ÷ 0) adalah <strong>tidak terdefinisi</strong>.
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>⚡ 2. Rumusan Sifat Operasi untuk Berhitung Cepat</h3>
              <ul>
                <li><strong>Sifat Komutatif (Pertukaran):</strong> a + b = b + a dan a × b = b × a.</li>
                <li><strong>Sifat Asosiatif (Pengelompokan):</strong> (a + b) + c = a + (b + c) dan (a × b) × c = a × (b × c).</li>
                <li><strong>Sifat Distributif (Penyebaran — Sangat Penting untuk Hitung Cepat!):</strong>
                  <br>• a × (b + c) = (a × b) + (a × c)
                  <br>• a × (b - c) = (a × b) - (a × c)
                  <br><em>Contoh Hitung Cepat:</em> 37 × 68 + 37 × 32 = 37 × (68 + 32) = 37 × 100 = <strong>3.700</strong>.
                </li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-b",
        code: "B",
        title: "Operasi Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📐 1. Pembahasan Materi: Hirarki &amp; Urutan Prioritas Operasi Campuran</h3>
              <p>Dalam menyelesaikan operasi hitung campuran yang memuat berbagai tanda operasi sekaligus, urutan pengerjaan yang wajib dipatuhi (aturan <strong>KURKABATAKU</strong> / PEMDAS) adalah:</p>
              <ol>
                <li><strong>Tanda Kurung ( ... ):</strong> Kerjakan operasi di dalam tanda kurung paling awal (mulai dari kurung paling dalam jika bersarang).</li>
                <li><strong>Perpangkatan &amp; Akar (a<sup>n</sup>, √a):</strong> Dikerjakan setelah tanda kurung selesai.</li>
                <li><strong>Perkalian (×) dan Pembagian (÷):</strong> Memiliki kedudukan yang <strong>setara/sama kuat</strong>. Jika muncul berurutan, wajib dikerjakan dari <strong>kiri ke kanan</strong>!</li>
                <li><strong>Penjumlahan (+) dan Pengurangan (-):</strong> Memiliki kedudukan yang <strong>setara</strong> dan dikerjakan paling akhir dari <strong>kiri ke kanan</strong>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>🧪 2. Contoh Pembahasan Langkah demi Langkah</h3>
              <p><strong>Soal:</strong> Hitunglah nilai dari 40 - 24 ÷ 4 × 3 + (10 - 4) × 2</p>
              <ul>
                <li><strong>Langkah 1 (Tanda Kurung):</strong> (10 - 4) = 6, sehingga kalimat menjadi 40 - 24 ÷ 4 × 3 + 6 × 2.</li>
                <li><strong>Langkah 2 (Bagi &amp; Kali dari Kiri ke Kanan):</strong>
                  <br>• Hitung 24 ÷ 4 = 6, lalu langsung kalikan 6 × 3 = 18 <em>(Hati-hati: jangan mengalikan 4 × 3 terlebih dahulu!)</em>.
                  <br>• Hitung 6 × 2 = 12.
                </li>
                <li><strong>Langkah 3 (Kurang &amp; Tambah dari Kiri):</strong> 40 - 18 + 12 = 22 + 12 = <strong>34</strong>.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-c",
        code: "C",
        title: "Pecahan dan Persentase",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🍰 1. Pembahasan Materi: Rumus Operasi Pecahan</h3>
              <ul>
                <li><strong>Penjumlahan &amp; Pengurangan Pecahan:</strong> Samakan penyebutnya terlebih dahulu (menggunakan KPK):
                  <br>a/b ± c/d = ((a × d) ± (b × c))/(b × d)
                </li>
                <li><strong>Perkalian Pecahan:</strong> Kalikan pembilang dengan pembilang, dan penyebut dengan penyebut:
                  <br>a/b × c/d = (a × c)/(b × d)
                </li>
                <li><strong>Pembagian Pecahan:</strong> Ubah tanda bagi menjadi kali dengan membalik pecahan pembagi (kebalikannya):
                  <br>a/b ÷ c/d = a/b × d/c = (a × d)/(b × c)
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>💯 2. Rumus Persentase, Kenaikan &amp; Diskon Bertingkat</h3>
              <ul>
                <li><strong>Konsep Dasar Persen:</strong> p% = p/100.Nilai p% dari N adalah p/100 × N.</li>
                <li><strong>Persentase Perubahan (Kenaikan / Penurunan / Untung / Rugi):</strong>
                  <br>Persentase Perubahan = (Selisih Nilai)/(Nilai Awal) × 100%
                </li>
                <li><strong>Mencari Harga Awal Sebelum Diskon d%:</strong>
                  <br>Harga Awal = 100/(100 - d) × Harga Setelah Diskon
                </li>
                <li><strong>Diskon Ganda / Bertingkat (d_1% lalu d_2%):</strong>
                  <br>Diskon 20% ditambah 10% <strong>bukanlah</strong> 30%, melainkan membayar (100% - 20%) × (100% - 10%) = 80% × 90% = 72% dari harga semula (total diskon efektif = 28%).
                </li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-d",
        code: "D",
        title: "Pangkat dan Akar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🚀 1. Pembahasan Materi: Rumus &amp; Sifat Perpangkatan (Eksponen)</h3>
              <ul>
                <li><strong>Perkalian Basis Sama (Pangkat Dijumlah):</strong> a^m × a^n = a<sup>m+n</sup></li>
                <li><strong>Pembagian Basis Sama (Pangkat Dikurang):</strong> a^m/a^n = a<sup>m-n</sup> (untuk a ≠ 0)</li>
                <li><strong>Pangkat Dipangkatkan (Pangkat Dikali):</strong> (a^m)^n = a<sup>m × n</sup></li>
                <li><strong>Pangkat Perkalian / Pembagian:</strong> (a × b)^n = a^n × b^n dan (a/b)^n = a^n/b^n</li>
                <li><strong>Pangkat Nol &amp; Pangkat Negatif:</strong> a<sup>0</sup> = 1 (untuk a ≠ 0) dan a<sup>-n</sup> = 1/a^n</li>
                <li><strong>Pangkat Pecahan:</strong> a<sup>m/n</sup> = <sup>n</sup>√(a^m) = (<sup>n</sup>√(a))^m</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>√ 2. Sifat Bentuk Akar &amp; Identitas Aljabar Penting</h3>
              <ul>
                <li><strong>Menyederhanakan Bentuk Akar:</strong> √(a × b) = √a × √b (Contoh: √75 = √(25 × 3) = 5√3).</li>
                <li><strong>Penjumlahan &amp; Pengurangan Akar Sejenis:</strong> p√c ± q√c = (p ± q)√c.</li>
                <li><strong>Trik Hitung Cepat Selisih Kuadrat:</strong>
                  <br>a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)
                  <br><em>Contoh:</em> √(13<sup>2</sup> - 12<sup>2</sup>) = √((13 + 12)(13 - 12)) = √(25 × 1) = <strong>5</strong>.
                </li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-e",
        code: "E",
        title: "Sifat-Sifat Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔢 1. Pembahasan Materi: Klasifikasi Bilangan, Genap/Ganjil &amp; Prima</h3>
              <ul>
                <li><strong>Sifat Bilangan Genap &amp; Ganjil:</strong>
                  <br>• Ganjil ± Ganjil = Genap &nbsp;|&nbsp; Genap ± Genap = Genap &nbsp;|&nbsp; Ganjil ± Genap = Ganjil
                  <br>• Ganjil × Ganjil = Ganjil, sedangkan perkalian dengan bilangan Genap <strong>selalu menghasilkan Genap</strong>.
                </li>
                <li><strong>Bilangan Prima:</strong> Bilangan asli lebih dari 1 yang hanya memiliki tepat 2 faktor pembagi positif (yaitu 1 dan dirinya sendiri):
                  <br>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, ...
                  <br><em>Catatan Penting:</em> Angka 1 <strong>bukan</strong> bilangan prima, dan angka 2 adalah <strong>satu-satunya bilangan prima yang genap</strong>.
                </li>
                <li><strong>Ciri Habis Dibagi:</strong>
                  <br>• <em>Habis dibagi 3:</em> Jumlah seluruh angka penyusunnya habis dibagi 3.
                  <br>• <em>Habis dibagi 4:</em> Dua angka terakhirnya habis dibagi 4.
                  <br>• <em>Habis dibagi 9:</em> Jumlah seluruh angka penyusunnya habis dibagi 9.
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>⚙️ 2. Rumus FPB, KPK &amp; Banyak Faktor Pembagi</h3>
              <ul>
                <li><strong>FPB (Faktor Persekutuan Terbesar):</strong> Digunakan pada soal <em>membagi barang ke dalam sebanyak mungkin kelompok/bingkisan sama rata</em>.</li>
                <li><strong>KPK (Kelipatan Persekutuan Terkecil):</strong> Digunakan pada soal <em>jadwal menyala/bertemu kembali secara bersamaan</em>.</li>
                <li><strong>Hubungan Dua Bilangan (A dan B) dengan FPB &amp; KPK:</strong>
                  <br>A × B = FPB(A, B) × KPK(A, B)
                </li>
                <li><strong>Rumus Banyak Faktor Positif:</strong> Jika faktorisasi prima suatu bilangan adalah N = p_1^a × p_2^b, maka banyaknya faktor pembagi bulat positifnya adalah (a + 1)(b + 1).</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-f",
        code: "F",
        title: "Barisan dan Deret Sederhana",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📈 1. Pembahasan Materi: Barisan &amp; Deret Aritmatika (Selisih Tetap)</h3>
              <p><strong>Barisan Aritmatika</strong> adalah barisan bilangan yang memiliki selisih (beda b) tetap antar suku yang berdekatan (b = U<sub>2</sub> - U<sub>1</sub>):</p>
              <ul>
                <li><strong>Rumus Suku ke-n (U<sub>n</sub>):</strong>
                  <br>U<sub>n</sub> = a + (n - 1)b
                  <em>(dengan a = U<sub>1</sub> adalah suku pertama, dan b adalah beda).</em>
                </li>
                <li><strong>Rumus Jumlah n Suku Pertama (S<sub>n</sub>):</strong>
                  <br>S<sub>n</sub> = n/2 × (a + U<sub>n</sub>) = n/2 × (2a + (n - 1)b)
                </li>
                <li><strong>Rumus Cepat Jumlah n Bilangan Asli Pertama (1 + 2 + 3 + ... + n):</strong>
                  <br>S<sub>n</sub> = (n(n + 1))/2
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🚀 2. Pembahasan Materi: Barisan &amp; Deret Geometri (Rasio Tetap)</h3>
              <p><strong>Barisan Geometri</strong> adalah barisan bilangan yang memiliki perbandingan/pengali (rasio r) tetap antar suku yang berdekatan (r = U<sub>2</sub>/U<sub>1</sub>):</p>
              <ul>
                <li><strong>Rumus Suku ke-n (U<sub>n</sub>):</strong>
                  <br>U<sub>n</sub> = a × r<sup>n-1</sup>
                </li>
                <li><strong>Rumus Jumlah n Suku Pertama (S<sub>n</sub> untuk r &gt; 1):</strong>
                  <br>S<sub>n</sub> = (a(r<sup>n</sup> - 1))/(r - 1)
                </li>
                <li><strong>Aplikasi Pembelahan / Pelipatan:</strong> Jika suatu populasi awal M_0 menjadi r kali lipat setiap periode waktu, maka setelah k kali periode jumlahnya adalah M_k = M_0 × r^k.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-g",
        code: "G",
        title: "Pola Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔍 1. Pembahasan Materi: Jenis-Jenis Pola Bilangan Utama</h3>
              <ul>
                <li><strong>Pola Selisih Bertingkat (Tingkat Dua):</strong> Selisih antar sukunya bertambah secara teratur. Contoh: 3, 7, 13, 21, 31, ... memiliki selisih +4, +6, +8, +10, sehingga suku berikutnya ditambah +12 menjadi 31 + 12 = 43.</li>
                <li><strong>Pola Fibonacci:</strong> Setiap suku merupakan hasil penjumlahan dari <strong>dua suku tepat di depannya</strong> (U<sub>n</sub> = U<sub>n-1</sub> + U<sub>n-2</sub>):
                  <br>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
                </li>
                <li><strong>Pola Larik Ganda (Lompat Satu Suku):</strong> Suku urutan ganjil (U<sub>1</sub>, U<sub>3</sub>, U<sub>5</sub>, ...) dan suku urutan genap (U<sub>2</sub>, U<sub>4</sub>, U<sub>6</sub>, ...) memiliki dua pola terpisah yang berjalan berselang-seling.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>📐 2. Rumus Pola Bilangan Khusus &amp; Pola Huruf</h3>
              <ul>
                <li><strong>Pola Bilangan Persegi / Kuadrat:</strong> U<sub>n</sub> = n<sup>2</sup> → 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ...</li>
                <li><strong>Pola Bilangan Kubik (Pangkat Tiga):</strong> U<sub>n</sub> = n<sup>3</sup> → 1, 8, 27, 64, 125, 216, ...</li>
                <li><strong>Pola Bilangan Segitiga:</strong> U<sub>n</sub> = (n(n + 1))/2 → 1, 3, 6, 10, 15, 21, 28, 36, ...</li>
                <li><strong>Pola Bilangan Persegi Panjang:</strong> U<sub>n</sub> = n(n + 1) → 2, 6, 12, 20, 30, 42, ...</li>
                <li><strong>Pola Huruf Alfabet:</strong> Ubah huruf menjadi nomor urut alfabet (A=1, B=2, C=3, ..., Z=26) untuk melihat selisih angkanya dengan cepat.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-h",
        code: "H",
        title: "Penyusunan Model Matematika",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📝 1. Pembahasan Materi: Menerjemahkan Soal Cerita ke Persamaan Aljabar</h3>
              <p><strong>Penyusunan model matematika</strong> adalah teknik mengubah kalimat verbal pada soal cerita menjadi persamaan atau pertidaksamaan matematika menggunakan variabel (x, y):</p>
              <ul>
                <li><em>"Jumlah dua bilangan adalah S dan selisihnya adalah D"</em> → x + y = S dan x - y = D.<br>
                <strong>Rumus Cepat:</strong> Bilangan terbesar x = (S + D)/2 dan bilangan terkecil y = (S - D)/2.</li>
                <li><em>"Tiga bilangan bulat berurutan"</em> → (x - 1), x, (x + 1) (Rata-ratanya pasti bilangan tengah x).</li>
                <li><em>"Tiga bilangan genap / ganjil berurutan"</em> → (x - 2), x, (x + 2).</li>
                <li><em>"Usia A empat tahun yang lalu"</em> → (A - 4); <em>"Usia A lima tahun yang akan datang"</em> → (A + 5).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🧪 2. Contoh Pembahasan Sistem Persamaan Linear Dua Variabel (SPLDV)</h3>
              <p><strong>Soal:</strong> Harga 3 buku dan 2 pena adalah Rp28.000, sedangkan harga 1 buku dan 2 pena adalah Rp16.000. Berapakah harga 1 buku?</p>
              <ul>
                <li><strong>Model Matematika:</strong> Misalkan harga buku = B dan harga pena = P:
                  <br>Persamaan (1): 3B + 2P = 28.000
                  <br>Persamaan (2): 1B + 2P = 16.000
                </li>
                <li><strong>Langkah Eliminasi:</strong> Kurangkan Persamaan (1) dengan Persamaan (2) sehingga variabel 2P habis:
                  <br>(3B - 1B) = 28.000 - 16.000 ⇒ 2B = 12.000 ⇒ B = <strong>Rp6.000</strong>.
                </li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-i",
        code: "I",
        title: "Himpunan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⭕ 1. Pembahasan Materi: Operasi Himpunan Dasar</h3>
              <ul>
                <li><strong>Irisan (A ∩ B):</strong> Himpunan anggota yang berada di A <strong>sekaligus</strong> berada di B.</li>
                <li><strong>Gabungan (A ∪ B):</strong> Himpunan seluruh anggota yang berada di A <strong>atau</strong> di B.</li>
                <li><strong>Selisih (A - B):</strong> Himpunan anggota yang <strong>hanya</strong> berada di A tetapi tidak berada di B:
                  <br>n(A  saja) = n(A) - n(A ∩ B)
                </li>
                <li><strong>Komplemen (A^c):</strong> Himpunan anggota semesta S yang berada di luar himpunan A: n(A^c) = n(S) - n(A).</li>
                <li><strong>Banyaknya Himpunan Bagian (Subset):</strong> Jika suatu himpunan memiliki k anggota, maka banyaknya seluruh himpunan bagian yang dapat dibentuk adalah <strong>2^k</strong>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>📊 2. Rumus Utama Diagram Venn Dua Himpunan</h3>
              <p>Jika dalam suatu kelompok semesta n(S) terdapat himpunan A, himpunan B, irisan keduanya n(A ∩ B), dan kelompok yang tidak memilih keduanya n(T):</p>
              <ul>
                <li><strong>Rumus Semesta Diagram Venn:</strong>
                  <br>n(S) = n(A) + n(B) - n(A ∩ B) + n(Tidak Keduanya)
                </li>
                <li><strong>Cara Cepat Mencari Irisan (x):</strong>
                  <br>x = (n(A) + n(B) + n(Tidak Keduanya)) - n(S)
                </li>
                <li><em>Contoh:</em> Dari 50 orang, 32 gemar basket, 28 gemar futsal, dan 6 tidak gemar keduanya. Maka yang gemar keduanya adalah (32 + 28 + 6) - 50 = 66 - 50 = <strong>16 orang</strong>.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-j",
        code: "J",
        title: "Matematika Diskrit Dasar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🎲 1. Pembahasan Materi: Kaidah Pencacahan, Permutasi &amp; Kombinasi</h3>
              <ul>
                <li><strong>Kaidah Perkalian (Aturan Pengisian Tempat):</strong> Jika tahap pertama dapat dilakukan dengan m cara dan tahap kedua dengan n cara, maka keduanya dapat dilakukan bersama dalam <strong>m × n cara</strong>.</li>
                <li><strong>Faktorial (n!):</strong> Perkalian bilangan asli berurutan dari n turun hingga 1: n! = n × (n-1) × ... × 1 (dengan 0! = 1).</li>
                <li><strong>Permutasi (Urutan DIPERHATIKAN, AB ≠ BA):</strong> Digunakan untuk pemilihan jabatan (Ketua, Wakil, Bendahara), penyusunan kode/PIN, atau posisi duduk:
                  <br>P(n, r) = n!/((n - r)!)
                </li>
                <li><strong>Kombinasi (Urutan DIABAIKAN, AB = BA):</strong> Digunakan untuk memilih anggota tim, memilih soal, atau jabat tangan:
                  <br>C(n, r) = n!/(r! × (n - r)!)
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔁 2. Permutasi Siklis, Graf &amp; Aritmatika Modulo</h3>
              <ul>
                <li><strong>Permutasi Melingkar (Siklis):</strong> Banyak cara menyusun n orang mengelilingi meja bundar adalah (n - 1)!.</li>
                <li><strong>Rumus Jabat Tangan / Koneksi Antar-Titik:</strong> Banyak garis hubung langsung antar n titik (atau jabat tangan n orang) adalah (n(n - 1))/2.</li>
                <li><strong>Aritmatika Modulo (a  mod  b):</strong> Menyatakan <strong>sisa pembagian</strong> bilangan bulat a ketika dibagi oleh b. Misalnya untuk mencari hari: karena 1 minggu = 7 hari, maka 100  hari lagi sama dengan sisa bagi 100 ÷ 7 = 2 hari setelah hari ini.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-k",
        code: "K",
        title: "Aljabar Logika Sederhana",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⚡ 1. Pembahasan Materi: Hukum-Hukum Aljabar Logika (Boolean)</h3>
              <p><strong>Aljabar Logika (Aljabar Boolean)</strong> mempelajari penyederhanaan dan evaluasi ekspresi logika yang melibatkan variabel bernilai <strong>True (Benar / 1)</strong> dan <strong>False (Salah / 0)</strong> dengan operator <code>and</code> (∧), <code>or</code> (∨), dan <code>not</code> (¬):</p>
              <ul>
                <li><strong>Hukum Identitas:</strong> P  and True ≡ P &nbsp;|&nbsp; P  or False ≡ P</li>
                <li><strong>Hukum Dominasi (Null):</strong> P  and False ≡ False &nbsp;|&nbsp; P  or True ≡ True</li>
                <li><strong>Hukum Komplemen:</strong> P  and (not  P) ≡ False &nbsp;|&nbsp; P  or (not  P) ≡ True</li>
                <li><strong>Hukum Absorpsi (Penyerapan):</strong> P  or  (P  and  Q) ≡ P dan P  and  (P  or  Q) ≡ P</li>
                <li><strong>Hukum De Morgan:</strong> not(P  and  Q) ≡ (not  P)  or  (not  Q) dan not(P  or  Q) ≡ (not  P)  and  (not  Q)</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔎 2. Pembahasan Lengkap Evaluasi Ekspresi Aljabar Logika</h3>
              <p><strong>Contoh Soal:</strong> Agar pernyataan <code>((P and Q) or (notR and S) and (notT or (R and Q)))</code> bernilai <strong>True</strong>, tentukan nilai P, Q, R, S, T!</p>
              <ul>
                <li><strong>Langkah 1:</strong> Jika pada pilihan jawaban diberikan P = False dan Q = True, maka bagian pertama <code>(P and Q)</code> bernilai False and True = <strong>False</strong>.</li>
                <li><strong>Langkah 2:</strong> Agar keseluruhan ekspresi bernilai <strong>True</strong>, maka klausa kedua yaitu <code>(notR and S) and (notT or (R and Q))</code> wajib bernilai <strong>True</strong>.</li>
                <li><strong>Langkah 3:</strong> Agar <code>(notR and S)</code> bernilai <strong>True</strong>, maka notR = True (berarti <strong>R = False</strong>) dan <strong>S = True</strong>.</li>
                <li><strong>Langkah 4:</strong> Substitusikan R = False ke <code>(notT or (R and Q))</code> menjadi <code>(notT or False)</code>. Agar bernilai <strong>True</strong>, maka notT = True, sehingga <strong>T = False</strong>!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-l",
        code: "L",
        title: "Perhitungan dan Analisis Masalah",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🚗 1. Pembahasan Materi: Rumus Kecepatan, Berpapasan &amp; Menyusul</h3>
              <ul>
                <li><strong>Rumus Dasar Jarak (s), Kecepatan (v), dan Waktu (t):</strong>
                  <br>s = v × t  ,  v = s/t  ,  t = s/v
                </li>
                <li><strong>Waktu Berpapasan (Berangkat pada Waktu yang Sama dari Arah Berlawanan):</strong>
                  <br>t<sub>papasan</sub> = (Jarak Total)/(v<sub>1</sub> + v<sub>2</sub>)
                </li>
                <li><strong>Waktu Menyusul (Berangkat Searah dengan Selisih Jarak Awal Δ s):</strong>
                  <br>t<sub>menyusul</sub> = (Selisih Jarak Awal (Δ s))/(v<sub>2</sub> - v<sub>1</sub>)
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>⚙️ 2. Rumus Pekerjaan Bersama, Perbandingan &amp; Rata-Rata Gabungan</h3>
              <ul>
                <li><strong>Waktu Menyelesaikan Pekerjaan Bersama-sama:</strong> Jika orang pertama sanggup menyelesaikan pekerjaan sendirian dalam waktu a dan orang kedua dalam waktu b, maka jika bekerja bersama-sama:
                  <br>t<sub>bersama</sub> = (a × b)/(a + b)
                </li>
                <li><strong>Perbandingan Berbalik Nilai (Jumlah Pekerja P vs Waktu Hari H):</strong> Semakin banyak pekerja, waktu semakin singkat:
                  <br>P<sub>1</sub> × H<sub>1</sub> = P<sub>2</sub> × H<sub>2</sub>
                </li>
                <li><strong>Rata-Rata Gabungan Dua Kelompok:</strong>
                  <br>x̄<sub>gab</sub> = ((n<sub>1</sub> × x̄<sub>1</sub>) + (n<sub>2</sub> × x̄<sub>2</sub>))/(n<sub>1</sub> + n<sub>2</sub>)
                </li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB III. ALGORITMA DAN PEMROGRAMAN JAVA (Sub-Bab A s/d F)
     ======================================================================== */
  {
    id: "bab-3",
    roman: "III",
    title: "Algoritma dan Pemrograman Java",
    description:
      "Materi ini menguji kemampuan peserta dalam membaca, memahami, dan menentukan hasil dari suatu algoritma atau program sederhana menggunakan konsep dasar Java.",
    subtopics: [
      {
        id: "3-a",
        code: "A",
        title: "Dasar Java (Struktur, class, main, Variabel, Tipe Data, Inisialisasi)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>☕ 1. Pembahasan Materi: Poin 1 s/d 6 Dasar Java</h3>
              <ol>
                <li><strong>Struktur Dasar Program Java:</strong> Terdiri dari deklarasi <code>class</code>, method utama <code>main()</code>, dan pernyataan (<em>statement</em>) yang wajib diakhiri tanda titik koma (<code>;</code>). Java bersifat <em>case-sensitive</em> (huruf besar/kecil dibedakan).</li>
                <li><strong><code>class</code>:</strong> Kerangka utama program, contoh: <code>public class Main { ... }</code>.</li>
                <li><strong><code>main()</code>:</strong> Titik awal eksekusi program oleh JVM: <code>public static void main(String[] args)</code>.</li>
                <li><strong>Variabel:</strong> Nama penampung nilai di memori (tidak boleh diawali angka atau memakai spasi).</li>
                <li><strong>Tipe Data Dasar:</strong> <code>int</code> (bilangan bulat), <code>double</code> (bilangan desimal), <code>char</code> (1 karakter dengan kutip tunggal <code>'A'</code>), <code>boolean</code> (<code>true</code>/<code>false</code>), dan <code>String</code> (teks dengan kutip ganda <code>"Halo"</code>).</li>
                <li><strong>Deklarasi &amp; Pemberian Nilai (Assignment):</strong> <code>int skor; skor = 95;</code> atau langsung <code>int skor = 95;</code>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Lengkap Struktur &amp; Tipe Data Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Keenam Poin Dasar Java</span></div>
                <pre class="code-pre" data-highlight="java">public class Main {
    public static void main(String[] args) {
        int nilaiBulat = 85;
        double rataRata = 87.5;
        char indeks = 'A';
        boolean aktif = true;
        String peserta = "Andi";

        System.out.println(peserta + " | " + indeks + " | " + rataRata + " | " + aktif);
    }
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-b",
        code: "B",
        title: "Operator (Aritmatika, Perbandingan, Logika)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➗ 1. Pembahasan Materi: Tiga Kelompok Operator Java</h3>
              <ul>
                <li><strong>1. Operator Aritmatika (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>):</strong>
                  <br>• Pembagian dua <code>int</code> selalu membuang desimal (<code>10 / 4</code> menghasilkan <code>2</code>).
                  <br>• Operator <code>+</code> jika bertemu <code>String</code> akan berubah fungsi menjadi penggabung teks (<em>concatenation</em>).
                </li>
                <li><strong>2. Operator Perbandingan (<code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>):</strong>
                  <br>• Membandingkan dua nilai dan selalu menghasilkan nilai bertipe <code>boolean</code> (<code>true</code> atau <code>false</code>).
                </li>
                <li><strong>3. Operator Logika (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>):</strong>
                  <br>• Menggabungkan ekspresi boolean. Memiliki fitur <em>short-circuit evaluation</em> (jika suku kiri pada <code>&amp;&amp;</code> sudah <code>false</code>, suku kanan tidak perlu dievaluasi lagi).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Pembahasan Kode Operator Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Kombinasi Ketiga Operator</span></div>
                <pre class="code-pre" data-highlight="java">int x = 14, y = 4;
int hasilBagi = x / y;              // 3
int sisaBagi = x % y;               // 2
boolean banding = (hasilBagi == 3); // true
boolean logika = banding && !(sisaBagi > 5); // true && !false -> true
System.out.println("Output: " + hasilBagi + ", " + sisaBagi + ", " + logika);</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-c",
        code: "C",
        title: "Percabangan (if-else, if-else if, switch-case, Bersarang)",
        simulator: {
          title: "Simulasi Percabangan Bersarang Java (int nilai = 80)",
          lines: [
            "int nilai = 80;",
            "if (nilai >= 75) {",
            "    if (nilai >= 90) {",
            "        System.out.println(\"Sangat Baik\");",
            "    } else {",
            "        System.out.println(\"Baik\");",
            "    }",
            "} else {",
            "    System.out.println(\"Kurang\");",
            "}"
          ],
          steps: [
            { line: 0, vars: { nilai: "80" }, explanation: "Inisialisasi variabel int nilai = 80.", output: "Menunggu..." },
            { line: 1, vars: { nilai: "80", "nilai >= 75": "true" }, explanation: "Cek kondisi if luar: 80 >= 75 bernilai true, masuk ke blok if luar.", output: "Menunggu..." },
            { line: 2, vars: { nilai: "80", "nilai >= 75": "true", "nilai >= 90": "false" }, explanation: "Cek kondisi if dalam: 80 >= 90 bernilai false, lompat ke blok else dalam.", output: "Menunggu..." },
            { line: 5, vars: { nilai: "80", Output: "Baik" }, explanation: "Mengeksekusi System.out.println(\"Baik\");.", output: "Baik" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔀 1. Pembahasan Materi: Empat Bentuk Percabangan Java</h3>
              <ol>
                <li><strong><code>if-else</code>:</strong> Memilih satu dari dua jalur eksekusi berdasarkan syarat <code>boolean</code>.</li>
                <li><strong><code>if-else if-else</code>:</strong> Menguji syarat secara berjenjang dari atas ke bawah. Hanya cabang pertama yang bernilai <code>true</code> yang akan dijalankan.</li>
                <li><strong><code>switch-case</code>:</strong> Mencocokkan nilai variabel dengan daftar <code>case</code>. Jika sebuah <code>case</code> tidak diakhiri <code>break;</code>, maka program akan terus mengeksekusi <code>case</code> di bawahnya (<em>fall-through</em>) sampai menemukan <code>break;</code> atau akhir blok <code>switch</code>.</li>
                <li><strong>Percabangan Bersarang (<em>Nested If</em>):</strong> <code>if</code> di dalam <code>if</code> untuk menguji syarat berlapis.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Pembahasan Soal Wajib Percabangan Bersarang</h3>
              <p>Pada kode <code>int nilai = 80;</code>, kondisi pertama <code>if (nilai &gt;= 75)</code> bernilai <code>true</code> sehingga masuk ke blok luar. Di dalamnya, kondisi <code>if (nilai &gt;= 90)</code> bernilai <code>false</code> sehingga masuk ke cabang <code>else</code> dalam dan mencetak <strong><code>"Baik"</code></strong>.</p>
            </div>
          </div>
        `
      },
      {
        id: "3-d",
        code: "D",
        title: "Perulangan (for, do-while, Perulangan Bersarang)",
        simulator: {
          title: "Simulasi Perulangan for Java",
          lines: [
            "int total = 0;",
            "for (int i = 1; i <= 3; i++) {",
            "    total = total + (i * 2);",
            "}",
            "System.out.println(total);"
          ],
          steps: [
            { line: 0, vars: { total: "0" }, explanation: "Inisialisasi total = 0.", output: "Menunggu..." },
            { line: 1, vars: { total: "2", i: "1" }, explanation: "Iterasi 1 (i=1): total = 0 + 2 = 2.", output: "Menunggu..." },
            { line: 2, vars: { total: "6", i: "2" }, explanation: "Iterasi 2 (i=2): total = 2 + 4 = 6.", output: "Menunggu..." },
            { line: 2, vars: { total: "12", i: "3" }, explanation: "Iterasi 3 (i=3): total = 6 + 6 = 12.", output: "Menunggu..." },
            { line: 4, vars: { total: "12", i: "4 (Berhenti)" }, explanation: "Kondisi 4 <= 3 false, cetak 12.", output: "12" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔄 1. Pembahasan Materi: Mekanisme Perulangan Java</h3>
              <ol>
                <li><strong>Perulangan <code>for (inisialisasi; kondisi; update)</code>:</strong> Mengecek kondisi di awal sebelum setiap putaran. Jumlah iterasi dapat dihitung secara presisi dari batas awal, batas akhir, dan perubahan nilai pencacah (misal <code>i++</code> atau <code>i += 2</code>).</li>
                <li><strong>Perulangan <code>do-while</code>:</strong> Menjalankan blok perintah di dalam <code>do { ... }</code> terlebih dahulu <strong>minimal 1 kali</strong>, baru mengevaluasi syarat <code>while (kondisi);</code> di bagian akhir.</li>
                <li><strong>Perulangan Bersarang (<em>Nested Loop</em>):</strong> Loop di dalam loop. Jika loop luar berputar M kali dan loop dalam berputar N kali tiap putaran luar, maka instruksi terdalam dieksekusi sebanyak M × N kali.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Perbandingan <code>for</code>, <code>do-while</code>, dan <em>Nested Loop</em></h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Perulangan Bersarang</span></div>
                <pre class="code-pre" data-highlight="java">int count = 0;
for (int i = 1; i <= 2; i++) {
    for (int j = 1; j <= 3; j++) {
        count++; // Dieksekusi 2 * 3 = 6 kali
    }
}
System.out.println("Total iterasi dalam: " + count); // Output: 6</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-e",
        code: "E",
        title: "Method (void, return, Parameter & Argumen, Pemanggilan, Variabel Lokal)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧩 1. Pembahasan Materi: Kelima Konsep Method di Java</h3>
              <ol>
                <li><strong>Method <code>void</code>:</strong> Method yang menjalankan serangkaian instruksi (seperti mencetak ke layar) tanpa mengembalikan nilai.</li>
                <li><strong>Method dengan Nilai Balik (<code>return</code>):</strong> Method yang mendeklarasikan tipe data kembalian (<code>int</code>, <code>double</code>, <code>boolean</code>, <code>String</code>) dan mengembalikan hasil dengan kata kunci <code>return</code>.</li>
                <li><strong>Parameter dan Argumen:</strong> <em>Parameter</em> adalah variabel formal di definisi method (misal <code>(int a, int b)</code>), sedangkan <em>argumen</em> adalah nilai aktual yang dikirim saat method dipanggil (misal <code>(5, 3)</code>).</li>
                <li><strong>Pemanggilan Method:</strong> Dapat dipanggil langsung maupun disimpan hasilnya ke variabel.</li>
                <li><strong>Variabel Lokal &amp; Parameter (<em>Pass-by-Value</em>):</strong> Variabel yang dibuat di dalam sebuah method hanya berlaku di dalam method tersebut. Mengubah nilai parameter tipe primitif di dalam method tidak mengubah variabel asli di <code>main()</code>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Pembahasan Method &amp; Scope Variabel Lokal</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Method Return &amp; Variabel Lokal</span></div>
                <pre class="code-pre" data-highlight="java">public class ContohMethodJava {
    static int hitungPoin(int skorAwal, int bonus) {
        int skorAwalLokal = skorAwal + (bonus * 2);
        return skorAwalLokal;
    }
    public static void main(String[] args) {
        int hasil = hitungPoin(70, 10);
        System.out.println("Hasil: " + hasil); // Output: 90
    }
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-f",
        code: "F",
        title: "Membaca Algoritma dan Program (7 Kompetensi Penelusuran)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔍 1. Pembahasan Materi: 7 Kompetensi Membaca Program Java</h3>
              <ol>
                <li><strong>Membaca pseudocode atau kode Java sederhana</strong> secara sekuensial.</li>
                <li><strong>Mengikuti perubahan nilai setiap variabel</strong> menggunakan tabel penelusuran (<em>trace table</em>).</li>
                <li><strong>Menentukan kondisi yang bernilai <code>true</code> atau <code>false</code></strong> pada setiap titik keputusan.</li>
                <li><strong>Menelusuri proses percabangan dan perulangan</strong> hingga selesai.</li>
                <li><strong>Menentukan output akhir program</strong> secara presisi.</li>
                <li><strong>Menemukan kesalahan sederhana pada algoritma (<em>debugging</em>)</strong> seperti salah tanda operator (<code>&lt;</code> vs <code>&gt;</code>), salah inisialisasi awal, atau <em>infinite loop</em>.</li>
                <li><strong>Menentukan hasil program berdasarkan input tertentu</strong> yang diberikan pada soal.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Studi Kasus Penelusuran Kode Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Menelusuri Perubahan Variabel</span></div>
                <pre class="code-pre" data-highlight="java">int x = 3, y = 1;
while (x > 0) {
    y = y * 2 + x;
    x--;
}
System.out.println(y);
// Trace:
// x=3: y = 1*2 + 3 = 5, x jadi 2
// x=2: y = 5*2 + 2 = 12, x jadi 1
// x=1: y = 12*2 + 1 = 25, x jadi 0 (Loop berhenti -> Output: 25)</pre>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB IV. PSEUDOCODE (Sub-Bab A dan B)
     ======================================================================== */
  {
    id: "bab-4",
    roman: "IV",
    title: "Pseudocode",
    description:
      "Peserta harus memahami cara kerja algoritma tanpa harus bergantung pada bahasa pemrograman tertentu, serta mampu menerjemahkannya ke dalam kode Java.",
    subtopics: [
      {
        id: "4-a",
        code: "A",
        title: "Konsep Dasar, Notasi & Translasi Pseudocode ke Java",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📄 1. Pembahasan Materi: Aturan Penulisan Pseudocode</h3>
              <p><strong>Pseudocode</strong> menyajikan logika algoritma secara terstruktur menggunakan kata kunci standar yang mudah dipahami manusia dan dapat langsung dikonversi menjadi program <strong>Java</strong>:</p>
              <ul>
                <li><strong>Assignment (Pemberian Nilai):</strong> Ditulis dengan panah kiri <code>&lt;-</code> (misal <code>x &lt;- 5</code>), yang berarti simpan nilai di sebelah kanan ke dalam variabel di sebelah kiri. Di Java ditulis <code>x = 5;</code>.</li>
                <li><strong>Struktur Sekuensial:</strong> Dieksekusi baris demi baris dari atas ke bawah.</li>
                <li><strong>Struktur Percabangan:</strong> Menggunakan <code>IF kondisi THEN ... ELSE ... END IF</code>.</li>
                <li><strong>Struktur Perulangan:</strong> Menggunakan <code>WHILE kondisi DO ... END WHILE</code> atau <code>FOR var &lt;- awal TO akhir DO ... END FOR</code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔄 2. Tabel Padanan Pseudocode dan Bahasa Java</h3>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>Konsep</th><th>Pseudocode</th><th>Bahasa Java</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Assignment</td><td><code>x &lt;- 5</code></td><td><code>int x = 5;</code></td></tr>
                    <tr><td>Sisa Bagi</td><td><code>a MOD b</code></td><td><code>a % b</code></td></tr>
                    <tr><td>Logika</td><td><code>AND, OR, NOT</code></td><td><code>&amp;&amp;, ||, !</code></td></tr>
                    <tr><td>Percabangan</td><td><code>IF x &gt; 3 THEN</code></td><td><code>if (x &gt; 3) {</code></td></tr>
                    <tr><td>Output</td><td><code>OUTPUT x</code></td><td><code>System.out.println(x);</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "4-b",
        code: "B",
        title: "Studi Kasus & Penelusuran Pseudocode (x <- 5 hingga OUTPUT x = 7)",
        simulator: {
          title: "Simulasi Interaktif Pseudocode Wajib (x <- 5)",
          lines: [
            "x <- 5",
            "IF x > 3 THEN",
            "    x <- x + 2",
            "ELSE",
            "    x <- x - 2",
            "OUTPUT x"
          ],
          steps: [
            { line: 0, vars: { x: "5" }, explanation: "Langkah 1: Baris 'x <- 5' menginisialisasi variabel x dengan nilai 5.", output: "Menunggu..." },
            { line: 1, vars: { x: "5", "x > 3": "true (5 > 3)" }, explanation: "Langkah 2: Evaluasi kondisi 'IF x > 3 THEN'. Karena 5 > 3 bernilai BENAR, algoritma masuk ke cabang THEN.", output: "Menunggu..." },
            { line: 2, vars: { x: "7 (dari 5 + 2)" }, explanation: "Langkah 3: Eksekusi 'x <- x + 2' mengubah nilai x menjadi 5 + 2 = 7. Cabang ELSE dilewati.", output: "Menunggu..." },
            { line: 5, vars: { x: "7" }, explanation: "Langkah 4: Eksekusi 'OUTPUT x' mencetak nilai terakhir variabel x yaitu 7.", output: "7" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>💻 1. Contoh Konsep Pseudocode Wajib &amp; Implementasi Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">PSEUDOCODE • Contoh Konsep</span></div>
                <pre class="code-pre" data-highlight="pseudo">x &lt;- 5
IF x &gt; 3 THEN
    x &lt;- x + 2
ELSE
    x &lt;- x - 2
OUTPUT x</pre>
              </div>
              <div class="code-snippet-box" style="margin-top: 10px;">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Kode Program Setara</span></div>
                <pre class="code-pre" data-highlight="java">public class StudiKasusPseudocode {
    public static void main(String[] args) {
        int x = 5;
        if (x > 3) {
            x = x + 2;
        } else {
            x = x - 2;
        }
        System.out.println(x); // Output: 7
    }
}</pre>
              </div>
            </div>
            <div class="info-card">
              <h3>🔎 2. Pembahasan Mengapa Outputnya adalah 7</h3>
              <p>Dari kode pseudocode di samping, peserta harus dapat mengikuti setiap langkah secara runtut:</p>
              <ol>
                <li><strong>Langkah 1 (<code>x &lt;- 5</code>):</strong> Variabel <code>x</code> diberi nilai awal <strong>5</strong>.</li>
                <li><strong>Langkah 2 (<code>IF x &gt; 3 THEN</code>):</strong> Kondisi memeriksa apakah <code>x &gt; 3</code>. Karena <code>5 &gt; 3</code> bernilai <strong>Benar (<code>true</code>)</strong>, maka eksekusi masuk ke blok <code>THEN</code>.</li>
                <li><strong>Langkah 3 (<code>x &lt;- x + 2</code>):</strong> Nilai <code>x</code> yang semula 5 ditambah 2 menjadi <strong>7</strong>. Blok <code>ELSE</code> (<code>x &lt;- x - 2</code>) dilewati dan tidak dijalankan.</li>
                <li><strong>Langkah 4 (<code>OUTPUT x</code>):</strong> Menampilkan nilai akhir dari variabel <code>x</code>, sehingga diperoleh <strong>outputnya adalah 7</strong>.</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  }
];
