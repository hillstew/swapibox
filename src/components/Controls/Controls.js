import React from "react";

export const Controls = props => {
  return (
    <div className="controls-div">
      <button onClick={props.handleChange} name="vehicles">VEHICLES</button>
      <button onClick={props.handleChange} name="planets">PLANETS</button>
      <button onClick={props.handleChange} name="people">PEOPLE</button>
    </div>
  );
};
