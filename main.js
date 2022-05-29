const results = document.querySelector("#results")

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
        console.log(movie)
        results.insertAdjacentHTML("beforeend", 
        `<li>
        <img src="${movie.Poster}"
        ${movie.Title}
        </li>`) 
    })
    })
  