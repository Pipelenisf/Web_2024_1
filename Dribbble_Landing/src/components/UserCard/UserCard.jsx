import './UserCard.css'
import { Tag } from '../Tag/Tag'
import img1 from '../../images/image1.webp'

export function UserCard(props){
    const {bgImage} = props
    return(
        <>
            <div className="user-card-container" style={{ backgroundImage: ""}}>
                {// ? How to use image as background image?
                }
                <div className='user-data'>
                    <p>Jesse Showalter</p>
                    <p>Design Director</p>
                    <div>
                        <Tag text='Ilustration'/>
                        <Tag text='Mobile'/>
                        <Tag text='UI'/>
                    </div>
                </div>
            </div>
        </>
    )
}