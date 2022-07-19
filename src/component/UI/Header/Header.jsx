import React from "react";
import classes from "./Header.module.css"
import Logo from "../Logo/Logo";
import { Link } from "react-scroll"
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {

  return (
    <header id='header'>
      <div className={classes.headerWrapp}>
        <div className={classes.logoWrapp}>
          <Logo />
        </div>
        <div className={classes.headerNavWrapp}>
          <nav>
            <ul>
              <li><Link to='services' spy={true} smooth={true} offset={50} duration={500}>Услуги</Link></li>
              <li><Link to='examples' spy={true} smooth={true} offset={50} duration={500}>Портфолио</Link></li>
              <li><Link to='slider' spy={true} smooth={true} offset={50} duration={500}>Этапы</Link></li>
              <li><Link to='info' spy={true} smooth={true} offset={-200} duration={500}>Дизайнеры</Link></li>
            </ul>
          </nav>
          <ButtonHeader>ЗАКАЗАТЬ</ButtonHeader>
        </div>
        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header