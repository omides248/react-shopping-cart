import React from 'react';
import {Link} from "react-router-dom";
import '../navbar/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">خانه</Link>
            <Link to="/login">ورود</Link>
            <Link to="/signup">ثبت نام</Link>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> 5</Link>
            <Link to="/about-us">رتباط با ما</Link>
        </div>
    );
}

export default NavBar;