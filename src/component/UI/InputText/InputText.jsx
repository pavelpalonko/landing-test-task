import React, {useState} from "react";
import { TextField } from "@mui/material";

const InputText = ({ value, label, name, helperText, validFunction, onControlValue, onControlValid }) => {

  const [valid, setValid] = useState(false)

  const onInputBlure = (validFunc) => (e) => {
    const isValid = validFunc(e)

    setValid(!isValid)
    onControlValid(isValid)
  }

  const inputValueChange = (e) => {
    onControlValue(e.target.value)
  }

  return (
    <TextField
      value={value}
      label={label}
      name={name}
      // helperText={valid ? helperText : ' '} // if prop 'ShowTooltipAlways' === true, then show tooltip always, otherwise only on error.
      error={valid}
      onChange={inputValueChange}
      onBlur={onInputBlure(validFunction)}
      sx={{
        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        'input:valid:focus + fieldset': { border: '2px solid #67AEFC' },
        'input:valid + fieldset': { border: '1px solid #67AEFC', borderRadius: '10px' },
        'label.Mui-focused': { color: '#67AEFC' },
        'p.Mui-focused': { color: '#939393' },
        'label': { color: '#939393' }
      }} />
  )
}

export default InputText