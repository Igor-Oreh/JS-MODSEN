const obj = { 
    name: 'Object', 
    getName: function () { 
      return this.name; 
    } 
  }; 
const getName = obj.getName; 
console.log(getName());  // undefined

//************ Верное реешние **************//

const trueGetName = getName.bind(obj)

console.log(trueGetName());