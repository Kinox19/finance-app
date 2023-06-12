import './CurrencyInput.css'
import React from 'react'

const CurrencyInput = ({value, onChangeValue}) => {
  
  return (
    <div className='input__wrapper'>
        <input className='input__currency' type='number' maxLength="16" placeholder='0' value={value} onChange={(e) => onChangeValue(e.target.value)} />
        <p className='input__current-rate'>1 RUB = 1 RUB</p>
    </div>
  )
}

export default CurrencyInput