import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            <br />
            <Outlet />
        </div>
    )
}
export default Navbar