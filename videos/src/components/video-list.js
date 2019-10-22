
import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let videoList = this.props.videos.map((video) => {
      return <VideoItem video={video} />
    });

    return (
      <div>
        video count: {this.props.videos.length}
        {videoList}
      </div>
    );
  }

}

export default VideoList;
