import logo from "./logo.svg";
//import "./App.css";

//import { useState } from "react";

// Radio Button ready
// function App() {
//   const [section, setSection] = useState("none");
//   const onOptionChange = (e) => {
//     setSection(e.target.value);
//   };
//   return (
//     <div className="App">
//       <h1>Choose an option:</h1>
//       {/* radio buttons for movies and series first task */}
//       <input
//         type="radio"
//         name="button"
//         value="Movies"
//         id="movies"
//         checked={section==="Movies"}
//         onChange={onOptionChange}
//       />
//       <label htmlFor="movies">Movies</label>
//       <input
//         type="radio"
//         name="button"
//         value="Series"
//         id="series"
//         checked={section==="Series"}
//         onChange={onOptionChange}
//       />
//       <label htmlFor="series">Series</label>
//       {/* bold selection of section */}
//       {section && <p>
//         Selected section is <strong>{section}</strong>
//       </p>}
//     </div>
//   );
// }

import React, { useState } from "react";
import MovieList from "./components/MovieList";

// second task using list of movies...
const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
