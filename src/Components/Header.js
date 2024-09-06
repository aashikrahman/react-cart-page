import React from 'react'

function Header() {
  
    return (
        <div>
            <header>
            <div className="search">
                    <img src="Products/search.svg" className='img-fluid' alt="" />
                   
                </div>

               
                <div className="logo">
                    <h2>Almass </h2>
                </div>


                <div className="cart-item">
                    <img src="Products/cart.svg" className='img-fluid' alt="" />
                   
                </div>

            </header>
        </div>
    )
}

export default Header