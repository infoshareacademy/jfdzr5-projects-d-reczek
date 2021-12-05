function init() {
  const form = document.querySelector("form");
  const titleDiv = document.querySelector(".title");
  const rateDiv = document.querySelector(".rate");
  const posterImg = document.getElementById("poster");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputTitle = document.querySelector(".movie-title").value;
    const inputYear = document.querySelector(".movie-year").value;
    async function searchMovies() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?t=${inputTitle}&y=${inputYear}&apikey=a8fcf47b`
        );
        const data = await res.json();
        console.log(data);

        console.log(data.Title);
        console.log(
          `Tytuł: ${data.Title}  Ocena na IMDB: ${data.imdbRating} plakat ${data.Poster}`
        );
        const title = data.Title;
        const rate = data.imdbRating;
        const poster = data.Poster;
        console.log(title);

        titleDiv.textContent = `Tytuł filmu ${title}`;
        rateDiv.textContent = `Ocena na IMDB ${rate}`;
        posterImg.src = poster;
        console.log(posterImg);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  });
  console.log(posterImg.src);
  // console.log(searchMovies);
}
window.onload = init;
// http://www.omdbapi.com/?i=tt7830912&apikey=a8fcf47b
