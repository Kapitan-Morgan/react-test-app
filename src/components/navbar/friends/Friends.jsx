import React from 'react';
import './friends.css'

const Friend = (props) => {
  return (
    <li className="friend-item friends-list__friend-item">
      <img className="friend-item__img" src={props.logoUrl} alt="" />
      <span className="friend-item__span">{props.name}</span>
    </li>
  )
}

const Friends = (props) => {
  let friendsElem = props.friends.map( f => <Friend id={f.id} name={f.name} logoUrl={f.logoUrl}/> )
  return (
    <div className="friends">
      <div className="label friends__label">
        <span className="label__span">Friends</span>
      </div>
      <ul className="friends-list friends__friends-list">
        {friendsElem}
      </ul>
    </div>
  )
}

export default Friends