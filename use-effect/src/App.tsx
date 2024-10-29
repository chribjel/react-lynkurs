import { useState } from 'react'
import './App.css'
import { Timer } from './timer'
import { Counter } from './counter'

function App() {
  const [toggle, setToggle] = useState(false)


  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <Timer /> : <Counter />}
    </>
  )
}

export default App
