const car = {
}


Object.defineProperty(car, "price", {
    value: 10000,
    enumerable: false,
    writable: true
})

console.log(car)

console.log(car.price)

car.price = 15000

console.log(car.price)