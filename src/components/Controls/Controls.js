import React from "react";

export const Controls = props => {
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
