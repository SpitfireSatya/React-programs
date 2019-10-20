
import React from 'react';

class ImageCard extends React.Component {

  state = { spans: 0 };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil((height/10) + 1) });
  }

  render() {
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img 
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    )
  }

}

export default ImageCard;
