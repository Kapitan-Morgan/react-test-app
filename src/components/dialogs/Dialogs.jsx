import React from 'react'
import Dialog from './dialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from '../../store/dialogsReducer'
import './dialogs.css'

const Dialogs = (props) => {

  let dialogsElem = props.state.dialogs.map( d => <Dialog id={d.id} name={d.name}/> )
  let messagesElem = props.state.messages.map( m => <Message id={m.id} message={m.message}/> )

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  }

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className="dialogs">
      <div className="dialog-user dialogs__dialog-user">
        {dialogsElem}
      </div>
      <div className="dialog-messages dialogs__dialog-messages">
        {messagesElem}
      </div>
      <div className="new-message">
        <div className="new-message__textarea">
          <textarea onChange={onMessageChange} value={props.state.newMessageBody} ></textarea>
        </div>
        <div className="new-message__nav">
          <button onClick={ addMessage } className="button new-message__button">
            <span>Send Message</span>
            <i className="new-message__i"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
