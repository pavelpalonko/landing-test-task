import React, { useState } from "react";
import { Link } from "react-scroll"
import classes from "./BurgerMenu.module.css"

const BurgerMenu = () => {

  const [visableMenu, setVisableMenu] = useState(false)
  const rootClassesBurgerMenu = [classes.burgerMenu]

  if (visableMenu) {
    rootClassesBurgerMenu.push(classes.burgerMenuActive)
  }

  return (
    <>
      <div onClick={e => setVisableMenu(!visableMenu)} className={classes.burgerBtn}>

      </div>
      <div className={rootClassesBurgerMenu.join(' ')}>
        <nav>
          <ul>
            <li><Link to='services' spy={true} smooth={true} offset={50} duration={500}><span>Услуги</span></Link></li>
            <li><Link to='examples' spy={true} smooth={true} offset={50} duration={500}><span>Портфолио</span></Link></li>
            <li><Link to='slider' spy={true} smooth={true} offset={50} duration={500}><span>Этапы</span></Link></li>
            <li><Link to='info' spy={true} smooth={true} offset={-200} duration={500}><span>Дизайнеры</span></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default BurgerMenu