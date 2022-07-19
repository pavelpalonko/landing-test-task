import React from "react";
import classes from "./SectionInfo.module.css"
import group from "../../../assets/infoImage/groupInfo.png"
import sphere from "../../../assets/infoImage/sphereInfo.png"
import groupAdaptive from "../../../assets/infoImage/groupInfoAdaptive.png"
import sphereAdaptive from "../../../assets/infoImage/sphereAdaptive.png"
import ButtonMain from "../ButtonMain/ButtonMain";

const SectionInfo = () => {

  return (
    <section className={classes.secInfo} id='info'>
      <div className={classes.titleSecInfo}>
        <h2>Необходимо больше информации?</h2>
        <img className={classes.groupAdaptive} src={groupAdaptive} alt="" />
        <p> Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет визуализировать ваш веб проект.</p>
        <ButtonMain>ОСТАВИТЬ ЗАЯВКУ</ButtonMain>
      </div>
      <img className={classes.group} src={group} alt="" />
      <img className={classes.sphere} src={sphere} alt="" />
      
      <img className={classes.sphereAdaptive} src={sphereAdaptive} alt="" />
    </section>
  )
}

export default SectionInfo