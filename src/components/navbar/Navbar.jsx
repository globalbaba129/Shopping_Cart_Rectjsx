import Badge from "@mui/material/Badge";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BrandName</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center" style={{ marginRight: 15 }}>
                        <Link to="/cart" className="nav-link position-relative">
                            <Badge
                                badgeContent={cartCount}
                                color="error"
                                sx={{
                                    position: "absolute",
                                    top: -5,
                                    right: -10,
                                    fontSize: "0.75rem",
                                }}
                            >
                                <ShoppingBagIcon sx={{ color: "white", fontSize: 28 }} />
                            </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
