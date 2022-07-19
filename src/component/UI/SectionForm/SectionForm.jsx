import React, { useState } from "react";
import classes from "./SectionForm.module.css"
import sphere from "../../../assets/formImage/groupSphere.png"
import phone from "../../../assets/formImage/groupPhone.png"
import groupeAdaptive from "../../../assets/formImage/groupAdaptive.png"
import ButtonMain from "../ButtonMain/ButtonMain";
import InputText from "../InputText/InputText";
import { useValidation } from "../../../common/hooks/useValidation";

const SectionForm = () => {

  const { validateName, validateEmail } = useValidation()

  const [formState, setFormState] = useState({
    name: {
      value: '',
      valid: false
    },
    contact: {
      value: '',
      valid: false
    },
    email: {
      value: '',
      valid: false
    }
  })

  const submitForm = (e) => {
    e.preventDefault()
  }

  const onFormControlValue = (name, value) => {
    setFormState((previosState) => {
      return { ...previosState, [name]: { ...previosState[name], value: value } }
    })
  }

  const onFormControlValid = (name, valid) => {
    setFormState((previosState) => {
      return { ...previosState, [name]: { ...previosState[name], valid: valid } }
    })
  }

  return (
    <section className={classes.secForm}>
      <h2>Обсудить проект</h2>
      <p>Расскажите о своих бизнес-целях и мы поможем вам в их достижении</p>
      <form>
        <div>
          <InputText
            value={formState.name.value}
            label='Имя'
            name='name'
            helperText='HelperText'
            validFunction={validateName}
            onControlValue={(value) => onFormControlValue('name', value)}
            onControlValid={(valid) => onFormControlValid('name', valid)}
          />
          <InputText
            value={formState.contact.value}
            label='Telegram/Viber'
            name='contact'
            helperText='HelperText'
            validFunction={validateName}
            onControlValue={(value) => onFormControlValue('contact', value)}
            onControlValid={(valid) => onFormControlValid('contact', valid)}
          />
          <InputText
            value={formState.email.value}
            label='Email'
            name='email'
            helperText='HelperText'
            validFunction={validateEmail}
            onControlValue={(value) => onFormControlValue('email', value)}
            onControlValid={(valid) => onFormControlValid('email', valid)}
          />
        </div>
        <ButtonMain onClick={submitForm}>ОТПРАВИТЬ</ButtonMain>
        <img className={classes.groupeAdaptive} src={groupeAdaptive} alt="" />
      </form>
      <img className={classes.sphere} src={sphere} alt="" />
      <img className={classes.phone} src={phone} alt="" />
    </section>
  )
}

export default SectionForm