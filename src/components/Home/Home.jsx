import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [p_data, setp_data] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getApi = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setp_data(response.data);
        }
        getApi();
    })

    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    {
                        p_data.map((product) => (

                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100 d-flex flex-column">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="card-img-top"
                                        style={{ height: '400px' }}
                                    />
                                    <div className="card-body d-flex flex-column flex-grow-1">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="price text-muted">${product.price}</p>
                                        <button
                                            className="btn btn-dark mt-auto"
                                            onClick={() => navigate(`/product/${product.id}`)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Home