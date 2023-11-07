import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css'; // Import the CSS file

const App = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFC733', '#33FFC7'];

  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
