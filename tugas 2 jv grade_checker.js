function cekNilai() {
    //mengambil nilai dari input
    const nilaiInput = document.getElementById('nilaiSiswa');
    const nilai = Number(nilaiInput.value);

    //elemen untuk hasil
    let hasilElement= document.getElementById("hasilGrade");

    //validasi dan tentukan grade
    let hasil;

    if (nilai >= 90 && nilai <= 100){
        hasil = "A (Sangat Baik)";
    } 
    else if (nilai >= 80 && nilai <= 89) {
        hasil = "B (Baik)";
    } 
    else if (nilai >= 70 && nilai <= 79) {
        hasil = "C (Cukup)";
    } 
    else if (nilai >= 60 && nilai <= 69) {
        hasil = "D (Kurang)";
    } 
    else if (nilai >= 0 && nilai <= 59) {
        hasil = "E (Gagal)";
    } 
    else {
        hasil = "Nilai tidak valid. Masukkan nilai antara 0-100.";
    }

    //hasil elemen
hasilElement.textContent = hasil;
}