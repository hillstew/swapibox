import React, { Component } from "react"
import { connect } from "react-redux"

import { getPlanets, setView, getPeople, getVehicles } from "../../actions"
import Controls from "../Controls/Controls"
import CardContainer from "../CardContainer/CardContainer"
import {
  getCleanVehicles,
  fetchData,
  getCleanPeople,
  getCleanPlanets,
  getFavorites
} from "../../Helper/Helper"

class Main extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  handleClick = async (event) => {
    const { name: view } = event.target
    this.props.setView(view)
    let dataResults = []
    const data = await fetchData(`https://swapi.co/api/${view}/`)
    dataResults.push(...data.results)
    let cleanedData = await this.handleData(view, dataResults)
    view === "vehicles" && this.props.getVehicles(cleanedData)
    view === "people" && (await this.props.getPeople(cleanedData))
    view === "planets" && (await this.props.getPlanets(cleanedData))
    this.setState({ isLoading: false })
  }

  handleData = (view, dataResults) => {
    switch (view) {
      case "planets":
        return getCleanPlanets(dataResults)
      case "people":
        return getCleanPeople(dataResults)
      case "vehicles":
        return getCleanVehicles(dataResults)
      case "favorites":
        return getFavorites()
      default:
        return
    }
  }

  render() {
    const { isLoading } = this.state
    return (
      <div className="main-div">
        <Controls handleClick={this.handleClick} />
        {!isLoading && <CardContainer />}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (planets) => dispatch(getPlanets(planets)),
  getPeople: (people) => dispatch(getPeople(people)),
  getVehicles: (vehicles) => dispatch(getVehicles(vehicles)),
  setView: (view) => dispatch(setView(view))
})

const mapStateToProps = (state) => ({
  planets: state.planets,
  view: state.view,
  vehicles: state.vehicles,
  people: state.people
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Main)
