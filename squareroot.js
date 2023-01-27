const prompt = require('prompt-sync')();

console.log("Welcome!");
var inputAngka = prompt("Masukkan Angka Genap : ");
const hasil = Math.sqrt(inputAngka);



    if (inputAngka % 2 == 0) {
        console.log(`Akar Pangkat Dua dari ${inputAngka} adalah ${hasil}`);
    } else if (inputAngka < 0) {
        console.log('Tidak bisa input bilangan negatif');
    } else {
        console.log('Tidak bisa input bilangan ganjil');
    }


