import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info'
import './profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <Info mainUrl="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&h=750"/>
      <MyPosts newPostText={props.state.newPostText} store={props.store} posts={props.state.posts} />
    </div>
  )
}

export default Profile;
