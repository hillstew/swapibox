import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  const peopleCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Homeworld: {props.subject.homeworld}</p>
      <p>Species: {props.subject.species}</p>
      <p>Population: {props.subject.population}</p>
    </div>
  );

  const planetCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Terrain: {props.subject.terrain}</p>
      <p>Population: {props.subject.population}</p>
      <p>Climate: {props.subject.climate}</p>
      <p>Residents: {props.subject.residents}</p>
    </div>
  );

  const vehicleCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Model: {props.subject.model}</p>
      <p>Class: {props.subject.class}</p>
      <p>Passengers: {props.subject.passengers}</p>
    </div>
  );

  return (
    <div className="card">
      {props.view === "vehicles" && <div>{vehicleCard}</div>}
      {props.view === "planets" && <div>{planetCard}</div>}
      {props.view === "people" && <div>{peopleCard}</div>}
    </div>
  );
};

Card.propTypes = {
  subject: PropTypes.object,
  view: PropTypes.string
}

export default Card;
