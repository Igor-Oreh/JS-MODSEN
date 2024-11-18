/*
function countNumericValues(obj) {
    let countNumericProperties = 0;
    for (prop in obj)
        if (Number.isInteger(obj[prop]))
            countNumericProperties++;
    return countNumericProperties;
}
*/

function countNumericValues(obj) {
    const NumericValues = Object.values(obj).filter((value) => Number.isInteger(value))
    return NumericValues.length;
}


const person = {
    name: "Sergey",
    age: 30,
    hobbyCount: 15
}

console.log(countNumericValues(person))