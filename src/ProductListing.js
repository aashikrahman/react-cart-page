import React, { useState } from "react";
import ProductsDatas from "./Data/ProductData";
import ProductCards from "./ProductCards";

function ProductListing() {


    const [cart, setCart] = useState([])

    const addTocart = (product) => {
        setCart([...cart, product])
    }


    const handleDelete = (index) => {

        const deleteAction = cart.filter((_, i) => i !== index)
        setCart(deleteAction);

    }

    const productLength = cart.length;


    console.log(productLength)

    console.log(cart)

    return (
        <div>
            <section className="product-listing">
                <div className="container">
                    <div className="wrapper">
                        {ProductsDatas.map((data) => (
                            <ProductCards addTocart={addTocart} key={data.id} productDetails={data} />
                        ))}
                    </div>

                    <div className="cart">
                        <div className="cart-wrapper">
                            <h3>Cart</h3>

                            <p>{productLength} Item in Cart</p>
                        </div>

                        {
                            cart.length === 0 ? "No Item found" : <table>
                                <tbody>
                                    <tr>
                                        <th>id</th>
                                        <th>Brand</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>

                                    {
                                        cart.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.brand}</td>
                                                <td>{data.name}</td>
                                                <td>{data.price}</td>

                                                <td>
                                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductListing;
