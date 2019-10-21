
import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {

  }

  render() {
    return (
      <div className="search-bar ui segment">
        <from onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search </label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </from>
      </div>
    )
  }

}

export default SearchBar;
