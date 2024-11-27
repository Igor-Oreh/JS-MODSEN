const person = { name: 'Alice' };  

function greet() {
    console.log("Привет " + this.name)
}

greet.call(person)
greet.apply(person)
greet.bind(person)()