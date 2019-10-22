
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
    if(!this.state.selectedVideo) {
      this.setState({ selectedVideo: response.data.items[0] });
    }
  }

  updateSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo: selectedVideo });
  }

  componentDidMount() {
    this.searchYoutubeVideos('Matt Lange - Isorhythm')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar searchYoutubeVideos={this.searchYoutubeVideos} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} updateSelectedVideo={this.updateSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
