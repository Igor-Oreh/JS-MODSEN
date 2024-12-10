const reverseWords = function func(string) {
    const string_arr = string.split(' ')

    const reversed_string_arr = string_arr.map(
        (word) => word.split('').reverse().join(''))
    return reversed_string_arr.join(' ')
} 


const reversedWords = reverseWords('Hello World');
console.log(reversedWords);