import React from "react";

import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll";

class App extends React.Component {
  state = {
    searchQuery: "",
    robots: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  searchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const fileteredRobots = this.state.robots.filter((robots, i) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading Robots ....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriend</h1>
          <SearchBox searchQuery={this.searchQuery} />
          <Scroll>
            <CardList robots={fileteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
