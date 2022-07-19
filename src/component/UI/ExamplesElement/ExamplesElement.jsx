import React from "react";
import classes from "./ExamplesElement.module.css"

const ExamplesElement = ({ image, storeName }) => {

  return (
    <div className={classes.storeBlock}>
      <img src={image} alt="" />
      <div className={classes.storeDesc}>
        <h3>Онлайн-магазин</h3>
        <p>{storeName}</p>
      </div>
    </div>
  )
}

export default ExamplesElement