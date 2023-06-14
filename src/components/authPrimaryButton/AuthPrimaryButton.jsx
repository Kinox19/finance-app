import './AuthPrimaryButton.css'
import React from 'react'

const AuthPrimaryButton = ({children, onClick}) => {
  return (
    <button className='button__auth_primary' onClick={onClick}>
        {children}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6025 18.3332 10.0001C18.3332 5.39771 14.6022 1.66675 9.99984 1.66675C5.39746 1.66675 1.6665 5.39771 1.6665 10.0001C1.6665 14.6025 5.39746 18.3334 9.99984 18.3334Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.9502 12.9417L11.8835 10L8.9502 7.05835" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
  )
}

export default AuthPrimaryButton