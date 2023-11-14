import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import AdminDashBoard from "./pages/AdminDashboard";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router basename={"/"}>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/admin-dashboard" element={<AdminDashBoard />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>   
    );
}

export default App;