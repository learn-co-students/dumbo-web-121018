

function tacoButtonClicked(){
  const items = document.getElementById("items")
  const li = document.createElement("li")
  li.className = "item taco";
  li.innerText = "🌮"
  // li.addEventListener("click", )
  items.prepend(li);
  // items.innerHTML = "<li class='item taco'>🌮</li>" + items.innerHTML;
}

function setUpDeleteForItems(stableParent){
  stableParent.addEventListener("click", function(event){
    console.log(event.target)
    // console.log(event.target.classList.contains("taco"))
    if (event.target.classList.contains("item")) {
      event.target.remove()
    }
  })
}

function setUpAddEventListener(tacoButton) {
  document.getElementById("taco").addEventListener("click", tacoButtonClicked)
}

document.addEventListener("DOMContentLoaded", function(){
  const taco = document.getElementById("taco")
  setUpAddEventListener(taco)

  // const items = document.getElementById("items")

  // console.log(document.querySelectorAll(".item"))
  // document.querySelectorAll(".item").forEach(item => {
  //   item.addEventListener("click", (event) => { 
  //     console.log("sdfkhjsdfkjsd");
  //     event.target.remove() 
  //   });
  // })

  setUpDeleteForItems(document.body)

})






