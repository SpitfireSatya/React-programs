
import faker from 'faker';
import React from 'react';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}></img>
      </a>
      <div className="content">
        <a className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 PM</span>
        </div>
        <div className="text">Nice Blog Post!!</div>
      </div>
    </div>
  )
};

export default CommentDetail;
