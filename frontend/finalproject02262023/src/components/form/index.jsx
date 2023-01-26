import React from 'react'
import './index.scss'
const Form = () => {
  return (
    <div className='form'>
        <h1>
            message Us
        </h1>
        <p>
        Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </p>
        <form action="">
            <div className='inputs'>
                <input type="text"  placeholder='first name'/>
                <input type="text"  placeholder='last name'/>
            </div>
            <input type="text " placeholder='Subject' />
            <input type="text " placeholder='email' />
            <textarea placeholder='Write your message here' color='40'></textarea>
            <button>Send message</button>
        </form>
    </div>
  )
}

export default Form