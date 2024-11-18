function combineKeysAndValues(keys, values) {
    const pairs = keys.map((key, i) =>  [key, values[i]])
    return Object.fromEntries(pairs);
}

const personPropertyNames = ["name", "age", "hobbyCount"]
const personPropertyValues = ["Sergey", 30, 15]

console.log(combineKeysAndValues(personPropertyNames, personPropertyValues))