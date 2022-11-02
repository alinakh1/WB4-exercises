function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
   }
   let emp1 = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };
   let emp2 = {
    employeeId: "2", 
    name: "Elisha", 
    jobTitle: "Game Programmer", 
    payRate: 43.27
    };
   printEmployeeAndPay(emp1);
   printEmployeeAndPay(emp2);


   //work createPayStub(id, name, payRate, hoursWorked) {}
// let emp1PayStub = 
//  createPayStub("1", "Ezra", 38.46, 49);
// console.log(emp1PayStub.name + " earned $" + 
//  emp1PayStub.grossPay.toFixed(2));
// let partCode1 = {
//     supplierCode: "XYZ",
//     productNumber: "1234",
//     size: "L"};
// let part1 = parsePartCode(partCode1);
// console.log("Supplier: " + part1.supplierCode +
//  " Product Number: " + part1.productNumber +
//  " Size: " + part1.size);


let part = {
    supplier: supplierCode,
    product: productNumber,
    size1: size
};