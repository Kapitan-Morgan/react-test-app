import React from 'react';
import Post from './Post/Post';
import './myposts.css';

const MyPosts = (props) => {

  let postsElem = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

  return (
    <div>
      {postsElem}
    </div>
  )
}

export default MyPosts
