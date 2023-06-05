import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Choose an option:</h1>
      {/* radio buttons for movies and series first task */}
      <input type ="radio" name='button' value="Movies" id="movies"/>
      <label htmlFor='movies'>Movies</label>
      <input type ="radio" name='button' value="Series" id="series"/>
      <label htmlFor='series'>Series</label>
    </div>
  );
}

export default App;

