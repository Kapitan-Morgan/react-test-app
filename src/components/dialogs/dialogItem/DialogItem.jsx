import React from 'react'
import { NavLink } from "react-router-dom";

import './dialog.css'
const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog-user__element">
      <NavLink className="link dialog-user__link" activeClassName="dialog-user__link_active" to={path} >{props.name}</NavLink>
    </div>
  )
}

export default Dialog
