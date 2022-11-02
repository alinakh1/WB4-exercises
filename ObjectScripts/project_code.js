function parsePartCode(partCode){
console.log(partCode.supplierCode + ": " + partCode.productNumber + " - " + partCode.size )
}

let partCode = {
    supplierCode: "EP",
    productNumber: "1312",
    size: "M"
};

parsePartCode(partCode);

function secondFunction(supplierCode, productNumber, size) {
   let threePar = {
    newSupplier: supplierCode,
    productNum: productNumber,
    parametr:size
   };
}
    let partThreePar = secondFunction("XYZ", "1234", "L");

    // let part1 = secondFunction(partCode1);
console.log("Supplier: " + partThreePar.newSupplier +
 " Product Number: " +  partThreePar.productNum +
 " Size: " +  partThreePar.parametr);

secondFunction(threePar);