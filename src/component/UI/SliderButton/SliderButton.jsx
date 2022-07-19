import React from "react";
import classes from "./SliderButton.module.css"

const SliderButton = ({ slideLeft, slideRight }) => {

  return (
    <div className={classes.btnWrapp}>
      <button onClick={slideLeft} className={classes.btnR}>
        <div>
        </div>
      </button>
      <button onClick={slideRight} className={classes.btnL}>
        <div>
        </div>
      </button>
    </div>
  )
}

export default SliderButton