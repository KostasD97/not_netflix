import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
import SegmentedControl from './components/SegmentedControl';

const App = () => {
  return (
    <div>
      <h1>Choose an option:</h1>
      <SegmentedControl />
    </div>
  );
};

export default App;
