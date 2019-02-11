import React from "react";
import PropTypes from "prop-types";

 const Controls = ({ handleClick }) => {
  return (
    <div className="controls-div">
      <button onClick={handleClick} name="vehicles">
        <span>VEHICLES</span>
      </button>
      <button onClick={handleClick} name="planets">
        <span>PLANETS</span>
      </button>
      <button onClick={handleClick} name="people">
        <span>PEOPLE</span>
      </button>
    </div>
  );
};

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Controls;
