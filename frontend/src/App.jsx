import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import AdminDashBoardLayout from "./pages/AdminDashBoardLayout";
import Home from "./pages/Home";
import AdminProducts from "./pages/AdminProducts";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

const App = () => {
    return (
        <Router basename={"/"}>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/dashboard" element={<DashBoard />} /> */}
                {/* <Route path="/admin" element={<AdminDashBoard />} /> */}
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<h1>Still in Production</h1>} />

                <Route path="/admin" element={<AdminDashBoardLayout />}>
                    <Route index element={<DashBoard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="support" element={<Support />} />
                    <Route path="*" element={<h1>Still in Production</h1>} />
                </Route>
            </Routes>
        </Router>   
    );
}

export default App;