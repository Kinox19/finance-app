import './ModalSignIn.css'
import React from 'react'
import apple from '../../../assets/buttons logos/Apple.svg'
import google from '../../../assets/buttons logos/Google.svg'
import facebook from '../../../assets/buttons logos/Facebook.svg'
import twitter from '../../../assets/buttons logos/Twitter.svg'


const ModalSignIn = ({active, setActive}) => {
  return (
    <div className={active ? 'modal__background modal__backgorund_active' : 'modal__background' } onClick={() => {setActive(false)}}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='content__headers'>
                <h2>Sign In</h2>
                <a href='/'><p>Sign Up</p></a>
            </div>
            <div className='content__columns'>
                <div className='content__inputs'>
                    <form className='content__form'>
                        <div className='form__input-field'>
                        <label className='form__label_default' for='name'>Name</label>
                        <input name='name' type='text' className='content__input' placeholder='Name'/>
                        </div>
                        <div className='form__input-field'>
                        <label for='password' className='form__label_default'>Password</label>
                        <input name='password' type='password' className='content__input' placeholder='Password'/>
                        <a href='/' className='form__label_active'>Forgot your password?</a>
                        </div>
                    </form>
                </div>
                <div className='content__divider'>
                    <hr className='content__divider'></hr>
                    <p>or</p>
                    <hr className='content__divider'></hr>
                </div>
                <div className='content__buttons'>
                    <button className='content__button'><img className='button__img' src={apple} alt='Apple'/>Sign in with Apple</button>
                    <button className='content__button'><img src={google} alt='Google'/>Sign in with Google</button>
                    <button className='content__button'><img src={facebook} alt='Facebook'/>Sign in with Facebook</button>
                    <button className='content__button'><img src={twitter} alt='Twitter'/>Sign in with Twitter</button>
                </div>
            </div>
            button__auth_primary
        </div>
    </div>
  )
}

export default ModalSignIn