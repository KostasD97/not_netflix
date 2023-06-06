import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// imports from the folder section
import MovieList from "./components/MovieList.js";
import SearchBox from "./components/SearchBox.js";
import MovieListHeading from "./components/MovieListHeading.js";

// second task using list of movies...
const App = () => {
  // for the movies list
  const [movies, setMovies] = useState([]);
  // for the search bar
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
      {/* call of the api for search bar
          whenever you type a word to the search bar it
          shows the most compatible one in order.. */}
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
