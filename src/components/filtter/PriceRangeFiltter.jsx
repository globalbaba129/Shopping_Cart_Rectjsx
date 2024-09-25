import React, { useState } from "react";

const PriceRangeFiltter = ({ onPriceRangeChange }) => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handleRangeChange = (e) => {
        const value = e.target.value;
        setPriceRange([0, value]);
        onPriceRangeChange([0, value]);
    };

    return (
        <div>
            <h5>Filter by Price Range</h5>
            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={handleRangeChange}
                className="form-range"
            />
            <p>
                Price: $0 - ${priceRange[1]}
            </p>
        </div>
    );
};

export default PriceRangeFiltter;
