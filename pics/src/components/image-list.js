
import React from 'react';
import ImageCard from './image-card';
import './image-list.css'

class ImageList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const imageList = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />
    });

    return (
      <div className="image-list">
        {imageList}
      </div>
    )

  }

}

export default ImageList;
