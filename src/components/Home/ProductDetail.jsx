import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [p_data, setp_data] = useState(null);

    useEffect(() => {
        const getApi = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setp_data(response.data);
        };
        getApi();
    }, [id]);


    if (!p_data) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={p_data.image}
                        alt={p_data.title}
                        className="img-fluid"
                        style={{ height: '400px' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{p_data.title}</h2>
                    <p className="text-muted">${p_data.price}</p>
                    <p>{p_data.description}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => addToCart(p_data)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
