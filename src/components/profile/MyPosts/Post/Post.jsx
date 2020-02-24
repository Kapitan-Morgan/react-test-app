import React from 'react';
import './post.css';

const Post = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      <div>Like: {props.like}</div>
    </div>
  )
}

export default Post
