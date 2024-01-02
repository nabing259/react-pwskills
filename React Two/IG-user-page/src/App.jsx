import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  const [isUser, setIsUser] = useState(true)

  const handleLogin = () => {
    setIsUser((prev) => !prev);
  }
  return (
    <div className='user-page'>
      <img
        src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png"
        alt=""
      />
      <div>{isUser ? <LogIn /> : <SignUp />}</div>
      <p>
        {isUser ? "Don't have account? " : "Have an account? "}
        <span onClick={handleLogin}>{isUser ? "Sign up" : "Log in"}</span>
      </p>
    </div>
  );
}

export default App
