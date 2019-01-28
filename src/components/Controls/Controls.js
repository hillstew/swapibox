import React from "react";
import PropTypes from "prop-types";

 const Controls = props => {
  return (
    <div className="controls-div">
      <button onClick={props.handleChange} name="vehicles">
        <span>VEHICLES</span>
      </button>
      <button onClick={props.handleChange} name="planets">
        <span>PLANETS</span>
      </button>
      <button onClick={props.handleChange} name="people">
        <span>PEOPLE</span>
      </button>
    </div>
  );
};

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Controls;
