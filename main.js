const results = document.querySelector("#results")
const inputEl = document.getElementById("search-input")
const submitEl = document.querySelector("#submit-btn")
const form = document.querySelector("#search-form")


const searchMovies = (input) => {
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
    .then(response => response.json())
      .then((data) => {
          data.Search.forEach((movie) => {
              results.insertAdjacentHTML("beforeend", 
              `<li class="list-inline-item">
              <img src="${movie.Poster}"
              ${movie.Title}
              </li>`) 
            })
        })
}
    
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = inputEl.value
    searchMovies(input)
    results.innerHTML = ""
    })

searchMovies("Joker")