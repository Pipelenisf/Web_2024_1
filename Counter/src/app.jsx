import React, {useState} from "react"
import { Button } from "./components/Button/Button"

export function App() {

  const [value, setValue] = useState(0)

  const addValue = () => {
    console.log('Suma:', value)
    setValue(value + 1)
  }

  const substractValue = () => {
    setValue(value - 1)
  }

  return(
    <>
      <p>{value}</p>
      <div>
        <button onClick={substractValue} text='-' bgColor='green'/>
        <button onClick={addValue} text='+' bgColor='red'/>
      </div>
    </>
  )
}
