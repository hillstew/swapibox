import React from "react";
import { Card } from "../Card/Card";

export const CardContainer = props => {
  let cards = props[props.view].map(subject => {
    return <Card subject={subject} view={props.view} />;
  });

  return <div>{cards}</div>;
};
