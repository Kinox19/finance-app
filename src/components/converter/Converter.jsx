import CurrencyDropDown from '../currencyDropDown/CurrencyDropDown';
import CurrencyInput from '../currencyInput/CurrencyInput';
import './Converter.css'
import React, { useState, useEffect, useRef } from 'react'

const Converter = () => {



const [fromCurrency, setFromCurrency] = useState('RUB')
const [toCurrency, setToCurrency] = useState('USD')

const [fromValue, setFromValue] = useState(0);
const [toValue, setToValue] = useState(1);

const ratesRef = useRef({});

useEffect(() => {
  fetch('https://www.cbr-xml-daily.ru/latest.js', {
  })
  .then((res) => res.json())
  .then((json) => {
    json.rates.RUB = '1';
    ratesRef.current = json.rates;
  })
  .catch((err) => {
    console.log(err);
  })
}, [])

const onChangeFromValue = (value) => {
  const price = value / ratesRef.current[fromCurrency];
  const result = price * ratesRef.current[toCurrency];
  setToValue(result.toFixed(3));
  setFromValue(value);
}

const onChangeToValue = (value) => {
  const result1 = (ratesRef.current[fromCurrency]/ratesRef.current[toCurrency])*value;
  setFromValue(result1.toFixed(3));
  console.log(result1)
  setToValue(value);
}

useEffect(() => {
  onChangeFromValue(fromValue);
}, [fromCurrency]);


useEffect(()=>{
  onChangeToValue(toValue);
}, [toCurrency])

  return (
    <div className='widget__layout'>
      <p className='page__heading'>Converter</p>
      <div className='converter__background'>
          <div className='converter__inner'>
            <div className='converter__part'>
              <p className='converter__text'>I have</p>
              <div className='currency__wrapper'>
                <CurrencyDropDown currency={fromCurrency} onChangeCurrency={setFromCurrency}  />
                <CurrencyInput value={fromValue} onChangeValue = {onChangeFromValue}/>
              </div>
            </div>
            <div className='converter__part'>
              <p className='converter__text'>I want to buy</p>
              <div className='currency__wrapper'>
                <CurrencyDropDown currency={toCurrency} onChangeCurrency={setToCurrency} />
                <CurrencyInput value={toValue} onChangeValue = {onChangeToValue}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Converter