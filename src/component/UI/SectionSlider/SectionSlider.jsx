import React, { useEffect, useRef, useState } from "react";
import classes from "./SectionSlider.module.css"
import image1 from "../../../assets/sliderImage/image1.png"
import image2 from "../../../assets/sliderImage/image2.png"
import image3 from "../../../assets/sliderImage/image3.png"
import image4 from "../../../assets/sliderImage/image4.png"
import image5 from "../../../assets/sliderImage/image5.png"
import sphereDecoration from "../../../assets/image/sphere.269.png"
import waveDecoration from "../../../assets/image/wave.257.png"
import SliderElement from "../SliderElement/SliderElement";
import SliderButton from "../SliderButton/SliderButton";

const SectionSlider = () => {

  const sliderWrapp = useRef()
  const [currentLeft, setCurrentLeft] = useState(0)
  const [widthElement, setWidthElemnt] = useState(0)

  useEffect(() => {
    if (currentLeft > 0) {
      setCurrentLeft(-widthElement * (widthElement <= 455 ? 4 : 3))
    } else if (currentLeft < -widthElement * (widthElement <= 455 ? 4 : 3)) {
      setCurrentLeft(0)
    }

    const sliderWrappStyle = getComputedStyle(sliderWrapp.current)
    setWidthElemnt(parseInt(sliderWrappStyle?.width) / 5)

    sliderWrapp.current.style.left = `${currentLeft}px`
  }, [currentLeft, widthElement])

  return (
    <section className={classes.secSlider} id='slider'>
      <h2>Этапы разработки интернет-магазина</h2>
      <div className={classes.sliderContainer}>
        <div ref={sliderWrapp} className={classes.sliderWrapp}>
          <SliderElement image={image1} title='1. Анализ' description='Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.' />
          <SliderElement image={image2} title='2. Визуальное решение' description='Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.' />
          <SliderElement image={image3} title='3. Техническая реализация' description='После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.' />
          <SliderElement image={image4} title='4. Наполнение контентом' description=' Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.' />
          <SliderElement image={image5} title='5. Тестирование' description='Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.' />
        </div>
      </div>
      <SliderButton
        slideLeft={() => setCurrentLeft(currentLeft + widthElement)}
        slideRight={() => setCurrentLeft(currentLeft + (-widthElement))}
      />
      <img className={classes.sphere} src={sphereDecoration} alt="sphere" />
      <img className={classes.wave} src={waveDecoration} alt="wave" />
    </section>
  )
}

export default SectionSlider