import React from "react";

function ProductCards(props) {

    const handleAddcart = () => {
        props.addTocart(props.productDetails)
    }


    return (
        <div className="product-card">
            <div className="product-image">
                <img src={props.productDetails.photoName} alt={props.productDetails.name} />
            </div>
            <div className="product-content">
                <p>{props.productDetails.brand}</p>
                <h3>{props.productDetails.name}</h3>
                <p>
                    <span>{props.productDetails.price}</span>
                </p>
            </div>

            <button onClick={handleAddcart}>
                Add To Cart
            </button>
        </div>
    );
}

export default ProductCards;
