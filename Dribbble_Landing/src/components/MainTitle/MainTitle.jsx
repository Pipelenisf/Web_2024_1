import './MainTitle.css'

export function MainTitle(props){
    const {title, color} = props
    return(
        <h1 className="large-title">{title}</h1>
    )
}

export function MediumTitle(props){
    const {title, color} = props
    return(
        <h2 className="medium-title">{title}</h2>
    )
}