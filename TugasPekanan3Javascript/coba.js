let productBin = {
    requestId: null,
    data: [
      {
        id: 100000057465,
        storageId: 10000008207,
        code: "A01-01-01-A",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 76,
        createdTime: "2021-12-21T13:54:48Z",
      },
      {
        id: 100000057466,
        storageId: 10000002181,
        code: "A01-01-01-B",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 71,
        createdTime: "2021-12-21T13:54:48Z",
      },
      {
        id: 100000065224,
        storageId: 10000008884,
        code: "Tgt00-A-A-01",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 10,
        createdTime: "2022-02-08T10:35:19Z",
      }
    ],
    message: "success"
}



function product(d){
    for(let i=0; i < d.data.length; i++){
        productName = d.data[i].productName
        console.log("Product Name : " + productName)
        productCode = d.data[i].productCode
        console.log("Product Code : " + productCode)
        quantity = d.data[i].quantity
        console.log("Quantity : " + quantity)

        quantity0 = d.data[0].quantity
        quantity1 = d.data[1].quantity
        quantity2 = d.data[2].quantity
        totalQuantity = quantity0 + quantity1 + quantity2
    }
    if(productName == "FloBrand-DressBSPink"){
        if(productCode == "FBR00040101"){
          console.log("Total Quantity dari Product FloBrand-DressBSPink (FBR00040101) adalah " + totalQuantity)
        }
    }
}

product(productBin)