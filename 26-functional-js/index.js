const array = [1,2,3,4,5]

function doubler(arr){
  // const copy = Object.assign([], arr)
  let newArray = []
  for (let i = 0; i < arr.length; i++){
    newArray.push(arr[i]*2)
    // copy[i] = copy[i]*2
  }
  // return copy
}

const matt = {
  name: "Matt",
  occupation: "TCF",
  personality: "Loud, Friendly",
  food: ["Pizza", "Chicken", "Mul and Vine"]
}


let copy = JSON.parse(JSON.stringify(matt));
// let copy = {...matt, food: [...matt.food]}
// let copy = {...matt, spiritAnimal: "Bobcat", occupation: "Lead Instructor"}
// let copy = Object.assign({}, matt, {spiritAnimal: "Bobcat", occupation: "Lead Instructor"})




// higher order functions
// return other functions
// take functions as arguments
// invoke functions

// function funcRunner(arrOfFuncs){
//   let results = [];
//   for (let i = 0; i < arrOfFuncs.length; i++){
//     results.push(arrOfFuncs[i]())
//   }
//   return results;
// }

// function hello(){
//   return "Hello"
// }

// function world(){
//   return "World"
// }


const fruitStand = (fruit) => {
  let count = 0;
  return function(){
    count++
    return `I've sold ${count} ${fruit}s`
  }
}

const pineapple = fruitStand("pineapple")
const lychee = fruitStand("lychee")
const orange = fruitStand("orange")


// const pears = (() => {
//   let count = 0;
//   return function(){
//     count++
//     return `I've sold ${count} pears`
//   }
// })()

// const pears = () => {
//   count++
//   return `I've sold ${count} pears`
// }


