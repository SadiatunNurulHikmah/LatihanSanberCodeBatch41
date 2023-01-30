const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome!");
var counter = 1;
var ulangi = true;

while(ulangi){
    console.log("Perhitungan ke-"+counter)
    var inputAngka = prompt("Masukkan Angka Genap : ");
    let angka = parseFloat(inputAngka);

    if(!isNaN(angka)){
        const hasil = Math.sqrt(angka);
        if (angka % 2 == 0) {
            console.log(`Akar Pangkat Dua dari ${inputAngka} adalah ${hasil}`);
        } else if (angka < 0) {
            console.log('Tidak bisa input bilangan negatif');
        } else if (angka % 2 != 0) {
            console.log('Tidak bisa input bilangan ganjil');
        }
    } else {
        console.log("NaN");
    }
   
    
    var jawab = prompt("Apakah anda mau mengulang? (y/n) : ") //Input 1 atau yes atau 0 atau no
    counter++;

    if(jawab == true || jawab == "y"){
       ulangi = true;
    } else {
        ulangi = false;
    }

}
    

