

class Mammal {

  die() {

    return "ouuughhhh"
  }

}

class Person extends Mammal {

  constructor(legalName, preferredName) {
    super()
    this.legalName = legalName
    this.preferredName = preferredName
  }

  introduce() {
    return `Hey, it's ${ this.preferredName }`
  }

  static count(){
    return "8.5 billion"
  }

}

const jane = new Person("Yevgeniya Costa", "Jane", ["turquoise"]);
const graham = new Person("Graham Aden Troyer-Joy", "Graham", ["puce", "chartreuse", "mauve"]);















// function Person(legalName, preferredName, favoriteColors){
//   this.legalName = legalName
//   this.preferredName = preferredName
//   this.favoriteColors = favoriteColors

//   // this.introduce = function() {
//   //   return `Hi, it's ${ this.preferredName }`
//   // }

// }

// Person.prototype.introduce = function() {
//   return `Hi, it's ${ this.preferredName }`
// }

// Person.prototype.yell = function() {
//   return `HEY`
// }


// const jane = new Person("Yevgeniya Costa", "Jane", ["turquoise"]);
// const graham = new Person("Graham Aden Troyer-Joy", "Graham", ["puce", "chartreuse", "mauve"]);



// console.log(jane.introduce === graham.introduce)










// const prototype = {
//   introduce: function(){
//     return `Hi, it's ${ this.preferredName }`
//   }
// }

// const jane = Object.create(prototype);
// jane.legalName = "Yevgeniya Costa"
// jane.preferredName = "Jane"

// const graham = Object.create(prototype);
// graham.legalName = "Graham Aden Troyer-Joy"
// graham.preferredName = "Graham"

// // console.log(jane.introduce())
// // console.log(graham.introduce())
// // console.log(jane.introduce === graham.introduce)






// function introduce(){
//   return `Hi, it's ${ this.preferredName }`
// }

// const jane = {
//   legalName: "Yevgeniya Costa",
//   preferredName: "Jane",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   preferredName: "Graham",
//   introduce: introduce
// }

// console.log(jane.introduce())
// console.log(graham.introduce())
// console.log(jane.introduce === graham.introduce)






