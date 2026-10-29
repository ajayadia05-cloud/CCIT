/* ==========================================================================
   EduLogic Studio — Bank Soal Lengkap Bab I: Logika dan Analitika (quiz_bank_p1.js)
   Fokus: Konsep Dasar Logika Umum & Penalaran Analitika (Tanpa Ketergantungan Java)
   Total: 8 Sub-Bab (A s/d H) × 10 Soal = 80 Soal Latihan & Pembahasan
   ========================================================================== */

(function () {
  "use strict";

  // Helper untuk membangun objek soal standar dengan 5 opsi (a..e) & pembahasan HTML
  function Q(subtopicId, chapterId, number, category, shortTitle, prompt, code, opts, correctKey, explanation) {
    const keys = ["a", "b", "c", "d", "e"];
    return {
      id: `q-${subtopicId}-${number}`,
      subtopicId,
      chapterId,
      number,
      category,
      shortTitle: `Soal ${number}: ${shortTitle}`,
      promptHtml: prompt.startsWith("<") ? prompt : `<p>${prompt}</p>`,
      codeSnippet: code
        ? {
            lang: code.lang || "text",
            label: code.label || "SKEMA LOGIKA",
            code: code.text
          }
        : null,
      options: opts.map((t, i) => ({ key: keys[i], text: t })),
      correctKey,
      explanationHtml: `
        <div class="exp-step-box">
          <h4>🔎 Pembahasan Langkah demi Langkah (${category} — Nomor ${number})</h4>
          ${explanation}
          <p style="margin-top:8px;"><strong>Kunci Jawaban Tepat: Opsi ${correctKey.toUpperCase()}</strong></p>
        </div>
      `
    };
  }

  const RAW_BANK = [
    /* ======================================================================
       BAB I — SUB-BAB A: LOGIKA DASAR (10 SOAL UMUM: 1-a)
       ====================================================================== */
    Q("1-a", "bab-1", 1, "I.A Logika Dasar", "Komponen Dasar Penalaran Logis",
      "Dalam struktur penalaran logika dasar, pernyataan atau fakta awal yang dijadikan dasar untuk menarik suatu kesimpulan disebut...",
      null, ["Konklusi", "Asumsi bebas", "Premis", "Hipotesis pasif", "Opini"], "c",
      "<p>Dalam logika dasar, <strong>premis</strong> adalah pernyataan atau fakta awal yang diketahui benar sebagai titik tolak untuk menarik kesimpulan (konklusi) melalui proses inferensi.</p>"),

    Q("1-a", "bab-1", 2, "I.A Logika Dasar", "Penarikan Kesimpulan dari Dua Fakta",
      "Diketahui Premis 1: 'Semua pegawai di gedung ini wajib mengenakan kartu identitas.' Premis 2: 'Pak Arman adalah pegawai di gedung ini.' Kesimpulan logis yang paling tepat adalah...",
      null, ["Pak Arman adalah kepala keamanan gedung", "Pak Arman wajib mengenakan kartu identitas", "Semua yang mengenakan kartu identitas adalah Pak Arman", "Pak Arman tidak pernah terlambat kerja", "Sebagian pegawai tidak mengenakan kartu identitas"], "b",
      "<p>Karena aturan berlaku untuk <em>semua pegawai di gedung ini</em> dan Pak Arman termasuk di dalamnya, maka kesimpulan yang pasti sah adalah <strong>Pak Arman wajib mengenakan kartu identitas</strong>.</p>"),

    Q("1-a", "bab-1", 3, "I.A Logika Dasar", "Prinsip Bebas Asumsi di Luar Premis",
      "Diketahui fakta: 'Semua atlet renang pandai menahan napas. Rio pandai menahan napas.' Kesimpulan yang PASTI benar berdasarkan informasi tersebut adalah...",
      null, ["Rio pasti seorang atlet renang", "Rio bukan seorang atlet renang", "Semua yang pandai menahan napas adalah atlet renang", "Belum dapat dipastikan apakah Rio atlet renang atau bukan", "Rio adalah pelatih renang"], "d",
      "<p>Premis hanya menyebutkan bahwa atlet renang pandai menahan napas, tetapi orang yang pandai menahan napas bisa saja penyelam, penyanyi, atau profesi lain. Jadi <strong>belum dapat dipastikan apakah Rio atlet renang atau bukan</strong>.</p>"),

    Q("1-a", "bab-1", 4, "I.A Logika Dasar", "Hubungan Dua Pernyataan yang Bertentangan",
      "Pernyataan 1: 'Saat ini seluruh lampu di ruang rapat menyala.' Pernyataan 2: 'Saat ini ada lampu di ruang rapat yang padam.' Hubungan antara kedua pernyataan tersebut adalah...",
      null, ["Saling mendukung", "Saling ekuivalen (sama maknanya)", "Saling bertentangan (kontradiktif, tidak mungkin keduanya benar sekaligus)", "Keduanya pasti salah", "Pernyataan 2 adalah bukti dari Pernyataan 1"], "c",
      "<p>Kondisi <em>'seluruh lampu menyala'</em> dan <em>'ada lampu yang padam'</em> tidak mungkin terjadi bersamaan pada waktu yang sama; keduanya saling <strong>bertentangan (kontradiktif)</strong>.</p>"),

    Q("1-a", "bab-1", 5, "I.A Logika Dasar", "Penalaran Perbandingan Transitif",
      "Rumah Dita terletak lebih jauh dari sekolah dibandingkan rumah Eka. Rumah Fajar terletak lebih dekat ke sekolah dibandingkan rumah Eka. Urutan rumah dari yang PALING DEKAT ke sekolah adalah...",
      null, ["Dita – Eka – Fajar", "Fajar – Eka – Dita", "Eka – Fajar – Dita", "Fajar – Dita – Eka", "Eka – Dita – Fajar"], "b",
      "<p>Jarak ke sekolah: <code>Dita &gt; Eka</code> dan <code>Fajar &lt; Eka</code>. Jika diurutkan dari yang paling dekat ke paling jauh: <strong>Fajar – Eka – Dita</strong>.</p>"),

    Q("1-a", "bab-1", 6, "I.A Logika Dasar", "Analisis Syarat Mutlak (Syarat Perlu)",
      "Aturan perpustakaan menyatakan: 'Pengunjung hanya boleh meminjam buku jika memiliki kartu anggota yang masih aktif.' Ternyata hari ini Sinta berhasil meminjam buku di perpustakaan. Kesimpulan yang tepat adalah...",
      null, ["Sinta baru mendaftar hari ini", "Sinta meminjam lebih dari satu buku", "Sinta memiliki kartu anggota yang masih aktif", "Sinta adalah petugas perpustakaan", "Kartu anggota Sinta sudah kedaluwarsa"], "c",
      "<p>Karena memiliki kartu anggota aktif adalah <strong>syarat mutlak</strong> untuk bisa meminjam buku, keberhasilan Sinta meminjam buku membuktikan bahwa <strong>Sinta memiliki kartu anggota yang masih aktif</strong>.</p>"),

    Q("1-a", "bab-1", 7, "I.A Logika Dasar", "Kesimpulan dari Pernyataan Sebagian",
      "Diketahui: 'Semua bunga di taman A harum baunya. Sebagian bunga mawar berada di taman A.' Kesimpulan yang tepat adalah...",
      null, ["Semua bunga mawar harum baunya", "Sebagian bunga mawar harum baunya", "Tidak ada bunga mawar yang harum baunya", "Semua yang harum di taman A adalah bunga mawar", "Semua bunga mawar berada di taman A"], "b",
      "<p>Karena sebagian bunga mawar berada di taman A, dan seluruh bunga di taman A harum baunya, maka <strong>sebagian bunga mawar pasti harum baunya</strong>.</p>"),

    Q("1-a", "bab-1", 8, "I.A Logika Dasar", "Konsistensi Informasi Fakta",
      "Diketahui tiga fakta: (1) Setiap hari Minggu toko buku tutup. (2) Hari ini toko buku buka. (3) Kemarin adalah hari Kamis. Manakah pernyataan yang tidak konsisten?",
      null, ["Hari ini bukan hari Minggu", "Hari ini adalah hari Jumat", "Besok adalah hari Sabtu", "Fakta (1) dan (2) konsisten dengan fakta (3)", "Hari ini adalah hari Minggu"], "e",
      "<p>Karena toko buku buka hari ini (dan kemarin Kamis berarti hari ini Jumat), maka pernyataan <strong>'Hari ini adalah hari Minggu'</strong> jelas tidak konsisten (salah).</p>"),

    Q("1-a", "bab-1", 9, "I.A Logika Dasar", "Hubungan Sebab dan Akibat Logis",
      "Setiap kali hujan deras mengguyur kota lebih dari 3 jam, debit air sungai meningkat. Sore ini debit air sungai tidak meningkat. Kesimpulan yang paling logis adalah...",
      null, ["Sore ini turun hujan gerimis", "Sore ini hujan deras tidak mengguyur kota lebih dari 3 jam", "Sore ini cuaca sangat panas", "Sungai baru saja dikeruk", "Besok akan turun hujan deras"], "b",
      "<p>Jika sebab (hujan deras &gt; 3 jam) terjadi, akibat (debit sungai meningkat) pasti terjadi. Karena akibatnya tidak terjadi, maka sebabnya pasti tidak terjadi: <strong>hujan deras tidak mengguyur kota lebih dari 3 jam</strong>.</p>"),

    Q("1-a", "bab-1", 10, "I.A Logika Dasar", "Penalaran Himpunan Sifat",
      "Tidak ada mamalia yang bernapas dengan insang. Semua ikan paus adalah mamalia. Kesimpulan yang sah dari kedua premis tersebut adalah...",
      null, ["Sebagian ikan paus bernapas dengan insang", "Ikan paus tidak bernapas dengan insang", "Semua hewan laut adalah mamalia", "Semua yang tidak bernapas dengan insang adalah ikan paus", "Ikan paus bukan hewan laut"], "b",
      "<p>Karena ikan paus termasuk mamalia dan tidak ada satu pun mamalia yang bernapas dengan insang, maka <strong>ikan paus pasti tidak bernapas dengan insang</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB B: PERNYATAAN BENAR DAN SALAH (10 SOAL UMUM: 1-b)
       ====================================================================== */
    Q("1-b", "bab-1", 1, "I.B Pernyataan Benar & Salah", "Mengidentifikasi Kalimat Pernyataan (Proposisi)",
      "Manakah di antara kalimat berikut yang merupakan suatu PERNYATAAN (proposisi) dalam logika?",
      null, ["Jangan membuang sampah di sungai!", "Apakah rapat hari ini jadi dilaksanakan?", "Matahari terbit dari arah timur.", "Semoga perjalananmu menyenangkan!", "Tolong ambilkan buku di atas meja itu."], "c",
      "<p>Kalimat berita <em>'Matahari terbit dari arah timur'</em> adalah proposisi karena dapat ditentukan nilai kebenarannya secara tegas (Benar). Kalimat perintah, tanya, dan harapan bukan proposisi.</p>"),

    Q("1-b", "bab-1", 2, "I.B Pernyataan Benar & Salah", "Mengidentifikasi Kalimat Terbuka",
      "Manakah di antara kalimat di bawah ini yang merupakan KALIMAT TERBUKA (belum dapat ditentukan benar atau salahnya sebelum variabelnya diganti)?",
      null, ["15 ditambah 5 sama dengan 20", "Kota itu adalah ibu kota Provinsi Jawa Barat", "Semua segitiga memiliki tiga sisi", "2 adalah satu-satunya bilangan prima yang genap", "1 tahun terdiri dari 12 bulan"], "b",
      "<p>Pada kalimat <em>'Kota itu adalah ibu kota Provinsi Jawa Barat'</em>, kata tunjuk <em>'Kota itu'</em> masih berupa variabel yang belum jelas merujuk ke kota mana, sehingga merupakan <strong>kalimat terbuka</strong>.</p>"),

    Q("1-b", "bab-1", 3, "I.B Pernyataan Benar & Salah", "Menentukan Pernyataan yang Bernilai Benar",
      "Di antara lima pernyataan berikut, manakah yang memiliki nilai kebenaran BENAR?",
      null, ["Semua bilangan prima adalah bilangan ganjil", "Hasil kali dua bilangan negatif adalah bilangan negatif", "Jumlah sudut dalam sebuah segitiga adalah 180 derajat", "Angka 1 termasuk bilangan prima", "Semua persegi panjang memiliki empat sisi yang sama panjang"], "c",
      "<p>Jumlah ketiga sudut dalam setiap segitiga datar selalu <strong>180 derajat</strong> (Benar). Opsi A salah karena 2 adalah prima genap; opsi B salah karena negatif × negatif = positif.</p>"),

    Q("1-b", "bab-1", 4, "I.B Pernyataan Benar & Salah", "Menentukan Pernyataan yang Bernilai Salah",
      "Manakah di antara pernyataan di bawah ini yang bernilai SALAH?",
      null, ["Air murni pada tekanan 1 atm mendidih pada suhu 100°C", "24 habis dibagi oleh 6", "Bilangan 51 adalah bilangan prima", "Satu jam sama dengan 3.600 detik", "Kuadrat dari bilangan negatif selalu bernilai positif"], "c",
      "<p>Bilangan <strong>51 bukanlah bilangan prima</strong> karena 51 dapat dibagi habis oleh 3 dan 17 (51 = 3 × 17). Maka pernyataan C bernilai <strong>Salah</strong>.</p>"),

    Q("1-b", "bab-1", 5, "I.B Pernyataan Benar & Salah", "Ingkaran (Negasi) Pernyataan Tunggal",
      "Jika diketahui pernyataan P: 'Hari ini semua loket pelayanan buka', maka ingkaran (negasi) yang tepat dari pernyataan P adalah...",
      null, ["Hari ini semua loket pelayanan tutup", "Besok semua loket pelayanan tutup", "Hari ini ada loket pelayanan yang tidak buka (tutup)", "Hari ini sebagian loket pelayanan buka", "Kemarin loket pelayanan tidak buka"], "c",
      "<p>Ingkaran dari kata <em>'Semua ... buka'</em> adalah <strong>'Ada / beberapa ... yang tidak buka (tutup)'</strong>.</p>"),

    Q("1-b", "bab-1", 6, "I.B Pernyataan Benar & Salah", "Ingkaran pada Pernyataan Perbandingan Angka",
      "Pernyataan: 'Usia pendaftar lomba lebih dari 20 tahun.' Ingkaran (negasi) yang tepat dari pernyataan tersebut adalah...",
      null, ["Usia pendaftar lomba kurang dari 20 tahun", "Usia pendaftar lomba tepat 20 tahun", "Usia pendaftar lomba kurang dari atau sama dengan 20 tahun", "Usia pendaftar lomba lebih dari atau sama dengan 20 tahun", "Usia pendaftar lomba bukan 20 tahun"], "c",
      "<p>Kebalikan dari <em>'lebih dari 20'</em> (&gt; 20) mencakup angka 20 ke bawah, yaitu <strong>'kurang dari atau sama dengan 20 tahun'</strong> (≤ 20).</p>"),

    Q("1-b", "bab-1", 7, "I.B Pernyataan Benar & Salah", "Mengubah Kalimat Terbuka Menjadi Pernyataan Benar",
      "Diketahui kalimat terbuka: '3x - 4 = 11'. Agar kalimat tersebut menjadi pernyataan yang bernilai BENAR, maka nilai x harus diganti dengan...",
      null, ["3", "4", "5", "6", "7"], "c",
      "<p>Jika x = 5, maka 3(5) - 4 = 15 - 4 = 11 (Benar). Untuk nilai lainnya kalimat tersebut akan bernilai Salah.</p>"),

    Q("1-b", "bab-1", 8, "I.B Pernyataan Benar & Salah", "Evaluasi Dua Pernyataan Sekaligus",
      "Perhatikan dua pernyataan berikut: (P) '35 habis dibagi 5', dan (Q) '27 adalah bilangan genap'. Nilai kebenaran dari P dan Q berturut-turut adalah...",
      null, ["Benar dan Benar", "Benar dan Salah", "Salah dan Benar", "Salah dan Salah", "Tidak dapat ditentukan"], "b",
      "<p>Pernyataan P bernilai <strong>Benar</strong> (35 ÷ 5 = 7), sedangkan pernyataan Q bernilai <strong>Salah</strong> karena 27 adalah bilangan ganjil.</p>"),

    Q("1-b", "bab-1", 9, "I.B Pernyataan Benar & Salah", "Kalimat Bukan Proposisi",
      "Semua kalimat di bawah ini BUKAN merupakan pernyataan (proposisi), KECUALI...",
      null, ["Di manakah letak kantor pos terdekat?", "Silakan duduk di kursi sebelah kanan!", "7 dikurangi 10 menghasilkan -3.", "Alangkah indahnya pemandangan pantai ini!", "Mudah-mudahan besok tidak turun hujan."], "c",
      "<p>Hanya opsi C (<em>'7 dikurangi 10 menghasilkan -3'</em>) yang merupakan kalimat deklaratif bernilai kebenaran pasti (Benar).</p>"),

    Q("1-b", "bab-1", 10, "I.B Pernyataan Benar & Salah", "Verifikasi Kebenaran Pernyataan Berantai",
      "Pernyataan manakah yang bernilai BENAR tentang sifat bilangan bulat?",
      null, ["Hasil penjumlahan dua bilangan ganjil selalu ganjil", "Hasil perkalian bilangan genap dengan bilangan ganjil selalu genap", "Semua bilangan yang habis dibagi 3 pasti habis dibagi 6", "Bilangan nol adalah bilangan positif", "Tidak ada bilangan prima yang kurang dari 3"], "b",
      "<p>Bilangan genap (2k) dikalikan dengan bilangan apa pun akan selalu menghasilkan kelipatan 2, sehingga <strong>genap × ganjil selalu bernilai genap</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB C: AND, OR, NOT (10 SOAL UMUM: 1-c)
       ====================================================================== */
    Q("1-c", "bab-1", 1, "I.C AND, OR, NOT", "Syarat Kebenaran Konjungsi (DAN / AND)",
      "Pernyataan majemuk 'P DAN Q' (P ∧ Q) akan bernilai BENAR apabila...",
      null, ["P benar dan Q salah", "P salah dan Q benar", "P dan Q keduanya bernilai benar", "P dan Q keduanya bernilai salah", "Minimal salah satu dari P atau Q salah"], "c",
      "<p>Kata hubung <strong>DAN (AND)</strong> menuntut kedua pernyataan penyusunnya (P maupun Q) sama-sama bernilai <strong>Benar</strong>.</p>"),

    Q("1-c", "bab-1", 2, "I.C AND, OR, NOT", "Syarat Kesalahan Disjungsi (ATAU / OR)",
      "Kapan pernyataan majemuk 'P ATAU Q' (P ∨ Q) bernilai SALAH?",
      null, ["Ketika P benar dan Q salah", "Ketika P salah dan Q benar", "Ketika P dan Q keduanya bernilai benar", "Hanya ketika P salah DAN Q juga salah", "Ketika salah satu bernilai benar"], "d",
      "<p>Pernyataan <strong>ATAU (OR)</strong> hanya bernilai <strong>Salah</strong> apabila kedua pernyataan penyusunnya sama-sama bernilai Salah.</p>"),

    Q("1-c", "bab-1", 3, "I.C AND, OR, NOT", "Evaluasi Kalimat Majemuk Sehari-hari",
      "Diketahui pernyataan P: 'Ikan bernapas dengan insang' (Benar) dan Q: 'Burung adalah hewan menyusui' (Salah). Manakah kalimat majemuk berikut yang bernilai BENAR?",
      null, ["P dan Q", "Bukan P dan Q", "P atau Q", "Bukan P atau Q", "P dan bukan P"], "c",
      "<p>Karena P = Benar dan Q = Salah, maka disjungsi <strong>P  atau  Q</strong> (Benar ∨ Salah) menghasilkan nilai <strong>Benar</strong>.</p>"),

    Q("1-c", "bab-1", 4, "I.C AND, OR, NOT", "Hukum De Morgan pada Ingkaran Kalimat 'DAN'",
      "Ingkaran (negasi) yang tepat dari pernyataan: 'Dina lulus ujian tulis DAN lulus ujian wawancara' adalah...",
      null, ["Dina lulus ujian tulis atau lulus ujian wawancara", "Dina tidak lulus ujian tulis ATAU tidak lulus ujian wawancara", "Jika Dina lulus ujian tulis maka ia lulus wawancara", "Dina tidak lulus ujian tulis tetapi lulus wawancara", "Dina pasti tidak mengikuti ujian"], "b",
      "<p>Menurut Hukum De Morgan, ¬(P ∧ Q) ≡ ¬ P ∨ ¬ Q. Jadi ingkaran dari kata hubung <strong>DAN</strong> berubah menjadi <strong>ATAU</strong>: <em>'Dina tidak lulus ujian tulis ATAU tidak lulus ujian wawancara.'</em></p>"),

    Q("1-c", "bab-1", 5, "I.C AND, OR, NOT", "Hukum De Morgan pada Ingkaran Kalimat 'ATAU'",
      "Ingkaran (negasi) yang tepat dari pernyataan: 'Hari ini ayah pergi ke Bandung ATAU ibu pergi ke Surabaya' adalah...",
      null, ["Hari ini ayah tidak pergi ke Bandung ATAU ibu tidak pergi ke Surabaya", "Hari ini ayah tidak pergi ke Bandung DAN ibu tidak pergi ke Surabaya", "Hari ini ayah pergi ke Bandung dan ibu pergi ke Surabaya", "Jika ayah tidak ke Bandung, maka ibu tidak ke Surabaya", "Ayah dan ibu sama-sama pergi ke luar kota"], "b",
      "<p>Menurut Hukum De Morgan, ¬(P ∨ Q) ≡ ¬ P ∧ ¬ Q. Ingkaran dari kata hubung <strong>ATAU</strong> berubah menjadi <strong>DAN</strong>: <em>'Ayah tidak pergi ke Bandung DAN ibu tidak pergi ke Surabaya.'</em></p>"),

    Q("1-c", "bab-1", 6, "I.C AND, OR, NOT", "Evaluasi Kombinasi NOT, AND, dan OR",
      "Jika diketahui pernyataan P bernilai <strong>Benar</strong>, Q bernilai <strong>Salah</strong>, dan R bernilai <strong>Benar</strong>, maka nilai kebenaran dari (P ∧ ¬ Q) ∧ (¬ P ∨ R) adalah...",
      null, ["Benar", "Salah", "Bisa Benar atau Salah", "Tidak memiliki nilai kebenaran", "Bergantung pada pernyataan lain"], "a",
      "<p>Mari kita hitung bertahap:<br>• ¬ Q = Benar, sehingga (P ∧ ¬ Q) = Benar ∧ Benar = Benar.<br>• ¬ P = Salah, sehingga (¬ P ∨ R) = Salah ∨ Benar = Benar.<br>• Gabungannya: Benar ∧ Benar = <strong>Benar</strong>.</p>"),

    Q("1-c", "bab-1", 7, "I.C AND, OR, NOT", "Menentukan Nilai Komponen dari Hasil Akhir",
      "Diketahui pernyataan majemuk '(P  atau  Q)  dan  R' bernilai <strong>BENAR</strong>, sedangkan pernyataan P diketahui bernilai <strong>SALAH</strong>. Maka nilai kebenaran dari Q dan R berturut-turut pasti...",
      null, ["Benar dan Salah", "Salah dan Benar", "Benar dan Benar", "Salah dan Salah", "Bebas"], "c",
      "<p>Agar (P ∨ Q) ∧ R bernilai Benar, kedua bagian harus Benar: berarti R wajib <strong>Benar</strong>, dan (P ∨ Q) wajib Benar. Karena P sudah Salah, maka Q wajib <strong>Benar</strong>.</p>"),

    Q("1-c", "bab-1", 8, "I.C AND, OR, NOT", "Negasi Ganda (Double Negation)",
      "Kalimat 'Tidak benar bahwa proyek jembatan itu tidak selesai tepat waktu' memiliki makna logis yang setara dengan...",
      null, ["Proyek jembatan itu tidak selesai tepat waktu", "Proyek jembatan itu selesai tepat waktu", "Proyek jembatan itu dibatalkan", "Proyek jembatan itu mungkin terlambat", "Tidak ada jembatan yang dibangun"], "b",
      "<p>Hukum negasi ganda (¬(¬ P) ≡ P): kalimat <em>'Tidak benar bahwa ... tidak selesai'</em> saling meniadakan kata negatifnya, sehingga setara dengan <strong>'Proyek jembatan itu selesai tepat waktu'</strong>.</p>"),

    Q("1-c", "bab-1", 9, "I.C AND, OR, NOT", "Analisis Syarat Gabungan DAN serta ATAU",
      "Syarat lolos seleksi karyawan adalah: 'Wajib memiliki ijazah S1 DAN (memiliki pengalaman kerja 2 tahun ATAU memiliki sertifikat keahlian).' Pelamar manakah yang LOLOS seleksi?",
      null, ["Lulusan SMA yang punya pengalaman kerja 5 tahun dan sertifikat keahlian", "Lulusan S1 yang belum punya pengalaman kerja dan belum punya sertifikat", "Lulusan S1 yang belum punya pengalaman kerja tetapi memiliki sertifikat keahlian", "Lulusan D3 yang punya sertifikat keahlian", "Semua pelamar di atas gagal"], "c",
      "<p>Pelamar pada opsi C memiliki ijazah S1 (syarat pertama Benar) serta memiliki sertifikat keahlian (membuat syarat di dalam kurung ATAU bernilai Benar). Maka Benar ∧ Benar = <strong>Lolos</strong>.</p>"),

    Q("1-c", "bab-1", 10, "I.C AND, OR, NOT", "Tabel Kebenaran Tiga Pernyataan",
      "Diketahui pernyataan P = Salah, Q = Salah, dan R = Benar. Manakah di antara ekspresi logika berikut yang bernilai BENAR?",
      null, ["P dan R", "P atau Q", "(Bukan P) dan (Bukan R)", "(Bukan Q) dan R", "P dan (Q atau R)"], "d",
      "<p>Karena Q = Salah, maka Bukan  Q = Benar. Digabungkan dengan R = Benar, diperoleh (Bukan  Q)  dan  R = Benar ∧ Benar = <strong>Benar</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB D: IMPLIKASI (10 SOAL UMUM: 1-d)
       ====================================================================== */
    Q("1-d", "bab-1", 1, "I.D Implikasi", "Aturan Dasar Nilai Kebenaran Implikasi",
      "Pernyataan implikasi 'Jika P, maka Q' (P → Q) HANYA akan bernilai SALAH apabila...",
      null, ["P bernilai Benar dan Q bernilai Benar", "P bernilai Benar tetapi Q bernilai Salah", "P bernilai Salah dan Q bernilai Benar", "P bernilai Salah dan Q bernilai Salah", "P dan Q memiliki nilai kebenaran yang sama"], "b",
      "<p>Implikasi adalah hubungan janji bersyarat: janji tersebut hanya dilanggar (bernilai <strong>Salah</strong>) apabila syarat sebab P terpenuhi (<strong>Benar</strong>), namun akibat Q tidak terjadi (<strong>Salah</strong>).</p>"),

    Q("1-d", "bab-1", 2, "I.D Implikasi", "Mencari Kalimat yang Setara (Kontraposisi)",
      "Pernyataan yang memiliki nilai kebenaran SETARA (ekuivalen) dengan kalimat: 'Jika warga tertib membayar pajak, maka pembangunan daerah berjalan lancar' adalah...",
      null, ["Jika pembangunan daerah berjalan lancar, maka warga tertib membayar pajak", "Jika warga tidak tertib membayar pajak, maka pembangunan daerah tidak berjalan lancar", "Jika pembangunan daerah tidak berjalan lancar, maka warga tidak tertib membayar pajak", "Warga tertib membayar pajak tetapi pembangunan tidak lancar", "Warga tidak membayar pajak atau pembangunan tidak lancar"], "c",
      "<p>Setiap implikasi P → Q selalu ekuivalen dengan <strong>kontraposisinya</strong> (¬ Q → ¬ P), yaitu: <em>'Jika pembangunan daerah tidak berjalan lancar, maka warga tidak tertib membayar pajak.'</em></p>"),

    Q("1-d", "bab-1", 3, "I.D Implikasi", "Menentukan Bentuk Konvers",
      "Diketahui implikasi: 'Jika suatu bangun datar adalah persegi, maka keempat sisinya sama panjang.' Apakah bentuk KONVERS dari pernyataan tersebut?",
      null, ["Jika keempat sisinya sama panjang, maka bangun datar tersebut adalah persegi", "Jika suatu bangun datar bukan persegi, maka keempat sisinya tidak sama panjang", "Jika keempat sisinya tidak sama panjang, maka bangun datar tersebut bukan persegi", "Suatu bangun datar adalah persegi dan keempat sisinya sama panjang", "Suatu bangun datar adalah persegi tetapi sisinya tidak sama panjang"], "a",
      "<p><strong>Konvers</strong> dari P → Q diperoleh dengan menukar posisi sebab dan akibat menjadi Q → P: <em>'Jika keempat sisinya sama panjang, maka bangun datar tersebut adalah persegi.'</em></p>"),

    Q("1-d", "bab-1", 4, "I.D Implikasi", "Menentukan Bentuk Invers",
      "Diketahui pernyataan: 'Jika permintaan barang naik, maka harga barang naik.' Bentuk INVERS dari pernyataan tersebut adalah...",
      null, ["Jika harga barang naik, maka permintaan barang naik", "Jika permintaan barang tidak naik, maka harga barang tidak naik", "Jika harga barang tidak naik, maka permintaan barang tidak naik", "Permintaan barang naik tetapi harga barang tidak naik", "Permintaan barang tidak naik atau harga barang naik"], "b",
      "<p><strong>Invers</strong> dari P → Q diperoleh dengan menegasikan kedua ruas tanpa membalik urutannya (¬ P → ¬ Q): <em>'Jika permintaan barang tidak naik, maka harga barang tidak naik.'</em></p>"),

    Q("1-d", "bab-1", 5, "I.D Implikasi", "Ingkaran (Negasi) dari Pernyataan Implikasi",
      "Ingkaran (negasi) yang tepat dari pernyataan bersyarat: 'Jika hari ini cerah, maka tim sepak bola berlatih di lapangan' adalah...",
      null, ["Jika hari ini tidak cerah, maka tim sepak bola tidak berlatih di lapangan", "Jika tim sepak bola tidak berlatih di lapangan, maka hari ini tidak cerah", "Hari ini cerah, TETAPI tim sepak bola tidak berlatih di lapangan", "Hari ini tidak cerah dan tim sepak bola tidak berlatih di lapangan", "Hari ini tidak cerah atau tim sepak bola berlatih di lapangan"], "c",
      "<p>Ingkaran dari implikasi ¬(P → Q) adalah <strong>P ∧ ¬ Q</strong>, yaitu sebabnya terjadi tetapi akibatnya tidak terjadi: <em>'Hari ini cerah, tetapi tim sepak bola tidak berlatih di lapangan.'</em></p>"),

    Q("1-d", "bab-1", 6, "I.D Implikasi", "Ekuivalensi Implikasi ke Bentuk ATAU (Disjungsi)",
      "Pernyataan implikasi 'Jika lampu lalu lintas berwarna merah, maka pengendara berhenti' (P → Q) setara dengan kalimat disjungsi...",
      null, ["Lampu lalu lintas berwarna merah atau pengendara berhenti", "Lampu lalu lintas TIDAK berwarna merah ATAU pengendara berhenti", "Lampu lalu lintas berwarna merah dan pengendara tidak berhenti", "Lampu lalu lintas tidak berwarna merah dan pengendara tidak berhenti", "Pengendara berhenti jika lampu berwarna hijau"], "b",
      "<p>Secara logika formal, P → Q ≡ ¬ P ∨ Q. Maka kalimat setaranya adalah: <strong>'Lampu lalu lintas tidak berwarna merah ATAU pengendara berhenti.'</strong></p>"),

    Q("1-d", "bab-1", 7, "I.D Implikasi", "Evaluasi Janji saat Syarat Awal Tidak Terjadi",
      "Seorang ayah berjanji kepada anaknya: 'Jika kamu juara 1 di kelas, maka ayah akan membelikan sepeda baru.' Pada akhir semester, sang anak mendapat peringkat 3 (tidak juara 1), namun ayah tetap membelikan sepeda baru. Apakah sang ayah melanggar janjinya?",
      null, ["Melanggar janji, karena anak tidak juara 1", "Tidak melanggar janji (pernyataan implikasi tetap bernilai Benar)", "Janji menjadi batal dan salah", "Sang anak yang melanggar janji", "Tidak dapat dinilai secara logika"], "b",
      "<p>Ketika syarat awal P bernilai <strong>Salah</strong> (anak tidak juara 1) dan Q bernilai <strong>Benar</strong> (tetap dibelikan sepeda), implikasi P → Q bernilai <strong>Benar</strong> (ayah sama sekali tidak berbohong/melanggar janjinya).</p>"),

    Q("1-d", "bab-1", 8, "I.D Implikasi", "Menentukan Nilai Kebenaran Implikasi Matematika",
      "Manakah di antara pernyataan implikasi di bawah ini yang bernilai SALAH?",
      null, ["Jika 2 + 2 = 4, maka 10 habis dibagi 2", "Jika 3 adalah bilangan genap, maka 5 adalah bilangan genap", "Jika 4 × 3 = 12, maka 9 adalah bilangan prima", "Jika 8 adalah bilangan ganjil, maka 2 + 3 = 5", "Jika 7 adalah bilangan prima, maka 7 adalah bilangan ganjil"], "c",
      "<p>Pada opsi C, sebabnya <em>'4 × 3 = 12'</em> bernilai <strong>Benar</strong>, tetapi akibatnya <em>'9 adalah bilangan prima'</em> bernilai <strong>Salah</strong>. Bentuk Benar → Salah menghasilkan implikasi yang <strong>Salah</strong>.</p>"),

    Q("1-d", "bab-1", 9, "I.D Implikasi", "Menentukan Nilai P ketika Implikasi Benar",
      "Diketahui pernyataan implikasi P → Q bernilai <strong>BENAR</strong>. Jika diketahui pernyataan Q bernilai <strong>SALAH</strong>, maka nilai kebenaran dari pernyataan P haruslah...",
      null, ["Pasti Benar", "Pasti Salah", "Boleh Benar maupun Salah", "Tidak terdefinisi", "Bergantung pada kalimat R"], "b",
      "<p>Jika Q = Salah, maka P tidak mungkin bernilai Benar (sebab Benar → Salah akan menghasilkan Salah). Agar P → Q tetap Benar, maka P <strong>pasti bernilai Salah</strong>.</p>"),

    Q("1-d", "bab-1", 10, "I.D Implikasi", "Hubungan Syarat Cukup dan Syarat Perlu",
      "Dalam pernyataan 'Jika seseorang berada di Kota Bandung, maka ia berada di Provinsi Jawa Barat', manakah pernyataan yang tepat?",
      null, ["Berada di Jawa Barat adalah syarat cukup untuk berada di Bandung", "Berada di Kota Bandung adalah syarat cukup untuk berada di Jawa Barat", "Semua orang di Jawa Barat pasti berada di Kota Bandung", "Jika seseorang tidak di Bandung, maka ia pasti tidak di Jawa Barat", "Berada di Bandung bukan syarat apa pun"], "b",
      "<p>Pada implikasi P → Q, P (berada di Kota Bandung) adalah <strong>syarat cukup</strong> bagi Q (berada di Jawa Barat), sedangkan Q adalah syarat perlu bagi P.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB E: JIKA DAN HANYA JIKA / BIIMPLIKASI (10 SOAL UMUM: 1-e)
       ====================================================================== */
    Q("1-e", "bab-1", 1, "I.E Jika dan Hanya Jika", "Syarat Kebenaran Biimplikasi",
      "Pernyataan biimplikasi 'P jika dan hanya jika Q' (P ↔ Q) bernilai BENAR apabila...",
      null, ["Hanya ketika P dan Q keduanya bernilai Benar", "Hanya ketika P dan Q keduanya bernilai Salah", "P dan Q memiliki nilai kebenaran yang SAMA (keduanya Benar atau keduanya Salah)", "P dan Q memiliki nilai kebenaran yang berbeda", "P bernilai Salah dan Q bernilai Benar"], "c",
      "<p>Biimplikasi (P ↔ Q) bernilai <strong>Benar</strong> jika dan hanya jika kedua pernyataan penyusunnya memiliki nilai kebenaran yang kembar/sama (B ↔ B atau S ↔ S).</p>"),

    Q("1-e", "bab-1", 2, "I.E Jika dan Hanya Jika", "Makna Dua Arah pada Biimplikasi",
      "Secara logika formal, pernyataan 'P jika dan hanya jika Q' (P ↔ Q) ekuivalen (setara) dengan...",
      null, ["(Jika P maka Q) ATAU (Jika Q maka P)", "(Jika P maka Q) DAN (Jika Q maka P)", "Jika P maka bukan Q", "P dan Q keduanya harus salah", "Bukan P atau Q"], "b",
      "<p>Biimplikasi merupakan penggabungan konjungsi dua implikasi bolak-balik: <strong>(P → Q) ∧ (Q → P)</strong>.</p>"),

    Q("1-e", "bab-1", 3, "I.E Jika dan Hanya Jika", "Evaluasi Biimplikasi pada Pernyataan Umum",
      "Manakah di antara pernyataan biimplikasi berikut yang bernilai BENAR?",
      null, ["12 adalah bilangan genap jika dan hanya jika 12 habis dibagi 5", "Bumi berbentuk bulat jika dan hanya jika 1 minggu ada 10 hari", "5 adalah bilangan genap jika dan hanya jika 9 adalah bilangan prima", "Segitiga memiliki 4 sisi jika dan hanya jika 2 + 2 = 4", "Air membeku pada suhu 100°C jika dan hanya jika api terasa dingin"], "c",
      "<p>Pada opsi C: <em>'5 adalah bilangan genap'</em> bernilai <strong>Salah</strong>, dan <em>'9 adalah bilangan prima'</em> juga bernilai <strong>Salah</strong>. Karena keduanya sama-sama Salah (S ↔ S), maka biimplikasinya bernilai <strong>Benar</strong>! (Catatan: pada opsi E kalimat kedua 'api terasa dingin' juga salah, namun opsi C adalah pernyataan matematika pasti yang keduanya salah).</p>"),

    Q("1-e", "bab-1", 4, "I.E Jika dan Hanya Jika", "Mencari Nilai Kebenaran dari Biimplikasi",
      "Diketahui pernyataan biimplikasi P ↔ Q bernilai <strong>BENAR</strong>. Jika pernyataan P bernilai <strong>SALAH</strong>, maka nilai kebenaran dari pernyataan Q adalah...",
      null, ["Pasti Benar", "Pasti Salah", "Bisa Benar atau Salah", "Tidak dapat ditentukan", "Pasti kontradiksi"], "b",
      "<p>Agar P ↔ Q bernilai Benar, nilai kebenaran Q harus sama persis dengan P. Karena P bernilai Salah, maka Q <strong>pasti bernilai Salah</strong>.</p>"),

    Q("1-e", "bab-1", 5, "I.E Jika dan Hanya Jika", "Ingkaran (Negasi) dari Biimplikasi",
      "Ingkaran dari pernyataan biimplikasi P ↔ Q akan bernilai BENAR apabila...",
      null, ["P dan Q keduanya Benar", "P dan Q keduanya Salah", "P dan Q memiliki nilai kebenaran yang BERBEDA (salah satu Benar dan yang lain Salah)", "P dan Q ekuivalen", "Semua salah"], "c",
      "<p>Karena biimplikasi bernilai Benar saat nilai kebenarannya sama, maka ingkarannya ¬(P ↔ Q) bernilai Benar saat P dan Q <strong>memiliki nilai kebenaran yang berbeda</strong>.</p>"),

    Q("1-e", "bab-1", 6, "I.E Jika dan Hanya Jika", "Analisis Kalimat Terbuka Biimplikasi",
      "Agar kalimat terbuka '(x + 3 = 8)  jika dan hanya jika  (15  adalah bilangan ganjil)' menjadi pernyataan yang bernilai BENAR, maka nilai x haruslah...",
      null, ["Pasti sama dengan 5", "Bilangan berapa saja selain 5", "Pasti sama dengan 3", "Pasti sama dengan 8", "Tidak ada nilai x yang memenuhi"], "a",
      "<p>Pernyataan kanan <em>'15 adalah bilangan ganjil'</em> bernilai <strong>Benar</strong>. Agar biimplikasi bernilai Benar, pernyataan kiri (x + 3 = 8) juga wajib bernilai <strong>Benar</strong>, sehingga x haruslah <strong>5</strong>.</p>"),

    Q("1-e", "bab-1", 7, "I.E Jika dan Hanya Jika", "Analisis Kasus ketika Ruas Kanan Salah",
      "Agar kalimat terbuka '(2y = 10)  jika dan hanya jika  (4 × 4 = 20)' bernilai BENAR, maka nilai y yang tepat adalah...",
      null, ["y = 5", "y ≠ 5 (bilangan berapa saja selain 5)", "y harus 0", "y harus 10", "Tidak mungkin bernilai benar"], "b",
      "<p>Ruas kanan (4 × 4 = 20) bernilai <strong>Salah</strong>. Agar biimplikasi bernilai Benar, ruas kiri (2y = 10) juga harus bernilai <strong>Salah</strong>, yang berarti <strong>y ≠ 5</strong>.</p>"),

    Q("1-e", "bab-1", 8, "I.E Jika dan Hanya Jika", "Penerapan Peraturan Dua Arah",
      "Aturan pemilihan menyatakan: 'Seorang warga berhak memilih jika dan hanya jika terdaftar di Daftar Pemilih Tetap (DPT).' Jika diketahui Pak Budi TIDAK berhak memilih, kesimpulan yang pasti benar adalah...",
      null, ["Pak Budi sudah terdaftar di DPT", "Pak Budi tidak terdaftar di DPT", "Pak Budi belum berusia 17 tahun", "Pak Budi sedang berada di luar kota", "Aturan pemilihan tidak berlaku bagi Pak Budi"], "b",
      "<p>Karena berlaku hubungan dua arah (biimplikasi), jika status <em>berhak memilih</em> bernilai Salah, maka status <em>terdaftar di DPT</em> juga pasti bernilai Salah (<strong>Pak Budi tidak terdaftar di DPT</strong>).</p>"),

    Q("1-e", "bab-1", 9, "I.E Jika dan Hanya Jika", "Evaluasi Biimplikasi Berantai",
      "Jika diketahui P = Benar, Q = Salah, dan R = Salah, maka nilai kebenaran dari (P ↔ Q) ↔ R adalah...",
      null, ["Benar", "Salah", "Netral", "Tidak terdefinisi", "Bergantung pada P"], "a",
      "<p>Langkah 1: (P ↔ Q) yaitu (Benar ↔ Salah) menghasilkan <strong>Salah</strong>.<br>Langkah 2: Bandingkan hasil tersebut dengan R (Salah): (Salah ↔ Salah) menghasilkan <strong>Benar</strong>!</p>"),

    Q("1-e", "bab-1", 10, "I.E Jika dan Hanya Jika", "Syarat Perlu dan Syarat Cukup Sekaligus",
      "Hubungan biimplikasi P ↔ Q dalam logika sering disebut sebagai...",
      null, ["Syarat cukup saja tetapi bukan syarat perlu", "Syarat perlu saja tetapi bukan syarat cukup", "Syarat perlu dan cukup", "Hubungan kontradiksi mutlak", "Penalaran induktif"], "c",
      "<p>Karena berlaku dua arah (P → Q sekaligus Q → P), maka biimplikasi disebut sebagai hubungan <strong>syarat perlu dan cukup</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB F: ANALISIS KONDISI (10 SOAL ANALITIKA MURNI: 1-f)
       ====================================================================== */
    Q("1-f", "bab-1", 1, "I.F Analisis Kondisi", "Kasus Interogasi Pencurian Rumah Duduy",
      `<p>Tiga orang, yaitu <strong>Angga</strong>, <strong>Bandi</strong>, dan <strong>Cinta</strong>, diinterogasi polisi terkait pencurian di rumah Duduy.</p>
      <div class="witness-cards-grid">
        <div class="witness-box"><strong>🗣️ Angga berkata:</strong><ol><li>Saya pengacara.</li><li>Saya tidak terlibat.</li></ol></div>
        <div class="witness-box"><strong>🗣️ Bandi menyatakan:</strong><ol><li>Saya bukan pengacara.</li><li>Saya tahu pencurinya.</li></ol></div>
        <div class="witness-box"><strong>🗣️ Cinta menjelaskan:</strong><ol><li>Saya pengacara.</li><li>Saya tidak tahu pencurinya.</li></ol></div>
      </div>
      <p>Jika <strong>hanya satu pernyataan yang benar</strong> dan <strong>dua di antara mereka adalah pengacara</strong>, siapakah pencurinya?</p>`,
      null, ["Angga", "Bandi", "Cinta", "Angga dan Bandi", "Semua salah"], "a",
      `<p>Karena 2 orang adalah pengacara, uji klaim profesi (A_1, B_1, C_1): jika Angga &amp; Cinta pengacara maka ketiganya benar (3 benar, melanggar syarat). Pada dua kemungkinan lainnya (Angga &amp; Bandi pengacara, atau Bandi &amp; Cinta pengacara), tepat 1 pernyataan profesi bernilai Benar (A_1 atau C_1).</p>
       <p>Artinya, kuota 1 pernyataan benar sudah habis di pernyataan pertama! Maka seluruh pernyataan kedua (A_2, B_2, C_2) <strong>pasti SALAH</strong>. Karena klaim Angga <em>"Saya tidak terlibat"</em> (A_2) bernilai SALAH, maka <strong>Angga adalah pencurinya</strong>!</p>`),

    Q("1-f", "bab-1", 2, "I.F Analisis Kondisi", "Urutan Kedatangan Lima Peserta Rapat",
      "Lima peserta rapat (K, L, M, N, O) tiba satu per satu. Diketahui kondisi: (1) K tiba tepat sebelum M. (2) N tidak tiba paling pertama maupun paling terakhir. (3) L tiba setelah N tetapi sebelum K. Siapakah yang tiba PALING PERTAMA?",
      null, ["K", "L", "M", "N", "O"], "e",
      "<p>Dari syarat (1) dan (3), urutan relatif empat orang adalah: <code>N ... L ... K → M</code>. Karena N tidak boleh tiba paling pertama, maka posisi pertama wajib ditempati oleh <strong>O</strong> (Urutan lengkap: <code>O – N – L – K – M</code>).</p>"),

    Q("1-f", "bab-1", 3, "I.F Analisis Kondisi", "Penjadwalan Kunjungan Empat Divisi",
      "Empat divisi (P, Q, R, S) dijadwalkan melakukan presentasi dari hari Senin hingga Kamis (satu divisi per hari). Diketahui: Divisi P tampil sebelum Divisi R. Divisi Q hanya bisa tampil pada hari Rabu. Divisi S tidak boleh tampil pada hari Senin. Divisi manakah yang tampil pada hari Senin?",
      null, ["Divisi P", "Divisi Q", "Divisi R", "Divisi S", "Divisi R atau S"], "a",
      "<p>Rabu ditempati oleh Q. Hari Senin tidak boleh ditempati S dan tidak mungkin ditempati R (karena P harus sebelum R). Maka hari Senin pasti ditempati oleh <strong>Divisi P</strong> (Urutan: Senin=P, Selasa=S, Rabu=Q, Kamis=R).</p>"),

    Q("1-f", "bab-1", 4, "I.F Analisis Kondisi", "Posisi Duduk Sebaris di Bioskop",
      "Lima sahabat (Ayu, Bima, Citra, Doni, Eka) duduk sebaris di 5 kursi bernomor 1 sampai 5 dari kiri ke kanan. Diketahui: Citra duduk tepat di kursi tengah (kursi 3). Ayu duduk tepat di sebelah Citra. Eka duduk di kursi nomor 5. Bima tidak mau duduk di kursi nomor 1. Siapakah yang duduk di kursi nomor 2?",
      null, ["Ayu", "Bima", "Citra", "Doni", "Eka"], "a",
      "<p>Kursi 3 = Citra, Kursi 5 = Eka. Ayu harus bersebelahan dengan Citra (kursi 2 atau 4). Karena Bima tidak mau di kursi 1, maka kursi 1 ditempati Doni, kursi 4 ditempati Bima, dan <strong>kursi nomor 2 ditempati oleh Ayu</strong>.</p>"),

    Q("1-f", "bab-1", 5, "I.F Analisis Kondisi", "Posisi Duduk Melingkar Enam Orang",
      "Enam orang (A, B, C, D, E, F) duduk mengelilingi meja bundar dengan jarak yang sama. A duduk tepat berhadapan dengan D. B duduk di antara A dan E. F duduk tepat berhadapan dengan B. Siapakah yang duduk tepat berhadapan dengan E?",
      null, ["A", "B", "C", "D", "F"], "c",
      "<p>Dari 6 kursi melingkar, pasangan yang saling berhadapan adalah: (1) A berhadapan dengan D, (2) B berhadapan dengan F. Maka satu-satunya pasangan kursi berhadapan yang tersisa adalah <strong>E berhadapan dengan C</strong>.</p>"),

    Q("1-f", "bab-1", 6, "I.F Analisis Kondisi", "Urutan Peringkat Lomba Lari",
      "Dalam sebuah lomba lari: Riko mencapai garis finis lebih cepat daripada Sinta. Tono finis lebih lambat daripada Sinta, tetapi lebih cepat daripada Vina. Wawan finis lebih cepat daripada Riko. Siapakah yang meraih juara KEDUA?",
      null, ["Wawan", "Riko", "Sinta", "Tono", "Vina"], "b",
      "<p>Urutan dari yang paling cepat ke paling lambat: <code>Wawan &gt; Riko &gt; Sinta &gt; Tono &gt; Vina</code>. Dengan demikian, peraih juara kedua adalah <strong>Riko</strong>.</p>"),

    Q("1-f", "bab-1", 7, "I.F Analisis Kondisi", "Teka-Teki Tiga Kotak Berlabel Salah",
      "Terdapat 3 kotak tertutup (Kotak 1 berlabel 'Emas', Kotak 2 berlabel 'Perak', dan Kotak 3 berlabel 'Emas atau Perak'). Diketahui SEMUA label pada ketiga kotak tersebut SALAH. Satu kotak berisi Emas, satu berisi Perak, dan satu Kosong. Jika Kotak 3 ternyata Kosong, maka isi Kotak 1 adalah...",
      null, ["Emas", "Perak", "Kosong", "Perunggu", "Tidak dapat ditentukan"], "b",
      "<p>Kotak 3 sudah pasti berisi Kosong. Tersisa isi Emas dan Perak untuk Kotak 1 dan Kotak 2. Karena label Kotak 1 ('Emas') pasti SALAH, maka Kotak 1 tidak boleh berisi Emas; jadi Kotak 1 pasti berisi <strong>Perak</strong> (dan Kotak 2 berisi Emas).</p>"),

    Q("1-f", "bab-1", 8, "I.F Analisis Kondisi", "Seleksi Penerima Beasiswa Berdasarkan Syarat",
      "Syarat lolos beasiswa prestasi adalah: (1) Rata-rata nilai rapor minimal 85 ATAU pernah menjuarai olimpiade tingkat provinsi. (2) Wajib lulus tes wawancara. Dini memiliki rata-rata rapor 82, pernah juara 1 olimpiade provinsi, dan lulus tes wawancara. Bagaimana status Dini?",
      null, ["Gagal karena rata-rata rapor kurang dari 85", "Lolos karena memenuhi syarat juara olimpiade dan lulus tes wawancara", "Gagal karena harus memenuhi nilai rapor sekaligus juara olimpiade", "Harus mengulang tes wawancara", "Status belum dapat ditentukan"], "b",
      "<p>Syarat (1) menggunakan penghubung <strong>ATAU</strong> sehingga cukup salah satu terpenuhi (Dini juara olimpiade provinsi). Syarat (2) juga terpenuhi (lulus wawancara). Maka Dini <strong>Lolos</strong>.</p>"),

    Q("1-f", "bab-1", 9, "I.F Analisis Kondisi", "Penempatan Lantai Apartemen",
      "Lima keluarga (P, Q, R, S, T) tinggal di gedung apartemen 5 lantai (lantai 1 paling bawah s/d lantai 5 paling atas). Keluarga R tinggal di lantai 3. Keluarga P tinggal tepat di bawah keluarga S. Keluarga T tinggal di lantai paling bawah (lantai 1). Di lantai berapakah keluarga Q tinggal?",
      null, ["Lantai 1", "Lantai 2", "Lantai 3", "Lantai 4", "Lantai 5"], "b",
      "<p>Lantai 1 = T, dan Lantai 3 = R. Karena keluarga P harus tepat di bawah S (dua lantai berurutan), satu-satunya dua lantai berurutan yang kosong adalah lantai 4 dan 5 (Lantai 4 = P, Lantai 5 = S). Maka lantai yang tersisa untuk keluarga Q adalah <strong>Lantai 2</strong>.</p>"),

    Q("1-f", "bab-1", 10, "I.F Analisis Kondisi", "Analisis Pernyataan Tiga Anak",
      "Tiga anak (Adi, Beni, Caca) ditanya siapa yang memecahkan vas bunga. Adi berkata: 'Beni yang memecahkannya.' Beni berkata: 'Bukan saya yang memecahkannya.' Caca berkata: 'Bukan saya yang memecahkannya.' Jika diketahui hanya SATU anak yang berkata jujur dan satu anak yang memecahkan vas, siapakah pelaku sebenarnya?",
      null, ["Adi", "Beni", "Caca", "Adi dan Beni", "Tidak ada yang memecahkan"], "c",
      "<p>Perhatikan ucapan Adi ('Beni pelakunya') dan Beni ('Bukan saya pelakunya') saling bertentangan, sehingga pasti salah satu dari Adi atau Beni berkata jujur. Karena kuota 1 anak jujur sudah berada di antara Adi atau Beni, maka ucapan Caca ('Bukan saya') <strong>pasti BOHONG</strong>! Artinya, yang memecahkan vas bunga adalah <strong>Caca</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB G: INDUKSI DAN DEDUKSI (10 SOAL UMUM: 1-g)
       ====================================================================== */
    Q("1-g", "bab-1", 1, "I.G Induksi dan Deduksi", "Kaidah Penarikan Kesimpulan Modus Ponens",
      "Premis 1: 'Jika hari ini tanggal merah, maka kantor pelayanan libur.' Premis 2: 'Hari ini tanggal merah.' Kesimpulan bahwa 'Kantor pelayanan libur' ditarik menggunakan kaidah deduksi...",
      null, ["Modus Tollens", "Modus Ponens", "Silogisme Hipotetis", "Induksi Umum", "Kontraposisi"], "b",
      "<p>Pola penarikan kesimpulan dari P → Q dan P menghasilkan Q adalah kaidah <strong>Modus Ponens</strong>.</p>"),

    Q("1-g", "bab-1", 2, "I.G Induksi dan Deduksi", "Kaidah Penarikan Kesimpulan Modus Tollens",
      "Premis 1: 'Jika air sungai tercemar limbah, maka banyak ikan yang mati.' Premis 2: 'Tidak ada ikan yang mati di sungai itu.' Kesimpulan deduktif yang sah adalah...",
      null, ["Air sungai tercemar limbah", "Air sungai tidak tercemar limbah", "Sungai tersebut tidak memiliki ikan", "Limbah sungai sangat berbahaya", "Sebagian ikan tahan terhadap limbah"], "b",
      "<p>Berdasarkan kaidah <strong>Modus Tollens</strong> (P → Q dan ¬ Q ⇒ ¬ P), kesimpulan yang sah adalah <strong>Air sungai tidak tercemar limbah</strong>.</p>"),

    Q("1-g", "bab-1", 3, "I.G Induksi dan Deduksi", "Kaidah Silogisme Hipotetis",
      "Premis 1: 'Jika seseorang rajin berolahraga, maka peredaran darahnya lancar.' Premis 2: 'Jika peredaran darahnya lancar, maka tubuhnya bugar.' Kesimpulan yang tepat adalah...",
      null, ["Jika tubuhnya bugar, maka ia rajin berolahraga", "Jika seseorang rajin berolahraga, maka tubuhnya bugar", "Semua orang memiliki tubuh yang bugar", "Jika tidak rajin berolahraga, maka tubuhnya sakit", "Seseorang rajin berolahraga dan tubuhnya bugar"], "b",
      "<p>Berdasarkan kaidah <strong>Silogisme Hipotetis</strong> (P → Q dan Q → R ⇒ P → R), kesimpulannya adalah: <strong>Jika seseorang rajin berolahraga, maka tubuhnya bugar</strong>.</p>"),

    Q("1-g", "bab-1", 4, "I.G Induksi dan Deduksi", "Perbedaan Mendasar Deduksi dan Induksi",
      "Manakah pernyataan yang paling tepat menjelaskan perbedaan antara penalaran deduktif dan penalaran induktif?",
      null, ["Deduksi menarik kesimpulan dari khusus ke umum, sedangkan induksi dari umum ke khusus", "Deduksi menerapkan aturan umum ke kasus khusus secara pasti, sedangkan induksi mengamati kasus-kasus khusus untuk menarik kesimpulan umum", "Induksi hanya berlaku pada kalimat perintah", "Deduksi selalu bersifat spekulatif", "Induksi dan deduksi tidak memiliki perbedaan"], "b",
      "<p><strong>Deduksi</strong> bergerak dari premis umum menuju kasus khusus yang pasti sah, sedangkan <strong>induksi</strong> berangkat dari pengamatan kasus-kasus spesifik menuju generalisasi umum.</p>"),

    Q("1-g", "bab-1", 5, "I.G Induksi dan Deduksi", "Kaidah Silogisme Disjungtif",
      "Diketahui informasi: 'Delegasi yang dikirim ke konferensi nasional adalah Pak Hendra ATAU Bu Maya.' Ternyata pada hari keberangkatan, Pak Hendra sedang sakit sehingga tidak dapat berangkat. Kesimpulan yang sah adalah...",
      null, ["Tidak ada delegasi yang berangkat", "Bu Maya yang dikirim ke konferensi nasional", "Pak Hendra tetap berangkat bersama Bu Maya", "Konferensi nasional dibatalkan", "Belum tentu Bu Maya berangkat"], "b",
      "<p>Berdasarkan <strong>Silogisme Disjungtif</strong> (P ∨ Q dan ¬ P ⇒ Q), karena pilihan pertama (Pak Hendra) batal, maka pilihan kedua pasti terjadi: <strong>Bu Maya yang dikirim ke konferensi nasional</strong>.</p>"),

    Q("1-g", "bab-1", 6, "I.G Induksi dan Deduksi", "Mengenali Jebakan Sesat Pikir (Fallacy)",
      "Premis 1: 'Jika terjadi kebakaran hutan, maka langit tertutup asap.' Premis 2: 'Hari ini langit tertutup asap.' Apakah kesimpulan 'Pasti terjadi kebakaran hutan' sah secara deduktif?",
      null, ["Sah berdasarkan Modus Ponens", "Sah berdasarkan Modus Tollens", "Tidak sah, karena langit tertutup asap bisa disebabkan oleh hal lain (misalnya kabut atau pabrik)", "Sah berdasarkan Silogisme", "Pasti benar tanpa pengecualian"], "c",
      "<p>Menyimpulkan P dari P → Q dan Q adalah sesat pikir (<em>Affirming the Consequent</em>). Langit berasap bisa saja disebabkan pabrik, gunung berapi, atau pembakaran sampah, bukan harus kebakaran hutan.</p>"),

    Q("1-g", "bab-1", 7, "I.G Induksi dan Deduksi", "Penalaran Induktif dari Pengamatan Fakta",
      "Seorang peneliti mengamati bahwa burung merpati berkembang biak dengan bertelur, burung elang bertelur, burung pipit bertelur, dan burung bangau juga bertelur. Ia kemudian menyimpulkan bahwa 'Semua jenis burung berkembang biak dengan bertelur.' Jenis penalaran yang digunakan peneliti tersebut adalah...",
      null, ["Penalaran Deduktif Modus Ponens", "Penalaran Deduktif Silogisme", "Penalaran Induktif (Generalisasi)", "Kontradiksi Logis", "Biimplikasi"], "c",
      "<p>Karena peneliti berangkat dari sejumlah fakta pengamatan khusus lalu menarik kesimpulan umum (generalisasi), maka ia menggunakan <strong>Penalaran Induktif</strong>.</p>"),

    Q("1-g", "bab-1", 8, "I.G Induksi dan Deduksi", "Induksi Pola Penjumlahan Bilangan Ganjil",
      "Perhatikan pengamatan beruntun berikut: 1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9, 1 + 3 + 5 + 7 = 16. Berdasarkan penalaran induktif terhadap pola tersebut, berapakah hasil penjumlahan 10 bilangan ganjil pertama?",
      null, ["50", "81", "100", "121", "144"], "c",
      "<p>Dari pengamatan terlihat jumlah n bilangan ganjil pertama selalu menghasilkan n<sup>2</sup> (1<sup>2</sup>=1, 2<sup>2</sup>=4, 3<sup>2</sup>=9, 4<sup>2</sup>=16). Maka untuk 10 bilangan ganjil pertama hasilnya adalah 10<sup>2</sup> = <strong>100</strong>.</p>"),

    Q("1-g", "bab-1", 9, "I.G Induksi dan Deduksi", "Rantai Deduksi Tiga Premis",
      "Premis 1: Jika listrik padam, maka pompa air berhenti. Premis 2: Jika pompa air berhenti, maka tandon air kosong. Premis 3: Saat ini tandon air TIDAK kosong (masih terisi penuh). Kesimpulan deduktif yang tepat adalah...",
      null, ["Listrik sedang padam", "Pompa air sedang berhenti", "Listrik tidak padam", "Tandon air bocor", "Pompa air rusak"], "c",
      "<p>Dari Premis 1 dan 2 diperoleh silogisme: <em>Jika listrik padam maka tandon air kosong</em>. Karena tandon air tidak kosong (Modus Tollens), maka kesimpulannya <strong>listrik tidak padam</strong>.</p>"),

    Q("1-g", "bab-1", 10, "I.G Induksi dan Deduksi", "Deduksi Berantai dengan Kontraposisi",
      "Diketahui: (1) Jika kegiatan diadakan di luar ruangan, maka panitia menyiapkan tenda. (2) Jika panitia menyiapkan tenda, maka anggaran konsumsi dikurangi. Pernyataan manakah yang PASTI benar?",
      null, ["Jika anggaran konsumsi dikurangi, maka kegiatan diadakan di luar ruangan", "Jika anggaran konsumsi TIDAK dikurangi, maka kegiatan TIDAK diadakan di luar ruangan", "Kegiatan pasti diadakan di luar ruangan", "Panitia tidak pernah menyiapkan tenda", "Anggaran konsumsi selalu dikurangi"], "b",
      "<p>Dari silogisme diperoleh: <em>Jika kegiatan di luar ruangan (P), maka anggaran konsumsi dikurangi (R)</em>. Kontraposisinya yang pasti benar adalah: <strong>Jika anggaran konsumsi tidak dikurangi (¬ R), maka kegiatan tidak diadakan di luar ruangan (¬ P)</strong>.</p>"),

    /* ======================================================================
       BAB I — SUB-BAB H: PROBLEM SOLVING & PENALARAN LOGIS (10 SOAL UMUM: 1-h)
       ====================================================================== */
    Q("1-h", "bab-1", 1, "I.H Problem Solving Logis", "Ingkaran Pernyataan Berkuantor Universal",
      "Ingkaran (negasi) yang tepat dari pernyataan: 'Semua peserta pelatihan hadir tepat waktu dan membawa buku panduan' adalah...",
      null, ["Semua peserta pelatihan terlambat dan tidak membawa buku panduan", "Ada peserta pelatihan yang tidak hadir tepat waktu ATAU tidak membawa buku panduan", "Tidak ada peserta pelatihan yang membawa buku panduan", "Sebagian peserta pelatihan hadir tepat waktu dan membawa buku panduan", "Semua peserta hadir tepat waktu tetapi tidak membawa buku panduan"], "b",
      "<p>Ingkaran dari <em>'Semua (P  dan  Q)'</em> adalah <strong>'Ada / beberapa (tidak  P  atau tidak  Q)'</strong>, yaitu: <em>Ada peserta pelatihan yang tidak hadir tepat waktu atau tidak membawa buku panduan.</em></p>"),

    Q("1-h", "bab-1", 2, "I.H Problem Solving Logis", "Seleksi Pembentukan Tim dengan Batasan",
      "Sebuah tim debat beranggotakan 3 orang akan dipilih dari 5 siswa (Aldi, Bela, Ciko, Dini, Eko). Aturannya: (1) Jika Aldi dipilih, maka Bela tidak boleh dipilih. (2) Ciko hanya bersedia masuk tim jika Dini juga dipilih. Jika Aldi terpilih tetapi Dini berhalangan hadir, maka...",
      null, ["Tim yang terbentuk adalah Aldi, Bela, Eko", "Tim yang terbentuk adalah Aldi, Ciko, Eko", "Tidak mungkin membentuk tim beranggotakan 3 orang", "Tim yang terbentuk adalah Bela, Ciko, Eko", "Tim yang terbentuk adalah Aldi, Dini, Eko"], "c",
      "<p>Karena Aldi terpilih, Bela tidak bisa ikut. Karena Dini berhalangan, Ciko juga tidak bisa ikut. Siswa yang tersisa hanya Aldi dan Eko (2 orang), sehingga <strong>tidak mungkin membentuk tim beranggotakan 3 orang</strong>.</p>"),

    Q("1-h", "bab-1", 3, "I.H Problem Solving Logis", "Penjadwalan Urutan Empat Pekerjaan",
      "Seorang manajer proyek harus menyelesaikan 4 tahap pekerjaan (T1, T2, T3, T4). Tahap T3 hanya boleh dikerjakan setelah T1 dan T2 selesai. Tahap T2 harus dikerjakan sebelum T4, dan T4 harus dikerjakan sebelum T3. Tahap manakah yang pasti dikerjakan PALING AKHIR?",
      null, ["T1", "T2", "T3", "T4", "T1 atau T2"], "c",
      "<p>Karena T2 → T4 → T3 dan T1 → T3, maka seluruh tahap lainnya (T1, T2, dan T4) harus selesai sebelum T3 dimulai. Jadi <strong>T3 pasti dikerjakan paling akhir</strong>.</p>"),

    Q("1-h", "bab-1", 4, "I.H Problem Solving Logis", "Mencari Contoh Penyangkal (Counterexample)",
      "Untuk membuktikan bahwa klaim 'Semua bilangan ganjil yang lebih besar dari 1 adalah bilangan prima' bernilai SALAH, cukup ditunjukkan satu contoh penyangkal, yaitu bilangan...",
      null, ["2", "3", "5", "9", "11"], "d",
      "<p>Bilangan <strong>9</strong> adalah bilangan ganjil yang lebih besar dari 1, namun bukan bilangan prima karena habis dibagi 3 (9 = 3 × 3). Satu contoh ini sudah cukup menggugurkan klaim 'Semua'.</p>"),

    Q("1-h", "bab-1", 5, "I.H Problem Solving Logis", "Teka-Teki Tiga Lampu dan Tiga Saklar",
      "Terdapat 3 lampu (L1, L2, L3) yang mula-mula PADAM semua. Saklar A membalik keadaan L1 dan L2. Saklar B membalik keadaan L2 dan L3. Saklar C membalik keadaan L1 dan L3. Jika Saklar A, lalu Saklar B, lalu Saklar C ditekan masing-masing tepat satu kali, bagaimana kondisi akhir ketiga lampu?",
      null, ["Ketiganya MENYALA", "Ketiganya kembali PADAM", "Hanya L2 yang menyala", "L1 dan L3 menyala, L2 padam", "Hanya L1 yang menyala"], "b",
      "<p>Perhatikan bahwa setiap lampu (L1, L2, maupun L3) tepat mengalami 2 kali pembalikan keadaan (Padam → Menyala → Padam). Maka pada akhirnya <strong>ketiga lampu kembali PADAM</strong>.</p>"),

    Q("1-h", "bab-1", 6, "I.H Problem Solving Logis", "Matriks Eliminasi Profesi Tiga Sekawan",
      "Dani, Eka, dan Fajar memiliki profesi yang berbeda-beda: Dokter, Arsitek, dan Akuntan. Diketahui: (1) Dani bukanlah seorang Akuntan. (2) Eka bukan seorang Arsitek dan bukan pula seorang Akuntan. Apakah profesi Dani dan Fajar berturut-turut?",
      null, ["Dokter dan Arsitek", "Arsitek dan Akuntan", "Akuntan dan Dokter", "Arsitek dan Dokter", "Dokter dan Akuntan"], "b",
      "<p>Dari petunjuk (2), karena Eka bukan Arsitek dan bukan Akuntan, maka Eka pasti <strong>Dokter</strong>. Dari petunjuk (1), Dani bukan Akuntan (dan bukan Dokter karena sudah ditempati Eka), sehingga Dani pasti <strong>Arsitek</strong>, dan Fajar adalah <strong>Akuntan</strong>.</p>"),

    Q("1-h", "bab-1", 7, "I.H Problem Solving Logis", "Prinsip Kasus Terburuk (Pigeonhole Principle)",
      "Di dalam sebuah kotak gelap terdapat 6 bola merah, 5 bola biru, dan 4 bola kuning. Berapa jumlah MINIMUM bola yang harus diambil secara acak (tanpa melihat) agar kita PASTI mendapatkan minimal 2 bola yang berwarna sama?",
      null, ["2 bola", "3 bola", "4 bola", "5 bola", "7 bola"], "c",
      "<p>Karena terdapat 3 warna berbeda, skenario terburuk pada 3 pengambilan pertama adalah terambil 1 merah, 1 biru, dan 1 kuning (semuanya beda warna). Begitu kita mengambil bola ke-<strong>4</strong>, warnanya pasti sama dengan salah satu dari ketiga bola sebelumnya!</p>"),

    Q("1-h", "bab-1", 8, "I.H Problem Solving Logis", "Analisis Irisan Minimum Dua Kelompok",
      "Dalam sebuah ruangan terdapat 30 orang peserta seminar. Diketahui 20 orang menguasai bahasa Inggris dan 18 orang menguasai bahasa Jepang. Berapakah jumlah MINIMUM peserta yang pasti menguasai kedua bahasa tersebut sekaligus?",
      null, ["6 orang", "8 orang", "10 orang", "12 orang", "18 orang"], "b",
      "<p>Jumlah irisan minimum dihitung dengan rumus (A + B) - N = (20 + 18) - 30 = 38 - 30 = <strong>8 orang</strong>.</p>"),

    Q("1-h", "bab-1", 9, "I.H Problem Solving Logis", "Penalaran Jabat Tangan dalam Pertemuan",
      "Dalam sebuah rapat yang dihadiri oleh 6 orang, setiap orang berjabat tangan tepat satu kali dengan masing-masing peserta lainnya. Berapakah total jabat tangan yang terjadi?",
      null, ["12 kali", "15 kali", "18 kali", "30 kali", "36 kali"], "b",
      "<p>Setiap orang dari 6 peserta berjabat tangan dengan 5 orang lainnya, namun karena jabat tangan antara A dan B sama dengan B dan A, totalnya adalah (6 × 5)/2 = <strong>15 kali</strong>.</p>"),

    Q("1-h", "bab-1", 10, "I.H Problem Solving Logis", "Penalaran Turnamen Sistem Gugur",
      "Dalam sebuah turnamen bulu tangkis yang diikuti oleh 16 peserta tunggal dengan sistem gugur murni (setiap pertandingan mempertemukan 2 pemain dan yang kalah langsung tersingkir), berapa total pertandingan yang harus dimainkan hingga diperoleh 1 juara utama?",
      null, ["8 pertandingan", "12 pertandingan", "15 pertandingan", "16 pertandingan", "32 pertandingan"], "c",
      "<p>Dalam sistem gugur tunggal, setiap 1 pertandingan selalu menyingkirkan tepat 1 peserta. Untuk menyisakan 1 juara dari 16 peserta, harus ada 15 peserta yang tersingkir, sehingga pasti digelar tepat <strong>15 pertandingan</strong> (8 + 4 + 2 + 1 = 15).</p>")
  ];

  window.__RAW_BANK_PART1 = RAW_BANK;
})();
