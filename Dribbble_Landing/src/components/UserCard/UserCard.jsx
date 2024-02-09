import './UserCard.css'
import { Tag } from '../Tag/Tag'

export function UserCard(props){
    const {} = props
    return(
        <>
            <div className="user-card-container">
                <p>Jesse Showalter</p>
                <p>Design Director</p>
                <Tag text='Ilustration'/>
                <Tag text='Mobile'/>
                <Tag text='UI'/>
            </div>
        </>
    )
}