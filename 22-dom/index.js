
const potatoFormElement = document.getElementById("potato")
const potatoList = document.getElementById("potatoList")
const potatoThatIsAboutToGetDeleted = potatoList.querySelector(":last-child")
const showFormButton = document.querySelector(".showForm")

function potatoClicked(event){
  // debugger
  console.log("I WAS SUPER CLICKED")
  deleteElement(event.target)
}


document.querySelectorAll("#potatoList li").forEach(function(li){
  li.addEventListener("click", potatoClicked)
})



console.log("hi from line 7")

showFormButton.addEventListener("click", function(event){
  console.log(event)
  console.log("hi from line 10")

  if (potatoFormElement.style.display === "none") {
    showElement(potatoFormElement);
  } else {
    hideElement(potatoFormElement);
  }
})


potatoFormElement.addEventListener("submit", function(event) {
  event.preventDefault()
  addPotato(potatoList, createChild())
  // console.log("dsfkjsdfkjhds")
})

function showElement(element) {
  element.style.display = "block"
}

function hideElement(element){
  element.style.display = "none"
}


function deleteElement(element) {
  element.remove()
}

function createChild(){
  const li = document.createElement("li")
  li.className = "potato fries"
  li.innerText = "🥔"
  // li.innerHTML = "<span>🥔</span>"
  li.addEventListener("click", potatoClicked)
  return li
}
function addPotato(parent, child) {
  parent.append(child)
}




