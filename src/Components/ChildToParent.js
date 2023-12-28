//-----------------------------------------------------
// Pass data through button
/*
import React from "react";
import { useState } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <ChildComponent myClick={increment} />
    </div>
  );
}

const ChildComponent = ({ myClick }) => {
  return (
    <div>
      <button onClick={myClick}>Click to increment</button>
    </div>
  );
};

*/
//-----------------------------------------------------
// Pass data through text
import React from "react";
import { useState } from "react";

export default function ParentComponent() {
  const [text, setText] = useState("Vivek");

  const increment = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h2>Mytext : {text}</h2>
      <ChildComponent myClick={increment} />
    </div>
  );
}

const ChildComponent = ({ myClick }) => {
  return (
    <div>
      <input onChange={myClick} />
    </div>
  );
};

//-----------------------------------------------------
