/*
class User {
   constructor(name, age) {
       this.name = name;
       this.age = age;
   }

   getName() {
       return this.name;
   }
   save() {
      console.log(`Сохранение пользователя ${this.name} в базу данных`);
   }
}
// Использование
const user = new User("Алексей", 30);
user.save();

*/
//Нарушен принцип единственной ответсвенности 
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    getName() {
        return this.name;
    }
 }

const BDManager = {
    saveUser: function(user) {
        console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
    }
}


 // Использование
 const user = new User("Алексей", 30);

 BDManager.saveUser(user);
 
