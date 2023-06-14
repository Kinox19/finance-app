import './ModalSignIn.css'
import React, { useState } from 'react'
import apple from '../../../assets/buttons logos/Apple.svg'
import google from '../../../assets/buttons logos/Google.svg'
import facebook from '../../../assets/buttons logos/Facebook.svg'
import twitter from '../../../assets/buttons logos/Twitter.svg'
import AuthPrimaryButton from '../../authPrimaryButton/AuthPrimaryButton'

import { auth, googleProvider, twitterProvider } from '../../../config'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'


const ModalSignIn = ({active, setActive}) => {

    const [value, setValue] = useState('')
    const [name, setName] = useState('')

    function handleGoogleAuth(){
        signInWithPopup(auth, googleProvider)
        .then((data) => {
            setValue(data.user.email)
            setName(data.user.displayName)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.displayName)
          })
        .then(() => {
            window.location.reload();
        })
    }

    // function handleEmailPasswordAuth(email, password){
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user = userCredential.user
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

  return (
    <div className={active ? 'modal__background modal__backgorund_active' : 'modal__background' } onClick={() => {setActive(false)}}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='content__headers'>
                <h2 className='headers__primary'>Sign In</h2>
                <a className='headers__alternative' href='/'><p>Sign Up</p></a>
            </div>
            <div className='content__columns'>
                <div className='content__inputs'>
                    <form className='content__form'>
                        <div className='form__input-field'>
                        <label className='form__label_default' for='name'>Name</label>
                        <input id='nameInput' name='name' type='text' className='content__input' placeholder='Name'/>
                        </div>
                        <div className='form__input-field'>
                        <label for='password' className='form__label_default'>Password</label>
                        <input name='password' type='password' className='content__input' placeholder='Password'/>
                        <a href='/' className='form__label_active'>Forgot your password?</a>
                        </div>
                    </form>
                </div>
                <div className='divider__wrapper'>
                    <div className='content__divider'></div>
                    <p className='content__divider_text'>or</p>
                    <div className='content__divider'></div>
                </div>
                <div className='content__buttons'>
                    <button className='content__button' onClick={handleGoogleAuth}><img src={google} alt='Google'/>Sign in with Google</button>
                </div>
            </div>
            <AuthPrimaryButton>Proceed</AuthPrimaryButton>
        </div>
    </div>
  )
}

export default ModalSignIn