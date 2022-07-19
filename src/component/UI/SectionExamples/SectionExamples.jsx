import React, { useEffect, useRef, useState } from "react";
import classes from "./SectionExamples.module.css"
import shop from "../../../assets/exanpleImage/shop.png"
import flowers from "../../../assets/exanpleImage/flowers.png"
import barber from "../../../assets/exanpleImage/barber.png"
import beauty from "../../../assets/exanpleImage/beauty.png"
import confectionery from "../../../assets/exanpleImage/confectionery.png"
import paint from "../../../assets/exanpleImage/paint.png"
import sphereDecoration from "../../../assets/image/sphereExample.png"
import waveDecoration from "../../../assets/image/waveExample.png"
import ExamplesElement from "../ExamplesElement/ExamplesElement";
import SliderButton from "../SliderButton/SliderButton";

const SectionExamples = () => {

  const sliderWrapp = useRef()
  const [marginLeft, setMarginLeft] = useState(0)

  useEffect(() => {

    if (marginLeft > 0) {
      setMarginLeft(-355)
    }

    if (marginLeft < -355) {
      setMarginLeft(0)
    }

    sliderWrapp.current.style.marginLeft = `${marginLeft}px`
  }, [marginLeft])

  return (
    <section className={classes.secExamples} id='examples'>
      <h2>Примеры онлайн магазинов</h2>
      <div className={classes.storeContainer}>
        <div ref={sliderWrapp} className={classes.storeBlockWrapp}>
          <ExamplesElement image={shop} storeName='для оптовых закупок' />
          <ExamplesElement image={flowers} storeName='для флористов' />
          <ExamplesElement image={barber} storeName='для парикмахеров' />
          <ExamplesElement image={beauty} storeName='для визажистов' />
          <ExamplesElement image={confectionery} storeName='для кондитеров' />
          <ExamplesElement image={paint} storeName='для художников' />
        </div>
      </div>
      <div className={classes.slideButtonWrapp}>
        <SliderButton
          slideLeft={() => setMarginLeft(marginLeft + 355)}
          slideRight={() => setMarginLeft(marginLeft + (-355))}
        />
      </div>
      <img className={classes.sphere} src={sphereDecoration} alt="sphere" />
      <img className={classes.wave} src={waveDecoration} alt="wave" />
    </section>
  )
}

export default SectionExamples

