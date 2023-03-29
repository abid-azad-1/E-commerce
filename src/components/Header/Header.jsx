import React from 'react';
import './Header.css'
import logo from '../../images/favicon.ico'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            {/* <h2 className='E-Commerce'>E-Commerce</h2> */}
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;