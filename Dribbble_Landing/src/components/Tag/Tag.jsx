import './Tag.css'

export function Tag(props){
    const {text} = props
    return(
        <button class="tag-button">{text}</button>
    )
}