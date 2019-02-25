import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

/**
 * App component that will point to the different parts of our
 * web app
 */
const Header = () => {
    return (
        <div className="ui inverted menu">
            <div className="header item">
                <Link to="/">
                    SpendingTracker
                </Link>
            </div>
            <div className="header item">
                <Link to="/about">
                    About
                </Link>
            </div>
            <div className="header item">
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </div>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;