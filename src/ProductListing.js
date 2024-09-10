import React, { useState } from "react";
import ProductsDatas from "./Data/ProductData";
import ProductCards from "./ProductCards";

function ProductListing() {
    const [cart, setAddCart] = useState([]);


    const addTocart = (data) => {

        const isInCart = cart.some((pro) => pro.name === data.name);

        if (!isInCart) {
            setAddCart([...cart, data]);
        } else {
            alert("Is Already added")
        }


    };

    const sumList = cart.map((some) => some.price).reduce((amt, item) => {
        return amt + item
    }, 0)

    // const totoalAmount = sumList.reduce((price, item) => {
    //     return price + item;

    // }, 0)


    console.log(sumList)



    const removeCart = (index) => {
        setAddCart(cart.filter((_, deldata) => index !== deldata));
    };

    return (
        <div>
            <section className="product-listing">
                <div className="container">
                    <div className="wrapper">
                        {ProductsDatas.map((data) => (
                            <ProductCards
                                addTocart={addTocart}
                                key={data.id}
                                productDetails={data}
                            />
                        ))}
                    </div>

                    <div className="cart">
                        <div className="cart-wrapper">
                            <h3>Cart</h3>

                            <p> {cart.length} Item in Cart</p>
                        </div>

                        {cart.length === 0 ? (
                            "No item found "
                        ) : (
                            <table>
                                <tbody>
                                    <tr>
                                        <th>id</th>
                                        <th>Brand</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>

                                    {cart.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.brand}</td>
                                            <td>{data.price}</td>

                                            <td>
                                                <button onClick={() => removeCart(index)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductListing;
