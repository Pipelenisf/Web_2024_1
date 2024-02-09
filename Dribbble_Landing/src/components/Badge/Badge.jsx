import './Badge.css'

export function Badge(props){
    const {bgColor, text} = props
    return(
        <button class="badge" style={{backgroundColor: bgColor}}>{text}</button>
    )
}