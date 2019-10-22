
import React from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
import youtube from '../apis/youtube';
import VideoDetail from './video-detail';

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  searchYoutubeVideos = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });
    this.setState({ videos: response.data.items });
  }

  updateSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo: selectedVideo });
    console.log(selectedVideo);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar searchYoutubeVideos={this.searchYoutubeVideos} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} updateSelectedVideo={this.updateSelectedVideo} />
      </div>
    )
  }

}

export default App;
