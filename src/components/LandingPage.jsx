import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="container landingpage">
                <div className="lp">
                    <h1>Welcome to Furte E-Commerce Store</h1>
                    <Link to="/signin">Sign In</Link>
                </div>
            </div>
            
        </>
    );
}

export default LandingPage;