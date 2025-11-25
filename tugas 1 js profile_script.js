let myName = "Nadia Hanum Pratiwi";
const myAge = 17;

console.log("Nadia Hanum Pratiwi", myName);
console.log("17, myAge")

document.getElementById("nama-saya").innerHTML = "Hallo, Saya " + myName;

document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan suka belajar pemrograman. ";

function showAlert() {
    alert("Anda telah mengklik tombol!");
}
