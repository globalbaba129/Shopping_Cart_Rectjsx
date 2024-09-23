import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, updateCart, removeCart }) => {

    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity <= 0) {
            handleRemove(index);
        } else {
            const updatedCart = [...cartItems];
            updatedCart[index].quantity = newQuantity;
            updateCart(updatedCart);
        }
    };

    const handleRemove = (index) => {
        removeCart(index);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.image} alt={item.title} style={{ height: "100px" }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                            className="form-control"
                                            style={{ width: "60px" }}
                                        />
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="text-end"><strong>Total Price:</strong></td>
                                <td colSpan="2"><strong>${calculateTotalPrice().toFixed(2)}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan="6" className="d-flex justify-content-between">
                                    <Link to="/" className="btn btn-primary">
                                        Continue Shopping
                                    </Link>
                                    <Link to="/checkout" className="btn btn-success">
                                        Proceed to Checkout
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Cart;
