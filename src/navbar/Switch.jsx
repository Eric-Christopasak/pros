import React from "react";
import '../navbar/Switch.css'

const ToggleSwitch = () => {
  return (
    <>
      <input type="checkbox" name="check-toggle" id="checkbox" hidden />
      <label htmlFor="checkbox" className="toggle">
        M
        <div className="toggle__switch">
          <div className="toggle__circle"></div>
        </div>
        F
      </label>
    </>
  );
};

export default ToggleSwitch;
