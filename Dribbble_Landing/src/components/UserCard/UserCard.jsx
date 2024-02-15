import './UserCard.css'
import { Tag } from '../Tag/Tag'
import img1 from '../../images/image1.webp'

export function UserCard(props){
    const {bgImage} = props
    return(
        <>
            <div className="user-card-container" style={{ backgroundImage: 'url(https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center)'}}>
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