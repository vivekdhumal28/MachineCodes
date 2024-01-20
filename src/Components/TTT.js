import React, { useState } from "react";
import "./TicTacToe/TicTacToe.css";

const TTT = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "0";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const boardIsFull = () => {
    return board.every((square) => square !== null);
  };

  let gameStatus;
  if (winner) {
    gameStatus = `Winner: ${winner}`;
  } else if (boardIsFull()) {
    gameStatus = "Draw";
  } else {
    gameStatus = `NextPlayer ${xIsNext ? "X" : "0"}`;
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <>
      <div className="tic-tac-toe">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="status">{gameStatus}</div>
        <div>
          <button className="reset-button" onClick={resetBoard}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TTT;
