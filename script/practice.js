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