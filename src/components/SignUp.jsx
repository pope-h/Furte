import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function SignUp() {

    const navigate = useNavigate();

    const [newDetails, setNewDetails] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({...newDetails});

        try {
            const response = await fetch('http://localhost:3001/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDetails),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(errorData);
            }

            const successData = await response.json();
            console.log(successData);
            navigate('/signin');
        } catch (err) {
            console.error('An error occured:', err);
        }
    };

    return (
        <>
            <div className="background"></div>
            <div className="container">
                <Header />
                <div className="content">
                    <h2 className="logo"><i className='bx bxl-firebase'></i>Furte</h2>
                    <div className="text-sci">
                        <h2>Welcome!<br /><span>To The Future Of Furniture.</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit.
                            Voluptatrum, unde.
                        </p>
                        <div className="social-icons">
                            <Link to="#"><i className='bx bxl-linkedin'></i></Link>
                            <Link to="#"><i className='bx bxl-meta' ></i></Link>
                            <Link to="#"><i className='bx bxl-instagram' ></i></Link>
                            <Link to="#"><i className='bx bxl-twitter' ></i></Link>
                        </div>
                    </div>
                </div>
            
                <div className="logreg-box">
                    <div className="form-box login">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>

                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-user'></i></span>
                                <input value={newDetails.uName} onChange={handleChange} type="text" id="userName" name="userName" required />
                                <label htmlFor="userName">User Name</label>  
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-envelope'></i></span>
                                <input value={newDetails.email} onChange={handleChange} type="email" id="email" name="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                                <input value={newDetails.password} onChange={handleChange} type="password" id="password" name="password" required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                    I agree to the terms & conditions.
                                </label>
                            </div>
                            <button type="submit" className="btn">Sign Up</button>
                            <div className="login-register">
                                <p>Already have an account? <Link to="/signin" className="register-link">Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;