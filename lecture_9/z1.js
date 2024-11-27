function sum() {
    let argSum = 0;
    for (arg of arguments) {
        argSum += Number(arg);
    }
    return argSum;
}


console.log(sum(5, 8, 9))