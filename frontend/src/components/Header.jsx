import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Services</Link>
                <Link to="#">Contact</Link>
            </nav>

            <form action="#" className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit"><i className='bx bx-search'></i></button>
            </form>
        </header>
    );
}

export default Header;