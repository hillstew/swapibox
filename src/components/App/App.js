import React, { Component } from "react";
import "../../main.scss";
import { Aside } from "../Aside/Aside";
import Main from "../Main/Main";
import fetchData from "../../API/api";
import { connect } from "react-redux";
import { getFilm } from '../../actions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }
  componentDidMount = async () => {
    try {
      const filmsData = await fetchData("https://swapi.co/api/films/");
      let film = this.getRandomFilm(filmsData.results);
      film = {
        openingCrawl: film.opening_crawl,
        title: film.title,
        year: film.release_date
      };
      this.props.getFilm(film)
    } catch (error) {
      this.setState({ error })
    }
  }

  getRandomFilm = films => {
    const randomNum = Math.floor(Math.random() * 7);
    return films[randomNum];
  };

  render() {
    const { film } = this.props;
    return film ? (
      <div className="App">
        <Aside film={film} />
        <Main />
      </div>
    ) : (
      <div />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFilm: (film) => dispatch(getFilm(film)),
})

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(App)
