import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [section, setSection] = useState("none");
  const onOptionChange = (e) => {
    setSection(e.target.value);
  };
  return (
    <div className="App">
      <h1>Choose an option:</h1>
      {/* radio buttons for movies and series first task */}
      <input
        type="radio"
        name="button"
        value="Movies"
        id="movies"
        checked={section==="Movies"}
        onChange={onOptionChange}
      />
      <label htmlFor="movies">Movies</label>
      <input
        type="radio"
        name="button"
        value="Series"
        id="series"
        checked={section==="Series"}
        onChange={onOptionChange}
      />
      <label htmlFor="series">Series</label>

      {/* bold selection of section */}
      {section && <p>
        Selected section is <strong>{section}</strong>
      </p>}
    </div>
  );
}

export default App;
