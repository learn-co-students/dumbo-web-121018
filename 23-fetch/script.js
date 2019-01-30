

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function(response){
//     return response.json()
//   }).then(function(data){
//     console.log(data)
//   })


// const image = document.getElementById("pupper")

// function dealWithDogData(dogData) {
//   image.src = dogData.message;
//   image.setAttribute("src", dogData.message);
// }



// setInterval(() => {
//  fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(dealWithDogData) 
// }, 2000)






// console.log("hello from line 3")


// const promise = fetch("https://dog.ceo/api/breeds/image/random")

// promise.then(function(response){
//   const jsonPromise = response.json()
//   jsonPromise.then(function(whatAmI){
//     console.log(whatAmI)
//   })
//   // console.log(response.text())
//   // console.log("hello from line 7")
// })

// console.log("hello from line 12")



// const otherPromise = new Promise(function(resolve, reject){

//   if (somethingRiskySucceeded)
//     resolve(foo)
//   else
//     reject()

// })