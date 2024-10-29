import { useState } from 'react'
import './App.css'
import { BetterCounter, Counter } from './counter'

function App() {
  const [count, setCount] = useState(0)

  for (let i = 0; i < 100_000; i++) {
    console.log(i)
  }

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <BetterCounter />
    </>
  )
}

export default App
