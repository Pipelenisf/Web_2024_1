import React from "react";

export function MainButton(props){
    const {title, txtColor, bgColor, btnBorder} = props
    return(
        <button style={{backgroundColor: bgColor, border:btnBorder, padding:"0 24px", height:"48px", borderRadius:"25px", color:txtColor}}>{title}</button>
    )
}