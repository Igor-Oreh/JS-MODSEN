function parseEvenFromArguents() {
    const argArr = Array.from(arguments)
    const even = argArr.filter((number) => number % 2 === 0)
    return even;
}

console.log(parseEvenFromArguents(4, 8, 5, 9, 6, 14, -1, 4, 9))