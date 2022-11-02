

let candies = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Three Muskeeters ", price: 4.15},
    {product: "Reeses", price: 4.27},
    {product: "Starburs", price: 1.27},
    {product: "Almond Joy", price: 1.98},
    {product: "Crunch", price: 2.19},
    {product: "Twizzlers ", price: 1.90},
];


candies.sort(function(a,b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
});

let candiesNum = candies.length;

for (i = 0; i < candiesNum; i++) {
    console.log(candies[i].product);
}
console.log("--------------------------------------------");


candies.sort(function(a,b) {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;
});

for (i = 0; i < candiesNum; i++) {
    console.log(candies[i].price + " " +  candies[i].product);
}
