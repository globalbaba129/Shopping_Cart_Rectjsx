import React from "react";

const PriceFilter = ({ onPriceChange }) => {
    return (
        <div>
            <h5>Filter by Price</h5>
            <select className="form-select" onChange={(e) => onPriceChange(e.target.value)}>
                <option value="">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>
        </div>
    );
};

export default PriceFilter;
