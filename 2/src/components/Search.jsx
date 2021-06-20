import React, { Component } from "react";

class Search extends Component {
  render() {
    const { filterVal, filterUpdate } = this.props;
    return (
      <form>
        <input
          type="text"
          ref="filterInput"
          placeholder="Type to filter.."
          value={filterVal}
          onChange={() => {
            filterUpdate(this.refs.filterInput.value);
          }}
        />
      </form>
    );
  }
}

export default Search;
