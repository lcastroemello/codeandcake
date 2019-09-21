import "./styles.css";

export default function initState() {
  const grid = initGrid();
  return {
    grid,
    snake: {
      head: {
        row: 5,
        col: 9
      },
      tail: []
    },
    food: {
      row: Math.floor(Math.random() * 5),
      col: Math.floor(Math.random() * 5)
    },
    score: 0,
    showGrid: true,
    lost: false,
    message: "Press <space> or touch/click to start the game",
    inprogress: false
  };
}

function initGrid() {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const cols = [];
    for (let col = 0; col < 20; col++) {
      cols.push({ row, col });
    }
    grid.push(cols);
  }
  return grid;
}

const random = () => {
  return Math.random();
};
