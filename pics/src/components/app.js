
import React from 'react';
import SearchBar from './search-bar';
import axios from 'axios';

class App extends React.Component {

  state = { imageList: [] }

  onSearchSubmit = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchTerm },
      headers: {
        Authorization: 'Client-ID 835229a505a038203057fc4cbedc974c067600321a6e24e2e5ee03466f7f8815'
      }
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
