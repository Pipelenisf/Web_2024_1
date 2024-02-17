import './ProductCard.css'

import { ProductDetail } from '../ProductDetail/ProductDetail'
import { UserProfile } from '../UserProfile/UserProfile'

export function ProductCard(props){
    const {bgProductImg} = props
    return(
        <div className='product-card-cont'>
            <div className='product-thumbnail' style={{backgroundImage:`url(${bgProductImg})`}}>
            </div>
            <div className='product-data'>
                <UserProfile bgImage="https://cdn.dribbble.com/users/230124/avatars/small/999ed09dc97f840f7aef7347217b1147.jpg?1483316271" text="Alex Krugli"/>

                <div className='product-detail'>
                    {// ToDo: Create as component
                    }
                    <ProductDetail vectorPath='M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z' vectorFill='black' text="232"/>
                    <ProductDetail vectorPath='M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z' vector="black" text="22k"/>
                </div> 
            </div>
        </div>
    )
}