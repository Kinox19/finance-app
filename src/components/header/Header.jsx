import './Header.css'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '../primaryButton/PrimaryButton'
import LogoHeader from '../logo/LogoHeader'

import ModalSignIn from '../modal/modalSignIn/ModalSignIn'
import SecondaryButton from '../secondaryButton/SecondaryButton'

const links = [
    { id: 'ConvertorPage', label: 'Converter', to: '/converter' },
    { id: 'CalculatorPage', label: 'Calculator', to: '/calculator' }
  ];


const Header = () => {

  const [active, setActive] = useState(false)

  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    setEmail(setValue(localStorage.getItem('email')))
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
        {value? <SecondaryButton onClick={logout}>Log out {email}</SecondaryButton> : <PrimaryButton onClick={() => setActive(true)} >Log In</PrimaryButton>}
        
        <ModalSignIn active={active} setActive={setActive}/>
    </header>

  )
}

export default Header