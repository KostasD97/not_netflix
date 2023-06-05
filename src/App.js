//import logo from "./logo.svg";
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

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList.js";
import SearchBox from "./components/SearchBox.js";
import MovieListHeading from "./components/MovieListHeading.js";

// second task using list of movies...
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //take information from the list above
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=77d1ee79`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  //when we try to enter a name on the search bar it gets the name from it
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app mt-4 mb-4">
      <div className="row">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
