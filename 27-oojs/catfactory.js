

const catNames = ["Elliott", "Garfield", "Maru", "Tom", "Fluffy"]

const catList = new CatList(catNames)

document.addEventListener("DOMContentLoaded", function(){
  const catsListUl = document.querySelector(".cats");
  
  catsListUl.innerHTML = catList.render()
})



