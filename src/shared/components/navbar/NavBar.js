import React, {useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../navbar/navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../../../contexts/CartContext";


function NavBar() {
    const {cartProducts} = useContext(CartContext)

    // const {count, setCount} = useState(0)

    // useEffect(() => {
    // })

    // const addCount = () => {
    //     setCount(count + 1)
    // }

    useEffect(() => {

    })

    return (
        <div className="navbar">
            <Link to="/">خانه</Link>
            <Link to="/login">ورود</Link>
            <Link to="/signup">ثبت نام</Link>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> {cartProducts.count} </Link>
            <Link to="/about-us">رتباط با ما</Link>
        </div>
    );
}

export default NavBar;