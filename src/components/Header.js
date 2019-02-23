import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

/**
 * App component that will point to the different parts of our
 * web app
 */
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                SpendingTracker
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;