import './CategoryCard.css'

export function CategoryCard(prop){
    const {text} = prop
    const bgImage = 'https://cdn.dribbble.com/userupload/12999424/file/original-3fd6e73a78969b0caddac1bf7feee7d6.png'

    return(
        <div>
            <div className='category-thumbnail'style={{backgroundImage:`url(${bgImage})`}}>
            </div>
            <p className='category-title'>{text}</p>
        </div>
    )
}