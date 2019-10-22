
import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component {

  render() {
    let videoList = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} updateSelectedVideo={this.props.updateSelectedVideo} />
    });

    return (
      <div className="ui relaxed divided list">
        {videoList}
      </div>
    );
  }

}

export default VideoList;
