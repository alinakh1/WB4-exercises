

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "3 Muskeeters ", price: 4.15},
    {product: "Reeses", price: 4.27},
    {product: "Starburs", price: 1.27},
    {product: "Almond Joy", price: 1.98},
    {product: "Crunch", price: 2.19},
    {product: "Twizzlers ", price: 1.90},
];

for (i = 0; i < products.length; i++) {
    let priceNum = Number(products[i].price); 
    if (priceNum < 4) {
    console.log("Candies less than 4 $ :  " + products[i].product);
  }
}

for (i = 0; i < products.length; i++) {
    let mms = (products[i].product.indexOf("M&Ms"));
    if (mms > 0) {
    console.log("Candie with M&M in their name " + products[i].product);
  }
}

for (i = 0; i < products.length; i++){
    if (products[i].product == "Swedish Fish") {
      console.log("Yes we carry Swedish Fish")
     }
   }

