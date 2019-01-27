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
    const { name: view } = event.target;
    if (this.state[view].length === 0) {
      let dataArray = [];
      const data = await fetchData(`https://swapi.co/api/${view}/`);
      dataArray.push(...data.results)
      var cleanedData = await this.handleData(view, dataArray);
    }
    this.setState({ view, [view]: cleanedData });
  };

  handleData = (view, data) => {
    switch (view) {
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
