import './Body.css'

import { Headline } from '../Headline/Headline';
import { UserCard } from '../UserCard/UserCard';
import { ProductCard } from "../ProductCard/ProductCard";

export function Body(){
    return(
        <>
            <Headline/>
            <UserCard/>
            <ProductCard className='p-card-cont'/>
        </>
    )
}