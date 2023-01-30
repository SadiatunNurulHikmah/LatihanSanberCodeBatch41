module.export = function TotalQuantity(data){
    for(let i=0; i<data.quantity.length; i++){
        let ProductCode = data.productCode;
        let Quantity = data.quantity[i];
        totalQuantity = sum(Quantity);
        console.log("Jumlah quantity product dengan code " + ProductCode + " adalah : " + totalQuantity);
    }
}

TotalQuantity(response);
console.log(response.data);
console.log("welcome");