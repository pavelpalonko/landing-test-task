import React from "react";
import groupDecorationBasket from "../../../assets/image/groupPrewiev1.png"
import groupDecorationWave from "../../../assets/image/groupPrewiev2.png"
import sphereDecoration from "../../../assets/image/spherePrewiev.png"
import elipseDecorationAdaptive from "../../../assets/previewImage/elipseAdaptive.png"
import groupDecorationBasketAdaptive from "../../../assets/previewImage/basketAdaptive.png"
import ButtonMain from "../ButtonMain/ButtonMain";
import classes from './SectionPreview.module.css'

const SectionPreview = () => {

  return (
    <section className={classes.secPreview} >
      <div className={classes.titlePreviewWrapp}>
        <h1>Разработка интернет-магазина с нуля за неделю</h1>
        <p>Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки с командой Virtual Designers</p>
        <ButtonMain>ЗАКАЗАТЬ</ButtonMain>
      </div>
      <img className={classes.basketGroup} src={groupDecorationBasket} alt='preview'></img>
      <img className={classes.waveGroup} src={groupDecorationWave} alt='preview'></img>
      <img className={classes.sphere} src={sphereDecoration} alt='preview'></img>
      <img className={classes.basketGroupAdaptive} src={groupDecorationBasketAdaptive} alt='preview'></img>
      <img className={classes.elipse} src={elipseDecorationAdaptive} alt='preview'></img>
    </section>
  )
}

export default SectionPreview