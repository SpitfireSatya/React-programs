
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './comment-detail';
import ApprovalCard from './approval-card';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <h4> Warning!! </h4>
        <div>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" avatar={faker.image.avatar()} content="Good Job!" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 3:00 PM" avatar={faker.image.avatar()} content="Nice blog!" />
      </ApprovalCard>
    
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 6:00 PM" avatar={faker.image.avatar()} content="Awesome work!" />
      </ApprovalCard>

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
