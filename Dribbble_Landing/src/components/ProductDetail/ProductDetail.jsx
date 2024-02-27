import './ProductDetail.css'

import { VectorPath } from '../VectorPath/VectorPath'

export function ProductDetail(props){
    const {text, vectorPath, vectorFill} = props
    return(
        <div className='detail-cont'>
        {// Todo: How the f*ck add two paths to the same svg (tried to create another component)?
        }
            <svg className='vector'>
                <path d={vectorPath} fill={vectorFill}/>
            </svg> 
            {// Todo: How to resize svg
            }
            <p className='product-detail-text'>{text}</p>
        </div>
    )
}