import React, { useContext, useState } from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../logo/ihsan.png";
import { AuthContext } from './AuthContext';

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-scroll shadow-0" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="container">
                    <div className="logo-shift">
                        <a href="/">
                            <img src={logo} style={{ height: "24px", width: "auto" }} alt="Ihsan Logo" href="/" />
                        </a>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleCollapse}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link px-3" style={{ fontSize: 18 }} href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" style={{ fontSize: 18 }}  href="/useraddshow">
                                    Posts
                                </a>
                            </li>
                       
                            <li className="nav-item">
                                <a className="nav-link px-3" style={{ fontSize: 18 }}  href="/aboutus">
                                    About Us
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav flex-row">
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link ps-3" href="/login">
                                            <i className="fab fa-instagram" />
                                            <button
                                                className="btn btn-outline-danger"
                                            >
                                                Sign In
                                            </button>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link ps-3" href="/register">
                                            <i className="fab fa-instagram" />
                                            <button
                                                className="btn btn-outline-danger"
                                            >
                                                Sign Up
                                            </button>
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
