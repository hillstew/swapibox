import React, { Component } from "react";
import "../../main.scss";
import { Aside } from "../Aside/Aside";
import fetchData from "../../API/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      film: null
    };
  }

  componentDidMount = async () => {
    const filmsData = await fetchData("https://swapi.co/api/films/");
    const film = await this.getRandomFilm(filmsData.results);
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
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

export default App;
