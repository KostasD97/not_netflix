import React, { useState } from 'react';

const SegmentedControl = () => {
  const [selectedOption, setSelectedOption] = useState('movies');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="segmentedControl"
          value="movies"
          checked={selectedOption === 'movies'}
          onChange={handleOptionChange}
        />
        Movies
      </label>
      <label>
        <input
          type="radio"
          name="segmentedControl"
          value="series"
          checked={selectedOption === 'series'}
          onChange={handleOptionChange}
        />
        Series
      </label>
    </div>
  );
};

export default SegmentedControl;
