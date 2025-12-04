function ambilAngka() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {

        document.getElementById("hasilKalkulasi").textContent = "Hasil: Input bukan angka!";
        return null;
    }

    return { num1, num2 };
}

function tambah() {
    let data = ambilAngka();
    if (data === null) return;

    let hasil = data.num1 + data.num2;

    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

function kurang() {
    let data = ambilAngka();
    if (data === null) return;

    let hasil = data.num1 - data.num2;

    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

function kali() {
    let data = ambilAngka();
    if (data === null) return;

    let hasil = data.num1 * data.num2;

    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

function bagi() {
    let data = ambilAngka();
    if (data === null) return;

    if (data.num2 === 0) {
    document.getElementById("hasilKalkulasi").textContent = "Hasil: Tidak bisa dibagi 0!";
    return;
    }

    let hasil = data.num1 / data.num2;

    document.getElementById("hasilKalkulasi").textContent = "Hasil: " +hasil;
}