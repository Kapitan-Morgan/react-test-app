import React from 'react';
import './post.css';

const Post = (props) => {
  return (
    <div>
      <div><span>id: {props.id}</span></div>
      <div>{props.message}</div>
      <div>Like: {props.likesCount}</div>
      <br/>
    </div>
  )
}

export default Post
