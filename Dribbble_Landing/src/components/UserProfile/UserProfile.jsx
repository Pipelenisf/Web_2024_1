import './UserProfile.css'

export function UserProfile(props){
    const {bgImage, text} = props
    return(
        <div className='profile-cont'>
            <img className='profile-image' src={bgImage} alt="Profile image" />

            
            <p>{text}</p>
        </div>
    )
}