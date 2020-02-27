import React from 'react';
import Post from './Post/Post';
import './myposts.css';

const MyPosts = (props) => {

  let postsElem = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )
  let newPostElement = React.createRef();
  let addPost = () => {
    props.store.addPost();
  }

  let onPostChange = () => {
    props.store.updateNewPostText(newPostElement.current.value)
  }

  return (
    <div className="posts-profile">
      <h3>My posts</h3>
      <div className="new-post">
        <div className="new-post__textarea">
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div className="new-post__nav">
          <button onClick={ addPost } className="button new-post__button">
            <span>Add post</span>
            <i className="new-post__i"></i>
          </button>
        </div>
      </div>
      <div className="posts posts-profile__posts">
        {postsElem}
      </div>
    </div>
  )
}

export default MyPosts
