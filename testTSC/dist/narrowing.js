"use strict";
function logValue(x) {
    if (x instanceof Date) { // let date = new Date          // any instance of any type can be found with instanceof
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("Pet is a Fish");
    }
    else {
        pet;
        console.log("Pet is Bird");
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return shape.radius * Math.PI * 2;
    }
    // return 4*shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
