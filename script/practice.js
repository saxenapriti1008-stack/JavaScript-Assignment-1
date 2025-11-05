// Our movie library array

let movieLibrary = [];

//  Function to add a movie

function addMovie() {
  const title = prompt("Enter the movie title:");
  const director = prompt("Enter the director:");
  const isWatchedInput = prompt("Have you watched this movie? (yes/no)").toLowerCase();
  const isWatched = isWatchedInput === "yes";

  const movie = {
    title: title,
    director: director,
    isWatched: isWatched,
  };

  movieLibrary.push(movie);
  alert(` Movie "${title}" by ${director} added to your list!`);
}


//  Function to list all movies

function listMovies() {
  if (movieLibrary.length === 0) {
    alert("Your movie list is empty!");
    return;
  }

  let movieList = " Your Movies:\n\n";
  movieLibrary.forEach((movie, index) => {
    movieList += `${index + 1}. ${movie.title} by ${movie.director} - ${
      movie.isWatched ? " Watched" : " Not Watched"
    }\n`;
  });

  alert(movieList);
  console.log(movieLibrary); // Optional for debugging
}

