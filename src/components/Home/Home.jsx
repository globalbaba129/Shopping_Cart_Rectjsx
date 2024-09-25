import CatagoryFiltter from "../filtter/CatagoryFiltter";
import PriceFilter from "../filtter/PriceFilter";
import PriceRangeFiltter from "../filtter/PriceRangeFiltter";
import React, { useEffect, useState } from "react";
import Slider from "../slider/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [p_data, setp_data] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceOrder, setPriceOrder] = useState("");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const navigate = useNavigate();

    useEffect(() => {
        const getApi = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setp_data(response.data);
            setFilteredData(response.data);

            // Extract categories from the product data
            const uniqueCategories = [...new Set(response.data.map(product => product.category))];
            setCategories(uniqueCategories);
        };
        getApi();
    }, []);

    // Handle category filter
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Handle price filter
    const handlePriceChange = (order) => {
        setPriceOrder(order);
    };
    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
    };

    // Apply filters whenever category or price order changes
    useEffect(() => {
        let filtered = [...p_data];

        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (priceOrder === "lowToHigh") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (priceOrder === "highToLow") {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (priceRange) {
            filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
        }

        setFilteredData(filtered);
    }, [selectedCategory, priceOrder, priceRange, p_data]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Slider />
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2 bg-light">
                        {/* <h1>Sidebar</h1> */}
                        <CatagoryFiltter onCategoryChange={handleCategoryChange} categories={categories} />
                        <br />
                        <PriceFilter onPriceChange={handlePriceChange} />
                        <br />
                        <PriceRangeFiltter onPriceRangeChange={handlePriceRangeChange} />
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {filteredData.map((product) => (
                                <div className="col-md-3 mb-4" key={product.id}>
                                    <div className="card h-100 d-flex flex-column">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="card-img-top"
                                            style={{ height: '300px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body d-flex flex-column">
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
