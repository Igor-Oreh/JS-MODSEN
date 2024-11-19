numbers = [5, 3, 8, 1, 4, 11]

const numericCompare = function(a, b){ 
    return a - b;
}

numbers = numbers.sort(numericCompare)

console.log(numbers) // Answer: sort