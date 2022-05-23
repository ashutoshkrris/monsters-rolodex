import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  searchMonster(monsterName) {
    this.setState({
      monsters: this.state.monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(monsterName.toLowerCase());
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          className="search-box"
          onChange={(e) => this.searchMonster(e.target.value)}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
