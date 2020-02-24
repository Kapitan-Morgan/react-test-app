import React from 'react';
import Post from './Post/Post';
import './myposts.css';

const MyPosts = () => {
  return (
    <div>
      <Post message='Hi, how are you?' like='5' />
      <Post message='My first post!' like='25' />
    </div>
  )
}

export default MyPosts
