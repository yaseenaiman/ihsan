import React from 'react';
import '../style/style.css';
import logo from "../logo/ihsan.png";
import volunteer from "../logo/volunteer.jpg"

const Home = () => {
    return (
        <>
                        <div className="logo-container">
                            <a className="navbar-brand" href="/">
                    <img src={logo} style={{ height: "100px", width: "auto" }} alt="Ihsan Logo" href="/" /> {/* Add your logo image */}
                            </a>
                       
            </div>
          <div className="container text-center">

            <div className="lc-block col-lg-6 mx-auto mb-5">
                <div editable="rich">
                    <p className="lead">
                        Start a new journey in volunteering and helping people
                    </p>
                </div>
            </div>
            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <a
                        className="btn btn-outline-danger"
                    href="/login"
                    role="button"
                >
                    Sign In
                </a>
                <a
                        className="btn btn-outline-danger"
                    href="/register"
                    role="button"
                >
                    Sign Up
                </a>
            </div>
            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
                <img
                    className="img-fluid"
                        src={volunteer}
                    width=""
                    height={783}
                    srcSet=""
                    sizes=""
                        alt="image: Freepik.com"
                />
            </div>
            </div>

        </>
    );
};

export default Home;
