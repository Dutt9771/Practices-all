var products = [
    {
        "name": "Aloe Vera",
        "quantity": 1,
        "price": 59
    }, {
        "name": "Marmorblad",
        "quantity": 2,
        "price": 299
    }, {
        "name": "Lyktranka",
        "quantity": 2,
        "price": 79
    }
];

for (let product of products) {
    let value;

    // get the value
    value = "Name : " + product.name + "<br> quantity : " + product.quantity + "<br" +
            "> price : " + product.price;

    document.write(value + '<br>');
}
var sum = 0;
for (var i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
}
document.write("Total Price = " + sum);