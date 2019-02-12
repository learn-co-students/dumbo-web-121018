// https://twitter.com/dan_abramov/status/790858537513656320

// const cat = {
//   name: "Fluffy",
//   says: "Meow",
//   speak: function(){
//     console.log(this)
//     return this.says + "!"
//   }
// }

// var speak = cat.speak
// // debugger

// console.log(cat.speak)
// console.log(speak)

// console.log(cat.speak === speak)

// console.log(this)

// const dog = {
//   name: "Rover",
//   says: "Woof",
//   speak: cat.speak
// }

// console.log(cat.speak())
// console.log(dog.speak())
// console.log(dog === cat)
// console.log(dog.speak === cat.speak)

// const speak = 

// const human = {
//   name: "Dan Abramov",
//   says: "In JavaScript, the value of this is determined by the execution context unless you use an arrow function",
//   speak: () => {
//     console.log(this)
//     return this.says + "!"
//   } 
// }

// console.log(human.speak())

// What are some key differences / gotchas 
// surrounding arrow functions?
// How do arrow functions treat `this` 
// differently than traditional functions?

/*
class Lightswitch {

  constructor(args) {
    this.button = document.createElement("button");
    this.button.innerText = args.colorName;
    this.colorHex = args.colorHex;

    const body = document.querySelector("body")
    body.appendChild(this.button)

    console.log(this)

    // const returnedFunction = clicky.bind(this)

    // this.button.addEventListener("click", this.eventListener.bind(this))

    this.eventListener = this.eventListener.bind(this);

    this.button.addEventListener("click", this.eventListener)
  }

  eventListener() {
    console.log(this)
    document.body.style.backgroundColor = this.colorHex;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  new Lightswitch({ colorHex: "#00f", colorName: "Blue" });
  new Lightswitch({ colorHex: "#fa0", colorName: "Orange" });
  new Lightswitch({ colorHex: "#0f0", colorName: "Green" });
})

*/

/*
function whatever(foo, bar, baz, quux){
  console.log(this)
  console.log("foo:", foo)
  console.log("bar:", bar)
  console.log("baz:", baz)
  console.log("quux:", quux)
}

const something = whatever.bind("🥔🍟")

something({}, 5, "dsfjkhsdfhkj", null)

whatever.call("🍌🥥", 5, {}, "sdfjkhsdfhkas", null)
whatever.apply("🍜🍲", [5, {}, "sdfjkhsdfhkas", null])

var array = [2,5,6,7,8,1000]

const max = Math.max.apply(null, array)
console.log(max)
*/

// When do I need { } curly braces with an arrow function? 
// When can I skip them?

// const callback = () => { 
//   console.log("yep") 
// }
// setInterval(callback, 1000)

// const foo = () => { foo: "bar" }

// console.log(foo());

// Under what circumstances will an arrow function implicitly return?

  // const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty"]

  // // const callback = function(adjective) { adjective.toUpperCase() + " SPICE" }
  // // const callback = adjective => { adjective.toUpperCase() + " SPICE" }
  // // const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  // const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  // // const callback = (adjective) => adjective.toUpperCase() + " SPICE"
  // // const callback = adjective =>  adjective.toUpperCase() + " SPICE"
  
  // const bigNastyString = spiceGirls.map(callback).join(" and ")

  // console.log(bigNastyString);

// can I define a default parameter for a JS function?

// function greet(name = "Ginger Spice") {
//   return `Hello, ${ name }`
// }
const greet = (name = "Ginger Spice") => `Hello, ${ name }`
// const greet = name = "Ginger Spice" => `Hello, ${ name }`

console.log(greet("Graham"))
console.log(greet(null))
console.log(greet(false))
console.log(greet(0))
console.log(greet(NaN))
console.log(greet(""))
console.log(greet(undefined))















