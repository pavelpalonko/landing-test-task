import React from "react";
import classes from "./SliderElement.module.css"

const SliderElement = ({image, title, description }) => {

  return (
    <div className={classes.sliderElem}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={image} alt="" />
    </div>
  )
}

export default SliderElement