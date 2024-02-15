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
                    {// ToDo: Create as component
                    }
                    <div className='likes-count'>
                        <svg>
                            <path></path>
                        </svg>
                        <p>27</p>
                    </div>
                    <div className='views-count'>
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