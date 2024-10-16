import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsDetails from '../pages/newsDetails/newsDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewsDetails/>
    
    </>
  )
}

export default App
