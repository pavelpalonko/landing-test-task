import React from "react";
import classes from "./ButtonMain.module.css"

const ButtonMain = ({children, ...props}) => {

  return (
    <button className={classes.myBtnMain} {...props} >
      {children}
    </button>
  )
}

export default ButtonMain