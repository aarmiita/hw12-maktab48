import React, { Component } from "react";

class Search extends Component {
  render() {
    const { filterVal, filterUpdate } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterVal}
          onChange={(e) => {
            filterUpdate(e.target.value);
          }}
        />
      </form>
    );
  }
}

export default Search;
