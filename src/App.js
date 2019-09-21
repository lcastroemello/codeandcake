import React from 'react';
import './App.css';
import Timer from './timer.js';

function App() {
  return (
    <div className="App">
     <Timer pause={false} />
    </div>
  );
}

export default App;
