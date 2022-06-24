import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
      </div>
    </div>
  );
};

export default Comment;