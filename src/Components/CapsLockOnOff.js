import React, { useState } from "react";

const CapsLockOnOnff = () => {
  const [isCapLockOn, setIsCapsLockOn] = useState(false);

  const capsLockOn = (e) => {
    if (e.getModifierState("CapsLock")) {
      // getModifierState()
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  return (
    <div>
      <h1>CapsLock check</h1>
      <input
        type="text"
        onKeyUp={capsLockOn}
        placeholder="Enter yout text here"
      />
      {isCapLockOn && <p>Warning: CapsLock is ON</p>}
    </div>
  );
};

export default CapsLockOnOnff;
