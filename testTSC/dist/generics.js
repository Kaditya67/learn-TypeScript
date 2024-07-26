"use strict";
function idenity1(val) {
    return val;
}
function idenity2(val) {
    return val;
}
function idenity3(val) {
    return val;
}
idenity3("Aii");
function idenity4(val) {
    return val;
}
const bottle = idenity4({ brand: "Aquafina", type: 500 });
console.log(bottle); // Output: { brand: "Aquafina", type: 500 }
const result = idenity4("Hello");
console.log(result); // Output: Hello
function getProducts1(products) {
    const num = 0;
    return products[num];
}
const getProducts2 = (products) => {
    const num = 0;
    return products[num];
};
function getConnection(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
getConnection(121, {
    connection: "conn",
    username: "user",
    password: "pass"
});
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
