let lunch = [
                {item: "Steak Fajitas", price: 9.95},
                {item: "Chips and Guacamole", price: 5.25},
                {item: "Sweet Tea", price: 2.79}
            ];

function getMealCost(lunch){
    let itemsOrdered = lunch.length;
    let subtotal = 0;

    for (let i = 0; i < itemsOrdered; i++){
        subtotal += lunch[i].price;
    }
    return subtotal;
}

let subtotal = getMealCost(lunch);

let tax = subtotal * 0.8;
let tip = subtotal * 1.8;

let total = subtotal + tax + tip;

console.log(subtotal);
console.log(tax);
console.log(tip);
console.log(total);

// console.log("Total for lunch is " + totalWithTip.toFixed(2));
