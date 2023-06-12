import './Header.css'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '../primaryButton/PrimaryButton'
import LogoHeader from '../logo/LogoHeader'

import { auth, provider } from '../../config'
import { signInWithPopup } from 'firebase/auth'
import ModalSignIn from '../modal/modalSignIn/ModalSignIn'

const links = [
    { id: 'ConvertorPage', label: 'Converter', to: '/converter' },
    { id: 'CalculatorPage', label: 'Calculator', to: '/calculator' }
  ];


const Header = () => {

  const [active, setActive] = useState(false)

  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      setName(data.user.displayName)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('name', data.user.displayName)
      setActive(true)
    })
  }

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, [])


  return (
    <header className='header'>
        <div className='logo__container'><LogoHeader/></div>
        <div className='header__menu'>
            <ul className='header__menu__list'>
            {links.map((link) => (
                <li key={link.id} className='menu__list__point'>
                  <a className='menu__list__point__link' href={`${link.to}#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
        </div>
        {value? <button onClick={logout}>log out</button> : <PrimaryButton onClick={handleClick}>Log in</PrimaryButton>}
        <PrimaryButton onClick={() => setActive(true)} >PopUp</PrimaryButton>
        <ModalSignIn active={active} setActive={setActive}/>
    </header>

  )
}

export default Header