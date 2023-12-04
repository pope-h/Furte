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
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import EditUser from "./components/EditUser";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route index={"/test"} element={<LandingPage />} /> */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="nike" element={<LandingPage />} />
                    <Route path="cart/:id" element={<Cart />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/details/:id" element={<ProductDetail />} />
                    <Route path="*" element={<h1>Still in Production</h1>} />
                </Route>

                <Route path="/admin" element={<AdminDashBoardLayout />}>
                    <Route index element={<DashBoard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="support" element={<Support />} />
                    <Route path="create-product" element={<CreateProduct />} />
                    <Route path="edit/product/:id" element={<EditProduct />} />
                    <Route path="edit/user/:id" element={<EditUser />} />
                    <Route path="*" element={<h1>Still in Production</h1>} />
                </Route>
            </Routes>
        </Router>   
    );
}

export default App;