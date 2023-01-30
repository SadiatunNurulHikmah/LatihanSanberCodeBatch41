const prompt = require('prompt-sync')();

console.log("Welcome!");
var counter = 1;
var ulangi = true;

while(ulangi){
    console.log("Perhitungan ke-"+counter)
    var inputAngka = prompt("Masukkan Angka Genap : ");
    const hasil = Math.sqrt(inputAngka);
    if (inputAngka % 2 == 0) {
        console.log(`Akar Pangkat Dua dari ${inputAngka} adalah ${hasil}`);
    } else if (inputAngka < 0) {
        console.log('Tidak bisa input bilangan negatif');
    } else {
        console.log('Tidak bisa input bilangan ganjil');
    }
    
    var jawab = prompt("Apakah anda mau mengulang? (y/n) : ") //Input 1 atau yes atau 0 atau no
    counter++;

    if(jawab == true || jawab == "y"){
       ulangi = true;
    } else {
        ulangi = false;
    }

}
    

