import React from 'react'
import './index.scss'
const SignUp = () => {
  return (
    <div className='signup'>
        <div className="main">
            <div className="left">
                <h1>Learn From The Expert</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <button>ADMISSION NOW</button>
            </div>
            <div className="right">
                <form action="">
                <h1>sign up</h1>
                <input type="text"  placeholder='Email adress'/>
                <input type="text"  placeholder='password'/>
                <input type="text" placeholder='re-type password' />
                <button>Sign up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp