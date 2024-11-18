forbiddenWords = ['spam', 'advertisement', 'scam']

message = "This is a spam message"

console.log(
    forbiddenWords.some(forbWord => {
        return message.indexOf(forbWord) != -1;
    })
)

forbiddenWords.shift()


console.log(forbiddenWords) // Answer: some

console.log(
    forbiddenWords.some(forbWord => {
        return message.indexOf(forbWord) != -1;
    })
)
