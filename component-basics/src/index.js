
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './comment-detail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" avatar={faker.image.avatar()} content="Good Job!" />
      <CommentDetail author="Alex" timeAgo="Today at 3:00 PM" avatar={faker.image.avatar()} content="Nice blog!" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 6:00 PM" avatar={faker.image.avatar()} content="Awesome work!" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
