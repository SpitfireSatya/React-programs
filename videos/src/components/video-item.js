
import React from 'react';
import './video-item.css';

class VideoItem extends React.Component {

  onVideoSelect = () => {
    this.props.updateSelectedVideo(this.props.video);
  }

  render() {
    return (
      <div onClick={this.onVideoSelect} className="video-item item">
        <img alt={this.props.video.snippet.title}
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header"> {this.props.video.snippet.title} </div>
        </div>
      </div>
    )
  }

}

export default VideoItem;
