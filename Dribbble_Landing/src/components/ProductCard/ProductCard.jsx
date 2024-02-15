import './ProductCard.css'

function ProductCard(){
    return(
        <div>
            <div className='product-thumbnail'>
            </div>
            <div className='product-data'>
                <div className='user-account-image'>

                </div>
                <div className='product-detail'>
                    <div className='likes-cont'>
                        <svg>
                            <path></path>
                        </svg>
                        <p>27</p>
                    </div>
                    <div className='views-cont'>
                        <svg>
                            <path></path>
                        </svg>
                        <p>27</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}