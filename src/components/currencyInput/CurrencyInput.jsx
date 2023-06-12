import './CurrencyInput.css'
import React from 'react'

const CurrencyInput = ({value, onChange}) => {
  return (
    <div className='input__wrapper'>
        <input className='input__currency' type='number' maxLength="16" value={value} onChange={onChange} />
        <p className='input__current-rate'>1 RUB = 1 RUB</p>
    </div>
  )
}

export default CurrencyInput