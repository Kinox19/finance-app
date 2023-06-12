import React from 'react'
import 'normalize.css'
import './PrimaryButton.css'

const PrimaryButton = ({children, onClick}) => {
  return (
    <button className='button__primary' onClick={onClick}>{children}</button>
  )
}

export default PrimaryButton