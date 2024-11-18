/*
class Bird {
   fly() {
       console.log("Птица летит");
   }
}
class Duck extends Bird { }
class Penguin extends Bird {
   fly() {
       throw new Error("Пингвины не умеют летать");
   }
}
// Использование
const birds = [new Duck(), new Penguin()];
birds.forEach(bird => bird.fly());

*/

//Принцип подстановки лисков (Пингвин впринципе не может летать, поэтому выводит ошибку изменяя поведение функции)

class Bird {
    fly() {
        console.log("Птица летит");
    }
 }

 class Duck extends Bird { 
 }
 class Penguin extends Bird {
    fly() {
        console.log("Птица не летит")
    }
 }
 // Использование
 const birds = [new Duck(), new Penguin()];
 birds.forEach(bird => bird.fly());
 