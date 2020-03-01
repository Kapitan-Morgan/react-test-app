import React from 'react'

const Message = (props) => {
  return <div className="message dialog-messages__message">id: {props.id} - {props.message}</div>
}

export default Message
