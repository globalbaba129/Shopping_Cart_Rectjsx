import "./Fotter.css";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are an online store dedicated to providing the best products at the best prices.
                            Your satisfaction is our priority!
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/products" className="text-white">Products</a></li>
                            <li><a href="/about" className="text-white">About Us</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3">
                                <a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
