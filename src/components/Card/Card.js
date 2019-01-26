import React from "react";

export const Card = props => {
  let peopleCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Homeworld: {props.subject.homeworld}</p>
      <p>Species: {props.subject.species}</p>
      <p>Population: {props.subject.population}</p>
      <p>Favorite: {props.subject.favorite}</p>
    </div>
  );

  let planetCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Terrain: {props.subject.terrain}</p>
      <p>Population: {props.subject.population}</p>
      <p>Climate: {props.subject.climate}</p>
      <p>Residents: {props.subject.residents}</p>
      <p>Favorite: {props.subject.favorite}</p>
    </div>
  );

  let vehicleCard = (
    <div>
      <p>Name: {props.subject.name}</p>
      <p>Model: {props.subject.model}</p>
      <p>Class: {props.subject.class}</p>
      <p>Passengers: {props.subject.passengers}</p>
      <p>Favorite: {props.subject.favorite}</p>
    </div>
  );

  let showFavorites = () => {

  }

  return (
    <div className="card">
      {props.view === "vehicles" && <div>{vehicleCard}</div>}
      {props.view === "planets" && <div>{planetCard}</div>}
      {props.view === "people" && <div>{peopleCard}</div>}
      {/* {props.view === "favorites" && {showFavorites}} */}
    </div>
  );
};
