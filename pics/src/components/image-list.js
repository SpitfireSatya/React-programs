
import React from 'react';

class ImageList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const imageList = this.props.images.map(({description, id, urls}) => {
      return <img alt={description} key={id} src={urls.regular} />
    });

    return (
      <div>
        {imageList}
      </div>
    )

  }

}

export default ImageList
