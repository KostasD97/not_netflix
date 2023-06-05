import React, { useState } from 'react';

const SegmentedControl = () => {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('movies');

  // Event handler for when an option is selected
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Radio button for "Movies" */}
      <label>
        <input
          type="radio"
          name="segmentedControl" // Group name for the radio buttons
          value="movies" // Value for the "Movies" option
          checked={selectedOption === 'movies'} // Checked if this option is selected
          onChange={handleOptionChange} // Event handler for option change
        />
        Movies
      </label>

      {/* Radio button for "Series" */}
      <label>
        <input
          type="radio"
          name="segmentedControl" // Group name for the radio buttons (same as above)
          value="series" // Value for the "Series" option
          checked={selectedOption === 'series'} // Checked if this option is selected
          onChange={handleOptionChange} // Event handler for option change
        />
        Series
      </label>
    </div>
  );
};

export default SegmentedControl;
