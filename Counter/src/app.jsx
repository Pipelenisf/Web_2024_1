import React, { useState, useEffect} from "react"
import { Button } from "./components/Button/Button"

export function App() {

  const [value, setValue] = useState(0)
  const [showGif, setShowGif] = useState(false)

  const addValue = () => {
    setValue(value + 1)
    setShowGif(true)
  }

  const substractValue = () => {
    (value > 0) 
    ? setValue(value - 1)
    : null
  }

  useEffect(() => {
    console.log('Dead drop')
    if (showGif) {
      const timer = setTimeout(() => {
        setShowGif(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [showGif])


  return (
    <>
      <p>{value}</p>
        {showGif 
        ? <img src="https://media0.giphy.com/media/gFP6NLJdiePZ60QtLN/200w.gif" 
               alt="gif" />
        : null
        }
      <div>
        <button onClick={substractValue} text='-' bgColor='green'/>
        <button onClick={addValue} text='+' bgColor='red'/>
      </div>
    </>
  )
}
