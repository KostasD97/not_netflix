import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function App() {
  return (
    <div className="App">
      <h1>Choose an option:</h1>
      <input type ="radio" name='button' value="Movies" id="movies"/>
      <label htmlFor='movies'>Movies</label>
      <input type ="radio" name='button' value="Series" id="series"/>
      <label htmlFor='series'>Series</label>
    </div>
  );
}

export default App;
