
import React from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
import youtube from '../apis/youtube';

class App extends React.Component {

  state = { videos: [] };

  searchYoutubeVideos = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar searchYoutubeVideos={this.searchYoutubeVideos} />
        App Component!
        <VideoList videos={this.state.videos} />
      </div>
    )
  }

}

export default App;
