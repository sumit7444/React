import { useState } from "react";

export default function LudoBord() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  const [arr, setArr] = useState(["no moves"]);

  const updateBlue = () => {
    // Update moves count
    setMoves(prevMoves => ({ ...prevMoves, blue: prevMoves.blue + 1 }));

    // Update moves array correctly
    setArr(prevArr => [...prevArr, "blue moves"]);

    console.log(arr); // Note: React state updates asynchronously, console.log may show old value
  };

  const updateYellow = () => {
    setMoves(prevMoves => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }));
    setArr(prevArr => [...prevArr, "yellow moves"]);
  };

  return (
    <div>
      <p>Game Begins</p>
      <div className="board"></div>

      <p>Blue Moves = {moves.blue}</p>
      <button style={{ background: "blue" }} onClick={updateBlue}>+1</button>

      <p>Yellow Moves = {moves.yellow}</p>
      <button style={{ background: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

      <p>Green Moves = {moves.green}</p>
      <button style={{ background: "green" }} onClick={() => {
        setMoves(prev => ({ ...prev, green: prev.green + 1 }));
        setArr(prevArr => [...prevArr, "green moves"]);
      }}>+1</button>

      <p>Red Moves = {moves.red}</p>
      <button style={{ background: "red" }} onClick={() => {
        setMoves(prev => ({ ...prev, red: prev.red + 1 }));
        setArr(prevArr => [...prevArr, "red moves"]);
      }}>+1</button>

      <h4>All Moves:</h4>
      <ul>
        {arr.map((move, idx) => <li key={idx}>{move}</li>)}
      </ul>
    </div>
  );
}