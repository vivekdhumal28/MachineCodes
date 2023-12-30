import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

let PROGRESS_CAP = 100;
let PROGRESS_INCREMENT = 10;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgrss) =>
        prevProgrss + PROGRESS_INCREMENT >= PROGRESS_CAP
          ? PROGRESS_CAP
          : prevProgrss + PROGRESS_INCREMENT
      );
    }, 1000);

    return () => clearInterval(progressInterval);
  }, []);
  return (
    <div className="container">
      <div className="bar_fill" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
