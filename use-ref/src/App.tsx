import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(text)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
