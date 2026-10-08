let nama = "Fahmi Nuradi";
nama = "asep";

console.log(nama);

const myName = "Alex";
console.log(myName);

let contoh_string = "Ini tipe data string";
let angka = 1.5;
let is_sarapan = true;

let buah = ["apel", "nanas", "strowberry", 10];
console.log(buah[1]);

let biodata = {
  nama: "Fahmi Nuradi",
  umur: 21,
  pekerjaan: "AI Engineer",
  pendidikan: {
    instansi: "Universitas Swasta Jakarta",
    jurusan: "teknik Informatika",
  },
};

console.log(biodata.pekerjaan);
console.log(biodata.pendidikan.instansi);

let barang = null;
let latter;

console.log(latter);

let asep =
  "hallo nama saya " + nama + " Saya kuliah di " + biodata.pendidikan.instansi;
asep = `Hallo nama saya adalah ${nama}, Saya kuliah di ${biodata.pendidikan.instansi}`;
console.log(asep);

let nilai = 105;
//

if (nilai > 100) {
  console.log("Nilai melebihi batas, masukan kembali.");
} else if (nilai < 0) {
  console.log("Nilai yang kamu masukan tidak sesuai.");
} else if (nilai >= 82) {
  console.log("Nilai kamu memuaskan!");
} else if (nilai > 75) {
  console.log("Nilai kamu baik!");
} else if (nilai >= 60) {
  console.log("Nilai kamu cukup!");
} else {
  console.log("Kamu perlu remedial");
}

// perbaiki : jika nilai > 100 atau < 0 => nilai kamu error.

let day = "senin";

switch (day) {
  case "sabtu":
    console.log("Kantor menerapkan sistem WFH");
    break;

  case "minggu":
    console.log("Kantor libur");
    break;

  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
  case "jumat":
    console.log("Kamu masuk kerja");
    break;

  default:
    console.log("Data yang kamu masukan tidak valid");
    break;
}

// hari wajib dari senin - minggu, selain hari itu = error

let nilai1 = 10;
let nilai2 = 5;
let nilai3 = "10";

console.log(nilai1 + nilai2);
console.log(nilai3 + nilai2);
console.log(nilai3 * nilai2);
console.log(nama + nilai2);

console.log(nilai3 == nilai1); //true
console.log(nilai3 === nilai1); //false

console.log(nilai3 != nilai1); //false
console.log(nilai3 !== nilai1); //true

let kerja = true;
let libur = false;
let cuti = false;
let hiling = true;

//  && ||

console.log(libur || kerja);

for (let i = 0; i <= 20; i++) {
  if (i == 11) {
    break;
  }

  console.log("saya sedang mengulang sebanyak ...", i);
}

for (let i = 10; i >= 1; i--) {
  console.log("Hitungan mundur ...", i);
}

let mobil = ["bmw", "mercedes", "avanza", "xenia", "sigra"];
mobil.push("fortuner");
mobil.unshift("BYD");

mobil.shift();

console.log(mobil);

for (let car = 0; car < mobil.length; car++) {
  console.log("mobil saya ada banyak, yaitu : ", mobil[car]);
}

let password = "fahmi";

console.log("Password anda sudah sesuai :)");

mobil.forEach((car) => console.log("mobil saya adalah : ", car));

function showPassword() {
  let input = prompt("Masukan password anda");

  while (password !== input) {
    alert("Password yang kamu masukan tidak sesuai.");
    input = prompt("Masukan kembali password anda");
  }
}

// arrow function
let show = () => {
    // masukan kode untuk di function
}

function persegiPanjang(panjang, lebar){
    rumus = panjang * lebar
    console.log("Luas persegi panjang adalah", rumus )
}

persegiPanjang(10, 5)

let lingkaran = (r) => {
    rumus = 3.14 * r * r;
    return rumus;
}

let kelilingLingkaran = lingkaran(30);
console.log(kelilingLingkaran);

// 1. masukan harga
// 2. Masukan diskon

// ouputnya : harga yang sudah jadi.

let diskon = (harga, persen) => {
    disc = harga - (harga * (persen / 100))
    return disc
}

function showDiskon(){
    let harga = prompt("Masukan Harga : ");
    let potongan = prompt("Masukan Porongan (%) : ");

    let hasil = diskon(harga, potongan);
    alert(`Potongan diskon kamu menjadi : ${hasil}`)
}

const judul = document.getElementById("title")
judul.textContent = "Judul diubah"
judul.style.color = "#0088cc"

const subJudul = document.querySelector(".tagline")
subJudul.innerHTML = "<span>Ini adalah judul yang diberikan penekanan</span>"
subJudul.classList.add("bg-blue")
subJudul.classList.remove("text-bold")

console.log(judul)
console.log(subJudul)

const counter = document.querySelector(".angka")
const btnPlus = document.getElementById("add")
const bntMin = document.getElementById("min")
let count = 0;

btnPlus.addEventListener("click", () => {
    count++
    counter.textContent = count
}); 

bntMin.addEventListener("click", () => {
    count--
    counter.textContent = count
}); 

async function loadData() {
    try {
        const api = "https://6ac75f1e75a4ce3fe721ab20.mockapi.io/api/v1/products";
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log("Ada Error", error)
    }
}

