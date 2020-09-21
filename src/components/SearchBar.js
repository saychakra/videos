import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // this is an event callback, hence binding problem may arise, hence, we need to assign it as an
  // arrow function.
  onInputChangerFunctionCustom = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChangerFunctionCustom}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
