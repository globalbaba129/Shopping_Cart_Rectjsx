import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mt-5 mb-5">
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart before checking out.</p>
            ) : (
                <div>
                    <h3>Order Summary</h3>
                    <table className="table table-bordered mb-4">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{ height: "100px", width: "100px", objectFit: "cover" }}
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end"><strong>Total Price:</strong></td>
                                <td><strong>${calculateTotalPrice().toFixed(2)}</strong></td>
                            </tr>
                        </tfoot>
                    </table>

                    <h3>Payment Information</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardHolder" className="form-label">Card Holder Name</label>
                            <input type="text" className="form-control" id="cardHolder" placeholder="John Doe" required />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
                            </div>
                            <div className="col">
                                <label htmlFor="cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cvv" placeholder="123" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Complete Purchase</button>
                        <Link to="/cart" className="btn btn-secondary ms-2">Go Back to Cart</Link>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
