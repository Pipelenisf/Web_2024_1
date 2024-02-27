import React from 'react'
import './Button.css'

export function Button(props) {
    const {text, bgColor} = props

    return(
      <>
        <button style={{backgroundColor:bgColor}}>{text}</button>
      </>
    )
  }