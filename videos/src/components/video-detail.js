
import React from 'react';

class VideoDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.video) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <div className="ui segment">
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
        
      </div>
    )
  }

}

export default VideoDetail;
