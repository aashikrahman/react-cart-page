import React from "react";
import { Link } from "react-router-dom";

function Header({cartLength }) {
  return (
    <div>
      <header>
        <div className="search">
          <img src="Products/search.svg" className="img-fluid" alt="" />
        </div>

       
       <div className="logo">
       <Link to = "/">
          <h2>Almass </h2>
          </Link>
        </div>
       

        <Link to= "/cart">
        <div className="cart-item">
          <img src="Products/cart.svg" className="img-fluid" alt="" />
          <span>{cartLength }</span>
        </div>
        </Link>
      </header>
    </div>
  );
}

export default Header;
