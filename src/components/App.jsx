import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import DashBoard from "./Dashboard";

const App = () => {
    return (
        <Router basename={"/"}>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </Router>   
    );
}

export default App;