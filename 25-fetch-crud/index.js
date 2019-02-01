/* DOMContentLoaded */

document.addEventListener("DOMContentLoaded", function(){
  const movieList = document.querySelector(".js-movies")
  const detail = document.querySelector(".js-detail")
  const emptyState = detail.innerHTML
  addMoviesToList(movieList);
  delegateShowClick(movieList, detail);
  delegateEditClick(detail)
  delegateFormSubmit(detail)
})

/* shared between index and new */

function renderMovieListItem(movie, selected) {
  const movieListItem = document.createElement("li")

  movieListItem.dataset.id = movie.id;
  movieListItem.className = "movie js-movie";
  movieListItem.innerText = movie.title;
  if (selected === true) selectThisMovie(movieListItem)
  return movieListItem;

  //      <li id="movie-${ movie.id }" data-id="${ movie.id }" class="movie js-movie">
  //        ${ movie.title }
  //      </li>
}


/* shared between new and show */

function deselectAllMovies() {
  const selected = document.querySelector(".selected")
  if (selected) selected.classList.remove("selected");
}

function selectThisMovie(element) {
  element.classList.add("selected")
}


/* shared between new and edit */

function writeForm(movie) {
  return `<h2>Edit Movie</h2>
    <form class="movie-form js-movie-form" data-movie-id="${ movie.id }">
      <ul>
        <li>
          <label for="movie-title">Title</label>
          <input id="movie-title" name="movie-title" type="text" value="${ movie.title }" />
        </li>
        <li>
          <label for="movie-year">Year</label>
          <input id="movie-year" name="movie-year" type="number" value="${ movie.year }" />
        </li>
      </ul>
      <input type="submit" />
    </form>`
}

/* index */

function slapMoviesOnTheDom(movies, movieList){
  const listItems = movies.map(renderMovieListItem)
  listItems.forEach(li => movieList.append(li))
}

function addMoviesToList(movieList){
  fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => slapMoviesOnTheDom(movies, movieList))
}


/* show */
function delegateShowClick(movieList, detail){
  movieList.addEventListener("click", function(event){
    if (event.target.classList.contains("js-movie")) {
      showMovie(event.target.dataset.id, event.target, detail)
    }
  })
}

function showMovie(movieId, clickedElement, detail) {
  deselectAllMovies()
  selectThisMovie(clickedElement)
  detail.classList.add("loading")

  fetch(`http://localhost:3000/movies/${ movieId }`)
    .then(res => res.json())
    .then(data => slapMovieOnTheDetail(data, detail))
}

function slapMovieOnTheDetail(movie, whereToSlapIt) {
  whereToSlapIt.classList.remove("loading")
  // debugger
  whereToSlapIt.dataset.movieId = movie.id
  // const castLis = movie.cast.map(actor => `<li class="cast-member">${ actor }</li>`).join("")
  whereToSlapIt.innerHTML = `
    <h2><span class="js-title">${ movie.title }</span> (<span class="js-year">${ movie.year }</span>)</h2>
    <ul>

    </ul>
    <button class="js-edit">Edit</button>
    <button class="danger">Delete</button>
  `
}

function delegateEditClick(stableParent) {
  stableParent.addEventListener("click", function(e){
    if (e.target.className === "js-edit"){
      slapTheFormOnTheDom(stableParent)
    }
  })
}

function slapTheFormOnTheDom(detail){

  const movie = { };

  movie.id = detail.dataset.movieId
  movie.title = document.querySelector(".js-title").innerText
  movie.year = document.querySelector(".js-year").innerText

  detail.innerHTML = writeForm(movie)
}


function delegateFormSubmit(stableParent) {
  stableParent.addEventListener("submit", function(e){
    if (e.target.classList.contains("js-movie-form")) {
      e.preventDefault()
      // console.log("this was a submit of the movie form")
      const movieId = e.target.dataset.movieId;
      const movie = scrapeMovieInfoOffOfForm(e.target)
      makeUpdateFetchHappen(movieId, movie, stableParent)
    }
  })
}

function scrapeMovieInfoOffOfForm(form){
  return {
    title: form["movie-title"].value,
    year: form["movie-year"].value
  }
}

function makeUpdateFetchHappen(movieId, movie, whereToSlapMovie){
  fetch(`http://localhost:3000/movies/${ movieId }`, {
    method: "PATCH",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
  .then(data => slapMovieOnTheDetail(data, whereToSlapMovie))
}












