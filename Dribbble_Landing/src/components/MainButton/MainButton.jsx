import './MainButton.css'

export function MainButton(props){
    const {title, txtColor, bgColor, btnBorder} = props
    return(
        <button className='main-button' style={{backgroundColor: bgColor, border:btnBorder, color:txtColor}}>{title}</button>
    )
}