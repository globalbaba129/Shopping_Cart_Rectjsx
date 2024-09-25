import React from "react";

const CatagoryFiltter = ({ onCategoryChange, categories }) => {
    return (
        <div>
            <h5>Filter by Category</h5>
            <select className="form-select" onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CatagoryFiltter;
