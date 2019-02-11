import React, { Component } from "react"
import Card from "../Card/Card"
import PropTypes from "prop-types"
import { connect } from "react-redux"

export class CardContainer extends Component {
  render() {
    return this.props[this.props.view].map((subject) => {
      return (
        <Card subject={subject} view={this.props.view} key={subject.name} />
      )
    })
  }
}

CardContainer.propTypes = {
  view: PropTypes.string,
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array
}

const mapStateToProps = (state) => ({
  planets: state.planets,
  vehicles: state.vehicles,
  people: state.people,
  view: state.view
})

export default connect(mapStateToProps)(CardContainer)
