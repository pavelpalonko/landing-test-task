import React from "react";
import logo from "../../../assets/svg/Frame.svg"
import {Link} from "react-scroll"
import classes from "./Logo.module.css"

const Logo = () => {

  return (
    <Link to='header' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className={classes.logoImage} /></Link>
    
  )
}

export default Logo