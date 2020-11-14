import React, {useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../navbar/navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../../../contexts/CartContext";
import {AuthContext} from "../../../contexts/AuthContext";


function NavBar() {
    const {cartProducts} = useContext(CartContext)
    const auth = useContext(AuthContext)

    return (
        <div className="navbar">
            <Link to="/">خانه</Link>
            {auth.isLoggedIn && <Link to={"/profile"}>پروفایل</Link>}
            {auth.isLoggedIn && <Link to={"/orders"}>سفارشات</Link>}
            {!auth.isLoggedIn && <Link to="/login">ورود</Link>}
            {!auth.isLoggedIn && <Link to="/signup">ثبت نام</Link>}
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> {cartProducts.count} </Link>
            {auth.isLoggedIn && <Link to={"/orders"}>خروج</Link>}
            <Link to="/about-us">رتباط با ما</Link>
        </div>
    );
}

export default NavBar;