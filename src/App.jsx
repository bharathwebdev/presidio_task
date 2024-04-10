import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

import Progress from './components/Progress'
import Gallery from './components/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav/>
    <Progress/>
  <Gallery/>
    </>
  )
}

export default App
