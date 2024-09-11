import React from "react";
import ProductsDatas from "./Data/ProductData";
import ProductCards from "./ProductCards";



function ProductListing({ cart, addTocart, onHandleRemove, cartLength }) {

    //Lenght of Array



    return (
        <div>
            <section className="product-listing">
                <div className="container">
                    <div className="wrapper">
                        {ProductsDatas.map((data) => (
                            <ProductCards
                                key={data.id}
                                productDetails={data}
                                addTocart={addTocart}
                            />
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
}

export default ProductListing;
