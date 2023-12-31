import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [displayStatus, setDisplayStatus] = useState(false);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
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

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const isBoardFull = () => {
    return board.every((square) => square !== null);
  };

  let gameStatus;
  if (winner) {
    gameStatus = `Winner: ${winner}`;
  } else if (isBoardFull()) {
    gameStatus = "Draw!";
  } else {
    gameStatus = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  useEffect(() => {
    let timer;
    if (gameStatus === "Draw!") {
      timer = setTimeout(() => {
        handleReset();
      }, 5000);
    } else {
      setDisplayStatus(true);
    }
    return () => clearInterval(timer);
  }, [gameStatus]);

  return (
    <div className="tic-tac-toe">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {displayStatus && <div className="status">{gameStatus}</div>}
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
