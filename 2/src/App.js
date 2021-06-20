import React, { Component } from "react";

import Search from "./components/Search";
import ShortList from "./components/ShortList";
import NamesList from "./components/NamesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favourites: [],
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  addFavourite(id) {
    const newSet = this.state.favourites.concat([id]);
    this.setState({
      favourites: newSet,
    });
  }

  deleteFavourite(id) {
    const { favourites } = this.state;
    const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
    this.setState({
      favourites: newList,
    });
  }

  render() {
    const hasSearch = this.state.filterText.length > 0;
    return (
      <div>
        <header>
          <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </header>
        <main>
          <ShortList
            data={this.props.data}
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite.bind(this)}
          />

          <NamesList
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
            addFavourite={this.addFavourite.bind(this)}
          />

          {hasSearch && (
            <button onClick={this.filterUpdate.bind(this, "")}>
              Clear Search
            </button>
          )}
        </main>
      </div>
    );
  }
}

export default App;
