import React, { Component } from "react";
import Controls from "../Controls/Controls";
import CardContainer from "../CardContainer/CardContainer";
import {
  getCleanVehicles,
  fetchData,
  getCleanPeople,
  getCleanPlanets
} from "../../Helper/Helper";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      view: "",
      planets: [],
      vehicles: [],
      people: []
    };
  }

  handleChange = async event => {
    const { name: view } = event.target;
    if (this.state[view].length === 0) {
      let dataResults = [];
      const data = await fetchData(`https://swapi.co/api/${view}/`);
      dataResults.push(...data.results);
      var cleanedData = await this.handleData(view, dataResults);
      this.setState({ view, [view]: cleanedData });
    } else {
      this.setState({ view });
    }
  };

  handleData = (view, dataResults) => {
    switch (view) {
      case "planets":
        return getCleanPlanets(dataResults);
      case "people":
        return getCleanPeople(dataResults);
      case "vehicles":
        return getCleanVehicles(dataResults);
      default:
        return;
    }
  };

  render() {
    const { view, planets, vehicles, people } = this.state;
    return (
      <div className="main-div">
        {view === "" && <Controls handleChange={this.handleChange} />}
        {view !== "" && (
          <div>
            <Controls handleChange={this.handleChange} />
            <CardContainer
              view={view}
              planets={planets}
              vehicles={vehicles}
              people={people} />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
