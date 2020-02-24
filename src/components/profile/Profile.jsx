import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="block profile__block">
        <img className="block__img" src={props.mainUrl} alt=""/>
        <div className="desc profile__desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni id, 
            aliquam quibusdam nam ut, quos soluta harum natus, deleniti accusamus consequuntur 
            molestias minima odit voluptatem numquam officia incidunt. Beatae omnis dicta vero 
            cupiditate neque sunt voluptas, tempora quae. Assumenda.
          </p>
        </div>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
