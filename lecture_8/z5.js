function removeKeys(obj, propertyToDelete) {
    for (prop of propertyToDelete)
        delete obj[prop]
}


const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c', 'e']);
console.log(obj); // { b: 2, d: 4 }