import logo from "./img/logo.png"
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div class="nav_bar">
                <img src={logo} width="60" heigt="60"></img>
                <ul id="nav_bar" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;