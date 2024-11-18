numbers = [10, 20, 30, 40, 50]


//Инициализируем аккумулятор 0
let sum = numbers.reduce((accumulator, number) => accumulator + number, 0) 

console.log(sum) // Answer: reduce