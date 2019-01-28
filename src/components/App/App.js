import React, { Component } from "react";
import "../../main.scss";
import { Aside } from "../Aside/Aside";
import Main from "../Main/Main";
import fetchData from "../../API/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: null
    };
  }

  componentDidMount = async () => {
    const filmsData = await fetchData("https://swapi.co/api/films/");
    let film = await this.getRandomFilm(filmsData.results);
    film = {
      openingCrawl: film.opening_crawl,
      title: film.title,
      year: film.release_date
    };
    await this.setState({ film });
  };

  getRandomFilm = films => {
    const randomNum = Math.floor(Math.random() * 7);
    return films[randomNum];
  };

  render() {
    const { film } = this.state;
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

export default App;
