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

//  Function to mark a movie as watched

function markAsWatched() {
  const title = prompt("Enter the title of the movie to mark as watched:");
  const movie = movieLibrary.find(
    (m) => m.title.toLowerCase() === title.toLowerCase()
  );

  if (movie) {
    movie.isWatched = true;
    alert(`"${movie.title}" has been marked as watched!`);
  } else {
    alert(`Movie titled "${title}" not found.`);
  }
}