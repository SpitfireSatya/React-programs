
import React from 'react';
import SearchBar from './search-bar';
import unsplash from '../api/unsplash';

class App extends React.Component {

  state = { imageList: [] }

  onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: searchTerm },
    });
    this.setState({imageList: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.imageList.length} images
      </div>
    );
  }

}

export default App;
