import './CategoryCard.css'
import { CATEGORY } from '../../const/CategoryData'

export function CategoryCard(prop){
    const {text} = prop

    return(

        <div className='category-cont'>
            {
                CATEGORY.map(category => {
                    return(
                        <div>
                            <div className='category-thumbnail'style={{backgroundImage:`url(${category.bgImage})`}}>
                            </div>
                            <p className='category-title'>{category.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}