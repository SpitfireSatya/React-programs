
import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img 
          alt={this.props.description}
          src={this.props.url}
          key={this.props.key}
        />
      </div>
    )
  }

}

export default ImageCard;
