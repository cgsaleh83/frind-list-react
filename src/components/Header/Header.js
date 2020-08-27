import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/react Corse">React Corse</a>
                <img src={logo} alt="" />
                <a href="/all member">All Member</a>
                <a href="/all corse">All Corses</a>
            </nav>
        </div>
    );
};

export default Header;