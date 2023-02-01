const prompt = require('prompt-sync')({sigint: true});
const dataProduct = require('./datatotalquantity')

let totalQuantity = 0;
let namaProduk = "FloBrand-DressBSPink";
let codeProduk = "FBR00040101";

function product(d){
    for(let i=0; i < d.data.length; i++){
        if(d.data[i].productName == namaProduk && d.data[i].productCode == codeProduk){
            productName = d.data[i].productName
            console.log("Product Name : " + productName)
            productCode = d.data[i].productCode
            console.log("Product Code : " + productCode)
            quantity = d.data[i].quantity
            console.log("Quantity : " + quantity)
            totalQuantity = d.data[i].quantity + totalQuantity  
        }
    }
    console.log("Total Quantity dari Product FloBrand-DressBSPink (FBR00040101) adalah " + totalQuantity)
}

product(dataProduct);
