import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// imports from the folder section
import SearchBox from "./components/SearchBox.js";
import MovieSeriesList from "./components/MovieSeriesList.js";
import MovieSeriesListHeading from "./components/MovieSeriesListHeading.js";
import AddToFavourites from "./components/AddToFavourites.js";

// second task using list of movies...
const App = () => {
  // for the movies list
  const [movies, setMovies] = useState([]);
  // for the search bar
  const [searchValue, setSearchValue] = useState("");
  //take information from the list above for movies/series
  //for the favourites listing
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    // whenever you type a word shows the most common movies/series
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=77d1ee79`;

    const response = await fetch(url);
    const responseJson = await response.json();

    //if there is a matching word on the list it shows the most common results
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  //when we try to enter a name on the search bar it gets the name from it
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieSeriesListHeading heading="Movies" />
        <MovieSeriesListHeading heading="Series" />
        {/* call of the api for search bar
          whenever you type a word to the search bar it
          shows the most compatible one in order.. */}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieSeriesList
          movies={movies}
          favouriteComponent={AddToFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
