
import React from 'react';
import ImageCard from './image-card';
import './image-list.css'

class ImageList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const imageList = this.props.images.map(({description, id, urls}) => {
      return <ImageCard description={description} key={id} url={urls.regular} />
    });

    return (
      <div className="image-list">
        {imageList}
      </div>
    )

  }

}

export default ImageList;
