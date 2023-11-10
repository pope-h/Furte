import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import useStorePackage from "../store";
import LoadingSpinner from "./LoadingSpinner";

function SignIn() {

    const login = useStorePackage(state => state.login);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({...userDetails});

        setIsLoading(true);

        const { email, password } = userDetails;

        const payload = {
            email,
            password,
        };

        try {
            // Send a POST request to the backend
            const response = await fetch('http://localhost:3001/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.accessToken);
                console.log(data.role);
                const userToken = data.accessToken;
                const role = data.role;

                login(userToken);
                console.log('Successfully signed in:', data);

                // The below will be used oce the database is populated and 
                // the dashboard get much from it.
                // setTimeout(() => {
                //     navigate('/dashboard');
                // }, 5000);
                if (role === "Admin") {
                    navigate('/admin-dashboard');
                } else {
                    navigate('/dashboard');
                }
            } else {
                // The below code should be uncommented.

                // if (response.status === 401) {
                //     return await sendRefreshToken();
                // }
                // throw new Error(`$(response.status) $(response.statusText)`);
                const errorData = await response.json();
                console.error('Sign In failed:', errorData.msg);
            }
        } catch (err) {
            console.error('Error during sign in:', err);
        }
        setIsLoading(false);
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
                            <h2>Sign In</h2>

                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-envelope'></i></span>
                                <input value={userDetails.email} onChange={handleChange} type="email" id="email" name="email" required />
                                <label htmlFor="email">Email</label>  
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                                <input value={userDetails.password} onChange={handleChange} type="password" id="password" name="password" required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <Link to="#">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="btn">Sign In</button>
                            <div className="login-register">
                                <p>{"Don't have an account? "}<Link to="/signup" className="register-link">Sign Up</Link></p>
                                { isLoading && <LoadingSpinner /> }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;