import React from 'react'

function SignUp() {
    
  return (
      <form>
          <input type="text" placeholder='Mobile Number or Email' />
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <input type="submit" value={"Sign up"} className='button' />
      </form>
  )
}

export default SignUp