import React from "react";
import classes from "./Footer.module.css"
import Logo from "../Logo/Logo"
import instagram from "../../../assets/socialNetworks/instagram.svg"
import facebook from "../../../assets/socialNetworks/facebook.svg"
import telegram from "../../../assets/socialNetworks/telegram.svg"
import whatsapp from "../../../assets/socialNetworks/whatsapp.svg"
import viber from "../../../assets/socialNetworks/viber.svg"

const Footer = () => {

  return (
    <div className={classes.footerWrapp}>
      <div>
        <div>
          <div className={classes.logoWrapp}>
            <Logo />
          </div>
          <div className={classes.footerSocNetImage}>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={telegram} alt="" />
            <img src={viber} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className={classes.contacts}>
          <div>Валерия: +380505859409</div>
          <div>Анна: +380505859409</div>
          <div>Валерия: +380505859409</div>
        </div>
        <div className={classes.email}>
          <p>hr@dv-s.com</p>
        </div>
      </div>
      <p>Developers 2018-2022 © All rights reserved</p>
    </div>
  )
}

export default Footer