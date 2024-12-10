const mysum = function sum(arr, pos=0) {
    if (pos == arr.length)
        return 0
    return arr[pos] + sum(arr, pos + 1);
}

console.log(mysum([1, 2, 3, 4, 8]))