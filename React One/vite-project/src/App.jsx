import './App.css'
import Button from './components/Button'
import Header from './components/Header';
import Profile from './components/Profile'

function App() {

  const handleClick = () => {
    alert("Clicked!");
  }
  return (
    <>
      <Header title={"My React App"}/>
      <Profile name={'Nabin'} age={24} />
      <Button text={"click"} onClick={handleClick}/>
    </>
  )
}

export default App
