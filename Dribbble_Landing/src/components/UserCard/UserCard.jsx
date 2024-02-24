import './UserCard.css'
import { Tag } from '../Tag/Tag'
import img1 from '../../images/image1.webp'
import { USERCARD } from '../../const/UserCardData'

export function UserCard(props){
    const {bgImage} = props
    return(
        <div className='user-cards-cont'>
            {
                USERCARD.map(usercard => {
                    return(
                        <div className="user-card-container" style={{ backgroundImage: `url(${usercard.image})`}}>
                            {// ? How to use image as background image?
                            }
                            <div className='user-data'>
                                <div className='user-data-cont'>
                                    <p>{usercard.username}</p>
                                    <p>{usercard.job}</p> 
                                </div>
                                <div className='tags-cont'>
                                    {// ToDo: How to print these
                                    }
                                    <Tag text='Ilustration'/>
                                    <Tag text='Mobile'/>
                                    <Tag text='UI'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                
        </div>
    )
}