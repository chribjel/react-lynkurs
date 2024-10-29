import { useEffect, useState } from "react"


export function Timer() {
  const [timer, setTimer] = useState(0)


  useEffect(() => {
    setInterval(() => {
      console.log(timer)
      setTimer(timer + 1)
    }, 1000)
  }, [])


  return (
    <>
      <p>{timer}</p>
    </>
  )
}
