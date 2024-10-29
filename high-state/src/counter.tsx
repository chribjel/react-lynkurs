import { useState } from "react"


export function Counter({ count, setCount }: { count: number, setCount: (count: number) => void }) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  )
}

export function BetterCounter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Better Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  )

}
