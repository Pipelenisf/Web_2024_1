import React, { useState } from "react"
import { Button } from "./components/Button/Button"

export function App() {

  const [value, setValue] = useState(0)

  const addValue = () => {
    setValue(value + 1)
  }

  const substractValue = () => {
    (value > 0) 
    ? setValue(value - 1)
    : null
  }

  return (
    <>
      <p>{value}</p>
      <div>
        <button onClick={substractValue} text='-' bgColor='green'/>
        <button onClick={addValue} text='+' bgColor='red'/>
      </div>
    </>
  )
}
