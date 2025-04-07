import React from 'react';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/userPage">User Page</Link>
                </li>
                <li>
                    <Link to="/adminPage">Admin Page</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;