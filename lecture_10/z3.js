
function map(arr, callback) {
    return arr.map(callback);
}



const initArr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * 2;
const res = map(initArr, callback);
console.log(initArr); // [1, 2, 3, 4, 5]
console.log(res); // [2, 4, 6, 8, 10]
