import React, { Component } from "react";
// import Header from "../Header/Header"
import { Controls } from "../Controls/Controls";
import { CardContainer } from "../CardContainer/CardContainer";
import { getCleanVehicles, fetchData, getCleanPeople, getCleanPlanets} from "../../Helper/Helper";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      view: "",
      planets: [],
      vehicles: [],
      people: [],
      favorites: []
    };
  }

  handleChange = async event => {
    let dataArray = [];
    const { name } = event.target;
    if (this.state[name].length === 0) {
      var data = await fetchData(`https://swapi.co/api/${name}/`);
      dataArray.push(...data.results)
      var cleanedData = await this.handleData(name, dataArray);
    }
    this.setState({ view: name, [name]: cleanedData });
  };

  handleData = (name, data) => {
    switch (name) {
      case "planets":
        return getCleanPlanets(data);
      case "people":
        return getCleanPeople(data);
      case "vehicles":
        return getCleanVehicles(data);
      default:
        return;
    }
  };

  render() {
    const { view, planets, vehicles, people, favorites } = this.state;
    return (
      <div className="main-div">
        {view === "" && <Controls handleChange={this.handleChange} />}
        {view !== "" && (
          <CardContainer
            view={view}
            planets={planets}
            vehicles={vehicles}
            people={people}
          />
        )}
      </div>
    );
  }
}

export default Main;
