/* ==========================================================================
   EduLogic Studio — Bank Soal Lengkap Bab II: Aritmatika & Matematika Dasar (quiz_bank_p2.js)
   Fokus: Konsep Dasar Matematika Umum, Rumusan Matematik & Penyelesaian Masalah
   Cakupan: Sub-Bab II.A s/d II.L (12 Sub-Bab × 10 Soal = 120 Soal & Pembahasan)
   ========================================================================== */

(function () {
  "use strict";

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
            label: code.label || "RUMUS / EKSPRESI MATEMATIKA",
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

  window.__RAW_BANK_PART2 = [
    /* ======================================================================
       BAB II — SUB-BAB A: OPERASI DASAR (+, -, ×, ÷) (10 SOAL UMUM: 2-a)
       ====================================================================== */
    Q("2-a", "bab-2", 1, "II.A Operasi Dasar", "Penjumlahan dan Pengurangan Bilangan Negatif",
      "Berapakah hasil dari operasi hitung dasar 28 - (-15) + (-13)?",
      null, ["0", "26", "30", "43", "56"], "c",
      "<p>Ingat rumus tanda: mengurangi dengan bilangan negatif sama dengan menjumlahkan (a - (-b) = a + b).<br>Maka 28 - (-15) = 28 + 15 = 43. Selanjutnya 43 + (-13) = 43 - 13 = <strong>30</strong>.</p>"),

    Q("2-a", "bab-2", 2, "II.A Operasi Dasar", "Perkalian & Pembagian Bilangan Bertanda",
      "Berapakah hasil dari (-16) × (-4) ÷ (-8)?",
      null, ["8", "-8", "12", "-12", "4"], "b",
      "<p>Langkah 1: (-16) × (-4) = +64 (karena negatif dikali negatif menghasilkan positif).<br>Langkah 2: 64 ÷ (-8) = <strong>-8</strong> (positif dibagi negatif menghasilkan negatif).</p>"),

    Q("2-a", "bab-2", 3, "II.A Operasi Dasar", "Hitung Cepat dengan Sifat Distributif Perkalian",
      "Gunakan sifat distributif a × b + a × c = a × (b + c) untuk menghitung cepat nilai dari: 45 × 73 + 45 × 27",
      null, ["3.500", "4.000", "4.500", "4.550", "5.000"], "c",
      "<p>Keluarkan faktor yang sama yaitu 45: 45 × (73 + 27) = 45 × 100 = <strong>4.500</strong>.</p>"),

    Q("2-a", "bab-2", 4, "II.A Operasi Dasar", "Sifat Distributif pada Pengurangan",
      "Berapakah hasil perhitungan cepat dari 125 × 18 - 125 × 10?",
      null, ["800", "900", "1.000", "1.125", "1.250"], "c",
      "<p>Dengan rumus sifat distributif pengurangan a × (b - c): 125 × (18 - 10) = 125 × 8 = <strong>1.000</strong>.</p>"),

    Q("2-a", "bab-2", 5, "II.A Operasi Dasar", "Soal Cerita Operasi Dasar Transaksi",
      "Seorang siswa membeli 4 buah buku tulis seharga Rp45.000 per buku dan membayar di kasir dengan 2 lembar uang Rp100.000. Berapakah uang kembalian yang diterimanya?",
      null, ["Rp10.000", "Rp15.000", "Rp20.000", "Rp25.000", "Rp30.000"], "c",
      "<p>Total harga buku = 4 × Rp45.000 = Rp180.000.<br>Total uang dibayar = 2 × Rp100.000 = Rp200.000.<br>Uang kembalian = Rp200.000 - Rp180.000 = <strong>Rp20.000</strong>.</p>"),

    Q("2-a", "bab-2", 6, "II.A Operasi Dasar", "Sifat Pembagian dengan Bilangan Nol",
      "Dalam aturan matematika dasar, bagaimanakah hasil dari operasi 0 ÷ 15 dan 15 ÷ 0 berturut-turut?",
      null, ["0 dan 0", "15 dan 0", "0 dan Tidak Terdefinisi", "Tidak Terdefinisi dan 0", "1 dan Tidak Terdefinisi"], "c",
      "<p>Nol dibagi bilangan tak-nol (0 ÷ 15) menghasilkan <strong>0</strong> (karena 0 × 15 = 0). Sebaliknya, bilangan apa pun dibagi dengan nol (15 ÷ 0) adalah <strong>Tidak Terdefinisi</strong>.</p>"),

    Q("2-a", "bab-2", 7, "II.A Operasi Dasar", "Sifat Identitas Penjumlahan dan Perkalian",
      "Berapakah hasil dari ekspresi (125 × 0) + (89 × 1) - (0 ÷ 25)?",
      null, ["0", "89", "125", "214", "1"], "b",
      "<p>Hitung masing-masing kurung: 125 × 0 = 0, 89 × 1 = 89, dan 0 ÷ 25 = 0. Maka 0 + 89 - 0 = <strong>89</strong>.</p>"),

    Q("2-a", "bab-2", 8, "II.A Operasi Dasar", "Pembagian dengan Sisa (Pembagian Euklides)",
      "Sebanyak 150 butir kelereng akan dimasukkan ke dalam kantong-kantong kecil yang masing-masing memuat tepat 12 butir kelereng. Berapa kantong penuh yang terbentuk dan berapa butir kelereng sisanya?",
      null, ["11 kantong penuh, sisa 8 butir", "12 kantong penuh, sisa 4 butir", "12 kantong penuh, sisa 6 butir", "13 kantong penuh, sisa 2 butir", "12 kantong penuh, tanpa sisa"], "c",
      "<p>Karena 12 × 12 = 144, maka 150 = (12 × 12) + 6. Jadi terbentuk <strong>12 kantong penuh dan tersisa 6 butir</strong>.</p>"),

    Q("2-a", "bab-2", 9, "II.A Operasi Dasar", "Mencari Bilangan yang Belum Diketahui",
      "Jika diketahui persamaan (p × 6) - 14 = 34, maka berapakah nilai p?",
      null, ["6", "7", "8", "9", "10"], "c",
      "<p>Tambahkan kedua ruas dengan 14: 6p = 34 + 14 = 48. Kemudian bagi dengan 6: p = 48 ÷ 6 = <strong>8</strong>.</p>"),

    Q("2-a", "bab-2", 10, "II.A Operasi Dasar", "Perubahan Suhu Positif dan Negatif",
      "Suhu awal di dalam ruang pendingin adalah -6^°C. Saat listrik dimatikan, suhunya naik sebesar 18^°C, lalu setelah mesin dinyalakan kembali suhunya turun 5^°C. Berapakah suhu akhir ruangan tersebut?",
      null, ["5°C", "7°C", "12°C", "17°C", "-19°C"], "b",
      "<p>Suhu akhir = -6 + 18 - 5 = 12 - 5 = <strong>7^°C</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB B: OPERASI BILANGAN (PRIORITAS) (10 SOAL UMUM: 2-b)
       ====================================================================== */
    Q("2-b", "bab-2", 1, "II.B Operasi Bilangan", "Prioritas Kali dan Bagi dari Kiri ke Kanan",
      "Berapakah hasil dari operasi hitung campuran: 30 - 18 ÷ 3 × 2 + (5 + 3) × 2?",
      null, ["24", "34", "43", "20", "38"], "b",
      "<p>Langkah 1 (Kurung): (5 + 3) = 8.<br>Langkah 2 (Bagi &amp; Kali dari kiri ke kanan): 18 ÷ 3 = 6, lalu 6 × 2 = 12; kemudian 8 × 2 = 16.<br>Langkah 3 (Kurang &amp; Tambah): 30 - 12 + 16 = 18 + 16 = <strong>34</strong>.</p>"),

    Q("2-b", "bab-2", 2, "II.B Operasi Bilangan", "Evaluasi Tanda Kurung Bersarang",
      "Hitunglah nilai dari: 50 - 2 × (3 + 4 × (6 - 3))",
      null, ["10", "15", "20", "24", "30"], "c",
      "<p>Kerjakan dari kurung paling dalam: (6 - 3) = 3.<br>Kurung luar: 3 + (4 × 3) = 3 + 12 = 15.<br>Hasil akhir: 50 - (2 × 15) = 50 - 30 = <strong>20</strong>.</p>"),

    Q("2-b", "bab-2", 3, "II.B Operasi Bilangan", "Operasi Campuran Bilangan Bulat",
      "Berapakah hasil dari 100 ÷ 5 × 2 - (12 + 8) ÷ 4?",
      null, ["5", "15", "30", "35", "40"], "d",
      "<p>Langkah 1 (Kurung): (12 + 8) = 20.<br>Langkah 2 (Bagi &amp; Kali dari kiri): 100 ÷ 5 = 20, lalu 20 × 2 = 40. Di ruas kanan: 20 ÷ 4 = 5.<br>Langkah 3: 40 - 5 = <strong>35</strong>.</p>"),

    Q("2-b", "bab-2", 4, "II.B Operasi Bilangan", "Selisih Hasil dengan dan tanpa Tanda Kurung",
      "Diketahui A = (12 + 8) × 3 dan B = 12 + 8 × 3. Berapakah nilai dari A - B?",
      null, ["12", "18", "24", "36", "0"], "c",
      "<p>Hitung A: (12 + 8) × 3 = 20 × 3 = 60.<br>Hitung B: 12 + (8 × 3) = 12 + 24 = 36.<br>Maka selisihnya A - B = 60 - 36 = <strong>24</strong>.</p>"),

    Q("2-b", "bab-2", 5, "II.B Operasi Bilangan", "Operasi Campuran yang Memuat Perpangkatan",
      "Berapakah hasil dari: 4 × 3<sup>2</sup> - 24 ÷ (2 + 4)?",
      null, ["28", "32", "40", "140", "20"], "b",
      "<p>Kerjakan kurung dan pangkat terlebih dahulu: 3<sup>2</sup> = 9 dan (2 + 4) = 6.<br>Selanjutnya kali dan bagi: (4 × 9) - (24 ÷ 6) = 36 - 4 = <strong>32</strong>.</p>"),

    Q("2-b", "bab-2", 6, "II.B Operasi Bilangan", "Urutan Pembagian dan Perkalian Beruntun",
      "Hitunglah hasil dari: 64 ÷ 8 ÷ 2 × 4",
      null, ["1", "4", "16", "32", "64"], "c",
      "<p>Karena bagi (÷) dan kali (×) setara, kerjakan urut dari kiri ke kanan:<br>64 ÷ 8 = 8 → 8 ÷ 2 = 4 → 4 × 4 = <strong>16</strong>.</p>"),

    Q("2-b", "bab-2", 7, "II.B Operasi Bilangan", "Operasi Campuran Pecahan Bersusun (Pembilang & Penyebut)",
      "Berapakah nilai dari (36 - 12 × 2)/(15 - 3 × 3)?",
      null, ["1", "2", "3", "4", "6"], "b",
      "<p>Hitung pembilang: 36 - (12 × 2) = 36 - 24 = 12.<br>Hitung penyebut: 15 - (3 × 3) = 15 - 9 = 6.<br>Bagikan: 12 ÷ 6 = <strong>2</strong>.</p>"),

    Q("2-b", "bab-2", 8, "II.B Operasi Bilangan", "Operasi Campuran dengan Bilangan Negatif",
      "Berapakah nilai dari (25 - 5 × 6) × (-4)?",
      null, ["-20", "20", "-480", "480", "10"], "b",
      "<p>Di dalam kurung, kerjakan perkalian dulu: 5 × 6 = 30, lalu 25 - 30 = -5.<br>Kemudian kalikan: (-5) × (-4) = <strong>20</strong>.</p>"),

    Q("2-b", "bab-2", 9, "II.B Operasi Bilangan", "Menentukan Tanda Operasi yang Tepat",
      "Agar persamaan 18  [ ? ]  6 + 4 × 3 = 15 bernilai benar, tanda operasi yang tepat untuk mengisi kotak [  ?  ] adalah...",
      null, ["+", "-", "×", "÷", "="], "d",
      "<p>Karena 4 × 3 = 12, maka bagian kiri 18  [ ? ]  6 harus menghasilkan 3 (sebab 3 + 12 = 15). Operasi yang menghasilkan 3 dari 18 dan 6 adalah pembagian (<strong>÷</strong>).</p>"),

    Q("2-b", "bab-2", 10, "II.B Operasi Bilangan", "Substitusi Nilai ke Rumus Aljabar",
      "Jika diketahui p = 6, q = 4, dan r = 2, berapakah nilai dari (p × q - r)/(p - q) + (r × 3)?",
      null, ["11", "14", "17", "19", "21"], "c",
      "<p>Substitusikan nilainya:<br>• Pembilang: (6 × 4) - 2 = 24 - 2 = 22<br>• Penyebut: 6 - 4 = 2<br>• Hasil: (22 ÷ 2) + (2 × 3) = 11 + 6 = <strong>17</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB C: PECAHAN DAN PERSENTASE (10 SOAL UMUM: 2-c)
       ====================================================================== */
    Q("2-c", "bab-2", 1, "II.C Pecahan & Persentase", "Perhitungan Diskon Bertingkat (Ganda)",
      "Sebuah jaket seharga Rp400.000 mendapat diskon awal sebesar 25%, kemudian mendapat potongan tambahan sebesar 1/5 bagian (20%) dari harga setelah diskon pertama. Berapakah harga akhir jaket tersebut?",
      null, ["Rp220.000", "Rp240.000", "Rp250.000", "Rp260.000", "Rp280.000"], "b",
      "<p>Langkah 1 (Diskon 25%): Rp400.000 - (25% × Rp400.000) = Rp400.000 - Rp100.000 = Rp300.000.<br>Langkah 2 (Potongan 1/5 dari Rp300.000 yaitu Rp60.000): Rp300.000 - Rp60.000 = <strong>Rp240.000</strong>.</p>"),

    Q("2-c", "bab-2", 2, "II.C Pecahan & Persentase", "Penjumlahan dan Pengurangan Pecahan Biasa",
      "Berapakah hasil dari operasi pecahan 3/4 + 2/3 - 1/2?",
      null, ["7/12", "9/12", "11/12", "13/12", "5/6"], "c",
      "<p>Samakan penyebut dengan KPK dari 4, 3, dan 2 yaitu 12:<br>9/12 + 8/12 - 6/12 = (9 + 8 - 6)/12 = <strong>11/12</strong>.</p>"),

    Q("2-c", "bab-2", 3, "II.C Pecahan & Persentase", "Pembagian Dua Pecahan",
      "Berapakah hasil dari 5/8 ÷ 15/16?",
      null, ["1/2", "2/3", "3/4", "5/6", "3/2"], "b",
      "<p>Balik pecahan pembagi dan ubah menjadi perkalian:<br>5/8 × 16/15 = (5/15) × (16/8) = 1/3 × 2 = <strong>2/3</strong>.</p>"),

    Q("2-c", "bab-2", 4, "II.C Pecahan & Persentase", "Menghitung Persentase Capaian Skor",
      "Dalam sebuah ujian yang terdiri dari 60 soal, Andi berhasil menjawab benar sebanyak 45 soal. Berapa persentase jawaban benar yang dicapai Andi?",
      null, ["70%", "75%", "80%", "82,5%", "85%"], "b",
      "<p>Rumus persentase: 45/60 × 100% = 3/4 × 100% = <strong>75%</strong>.</p>"),

    Q("2-c", "bab-2", 5, "II.C Pecahan & Persentase", "Rumus Persentase Kenaikan",
      "Jumlah pengunjung perpustakaan meningkat dari 250 orang pada bulan lalu menjadi 325 orang pada bulan ini. Berapa persen kenaikan jumlah pengunjung tersebut?",
      null, ["20%", "25%", "30%", "35%", "75%"], "c",
      "<p>Selisih kenaikan = 325 - 250 = 75 orang.<br>Persentase kenaikan terhadap nilai awal = 75/250 × 100% = 3/10 × 100% = <strong>30%</strong>.</p>"),

    Q("2-c", "bab-2", 6, "II.C Pecahan & Persentase", "Mengurutkan Nilai Pecahan",
      "Manakah urutan pecahan di bawah ini yang disusun secara benar dari nilai TERKECIL ke TERBESAR?",
      null, ["1/2, 2/5, 3/4, 5/8", "2/5, 1/2, 5/8, 3/4", "2/5, 5/8, 1/2, 3/4", "3/4, 5/8, 1/2, 2/5", "1/2, 5/8, 2/5, 3/4"], "b",
      "<p>Ubah ke bentuk persentase/desimal agar mudah dibandingkan:<br>• 2/5 = 40%<br>• 1/2 = 50%<br>• 5/8 = 62,5%<br>• 3/4 = 75%<br>Maka urutan dari terkecil ke terbesar adalah <strong>2/5,\; 1/2,\; 5/8,\; 3/4</strong>.</p>"),

    Q("2-c", "bab-2", 7, "II.C Pecahan & Persentase", "Mencari Harga Awal Sebelum Diskon",
      "Setelah mendapat diskon 20%, harga sebuah tas menjadi Rp96.000. Berapakah harga awal tas tersebut sebelum diskon?",
      null, ["Rp110.000", "Rp115.200", "Rp120.000", "Rp125.000", "Rp130.000"], "c",
      "<p>Harga setelah diskon 20% setara dengan 80% dari harga awal (H):<br>H = 100/80 × Rp96.000 = 5/4 × Rp96.000 = <strong>Rp120.000</strong>.</p>"),

    Q("2-c", "bab-2", 8, "II.C Pecahan & Persentase", "Menghitung Total dari Bagian Sisa Pecahan",
      "Seorang penulis menyelesaikan 1/3 bagian naskah buku pada hari Senin, dan 2/5 bagian dari total naskah pada hari Selasa. Jika sisa naskah yang belum ditulis adalah 8 halaman, berapa total halaman naskah buku tersebut?",
      null, ["24 halaman", "30 halaman", "36 halaman", "40 halaman", "45 halaman"], "b",
      "<p>Bagian yang sudah selesai = 1/3 + 2/5 = 5/15 + 6/15 = 11/15 bagian.<br>Sisa bagian = 1 - 11/15 = 4/15 bagian.<br>Karena 4/15 × Total = 8, maka Total = (8 × 15)/4 = <strong>30 halaman</strong>.</p>"),

    Q("2-c", "bab-2", 9, "II.C Pecahan & Persentase", "Perkalian Pecahan Campuran dan Desimal",
      "Berapakah hasil dari 21/2 × 0,4 ÷ 1/5?",
      null, ["1", "2", "4", "5", "10"], "d",
      "<p>Ubah ke pecahan biasa: 21/2 = 5/2 dan 0,4 = 2/5.<br>Maka (5/2 × 2/5) ÷ 1/5 = 1 × 5/1 = <strong>5</strong>.</p>"),

    Q("2-c", "bab-2", 10, "II.C Pecahan & Persentase", "Penjumlahan Persentase dan Pecahan dari Suatu Bilangan",
      "Berapakah nilai dari (35% dari 200) ditambah (3/8 dari 64)?",
      null, ["84", "90", "94", "98", "104"], "c",
      "<p>• 35% × 200 = 35/100 × 200 = 70.<br>• 3/8 × 64 = 3 × 8 = 24.<br>• Jumlahnya = 70 + 24 = <strong>94</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB D: PANGKAT DAN AKAR (10 SOAL UMUM: 2-d)
       ====================================================================== */
    Q("2-d", "bab-2", 1, "II.D Pangkat dan Akar", "Sifat Eksponen & Akar Kuadrat",
      "Berapakah hasil dari ekspresi (2<sup>5</sup> × 2<sup>-2</sup>) + √144 - 5<sup>0</sup>?",
      null, ["15", "19", "20", "21", "23"], "b",
      "<p>• 2<sup>5</sup> × 2<sup>-2</sup> = 2<sup>5 - 2</sup> = 2<sup>3</sup> = 8<br>• √144 = 12<br>• 5<sup>0</sup> = 1<br>Maka 8 + 12 - 1 = <strong>19</strong>.</p>"),

    Q("2-d", "bab-2", 2, "II.D Pangkat dan Akar", "Rumus Pangkat Dipangkatkan dan Pembagian Eksponen",
      "Sederhanakan dan hitung nilai dari (3<sup>2</sup>)<sup>3</sup> ÷ 3<sup>4</sup>!",
      null, ["3", "9", "27", "81", "1"], "b",
      "<p>Gunakan sifat (a^m)^n = a<sup>m × n</sup> dan a^p ÷ a^q = a<sup>p - q</sup>:<br>(3<sup>2</sup>)<sup>3</sup> ÷ 3<sup>4</sup> = 3<sup>6</sup> ÷ 3<sup>4</sup> = 3<sup>6 - 4</sup> = 3<sup>2</sup> = <strong>9</strong>.</p>"),

    Q("2-d", "bab-2", 3, "II.D Pangkat dan Akar", "Penjumlahan dan Pengurangan Bentuk Akar Sejenis",
      "Hasil penyederhanaan dari √75 + √12 - √27 adalah...",
      null, ["3√3", "4√3", "5√3", "6√3", "7√3"], "b",
      "<p>Ubah masing-masing ke bentuk k√3:<br>• √75 = √(25 × 3) = 5√3<br>• √12 = √(4 × 3) = 2√3<br>• √27 = √(9 × 3) = 3√3<br>Hasilnya: (5 + 2 - 3)√3 = <strong>4√3</strong>.</p>"),

    Q("2-d", "bab-2", 4, "II.D Pangkat dan Akar", "Operasi Gabungan Pangkat Tiga dan Akar Kuadrat",
      "Berapakah nilai dari 4<sup>3</sup>/√64 + <sup>3</sup>√(125)?",
      null, ["9", "11", "13", "15", "17"], "c",
      "<p>• 4<sup>3</sup> = 64 dan √64 = 8, sehingga 64/8 = 8.<br>• <sup>3</sup>√(125) = 5 (karena 5<sup>3</sup> = 125).<br>• Jumlahnya = 8 + 5 = <strong>13</strong>.</p>"),

    Q("2-d", "bab-2", 5, "II.D Pangkat dan Akar", "Menyelesaikan Persamaan Eksponen",
      "Jika diketahui 2<sup>x + 1</sup> = 32, maka berapakah nilai dari x<sup>2</sup>?",
      null, ["9", "16", "25", "36", "4"], "b",
      "<p>Ubah 32 menjadi basis 2: 2<sup>x + 1</sup> = 2<sup>5</sup> ⇒ x + 1 = 5 ⇒ x = 4.<br>Maka nilai dari x<sup>2</sup> = 4<sup>2</sup> = <strong>16</strong>.</p>"),

    Q("2-d", "bab-2", 6, "II.D Pangkat dan Akar", "Menghitung Pangkat Pecahan",
      "Berapakah hasil dari 27<sup>2/3</sup> + 16<sup>1/2</sup>?",
      null, ["11", "13", "15", "17", "19"], "b",
      "<p>• 27<sup>2/3</sup> = (<sup>3</sup>√(27))<sup>2</sup> = 3<sup>2</sup> = 9<br>• 16<sup>1/2</sup> = √16 = 4<br>• Jumlahnya = 9 + 4 = <strong>13</strong>.</p>"),

    Q("2-d", "bab-2", 7, "II.D Pangkat dan Akar", "Operasi Bilangan Berpangkat Negatif",
      "Berapakah nilai dari (2<sup>-1</sup> + 4<sup>-1</sup>) × 8?",
      null, ["4", "6", "8", "10", "12"], "b",
      "<p>Gunakan sifat a<sup>-1</sup> = 1/a:<br>(1/2 + 1/4) × 8 = 3/4 × 8 = <strong>6</strong>.</p>"),

    Q("2-d", "bab-2", 8, "II.D Pangkat dan Akar", "Rumus Cepat Selisih Dua Kuadrat di Dalam Akar",
      "Gunakan rumus aljabar a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b) untuk menghitung nilai dari √(13<sup>2</sup> - 12<sup>2</sup>)!",
      null, ["1", "5", "7", "25", "12"], "b",
      "<p>13<sup>2</sup> - 12<sup>2</sup> = (13 + 12)(13 - 12) = 25 × 1 = 25.<br>Maka √25 = <strong>5</strong>.</p>"),

    Q("2-d", "bab-2", 9, "II.D Pangkat dan Akar", "Perkalian Bentuk Akar Sekawan",
      "Berapakah hasil dari (√7 + √3)(√7 - √3)?",
      null, ["2", "4", "10", "21", "40"], "b",
      "<p>Gunakan identitas (a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup>:<br>(√7)<sup>2</sup> - (√3)<sup>2</sup> = 7 - 3 = <strong>4</strong>.</p>"),

    Q("2-d", "bab-2", 10, "II.D Pangkat dan Akar", "Evaluasi Akar di Dalam Akar (Nested Roots)",
      "Berapakah nilai dari √(21 + √16)?",
      null, ["4", "5", "6", "7", "9"], "b",
      "<p>Selesaikan akar yang paling dalam terlebih dahulu: √16 = 4.<br>Kemudian √(21 + 4) = √25 = <strong>5</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB E: SIFAT-SIFAT BILANGAN (10 SOAL UMUM: 2-e)
       ====================================================================== */
    Q("2-e", "bab-2", 1, "II.E Sifat Bilangan", "Penerapan KPK pada Jadwal Bersama",
      "Lampu A berkedip setiap 12 menit, Lampu B setiap 15 menit, dan Lampu C setiap 20 menit. Jika ketiga lampu berkedip bersamaan pada pukul 08:00, pada pukul berapa ketiganya akan berkedip bersamaan kembali?",
      null, ["08:30", "08:45", "09:00", "09:15", "09:30"], "c",
      "<p>Cari KPK(12, 15, 20) = 60 menit (1 jam).<br>Maka ketiganya berkedip bersamaan kembali pada pukul 08:00 + 1 jam = <strong>09:00</strong>.</p>"),

    Q("2-e", "bab-2", 2, "II.E Sifat Bilangan", "Menjumlahkan Bilangan Prima pada Rentang Tertentu",
      "Berapakah hasil penjumlahan dari seluruh bilangan prima yang terletak di antara 10 dan 20?",
      null, ["49", "58", "60", "62", "75"], "c",
      "<p>Bilangan prima di antara 10 dan 20 adalah 11, 13, 17, dan 19.<br>Jumlahnya = 11 + 13 + 17 + 19 = <strong>60</strong>.</p>"),

    Q("2-e", "bab-2", 3, "II.E Sifat Bilangan", "Penerapan FPB pada Pembagian Paket Sama Rata",
      "Seorang panitia memiliki 48 buku tulis dan 36 kotak pensil yang akan dibungkus ke dalam sebanyak mungkin paket hadiah dengan jumlah isi yang sama rata di setiap paket. Berapa jumlah paket MAKSIMUM yang dapat dibuat?",
      null, ["6 paket", "8 paket", "12 paket", "16 paket", "18 paket"], "c",
      "<p>Gunakan Faktor Persekutuan Terbesar: FPB(48, 36) = <strong>12 paket</strong> (masing-masing paket berisi 4 buku tulis dan 3 kotak pensil).</p>"),

    Q("2-e", "bab-2", 4, "II.E Sifat Bilangan", "Sifat Operasi Bilangan Ganjil dan Genap",
      "Jika diketahui p adalah bilangan ganjil dan q adalah bilangan genap, manakah ekspresi di bawah ini yang PASTI menghasilkan bilangan GANJIL?",
      null, ["p × q", "2p + q", "p + q", "p² + 1", "(p + 1) × q"], "c",
      "<p>Penjumlahan bilangan ganjil dengan bilangan genap (p + q) selalu menghasilkan bilangan <strong>ganjil</strong> (contoh: 3 + 4 = 7).</p>"),

    Q("2-e", "bab-2", 5, "II.E Sifat Bilangan", "Aturan Keterbagian oleh 3 dan 4",
      "Agar bilangan empat angka 523X habis dibagi 3 sekaligus habis dibagi 4, maka angka satuan X haruslah...",
      null, ["0", "2", "4", "6", "8"], "b",
      "<p>• Syarat habis dibagi 3: jumlah digit 5 + 2 + 3 + X = 10 + X harus kelipatan 3, sehingga X ∈ {2, 5, 8}.<br>• Syarat habis dibagi 4: dua digit terakhir (3X) harus habis dibagi 4. Dari {32, 35, 38}, yang habis dibagi 4 adalah 32, sehingga X = <strong>2</strong>.</p>"),

    Q("2-e", "bab-2", 6, "II.E Sifat Bilangan", "Menentukan Banyaknya Bilangan Kelipatan",
      "Berapa banyak bilangan bulat positif antara 1 sampai 100 yang habis dibagi 3 TETAPI tidak habis dibagi 2?",
      null, ["15 bilangan", "16 bilangan", "17 bilangan", "33 bilangan", "50 bilangan"], "c",
      "<p>Terdapat ⌊ 100 ÷ 3 ⌋ = 33 bilangan kelipatan 3 (mulai dari 3 × 1 hingga 3 × 33). Agar tidak habis dibagi 2 (berarti kelipatan 3 yang ganjil), pengalinya harus ganjil (1, 3, 5, ..., 33), yang banyaknya adalah (33 + 1)/2 = <strong>17 bilangan</strong>.</p>"),

    Q("2-e", "bab-2", 7, "II.E Sifat Bilangan", "Menghitung Banyak Faktor Pembagi Positif",
      "Berapa banyak faktor pembagi bulat positif yang dimiliki oleh bilangan 24?",
      null, ["4 faktor", "6 faktor", "8 faktor", "10 faktor", "12 faktor"], "c",
      "<p>Faktorisasi prima dari 24 = 2<sup>3</sup> × 3<sup>1</sup>. Rumus banyak faktor positif adalah (3 + 1)(1 + 1) = 4 × 2 = <strong>8 faktor</strong> (yaitu 1, 2, 3, 4, 6, 8, 12, 24).</p>"),

    Q("2-e", "bab-2", 8, "II.E Sifat Bilangan", "Rumus Hubungan Dua Bilangan dengan FPB dan KPK",
      "Diketahui FPB dari dua bilangan bulat positif adalah 6, sedangkan KPK-nya adalah 72. Jika salah satu bilangan tersebut adalah 18, berapakah bilangan yang lainnya?",
      null, ["12", "24", "30", "36", "48"], "b",
      "<p>Gunakan rumus A × B = FPB × KPK:<br>18 × B = 6 × 72 = 432 ⇒ B = 432 ÷ 18 = <strong>24</strong>.</p>"),

    Q("2-e", "bab-2", 9, "II.E Sifat Bilangan", "Konsep Dasar Bilangan Prima",
      "Manakah pernyataan tentang bilangan prima berikut ini yang BENAR?",
      null, ["Semua bilangan prima adalah bilangan ganjil", "Terdapat tepat satu bilangan prima yang genap, yaitu 2", "Angka 1 termasuk bilangan prima terkecil", "Hasil kali dua bilangan prima selalu bilangan prima", "Angka 51 adalah bilangan prima"], "b",
      "<p>Angka <strong>2</strong> adalah bilangan prima terkecil sekaligus satu-satunya bilangan prima yang genap.</p>"),

    Q("2-e", "bab-2", 10, "II.E Sifat Bilangan", "Analisis Sisa Pembagian Bilangan",
      "Jika suatu bilangan bulat positif dibagi 6 menghasilkan sisa 5, maka apabila bilangan tersebut dibagi 3 akan menghasilkan sisa...",
      null, ["0", "1", "2", "3", "4"], "c",
      "<p>Misalkan bilangan tersebut adalah N = 6k + 5. Karena 6k + 5 = 3(2k + 1) + 2, maka ketika dibagi 3 pasti bersisa <strong>2</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB F: BARISAN DAN DERET SEDERHANA (10 SOAL UMUM: 2-f)
       ====================================================================== */
    Q("2-f", "bab-2", 1, "II.F Barisan dan Deret", "Rumus Jumlah n Suku Pertama Deret Aritmatika",
      "Seorang atlet berlatih lari setiap minggu: minggu ke-1 menempuh 6 km, minggu ke-2 menempuh 10 km, minggu ke-3 menempuh 14 km, dan seterusnya bertambah tetap setiap minggu. Berapa TOTAL jarak yang ditempuh selama 8 minggu pertama?",
      null, ["140 km", "152 km", "160 km", "168 km", "176 km"], "c",
      "<p>Diketahui a = 6, beda b = 4, dan n = 8.<br>• Suku ke-8: U<sub>8</sub> = a + 7b = 6 + 28 = 34<br>• Jumlah 8 suku pertama: S<sub>8</sub> = 8/2 × (6 + 34) = 4 × 40 = <strong>160 km</strong>.</p>"),

    Q("2-f", "bab-2", 2, "II.F Barisan dan Deret", "Rumus Suku ke-n Barisan Aritmatika",
      "Diketahui barisan aritmatika: 5, 12, 19, 26, ... Berapakah nilai suku ke-15 (U<sub>15</sub>)?",
      null, ["96", "103", "110", "117", "89"], "b",
      "<p>Diketahui a = 5 dan beda b = 12 - 5 = 7.<br>Rumus U<sub>n</sub> = a + (n - 1)b ⇒ U<sub>15</sub> = 5 + 14(7) = 5 + 98 = <strong>103</strong>.</p>"),

    Q("2-f", "bab-2", 3, "II.F Barisan dan Deret", "Rumus Suku ke-n Barisan Geometri",
      "Diketahui barisan geometri: 3, 6, 12, 24, ... Berapakah nilai suku ke-7 (U<sub>7</sub>)?",
      null, ["96", "144", "192", "384", "128"], "c",
      "<p>Diketahui a = 3 dan rasio r = 6/3 = 2.<br>Rumus U<sub>n</sub> = a × r<sup>n-1</sup> ⇒ U<sub>7</sub> = 3 × 2<sup>6</sup> = 3 × 64 = <strong>192</strong>.</p>"),

    Q("2-f", "bab-2", 4, "II.F Barisan dan Deret", "Rumus Jumlah n Suku Pertama Deret Geometri",
      "Hitunglah jumlah 5 suku pertama (S<sub>5</sub>) dari deret geometri: 2 + 6 + 18 + 54 + ...",
      null, ["162", "240", "242", "324", "484"], "c",
      "<p>Diketahui a = 2 dan r = 3.<br>S<sub>5</sub> = (a(r<sup>5</sup> - 1))/(r - 1) = (2(243 - 1))/(3 - 1) = <strong>242</strong> (atau 2 + 6 + 18 + 54 + 162 = 242).</p>"),

    Q("2-f", "bab-2", 5, "II.F Barisan dan Deret", "Mencari Suku Pertama dan Beda dari Dua Suku",
      "Dalam suatu barisan aritmatika, diketahui suku ke-3 adalah 14 dan suku ke-7 adalah 30. Berapakah nilai suku pertama (a) dan beda (b) barisan tersebut?",
      null, ["a = 6 dan b = 4", "a = 4 dan b = 5", "a = 8 dan b = 3", "a = 5 dan b = 4", "a = 2 dan b = 6"], "a",
      "<p>Gunakan selisih suku: U<sub>7</sub> - U<sub>3</sub> = (7 - 3)b ⇒ 4b = 30 - 14 = 16 ⇒ b = 4.<br>Substitusikan ke U<sub>3</sub>: a + 2(4) = 14 ⇒ a = 14 - 8 = 6. Jadi <strong>a = 6 dan b = 4</strong>.</p>"),

    Q("2-f", "bab-2", 6, "II.F Barisan dan Deret", "Jumlah Deret Bilangan Genap Berurutan",
      "Berapakah hasil penjumlahan 10 bilangan genap positif pertama (2 + 4 + 6 + ... + 20)?",
      null, ["90", "100", "110", "120", "210"], "c",
      "<p>Rumus jumlah n bilangan genap positif pertama adalah n(n + 1). Untuk n = 10: 10 × 11 = <strong>110</strong>.</p>"),

    Q("2-f", "bab-2", 7, "II.F Barisan dan Deret", "Aplikasi Barisan Geometri pada Pembelahan Bakteri",
      "Suatu koloni bakteri membelah diri menjadi 2 kali lipat setiap 10 menit. Jika mula-mula (menit ke-0) terdapat 5 bakteri, berapa jumlah bakteri pada menit ke-40?",
      null, ["20", "40", "80", "160", "100"], "c",
      "<p>Dalam 40 menit terjadi 40 ÷ 10 = 4 kali pembelahan.<br>Jumlah akhir = 5 × 2<sup>4</sup> = 5 × 16 = <strong>80 bakteri</strong>.</p>"),

    Q("2-f", "bab-2", 8, "II.F Barisan dan Deret", "Barisan Aritmatika Menurun",
      "Diketahui barisan aritmatika menurun: 90, 84, 78, 72, ... Berapakah nilai suku ke-11 (U<sub>11</sub>)?",
      null, ["24", "30", "36", "42", "18"], "b",
      "<p>Diketahui a = 90 dan beda b = -6.<br>U<sub>11</sub> = a + 10b = 90 + 10(-6) = 90 - 60 = <strong>30</strong>.</p>"),

    Q("2-f", "bab-2", 9, "II.F Barisan dan Deret", "Suku Tengah Barisan Aritmatika",
      "Jumlah 5 bilangan bulat berurutan adalah 85. Berapakah bilangan terbesar di antara kelima bilangan tersebut?",
      null, ["17", "18", "19", "20", "21"], "c",
      "<p>Bilangan tengah (suku ke-3) sama dengan rata-ratanya: 85 ÷ 5 = 17.<br>Maka kelima bilangan berurutan tersebut adalah 15, 16, 17, 18, 19. Bilangan terbesarnya adalah <strong>19</strong>.</p>"),

    Q("2-f", "bab-2", 10, "II.F Barisan dan Deret", "Rumus Gauss Jumlah n Bilangan Asli Pertama",
      "Berapakah hasil penjumlahan bilangan bulat berurutan dari 1 sampai 50 (1 + 2 + 3 + ... + 50)?",
      null, ["1.225", "1.250", "1.275", "1.300", "2.550"], "c",
      "<p>Gunakan rumus S<sub>n</sub> = (n(n + 1))/2:<br>S<sub>50</sub> = (50 × 51)/2 = 25 × 51 = <strong>1.275</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB G: POLA BILANGAN (10 SOAL UMUM: 2-g)
       ====================================================================== */
    Q("2-g", "bab-2", 1, "II.G Pola Bilangan", "Pola Bilangan Selisih Bertingkat",
      "Perhatikan barisan bilangan berikut: 3, 7, 13, 21, 31, ... Berapakah bilangan berikutnya?",
      null, ["39", "41", "43", "45", "47"], "c",
      "<p>Perhatikan selisih antar sukunya: +4, +6, +8, +10. Selisih berikutnya bertambah 2 yaitu +12, sehingga 31 + 12 = <strong>43</strong>.</p>"),

    Q("2-g", "bab-2", 2, "II.G Pola Bilangan", "Pola Barisan Fibonacci",
      "Diketahui barisan Fibonacci: 1, 1, 2, 3, 5, 8, 13, x, y. Berapakah nilai x dan y berturut-turut?",
      null, ["20 dan 33", "21 dan 34", "19 dan 32", "21 dan 35", "18 dan 31"], "b",
      "<p>Pada pola Fibonacci, setiap suku adalah jumlah dari dua suku sebelumnya:<br>• x = 8 + 13 = 21<br>• y = 13 + 21 = 34.</p>"),

    Q("2-g", "bab-2", 3, "II.G Pola Bilangan", "Pola Larik Ganda (Lompat Satu Suku)",
      "Tentukan bilangan berikutnya dari pola: 10, 5, 12, 10, 14, 20, 16, ...",
      null, ["18", "25", "30", "40", "32"], "d",
      "<p>• Suku urutan ganjil (U<sub>1</sub>, U<sub>3</sub>, U<sub>5</sub>, U<sub>7</sub>): 10, 12, 14, 16 (bertambah +2).<br>• Suku urutan genap (U<sub>2</sub>, U<sub>4</sub>, U<sub>6</sub>, U<sub>8</sub>): 5, 10, 20, ... (dikalikan × 2).<br>Maka suku ke-8 adalah 20 × 2 = <strong>40</strong>.</p>"),

    Q("2-g", "bab-2", 4, "II.G Pola Bilangan", "Pola Bilangan Kuadrat",
      "Lanjutkan pola bilangan berikut: 4, 9, 16, 25, 36, ...",
      null, ["42", "45", "48", "49", "64"], "d",
      "<p>Barisan tersebut adalah bilangan kuadrat berurutan mulai dari 2<sup>2</sup>, 3<sup>2</sup>, 4<sup>2</sup>, 5<sup>2</sup>, 6<sup>2</sup>. Maka suku berikutnya adalah 7<sup>2</sup> = <strong>49</strong>.</p>"),

    Q("2-g", "bab-2", 5, "II.G Pola Bilangan", "Pola Operasi Bergantian (×2 lalu -1)",
      "Perhatikan pola bilangan: 3, 6, 5, 10, 9, 18, 17, ... Bilangan selanjutnya adalah...",
      null, ["16", "32", "34", "35", "36"], "c",
      "<p>Aturan polanya bergantian × 2 lalu - 1:<br>3  --[× 2]-->  6  --[-1]-->  5  --[× 2]-->  10  --[-1]-->  9  --[× 2]-->  18  --[-1]-->  17  --[× 2]-->  <strong>34</strong>.</p>"),

    Q("2-g", "bab-2", 6, "II.G Pola Bilangan", "Pola Menggandakan Lalu Menambah Satu",
      "Diketahui sebuah pola dimulai dari angka 1, di mana setiap suku berikutnya diperoleh dengan aturan (2 × suku sebelumnya) + 1. Empat suku setelah angka 1 berturut-turut adalah...",
      null, ["2, 4, 8, 16", "3, 7, 15, 31", "3, 5, 7, 9", "2, 5, 11, 23", "1, 3, 7, 15"], "b",
      "<p>• Suku 1: 2(1) + 1 = 3<br>• Suku 2: 2(3) + 1 = 7<br>• Suku 3: 2(7) + 1 = 15<br>• Suku 4: 2(15) + 1 = 31.<br>Maka deretnya adalah <strong>3, 7, 15, 31</strong>.</p>"),

    Q("2-g", "bab-2", 7, "II.G Pola Bilangan", "Pola Bilangan Kubik (Pangkat Tiga)",
      "Temukan bilangan yang tepat untuk mengisi titik-titik pada pola: 1, 8, 27, ..., 125",
      null, ["36", "49", "64", "81", "100"], "c",
      "<p>Polanya adalah pangkat tiga (n<sup>3</sup>): 1<sup>3</sup>=1,\; 2<sup>3</sup>=8,\; 3<sup>3</sup>=27,\; 4<sup>3</sup>=<strong>64</strong>,\; 5<sup>3</sup>=125.</p>"),

    Q("2-g", "bab-2", 8, "II.G Pola Bilangan", "Pola Urutan Huruf Alfabet",
      "Jika diketahui pola huruf adalah B, E, H, K, ... maka huruf berikutnya adalah...",
      null, ["M", "N", "O", "L", "P"], "b",
      "<p>Ubah ke nomor urut alfabet: B(2), E(5), H(8), K(11). Selisihnya selalu +3, sehingga huruf berikutnya adalah urutan ke-14 yaitu <strong>N</strong>.</p>"),

    Q("2-g", "bab-2", 9, "II.G Pola Bilangan", "Menemukan Angka yang Merusak Pola",
      "Dalam barisan 2, 5, 11, 23, 45, 95, terdapat satu bilangan yang tidak sesuai dengan pola. Bilangan manakah itu dan seharusnya bernilai berapa?",
      null, ["11 seharusnya 10", "23 seharusnya 22", "45 seharusnya 47", "95 seharusnya 90", "5 seharusnya 6"], "c",
      "<p>Polanya memiliki selisih yang berlipat dua (+3, +6, +12, +24, +48): 2  --[+3]-->  5  --[+6]-->  11  --[+12]-->  23  --[+24]-->  <strong>47</strong>  --[+48]-->  95. Jadi angka <strong>45 seharusnya 47</strong>.</p>"),

    Q("2-g", "bab-2", 10, "II.G Pola Bilangan", "Rumus Pola Bilangan Segitiga",
      "Banyaknya noktah (titik) pada pola segitiga mengikuti barisan 1, 3, 6, 10, 15, ... Berapakah banyaknya noktah pada pola segitiga ke-8?",
      null, ["28", "32", "36", "40", "45"], "c",
      "<p>Rumus suku ke-n pola segitiga adalah U<sub>n</sub> = (n(n + 1))/2.<br>Untuk n = 8: U<sub>8</sub> = (8 × 9)/2 = <strong>36</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB H: PENYUSUNAN MODEL MATEMATIKA (10 SOAL UMUM: 2-h)
       ====================================================================== */
    Q("2-h", "bab-2", 1, "II.H Model Matematika", "Sistem Persamaan Dua Bilangan",
      "Jumlah dua bilangan bulat x dan y adalah 38. Jika bilangan pertama dikalikan 2 lalu dikurangi bilangan kedua hasilnya 19, berapakah hasil kali x × y?",
      null, ["345", "352", "357", "361", "368"], "d",
      "<p>Model matematika: x + y = 38 dan 2x - y = 19.<br>Jumlahkan kedua persamaan: 3x = 57 ⇒ x = 19, sehingga y = 38 - 19 = 19.<br>Hasil kali x × y = 19 × 19 = <strong>361</strong>.</p>"),

    Q("2-h", "bab-2", 2, "II.H Model Matematika", "SPLDV Harga Barang",
      "Harga 3 tiket dewasa dan 2 tiket anak-anak adalah Rp280.000, sedangkan harga 1 tiket dewasa dan 2 tiket anak-anak adalah Rp160.000. Berapakah harga 1 tiket dewasa?",
      null, ["Rp40.000", "Rp50.000", "Rp60.000", "Rp70.000", "Rp80.000"], "c",
      "<p>Misalkan tiket dewasa = D dan anak-anak = A.<br>Kurangkan persamaan (3D + 2A = 280.000) dengan (1D + 2A = 160.000):<br>2D = 120.000 ⇒ D = <strong>Rp60.000</strong>.</p>"),

    Q("2-h", "bab-2", 3, "II.H Model Matematika", "Model Matematika Perbandingan Usia",
      "Saat ini usia Andi 3 kali usia Bima. Empat tahun yang akan datang, jumlah usia mereka adalah 40 tahun. Berapakah usia Andi saat ini?",
      null, ["18 tahun", "21 tahun", "24 tahun", "27 tahun", "30 tahun"], "c",
      "<p>Misalkan usia saat ini: A = 3B.<br>Empat tahun yang akan datang: (A + 4) + (B + 4) = 40 ⇒ 3B + B + 8 = 40 ⇒ 4B = 32 ⇒ B = 8 tahun.<br>Maka usia Andi saat ini = 3 × 8 = <strong>24 tahun</strong>.</p>"),

    Q("2-h", "bab-2", 4, "II.H Model Matematika", "Model Tiga Bilangan Genap Berurutan",
      "Jumlah tiga bilangan genap berurutan adalah 78. Berapakah bilangan terkecil di antara ketiga bilangan tersebut?",
      null, ["22", "24", "26", "28", "30"], "b",
      "<p>Modelkan ketiga bilangan genap berurutan sebagai n + (n + 2) + (n + 4) = 78 ⇒ 3n + 6 = 78 ⇒ 3n = 72 ⇒ n = <strong>24</strong>.</p>"),

    Q("2-h", "bab-2", 5, "II.H Model Matematika", "Model Keliling Persegi Panjang",
      "Sebuah kebun berbentuk persegi panjang memiliki ukuran panjang 6 meter lebihnya dari lebarnya (p = l + 6). Jika keliling kebun tersebut adalah 68 meter, berapakah lebar kebun tersebut?",
      null, ["12 meter", "14 meter", "16 meter", "18 meter", "20 meter"], "b",
      "<p>Rumus keliling: 2(p + l) = 68 ⇒ p + l = 34.<br>Substitusikan p = l + 6: (l + 6) + l = 34 ⇒ 2l = 28 ⇒ l = <strong>14 meter</strong>.</p>"),

    Q("2-h", "bab-2", 6, "II.H Model Matematika", "Menyusun Rumus Fungsi Biaya Total",
      "Sebuah penyewaan gedung menetapkan biaya administrasi tetap Rp50.000 ditambah biaya sewa Rp12.000 untuk setiap jam pemakaian (j), dikurangi potongan voucher (d). Model matematika untuk total biaya (T) adalah...",
      null, ["T = (50.000 + 12.000) × j - d", "T = 50.000 + (12.000 × j) - d", "T = 50.000 × j + 12.000 - d", "T = 50.000 + 12.000 × (j - d)", "T = 50.000 - 12.000 × j + d"], "b",
      "<p>Biaya per jam dikalikan dengan jumlah jam (12.000 × j), ditambah biaya tetap Rp50.000, lalu dikurangi diskon d: <strong>T = 50.000 + (12.000 × j) - d</strong>.</p>"),

    Q("2-h", "bab-2", 7, "II.H Model Matematika", "Model Skor Benar dan Salah pada Ujian",
      "Dalam suatu kompetisi berisi 20 soal, jawaban benar diberi nilai +4, salah diberi nilai -1, dan tidak dijawab 0. Jika Rina menjawab 18 soal dan memperoleh total nilai 57, berapa banyak soal yang dijawab BENAR oleh Rina?",
      null, ["13 soal", "14 soal", "15 soal", "16 soal", "17 soal"], "c",
      "<p>Misalkan banyak jawaban benar = B, maka jawaban salah = 18 - B.<br>Model persamaan: 4B - 1(18 - B) = 57 ⇒ 5B - 18 = 57 ⇒ 5B = 75 ⇒ B = <strong>15 soal</strong>.</p>"),

    Q("2-h", "bab-2", 8, "II.H Model Matematika", "Model Kapasitas Dua Jenis Kendaraan",
      "Sebuah rombongan wisata menyewa 8 unit kendaraan yang terdiri dari mobil kecil (berkapasitas 4 penumpang) dan minibus (berkapasitas 10 penumpang). Jika seluruh kursi terisi penuh oleh 56 penumpang, berapa unit minibus yang disewa?",
      null, ["2 unit", "3 unit", "4 unit", "5 unit", "6 unit"], "c",
      "<p>Misalkan mobil kecil = K dan minibus = M.<br>K + M = 8 ⇒ 4K + 4M = 32.<br>Kurangkan dari 4K + 10M = 56: diperoleh 6M = 24 ⇒ M = <strong>4 unit</strong>.</p>"),

    Q("2-h", "bab-2", 9, "II.H Model Matematika", "Model Pertidaksamaan Anggaran Maksimum",
      "Panitia memiliki anggaran maksimal Rp1.000.000 untuk mencetak sertifikat. Biaya desain awal adalah Rp150.000 dan biaya cetak per lembar adalah Rp25.000. Berapa jumlah MAKSIMAL lembar sertifikat (m) yang dapat dicetak?",
      null, ["30 lembar", "32 lembar", "34 lembar", "36 lembar", "40 lembar"], "c",
      "<p>Pertidaksamaan: 150.000 + 25.000m ≤ 1.000.000 ⇒ 25.000m ≤ 850.000 ⇒ m ≤ <strong>34 lembar</strong>.</p>"),

    Q("2-h", "bab-2", 10, "II.H Model Matematika", "Perhitungan Gaji Bersih dengan Model Aljabar",
      "Seorang karyawan menerima gaji pokok Rp4.000.000, uang lembur Rp50.000 per jam selama 6 jam, dan dikenakan potongan pajak Rp200.000. Berapakah gaji bersih yang diterimanya?",
      null, ["Rp4.000.000", "Rp4.100.000", "Rp4.200.000", "Rp4.300.000", "Rp4.500.000"], "b",
      "<p>Gaji Bersih = 4.000.000 + (50.000 × 6) - 200.000 = 4.000.000 + 300.000 - 200.000 = <strong>Rp4.100.000</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB I: HIMPUNAN (10 SOAL UMUM: 2-i)
       ====================================================================== */
    Q("2-i", "bab-2", 1, "II.I Himpunan", "Rumus Irisan Dua Himpunan (Diagram Venn)",
      "Dari 50 siswa di suatu kelas, diketahui 32 orang gemar Matematika, 28 orang gemar Fisika, dan 6 orang tidak gemar keduanya. Berapa banyak siswa yang gemar KEDUANYA sekaligus?",
      null, ["12 orang", "14 orang", "16 orang", "18 orang", "20 orang"], "c",
      "<p>Gunakan rumus x = (n(A) + n(B) + n(Tidak Keduanya)) - n(S):<br>x = (32 + 28 + 6) - 50 = 66 - 50 = <strong>16 orang</strong>.</p>"),

    Q("2-i", "bab-2", 2, "II.I Himpunan", "Operasi Selisih Himpunan (A - B)",
      "Diketahui himpunan A = {1, 2, 3, 4, 5, 6} dan B = {2, 4, 6, 8, 10}. Maka himpunan selisih A - B adalah...",
      null, ["{2, 4, 6}", "{1, 3, 5}", "{8, 10}", "{1, 2, 3, 4, 5, 6, 8, 10}", "{1, 3, 5, 8, 10}"], "b",
      "<p>A - B adalah seluruh anggota himpunan A yang <strong>tidak</strong> menjadi anggota B, yaitu <strong>{1, 3, 5}</strong>.</p>"),

    Q("2-i", "bab-2", 3, "II.I Himpunan", "Kardinalitas Gabungan Dua Himpunan (P ∪ Q)",
      "Jika diketahui himpunan P = {a, b, c, d} dan Q = {c, d, e, f}, berapakah banyak anggota (kardinalitas) dari gabungan P ∪ Q?",
      null, ["4", "6", "8", "2", "5"], "b",
      "<p>P ∪ Q = {a, b, c, d, e, f} (anggota yang sama yaitu c dan d hanya ditulis satu kali), sehingga banyak anggotanya adalah <strong>6</strong>.</p>"),

    Q("2-i", "bab-2", 4, "II.I Himpunan", "Rumus Banyaknya Himpunan Bagian (Subset)",
      "Diketahui himpunan K = {p, q, r, s} memiliki 4 anggota. Berapa banyak seluruh himpunan bagian (subset) yang dapat dibentuk dari himpunan K?",
      null, ["4", "8", "12", "16", "32"], "d",
      "<p>Rumus banyaknya himpunan bagian dari himpunan beranggotakan n elemen adalah 2^n. Untuk n = 4: 2<sup>4</sup> = <strong>16</strong>.</p>"),

    Q("2-i", "bab-2", 5, "II.I Himpunan", "Menghitung Anggota yang Hanya Memilih Satu Kelompok",
      "Dalam survei terhadap 40 warga: 25 orang berlangganan koran A, 20 orang berlangganan koran B, dan 10 orang berlangganan keduanya. Berapa banyak warga yang HANYA berlangganan koran A saja?",
      null, ["10 orang", "15 orang", "20 orang", "25 orang", "5 orang"], "b",
      "<p>Rumus memilih A saja: n(A saja) = n(A) - n(A ∩ B) = 25 - 10 = <strong>15 orang</strong>.</p>"),

    Q("2-i", "bab-2", 6, "II.I Himpunan", "Komplemen Suatu Himpunan (A<sup>c</sup>)",
      "Diketahui himpunan semesta S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} dan A adalah himpunan bilangan prima di dalam S. Maka komplemen dari A (A^c) adalah...",
      null, ["{2, 3, 5, 7}", "{1, 4, 6, 8, 9, 10}", "{4, 6, 8, 9, 10}", "{1, 2, 4, 6, 8, 10}", "{1, 3, 5, 7, 9}"], "b",
      "<p>Himpunan bilangan prima di S adalah A = {2, 3, 5, 7}. Maka komplemennya (anggota S selain A) adalah <strong>{1, 4, 6, 8, 9, 10}</strong>.</p>"),

    Q("2-i", "bab-2", 7, "II.I Himpunan", "Hubungan Operasi Himpunan dengan Kata Hubung Logika",
      "Dalam teori himpunan dan logika matematika, operasi irisan dua himpunan (A ∩ B) bersesuaian dengan kata hubung logika...",
      null, ["ATAU (Disjungsi)", "DAN (Konjungsi)", "TIDAK (Negasi)", "JIKA MAKA (Implikasi)", "SAMA DENGAN"], "b",
      "<p>Definisi irisan adalah A ∩ B = {x | x ∈ A  DAN  x ∈ B}, sehingga bersesuaian langsung dengan kata hubung <strong>DAN (Konjungsi)</strong>.</p>"),

    Q("2-i", "bab-2", 8, "II.I Himpunan", "Mencari Jumlah yang Tidak Lulus Keduanya",
      "Dari 60 peserta seleksi: 35 orang lulus ujian Tulis, 30 orang lulus ujian Praktik, dan 15 orang lulus keduanya. Berapa banyak peserta yang TIDAK lulus keduanya?",
      null, ["5 orang", "10 orang", "15 orang", "20 orang", "25 orang"], "b",
      "<p>Banyak peserta yang lulus minimal satu ujian = n(A ∪ B) = 35 + 30 - 15 = 50 orang.<br>Maka yang tidak lulus keduanya = 60 - 50 = <strong>10 orang</strong>.</p>"),

    Q("2-i", "bab-2", 9, "II.I Himpunan", "Gabungan Dua Himpunan Saling Lepas (Disjoint)",
      "Jika himpunan A dan himpunan B adalah dua himpunan yang saling lepas (A ∩ B = ∅), dengan n(A) = 12 dan n(B) = 15, maka berapakah nilai n(A ∪ B)?",
      null, ["3", "12", "15", "27", "180"], "d",
      "<p>Karena saling lepas (n(A ∩ B) = 0), maka n(A ∪ B) = n(A) + n(B) = 12 + 15 = <strong>27</strong>.</p>"),

    Q("2-i", "bab-2", 10, "II.I Himpunan", "Menentukan Irisan Dua Himpunan Bilangan",
      "Diketahui himpunan P = {1, 3, 5, 7, 9} dan Q = {2, 3, 5, 7, 11}. Himpunan irisan P ∩ Q beserta jumlah anggotanya adalah...",
      null, ["{3, 5} — 2 anggota", "{3, 5, 7} — 3 anggota", "{1, 3, 5, 7} — 4 anggota", "{2, 9, 11} — 3 anggota", "Himpunan kosong — 0 anggota"], "b",
      "<p>Anggota yang sama-sama terdapat di P dan Q adalah <strong>{3, 5, 7}</strong> yang terdiri dari <strong>3 anggota</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB J: MATEMATIKA DISKRIT DASAR (10 SOAL UMUM: 2-j)
       ====================================================================== */
    Q("2-j", "bab-2", 1, "II.J Matematika Diskrit", "Rumus Kombinasi Pemilihan Soal dengan Syarat Wajib",
      "Dalam sebuah ujian tersedia 8 soal. Peserta wajib mengerjakan 5 soal, dengan syarat soal nomor 1 dan nomor 2 WAJIB dikerjakan. Berapa banyak pilihan kombinasi soal yang dapat diambil peserta?",
      null, ["15 cara", "20 cara", "28 cara", "35 cara", "56 cara"], "b",
      "<p>Karena 2 soal sudah wajib dipilih, peserta tinggal memilih 5 - 2 = 3 soal lagi dari sisa 8 - 2 = 6 soal:<br>C(6, 3) = 6!/(3! × 3!) = (6 × 5 × 4)/(3 × 2 × 1) = <strong>20 cara</strong>.</p>"),

    Q("2-j", "bab-2", 2, "II.J Matematika Diskrit", "Rumus Permutasi Pemilihan Jabatan Berbeda",
      "Dari 6 orang calon pengurus organisasi, akan dipilih seorang Ketua, seorang Sekretaris, dan seorang Bendahara (tidak boleh merangkap jabatan). Berapa banyak susunan pengurus yang mungkin terbentuk?",
      null, ["20", "60", "120", "216", "720"], "c",
      "<p>Karena posisi jabatan berbeda (urutan diperhatikan), gunakan rumus Permutasi:<br>P(6, 3) = 6 × 5 × 4 = <strong>120 susunan</strong>.</p>"),

    Q("2-j", "bab-2", 3, "II.J Matematika Diskrit", "Kaidah Perkalian (Penyusunan Kode Tanpa Pengulangan)",
      "Berapa banyak bilangan 3 angka berbeda (tanpa pengulangan angka) yang dapat disusun dari angka-angka {1, 2, 3, 4, 5}?",
      null, ["15", "27", "60", "125", "10"], "c",
      "<p>Gunakan kaidah pengisian tempat:<br>• Ratusan: 5 pilihan<br>• Puluhan: sisa 4 pilihan<br>• Satuan: sisa 3 pilihan<br>Total = 5 × 4 × 3 = <strong>60 bilangan</strong>.</p>"),

    Q("2-j", "bab-2", 4, "II.J Matematika Diskrit", "Operasi Aritmatika Modulo (Sisa Pembagian)",
      "Dalam matematika diskrit, a  mod  b menyatakan sisa pembagian a oleh b. Berapakah nilai dari (29  mod  6) + (14  mod  7)?",
      null, ["4", "5", "6", "7", "8"], "b",
      "<p>• 29 ÷ 6 = 4 sisa 5, sehingga 29  mod  6 = 5.<br>• 14 ÷ 7 = 2 sisa 0, sehingga 14  mod  7 = 0.<br>• Jumlahnya = 5 + 0 = <strong>5</strong>.</p>"),

    Q("2-j", "bab-2", 5, "II.J Matematika Diskrit", "Banyak Garis Hubung Langsung (Graf Lengkap)",
      "Terdapat 6 gedung yang akan dihubungkan satu sama lain dengan jalur jembatan penyeberangan langsung antar setiap pasang gedung. Berapa total jalur jembatan yang dibutuhkan?",
      null, ["12 jalur", "15 jalur", "18 jalur", "30 jalur", "36 jalur"], "b",
      "<p>Gunakan rumus kombinasi 2 titik dari n titik: C(6, 2) = (6 × 5)/2 = <strong>15 jalur</strong>.</p>"),

    Q("2-j", "bab-2", 6, "II.J Matematika Diskrit", "Prinsip Sarang Merpati (Pigeonhole Principle)",
      "Di dalam sebuah laci terdapat kaos kaki dengan 4 warna berbeda. Berapa jumlah MINIMUM kaos kaki yang harus diambil secara acak (tanpa melihat) agar PASTI diperoleh minimal sepasang (2 buah) kaos kaki yang berwarna sama?",
      null, ["2 buah", "4 buah", "5 buah", "6 buah", "8 buah"], "c",
      "<p>Dengan 4 warna berbeda, skenario terburuk pada 4 pengambilan pertama adalah keempatnya berbeda warna semua. Maka pengambilan ke-<strong>5</strong> pasti memiliki warna yang sama dengan salah satu kaos kaki yang sudah terambil.</p>"),

    Q("2-j", "bab-2", 7, "II.J Matematika Diskrit", "Aritmatika Modulo pada Siklus Hari",
      "Jika hari ini adalah hari Selasa, maka 100 hari lagi adalah hari...",
      null, ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"], "d",
      "<p>Siklus hari berulang setiap 7 hari. Cari sisa bagi 100 ÷ 7: karena 100 = (14 × 7) + 2, sisanya adalah 2.<br>Maka 2 hari setelah hari Selasa adalah hari <strong>Kamis</strong>.</p>"),

    Q("2-j", "bab-2", 8, "II.J Matematika Diskrit", "Kombinasi Pembentukan Tim Campuran",
      "Dari 5 kandidat putra dan 4 kandidat putri, akan dipilih sebuah tim yang terdiri dari 2 putra dan 1 putri. Berapa banyak cara memilih anggota tim tersebut?",
      null, ["14 cara", "20 cara", "40 cara", "60 cara", "80 cara"], "c",
      "<p>Pilih 2 putra dari 5 DAN 1 putri dari 4:<br>C(5, 2) × C(4, 1) = ((5 × 4)/2) × 4 = 10 × 4 = <strong>40 cara</strong>.</p>"),

    Q("2-j", "bab-2", 9, "II.J Matematika Diskrit", "Permutasi Melingkar (Siklis)",
      "Enam orang peserta rapat akan duduk mengelilingi sebuah meja bundar. Berapa banyak susunan posisi duduk melingkar yang berbeda?",
      null, ["24 susunan", "36 susunan", "60 susunan", "120 susunan", "720 susunan"], "d",
      "<p>Rumus permutasi siklis (melingkar) untuk n objek adalah (n - 1)!.<br>Untuk n = 6: (6 - 1)! = 5! = 5 × 4 × 3 × 2 × 1 = <strong>120 susunan</strong>.</p>"),

    Q("2-j", "bab-2", 10, "II.J Matematika Diskrit", "Operasi Pembagian Faktorial",
      "Berapakah hasil dari 7!/(5! × 2!)?",
      null, ["14", "21", "35", "42", "70"], "b",
      "<p>Uraikan 7! = 7 × 6 × 5!:<br>(7 × 6 × 5!)/(5! × (2 × 1)) = 42/2 = <strong>21</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB K: ALJABAR LOGIKA SEDERHANA (10 SOAL UMUM: 2-k)
       ====================================================================== */
    Q("2-k", "bab-2", 1, "II.K Aljabar Logika", "Evaluasi P, Q, R, S, T (Soal Wajib Default)",
      "Agar pernyataan aljabar logika berikut bernilai <strong>true</strong>, nilai P, Q, R, S, dan T harus?",
      { lang: "pseudo", label: "ALJABAR LOGIKA", text: "((P and Q) or (notR and S) and (notT or (R and Q)))" },
      [
        "P=True, Q=False, R=True, S=False, T=True",
        "P=False, Q=True, R=False, S=True, T=False",
        "P=False, Q=True, R=False, S=True, T=True",
        "P=False, Q=False, R=True, S=True, T=True",
        "Semua salah"
      ], "b",
      `<p>Saat <code>P = False, Q = True</code>, maka <code>(P and Q) = False</code>. Agar keseluruhan bernilai <code>True</code>, bagian <code>(notR and S) and (notT or (R and Q))</code> wajib <code>True</code>:</p>
       <ul>
         <li><code>(notR and S) = True</code> mengharuskan <strong><code>R = False</code></strong> dan <strong><code>S = True</code></strong>.</li>
         <li><code>(notT or (R and Q))</code> menjadi <code>(notT or False)</code>, sehingga mengharuskan <code>notT = True</code> yaitu <strong><code>T = False</code></strong>!</li>
       </ul>`),

    Q("2-k", "bab-2", 2, "II.K Aljabar Logika", "Hukum De Morgan Pertama pada Aljabar Logika",
      "Berdasarkan Hukum De Morgan dalam aljabar logika, bentuk not(P  and  Q) selalu ekuivalen dengan...",
      null, ["(not P) and (not Q)", "(not P) or (not Q)", "P or Q", "(not P) and Q", "P and (not Q)"], "b",
      "<p>Hukum De Morgan menyatakan bahwa ingkaran dari konjungsi adalah disjungsi dari masing-masing ingkarannya: <strong>not(P  and  Q) ≡ (not  P)  or  (not  Q)</strong>.</p>"),

    Q("2-k", "bab-2", 3, "II.K Aljabar Logika", "Penyederhanaan dengan Hukum De Morgan Kedua",
      "Bentuk paling sederhana yang ekuivalen dengan ekspresi aljabar logika not((not  A)  or  B) adalah...",
      null, ["A and (not B)", "(not A) and B", "A or (not B)", "(not A) or (not B)", "A and B"], "a",
      "<p>Gunakan Hukum De Morgan dan sifat negasi ganda:<br>not((not  A)  or  B) ≡ not(not  A)  and  (not  B) ≡ <strong>A  and  (not  B)</strong>.</p>"),

    Q("2-k", "bab-2", 4, "II.K Aljabar Logika", "Hukum Komplemen dan Identitas Boolean",
      "Berapakah hasil penyederhanaan dari ekspresi aljabar logika (P  or  (not  P))  and  Q untuk sembarang nilai kebenaran P dan Q?",
      null, ["True", "False", "P", "Q", "not Q"], "d",
      "<p>Menurut Hukum Komplemen, (P  or  (not  P)) selalu bernilai <strong>True</strong>. Selanjutnya menurut Hukum Identitas, True and  Q selalu bernilai <strong>Q</strong>.</p>"),

    Q("2-k", "bab-2", 5, "II.K Aljabar Logika", "Hukum Dominasi (Null Law)",
      "Untuk sembarang nilai logika X dan Y, berapakah hasil evaluasi dari ekspresi (X  and False)  or True?",
      null, ["True", "False", "X", "Y", "X and Y"], "a",
      "<p>Apa pun nilai X, (X  and False) bernilai <strong>False</strong>. Kemudian False or True pasti menghasilkan <strong>True</strong>.</p>"),

    Q("2-k", "bab-2", 6, "II.K Aljabar Logika", "Hukum Absorpsi (Penyerapan)",
      "Dalam aljabar Boolean, ekspresi P  or  (P  and  Q) dapat disederhanakan menjadi...",
      null, ["P", "Q", "P and Q", "True", "False"], "a",
      "<p>Berdasarkan Hukum Absorpsi (Penyerapan): P  or  (P  and  Q) ≡ P  and  (True or  Q) ≡ P  and True ≡ <strong>P</strong>.</p>"),

    Q("2-k", "bab-2", 7, "II.K Aljabar Logika", "De Morgan pada Pertidaksamaan Matematika",
      "Dalam aljabar logika matematika, bentuk not(x &lt; 10  or  y ≥ 5) setara dengan...",
      null, ["x ≥ 10 and y < 5", "x > 10 and y ≤ 5", "x ≥ 10 or y < 5", "x < 10 and y ≥ 5", "x = 10 and y = 5"], "a",
      "<p>Negasi dari (x &lt; 10) adalah (x ≥ 10), kata hubung <code>or</code> berubah menjadi <code>and</code>, dan negasi dari (y ≥ 5) adalah (y &lt; 5).</p>"),

    Q("2-k", "bab-2", 8, "II.K Aljabar Logika", "Penyederhanaan dengan Hukum Distributif Logika",
      "Ekspresi (A  and  B)  or  (A  and  (not  B)) jika disederhanakan menggunakan hukum distributif akan menghasilkan...",
      null, ["A", "B", "not B", "True", "False"], "a",
      "<p>Keluarkan faktor A: A  and  (B  or  (not  B)) ≡ A  and True ≡ <strong>A</strong>.</p>"),

    Q("2-k", "bab-2", 9, "II.K Aljabar Logika", "Konsep Exclusive OR (XOR) dalam Aljabar Logika",
      "Operasi Disjungsi Eksklusif (P ⊕ Q atau P  XOR  Q) menghasilkan nilai <strong>True</strong> apabila...",
      null, ["P dan Q keduanya True", "P dan Q keduanya False", "Tepat salah satu dari P atau Q bernilai True (nilai kebenarannya berbeda)", "P dan Q memiliki nilai kebenaran yang sama", "P bernilai False"], "c",
      "<p>Operasi <strong>XOR</strong> (⊕) bernilai <strong>True</strong> jika dan hanya jika salah satu pernyataan bernilai True dan pernyataan lainnya bernilai False.</p>"),

    Q("2-k", "bab-2", 10, "II.K Aljabar Logika", "Evaluasi Persamaan Aljabar Logika",
      "Diketahui A = False dan B = True. Berapakah nilai kebenaran dari ekspresi not(A  and  B)  and  (A  or  B)?",
      null, ["True", "False", "Netral", "0", "Tidak dapat ditentukan"], "a",
      "<p>• (A  and  B) = False and True = False, sehingga not(A  and  B) = True.<br>• (A  or  B) = False or True = True.<br>• Hasil akhirnya: True and True = <strong>True</strong>.</p>"),

    /* ======================================================================
       BAB II — SUB-BAB L: PERHITUNGAN DAN ANALISIS MASALAH (10 SOAL UMUM: 2-l)
       ====================================================================== */
    Q("2-l", "bab-2", 1, "II.L Analisis Masalah", "Rumus Waktu Kerja Bersama-sama",
      "Pekerja A dapat menyelesaikan pengecatan sebuah gedung sendirian dalam waktu 6 hari, sedangkan Pekerja B dapat menyelesaikannya sendirian dalam waktu 3 hari. Jika mereka bekerja bersama-sama, dalam berapa hari pekerjaan tersebut selesai?",
      null, ["1,5 hari", "2 hari", "2,5 hari", "3 hari", "4,5 hari"], "b",
      "<p>Gunakan rumus waktu kerja bersama:<br>t<sub>bersama</sub> = (a × b)/(a + b) = (6 × 3)/(6 + 3) = 18/9 = <strong>2 hari</strong>.</p>"),

    Q("2-l", "bab-2", 2, "II.L Analisis Masalah", "Perbandingan Berbalik Nilai (Pekerja vs Waktu)",
      "Sebuah proyek pembangunan jembatan ditargetkan selesai dalam 20 hari oleh 6 orang pekerja. Jika proyek tersebut ingin dipercepat agar selesai dalam 15 hari, berapa total pekerja yang dibutuhkan?",
      null, ["7 orang", "8 orang", "9 orang", "10 orang", "12 orang"], "b",
      "<p>Gunakan rumus perbandingan berbalik nilai P<sub>1</sub> × H_1 = P<sub>2</sub> × H_2:<br>6 × 20 = P<sub>2</sub> × 15 ⇒ 120 = 15 P<sub>2</sub> ⇒ P<sub>2</sub> = <strong>8 orang pekerja</strong>.</p>"),

    Q("2-l", "bab-2", 3, "II.L Analisis Masalah", "Rumus Waktu Berpapasan Dua Kendaraan",
      "Jarak antara Kota A dan Kota B adalah 240 km. Andi berangkat dari Kota A menuju Kota B dengan kecepatan rata-rata 50 km/jam, dan pada saat yang bersamaan Budi berangkat dari Kota B menuju Kota A dengan kecepatan 70 km/jam. Setelah berapa jam mereka akan berpapasan?",
      null, ["1,5 jam", "2 jam", "2,5 jam", "3 jam", "4 jam"], "b",
      "<p>Rumus waktu berpapasan (berangkat bersamaan):<br>t = (Jarak Total)/(v<sub>1</sub> + v<sub>2</sub>) = 240/(50 + 70) = 240/120 = <strong>2 jam</strong>.</p>"),

    Q("2-l", "bab-2", 4, "II.L Analisis Masalah", "Perbandingan Senilai (Kecepatan Produksi)",
      "Sebuah mesin cetak mampu mencetak 450 lembar brosur dalam waktu 15 detik. Dengan kecepatan yang sama, berapa lembar brosur yang dapat dicetak dalam waktu 2 menit (120 detik)?",
      null, ["1.800 lembar", "2.400 lembar", "3.000 lembar", "3.600 lembar", "4.200 lembar"], "d",
      "<p>Kecepatan cetak = 450 ÷ 15 = 30 lembar/detik.<br>Dalam 120 detik: 30 × 120 = <strong>3.600 lembar</strong>.</p>"),

    Q("2-l", "bab-2", 5, "II.L Analisis Masalah", "Rumus Rata-Rata Gabungan",
      "Nilai rata-rata ujian matematika dari 8 siswa adalah 80. Ketika nilai dari 2 siswa susulan digabungkan, rata-rata seluruhnya (10 siswa) naik menjadi 82. Berapakah nilai rata-rata dari 2 siswa susulan tersebut?",
      null, ["85", "88", "90", "92", "95"], "c",
      "<p>• Jumlah nilai 8 siswa awal = 8 × 80 = 640.<br>• Jumlah nilai seluruh 10 siswa = 10 × 82 = 820.<br>• Jumlah nilai 2 siswa susulan = 820 - 640 = 180, sehingga rata-ratanya = 180 ÷ 2 = <strong>90</strong>.</p>"),

    Q("2-l", "bab-2", 6, "II.L Analisis Masalah", "Analisis Persentase Keuntungan Pedagang",
      "Seorang pedagang membeli sebuah sepeda seharga Rp500.000 kemudian menjualnya kembali dengan harga Rp575.000. Berapa persentase keuntungan yang diperoleh pedagang tersebut?",
      null, ["10%", "12,5%", "15%", "17,5%", "20%"], "c",
      "<p>Besar keuntungan = Rp575.000 - Rp500.000 = Rp75.000.<br>Persentase untung = 75.000/500.000 × 100% = <strong>15%</strong>.</p>"),

    Q("2-l", "bab-2", 7, "II.L Analisis Masalah", "Rumus Waktu Menyusul Kendaraan",
      "Riko berangkat dari Kota P pukul 07:00 dengan kecepatan 40 km/jam. Setengah jam kemudian (pukul 07:30), Dani menyusul dari tempat yang sama dengan kecepatan 60 km/jam melalui jalur yang sama. Pada pukul berapa Dani tepat menyusul Riko?",
      null, ["08:00", "08:15", "08:30", "09:00", "09:30"], "c",
      "<p>Saat Dani berangkat pukul 07:30, Riko sudah menempuh jarak Δ s = 40 × 0,5 = 20 km.<br>Waktu menyusul = (Δ s)/(v<sub>2</sub> - v<sub>1</sub>) = 20/(60 - 40) = 20/20 = 1 jam.<br>Maka Dani menyusul pada pukul 07:30 + 1 jam = <strong>08:30</strong>.</p>"),

    Q("2-l", "bab-2", 8, "II.L Analisis Masalah", "Laju Pengisian dan Pengosongan Tandon Air",
      "Sebuah tandon air berkapasitas 200 liter diisi melalui keran masuk dengan debit 12 liter/menit, tetapi pada saat yang sama bocor keluar dengan debit 7 liter/menit. Jika tandon awalnya kosong, berapa menit waktu yang diperlukan hingga tandon terisi penuh?",
      null, ["20 menit", "30 menit", "40 menit", "50 menit", "60 menit"], "c",
      "<p>Debit bersih pengisian = 12 - 7 = 5 liter/menit.<br>Waktu hingga penuh = 200 ÷ 5 = <strong>40 menit</strong>.</p>"),

    Q("2-l", "bab-2", 9, "II.L Analisis Masalah", "Perhitungan Biaya Operasional Total",
      "Biaya operasional satu unit mesin produksi adalah Rp1.500 per jam. Jika pabrik mengoperasikan 4 unit mesin secara terus-menerus selama 5 hari penuh (24 jam/hari), berapa total biaya operasionalnya?",
      null, ["Rp360.000", "Rp540.000", "Rp600.000", "Rp720.000", "Rp900.000"], "d",
      "<p>Total jam-mesin = 4 mesin × 5 hari × 24 jam = 480 jam-mesin.<br>Total biaya = 480 × Rp1.500 = <strong>Rp720.000</strong>.</p>"),

    Q("2-l", "bab-2", 10, "II.L Analisis Masalah", "Analisis Waktu Pelayanan Antrean Paralel",
      "Sebuah klinik memiliki 2 loket pemeriksaan yang bekerja secara bersamaan (paralel). Setiap 1 pasien membutuhkan waktu pemeriksaan rata-rata 10 menit. Jika terdapat 14 pasien dalam antrean, berapa menit waktu total untuk menyelesaikan pemeriksaan seluruh pasien?",
      null, ["50 menit", "60 menit", "70 menit", "140 menit", "280 menit"], "c",
      "<p>Karena ada 2 loket yang melayani secara bersamaan, masing-masing loket menangani 14 ÷ 2 = 7 pasien.<br>Waktu total pelayanan = 7 pasien × 10 menit = <strong>70 menit</strong>.</p>")
  ];
})();
