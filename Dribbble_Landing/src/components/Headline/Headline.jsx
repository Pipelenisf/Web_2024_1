import './Headline.css'
import { Badge } from "../Badge/Badge.jsx"
import { MainTitle } from '../MainTitle/MainTitle.jsx'
import { BodyContainer } from "../BodyContainer/BodyContainer.jsx"
import { MainButton } from "../MainButton/MainButton.jsx"


export function Headline(){
    return(
        <div className="headline-cont">
            <Badge bgColor="#ffda79"text="Over 3 million ready-to-work creatives!"/>
            <MainTitle title='The world’s destination for design'></MainTitle>
            <BodyContainer text='Get inspired by the work of millions of top-rated designers & agencies around the world.'/>
            <MainButton title='Get Started' bgColor='#0d0c22' txtColor='white'/>
        </div>
    )
}