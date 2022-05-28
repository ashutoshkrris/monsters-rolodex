import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event) => {
    const monsterName = event.target.value.toLowerCase();
    this.setState({
      searchString: monsterName.toLowerCase(),
    });
  };

  render() {
    const { monsters, searchString } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          className="search-box"
          onChange={this.onSearchChange}
        />
        
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
