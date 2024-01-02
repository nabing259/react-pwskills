import React from 'react'

function LogIn() {
  return (
      <form>
          <input type="text" placeholder='Phone number, username, or email' />
          <input type="password" placeholder='Password' />
          <input type="submit" value={'Log in'} className='button'/>
    </form>
  )
}

export default LogIn