
function deepCopy(obj) {
    const keys = Object.keys(obj)
    const propertyes = keys.map((key, i) => {
        if (typeof obj[key] == "object")
            return [key, deepCopy(obj[key])]
        return [key, obj[key]]
    })
    return Object.fromEntries(propertyes);
}


const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        zip: 10001
    }
}

const newOrigin = deepCopy(original)

newOrigin.address.city = "braslav"
//newOrigin.address = {
//    city: "Braslav",
//    zip: 100
//}


console.log(original) // Работает

