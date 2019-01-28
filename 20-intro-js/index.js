

// function doSomething(numeber) {
//   // console.log("doSomething was run");
//   return numeber * 5;
// }


// console.log(doSomething);
// console.log(doSomething(12));


// thank("u", next)

// console.log(thank(next("u")))

// function next(who) { 
//   return `${ who }, next!`
// }


// function thank(what) {
//   return `Thank ${ what }`
// }


// var result = next("Graham")

// console.log(next("Graham"))
// console.log(result)


// function thank(who, callback){
//   const returnValue = callback("Graham")
//   console.log(returnValue)
// }


// function next(param){
//   console.log("next was called", param)
//   return "hello from Next"
// }

// function previous(param){
//   console.log("previous", param)
//   return "hello from previous"
// }


// thank("u", next)
// thank("u", previous)




// numbers = [1,2,3,43,5,6,7,8,990]

// numbers.each do |number| 
//   p number * 100
// end


// function multiplyBy100(number) {
//   console.log(number * 100)
// }


const numbers = [1,2,3,43,5,6,7,8,990];


// numbers.forEach(multiplyBy100)


// numbers.forEach(function(number){
//   console.log(number * 100)
// })



numbers.forEach((number) => {
  console.log(number * 100)
})


numbers.forEach(number => console.log(number * 100))





















