import React from 'react';
import './CurrencyDropDown.css';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP', 'KRW', 'BYN'];

const CurrencyDropDown = ({ currency, onChangeCurrency }) => {
  return (
    <div className='dropdown__container'>
      <ul className='currency__list'>
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'currency__list-item currency__list-item_active' : 'currency__list-item'}
            key={cur}>
            {cur}
          </li>
        ))}
        <li className='currency__point_more'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6001 7.45837L11.1668 12.8917C10.5251 13.5334 9.47515 13.5334 8.83348 12.8917L3.40015 7.45837" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyDropDown;
