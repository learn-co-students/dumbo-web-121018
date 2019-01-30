


fetch("http://localhost:3000/colors")
  .then(res => res.json())
  .then(data => handleData(data))


const buttonWasClicked = event => {

  const colorId = event.target.dataset.colorId
  // console.log(colorId)

  fetch("http://localhost:3000/votes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ color_id: colorId })
  })
}


function handleData(colorData){
  // find the place to put the colors
  const ul = document.getElementById("colors")
  // iterate
  
  colorData.forEach(color => {
    // make some LI's to hold
    const li = document.createElement("li")

    li.innerHTML = `
      <h2>#${ color.hex }</h2>
      <span>Votes: ${ color.votes }<span>
    `

    const button = document.createElement("button")
    button.innerText = "+"

    button.dataset.colorId = color.id;

    button.addEventListener("click", buttonWasClicked)

    li.append(button);

    li.style.background = "#" + color.hex;
    // the id, the color, and the votes
    ul.append(li)

  })
}