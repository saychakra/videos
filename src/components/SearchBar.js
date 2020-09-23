import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // this is an event callback, hence binding problem may arise, hence, we need to assign it as an
  // arrow function.
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    //to prevent the default submit action of the browser
    event.preventDefault();
    //TODO: Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
