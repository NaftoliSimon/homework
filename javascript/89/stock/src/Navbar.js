import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <NavLink to='/'> home </NavLink> <br />
        </nav>
    )
}
