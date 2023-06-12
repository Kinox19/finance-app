import CurrencyDropDown from '../currencyDropDown/CurrencyDropDown';
import CurrencyInput from '../currencyInput/CurrencyInput';
import './Converter.css'
import React, { useState, useEffect } from 'react'

const Converter = () => {

const [rates, setRates] = useState({});

const [fromCurrency, setFromCurrency] = useState('BYN')
const [toCurrency, setToCurrency] = useState('RUB')

const [inputedValue, setInputedValue] = useState('1')

const [trasferedValue, setTrasferedValue] = useState('0')

useEffect(() => {
  fetch('https://www.cbr-xml-daily.ru/latest.js', {
  })
  .then((res) => res.json())
  .then((json) => {
    setRates(json.rates);
  })
  .catch((err) => {
    console.log(err)
  })
}, [])


function doubleFunc(e){
  setInputedValue(e.target.value)
  transfer(inputedValue, fromCurrency, toCurrency)
}

function transfer(num, from, to){
  num /= rates[from];
  console.log(from)
  setTrasferedValue((num*rates[to])*10)
  console.log(to)
}

  return (
    <div className='widget__layout'>
      <p className='page__heading'>Converter</p>
      <div className='converter__background'>
          <div className='converter__inner'>
            <div className='converter__part'>
              <p className='converter__text'>I have</p>
              <div className='currency__wrapper'>
                <CurrencyDropDown currency={fromCurrency} onChangeCurrency={setFromCurrency} />
                <CurrencyInput value={inputedValue} onChange={(e) => doubleFunc(e)}/>
              </div>
            </div>
            <div className='converter__part'>
              <p className='converter__text'>I want to buy</p>
              <div className='currency__wrapper'>
                <CurrencyDropDown currency={toCurrency} onChangeCurrency={setToCurrency} />
                <CurrencyInput value={trasferedValue}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Converter