import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const CardContainer = props => {
  let cards = props[props.view].map(subject => {
    return (
      <Card subject={subject} view={props.view} key={subject.name} />
    );
  });
  return <div>{cards}</div>;
};

CardContainer.propTypes = {
  view: PropTypes.string,
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array
};

export default CardContainer;
