import React from "react";
import { Link } from "react-router-dom";
import '../styles/landingPage.css';

const LandingPage = () => {
    return (
        <>
            <div className="container landingpage">
                <div className="lp">
                    <h1>Welcome to Furte E-Commerce Store</h1>
                    <div className="login-register">
                        <Link to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default LandingPage;