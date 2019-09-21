import React from 'react';
import './App.css';
import Timer from './timer.js';
import { useEffect, useState, useReducer } from "react";
import initState from "./grid";

function App() {
  const [state, dispatch] = useReducer(null, initState());
  console.log("state", state);

  function drawGrid() {
    const { grid } = state;
    return grid.map((row, i) => {
      return row.map(cell => {
        return <div key={cell.row + cell.col} className="cell cell-border" />;
      });
    });
  }

  return (
    <div className="game">
      <h1>Hungry snake</h1>
      <Timer pause={false} />
      <div className="grid-container">
        <div className="grid">{drawGrid()}</div>
      </div>
    </div>
  );
}

export default App;
