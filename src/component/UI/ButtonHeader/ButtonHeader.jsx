import React from "react";
import classes from "./ButtonHeader.module.css"

const ButtonHeader = ({children, ...props}) => {

  return (
    <button className={classes.myBtnHead} {...props} >
      {children}
    </button>
  )
}

export default ButtonHeader