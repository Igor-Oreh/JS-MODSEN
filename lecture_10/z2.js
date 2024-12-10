function* arrayIterator(values) {
    for (value of values)
        yield value;
}


const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log(gen.next().value); // 'apple'
console.log(gen.next().value); // 'banana'
console.log(gen.next().value); // 'cherry'
console.log(gen.next().done);  // true
