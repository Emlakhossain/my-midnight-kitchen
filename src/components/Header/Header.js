import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-container'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/orderReview">OrderReview</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    );
};

export default Header;