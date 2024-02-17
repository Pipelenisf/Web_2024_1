import './VectorPath.css'

export function VectorPath(props){
    const {iconPath, iconFill} = props
    return(
        <path d={iconPath} fill={iconFill}/>
    )
}