import React from 'react'
import Dialog from './dialogItem/DialogItem'
import Message from './Message/Message'
import './dialogs.css'

const Dialogs = (props) => {
  
  let dialogsElem = props.state.dialogs.map( d => <Dialog id={d.id} name={d.name}/> )
  let messagesElem = props.state.messages.map( m => <Message id={m.id} message={m.message}/> )

  return (
    <div className="dialogs">
      <div className="dialog-user dialogs__dialog-user">
        {dialogsElem}
      </div>
      <div className="dialog-messages dialogs__dialog-messages">
        {messagesElem}
      </div>
    </div>
  )
}

export default Dialogs
