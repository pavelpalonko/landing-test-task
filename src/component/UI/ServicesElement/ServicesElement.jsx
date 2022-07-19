import React, { useRef } from "react";
import classes from "./ServicesElement.module.css"

const ServicesElement = ({ title, description }) => {

  const descriptionElement = useRef()

  const openDescription= () => {
    descriptionElement.current.style.display = descriptionElement.current.style.display !== 'block' ? 'block': 'none'
  }

  return (
    <div className={classes.optionServicesWrapp}>
      <div className={classes.optionServices}>
        <div>
          <div className={classes.ball}></div>
          <p>{title}</p>
        </div>
        <div onClick={openDescription} className={classes.openBtn}></div>
      </div>
      <div ref={descriptionElement} className={classes.optionServicesDesc}>
        <div>
          <div>
            <div className={classes.ballDecs}></div>
            <h3>{title}</h3>
          </div>
          <div onClick={openDescription} className={classes.closeBtnDesc}></div>
        </div>
        <p>{description}</p>
        <div></div>
      </div>
    </div>
  )
}

export default ServicesElement