import React from 'react'

function Cart({ onHandleRemove, cart, totalPrice, cartLength }) {
    return (
        <>

            <div className='container'>
                <div className="cart">
                    <div className="cart-wrapper">
                        <h3>Cart</h3>

                        <p> {cartLength} Item in Cart</p>
                    </div>

                    {cartLength === 0 ? (
                        "No item here "
                    ) : (
                        <div className="cart-main">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Image</th>
                                        <th>Brand</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>

                                    {cart.map((value, index) => (
                                        <tr key={index}>
                                            <td className="image-tr"><img src={value.photoName} alt={value.name} /></td>
                                            <td>{value.brand}</td>
                                            <td>{value.name}</td>
                                            <td>{value.price}</td>

                                            <td>
                                                <button onClick={() => onHandleRemove(value)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="totoal-amount">
                                <h3>Total : {totalPrice}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart