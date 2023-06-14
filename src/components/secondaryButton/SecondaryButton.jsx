import './SecondaryButton.css'
import React from 'react'

const SecondaryButton = ({children, onClick}) => {
  return (
    <button className='button__secondary' onClick={onClick}>{children}</button>
  )
}

export default SecondaryButton