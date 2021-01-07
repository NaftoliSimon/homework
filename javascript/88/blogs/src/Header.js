import React from 'react'
//import { Navlink } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink> | 
            <NavLink to='/blog'> About</NavLink> |
            <NavLink to='/blog'> Contact Us</NavLink> |
            <NavLink to='/blog'> Donate</NavLink>
        </nav>
    )
}
