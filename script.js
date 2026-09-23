//Aktivitas 1
//Mencetak sebuah nilai dengan cara console.log("")

console.log("=== Selamat Datang Di Kalkulator Nilai Rapor");
console.log("Script Javascript Telah Terhubung");

//Aktivitas 2
//Membuat Sebuah Variabel let & const

//const sifatnya tidak biisa diubah / tetap
const NAMA_KAMPUS = "UPI PWK" // Nama Sekolah itu tidak bisa diubah
const MATA_KULIAH = ["SCM", "PROMNET", "METOPEN"]; // Mata Kuliah tidak bisa diubah

// let sifat nya bisa berubah sewaktu waktu

let NAMA_DOSEN = "Tio Adrian" // Si Tio ini bisa diubah sewaktu 
let KELAS_PRAKTIKUM = "3B"; // Kelas Praktikum bisa diubah

// Mencetak sebuah nilai dengan Operator "+" -> tujuan nya untuk menggabungkan variabel tipe data string
console.log("Kampus : " + NAMA_KAMPUS); //Tampilkan nama kampus menggunakan variabel
console.log("kelas Praktikum :" + KELAS_PRAKTIKUM); // Tampilkan kelas Praktikum
console.log("Nama Dosen : " + NAMA_DOSEN); // Tampilkan Nama Dosen

// DEMO PERBEDAAN LET vs CONST

// 1. let ilainya bisa diubah

NAMA_DOSEN = "Burhan"; // ini bisa diubah
console.log("Nama Dosen : " + NAMA_DOSEN);

// 2. const / konstanta niali nya tidak bisa diubah / tetap
//NAMA_KAMPUS = "UPI BUMSIL"; // nilai tetap dan coba diubah menyebabkan TypeError
//console.log("Nama Kampus :" + NAMA_KAMPUS); // -

// Input Interaktif
// alert () tujuannya untuk menampilkan pesan ke user berupa pop up
alert("Selamat Datang di Aplikasi Kalkulator Nilai Rapor Kelas!");

// prompt() menampilkan dialog input teks dan disimpan ke variabel NAMA_MAHASISWA
let NAMA_MAHASISWA = prompt("Halo! Masukkan nama kamu untuk memulai: ");

// logika Conditional Statement / Percabangan

if (NAMA_MAHASISWA) {
    // Jika Mahasiswa Mengisi Nama Maka ada Greetiings Kondisi Pertama
    alert("Halo, " + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif : " + NAMA_MAHASISWA);
} else {
    // Jika Mahasiswa Tidak Mengisi Nama Maka disebut Anonim
    alert("Kamu tidak memasukkan nama. Kamu akan dipanggil Anonymous");
    NAMA_MAHASISWA = "Mahasiswa Anonymous";
    console.log("Mahasiswa Anonymous " + NAMA_MAHASISWA);
}

// Aktivitas 3 Operator Aritmatika - Hitung Nilai Rata-Rata
// Simpan nilai tiga matakuliah

// Deklarasi Variabel Operator Aritmatika
let NILAI_SCM = 80; // Nilai SCM
let NILAI_PROMNET = 100; // Nilai Promnet
let NILAI_METOPEN = 90; // Nilai Metopen

// Hitung Jumlah ketiga matakuliah
let JUMLAH_NILAI = NILAI_SCM + NILAI_PROMNET + NILAI_METOPEN;

//  Bagi Jumlah dengan 3 MataKuliah Untuk Mendapat Rata-Rata
// Tanda "/" Fungsinya untuk membagi
let NILAI_RATARATA = JUMLAH_NILAI / 3;

// Cetak rincian nya ke console
console.log("=== Nilai " + NAMA_MAHASISWA);
console.log("Nilai SCM: " + NILAI_SCM);
console.log("Nilai PROMNET: " + NILAI_PROMNET);
console.log("Nilai METOPEN: " + NILAI_METOPEN);

// Tampilkan Jumlah Nilai Ke console
console.log("Jumlah Nilai Anda Adalah " + JUMLAH_NILAI);

// Tampilkan Rata-Rata nilai Ke console
console.log("Rata-Rata Nilai Anda Adalah " + NILAI_RATARATA);

// Aktivitas 4 : Percabangan / Conditional Statement

// Buat Variabel kosong untuk menyimpan predikat / grade dengan keterangan
let PREDIKAT = ""; // Predikat akan diisi "A", "B", "C" Atau "D"
let KETERANGAN = ""; // Keterangan akan diisi sangat baik, baik, cukup, belajar laagi

// Percabangan if, else if, else di evalusi dari atas ke bawah
// begitu kondisi blok ke 1 terpenuhi maka akan dijalankan
// jika tidak terpenuhi maka akan dilewati dan maasuk ke kondisi ke 2

if (NILAI_RATARATA >= 90) {
    // Kondisi ini yang akan di cek pertama : apakah nilai lebih dari 90?
    PREDIKAT = "A";
    KETERANGAN = "Sangat Baik!";
} else if (NILAI_RATARATA >= 80){
    // Kondisi kedua dimana apakah nilai lebih dari 80?
    PREDIKAT = "B"
    KETERANGAN = "BAIK";
} else if (NILAI_RATARATA >= 70) {
    // Kondisi ketiga dimana apakah nilai lebih dari 70?
    PREDIKAT = "C";
    KETERANGAN = "Belajar lagi deck!";
} else {
    // Jika Semua kondisi diatas tidak memenuhi
    PREDIKAT = "D";
    KETERANGAN = "Pulang aja!";
}

// Tampilkan Predikat + Keterangan 
console.log("Predikat Anda adalah : " + PREDIKAT + "Keterangan : " + KETERANGAN);

// Tampilkan juga ringkasan
alert(
    "Hasil Rapor: " + NAMA_MAHASISWA + ":\n" + // \n artinya ganti baris (enter) didalam alert
    "Rata - Rata : " + NILAI_RATARATA + ":\n" +
    "PREDIKAT : " + PREDIKAT + "KETERANGAN :" + KETERANGAN
);

// Aktivitas ke 5 Function / Fungsi
// function adalah cara kita membungkus sekumpulan kode menjadi satu blok
// yang nantinya bisa dipanggil kapan saja dengan nama function yang sudah dibuat
// Struktur -> function NAMA_FUNGSI(parameter1, parameter2, parameter3); {....}

function HITUNG_RATARATA(nilai1, nilai2, nilai3) {
    let JUMLAH = nilai1 + nilai2 + nilai3; // Jumlah dari ketiga nilai atau parameter yang diterima
    return JUMLAH / 3; // Variabel JUMLAH dikembalikan lalu dibagi 3
}

// Menghitung Predikat


function TENTUKAN_PREDIKAT(PREDIKAT) {
    // Conditional Statement "if" disini langsung kasih "return" jika kondisi terpenuhi
    if (PREDIKAT >= 90) return "A - Sangat Baik";
    if (PREDIKAT >= 80) return "B - Baik";
    if (PREDIKAT >= 70) return "C - Belajar lagi deck!";
    return "D - Pulang aja";
}

// Contoh Penggunaan Function
// Menghitung nilai siswa a dengan function yang sudah dibuat
let NILAI_MAHASISWA_A = HITUNG_RATARATA(80, 75, 85)

// Tentuka predikat siswa a dengan function predikat
let PREDIKAT_MAHASISWA_A = TENTUKAN_PREDIKAT(NILAI_MAHASISWA_A);

// Cetak Function
console.log("=== DATA MAHASISWA A");
console.log("Rata - Rata adalah " + NILAI_MAHASISWA_A);
console.log("Predikat adalah " + PREDIKAT_MAHASISWA_A);

// Aktivitas 6 Terakhir For Loop (Looping for & Array)

// Array DAFTAR_MAHASISWA yang diisi Nama Mahasiswa
let DAFTAR_MAHASISWA = [
    "Burhan", 
    "Herwin",
    "Sabrina",
    "Navazzara",
    "Tio Adrian"
];

// Tampilkan Judul Sebelum cetak array daftarmahasiswa
console.log("=== Daftar MAHASISWA " + KELAS_PRAKTIKUM + "===");

// for loop digunakan untuk mengulang sebuah kode berkali kali
// Steuktur nya -> (awal; kondisi; langkah)
// let i = 0 => mulai dari index ke 1 karena array dimulai dari index 0
// i < DAFTAR_MAHASISWA.length; mengulangi selama i masih kusrang 5 maka jalankan jika sudah maka stop
// i++ => increment setelah setiap satu putaran , tambahkan i dengan 1 0->1->2->3->4

for (let i = 0; i < DAFTAR_MAHASISWA.length; i++) {
    // Daftar Mahasiswa[i] -> ambil elemen pada posisi index ke 1 dari array
    // (i + 1) -> digunakan agar nomor urut yang tampil bukan dari ke 1, bukan 0
    console.log ((i + 1) + ". " + DAFTAR_MAHASISWA[i]);
}

// .length adalah properti yang mengembalikan total panjang dari si array yang didalam array
console.log("Total Mahasiswa : " + DAFTAR_MAHASISWA.length);
console.log("Praktikum Selesai war is over");