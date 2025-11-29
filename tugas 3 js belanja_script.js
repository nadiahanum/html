//Deklarasi array kosong
let shoppingList = [];

//Fungsi untuk menampilkan daftar belanja
function renderList() {
    let listElement =document.getElementById("itemsBelanja");
    listElement.innerHTML = ""; //kosongkan list dl

    //Loop utk menampilkan item
    for (let i = 0; i< shoppingList.length; i++) {
        let li = document.createElement("li");
        li.textContent = shoppingList[i];
        listElement.appendChild(li)
    }

    //Menampilkan jumlah item 
    document.getElementById("jumlahItem").textContent = "Jumlah item: " + shoppingList.length;
}

//fungsi utk menambah item
function tambahItem() {
    let input = document.getElementById("newItem");
    let newItem = input.value;

    if (newItem !== "") {
        shoppingList.push(newItem);
        input.value = ""; //kosongkan input
        renderList();
    } else {
        alert("Item tidak boleh kosong!");
    }
}

//Fungsi utk menghapus item terakhir
function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
        renderList();
    } else {
        alert("Daftar belanja kosong!");
    }
}

//panggil render list awal
renderList();