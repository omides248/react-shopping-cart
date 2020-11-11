import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartProducts, setProductsToCart] = useState([])
    const [countProducts, setCountProducts] = useState(0)


    const addProductToCart = (id, title, quantity, price) => {
        let is_found_product = false
        console.log("cartProducts:", cartProducts.length, cartProducts)
        if (cartProducts.length === 0) {
            setProductsToCart([...cartProducts, {id, title, quantity, price}])
            console.log("c1 first")
            is_found_product = true
            setCountProducts(countProducts + 1)
        } else {
            for (let i in cartProducts) {
                console.log("Before : ", id, title, i)
                if (cartProducts[i].id === id) {
                    cartProducts[i].quantity += 1
                    setProductsToCart(cartProducts)
                    setCountProducts(countProducts + 1)
                    console.log("c2 exists")
                    is_found_product = true
                    break
                }
            }
        }

        if (!is_found_product) {
            setProductsToCart([...cartProducts, {id, title, quantity, price}])
            setCountProducts(countProducts + 1)
            console.log("c3 new ")
        }

        console.log("After : ", id, title)
        console.log(cartProducts)
    }

    const removeProductToCart = (id) => {

        for (let i in cartProducts) {
            if (cartProducts[i].id === id) {
                let old_quantity = cartProducts[i].quantity;
                if (old_quantity > 1) {
                    cartProducts[i].quantity -= 1;
                    setProductsToCart(cartProducts)
                    setCountProducts(countProducts - 1)
                } else {
                    setProductsToCart(cartProducts.filter(product => product.id !== id))
                    setCountProducts(countProducts - 1)
                }
            }
        }
    }


    return (
        <CartContext.Provider value={{cartProducts, countProducts, addProductToCart, removeProductToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider