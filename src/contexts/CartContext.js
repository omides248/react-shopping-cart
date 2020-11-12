import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartProducts, setProductsToCart] = useState([])
    const [countProducts, setCountProducts] = useState(0)
    const [totalCart, setTotalCart] = useState(0)


    const addProductToCart = (id, title, quantity, price) => {
        let is_found_product = false
        console.log("cartProducts:", cartProducts.length, cartProducts)
        if (cartProducts.length === 0) {
            setProductsToCart([...cartProducts, {id, title, quantity, price, total: price}])
            console.log("c1 first")
            is_found_product = true
            setCountProducts(countProducts + 1)
            setTotalCart(price)
        } else {
            for (let i in cartProducts) {
                console.log("Before : ", id, title, i)
                if (cartProducts[i].id === id) {
                    cartProducts[i].quantity += 1
                    cartProducts[i].total += price
                    setProductsToCart(cartProducts)
                    setCountProducts(countProducts + 1)
                    setTotalCart(totalCart + cartProducts[i].price)
                    console.log("c2 exists")
                    is_found_product = true
                    break
                }
            }
        }

        if (!is_found_product) {
            setProductsToCart([...cartProducts, {id, title, quantity, price, total: price}])
            setCountProducts(countProducts + 1)
            setTotalCart(totalCart + price)
            console.log("c3 new ")
        }

        console.log("After : ", id, title)
        console.log(cartProducts)
    }

    const removeProductToCart = (id) => {
        let q = 0
        let t = 0
        for (let i in cartProducts) {
            if (cartProducts[i].id === id) {
                q = cartProducts[i].quantity
                t = cartProducts[i].price * q
                break
            }
        }
        setProductsToCart(cartProducts.filter(product => product.id !== id))
        setCountProducts(countProducts - q)
        setTotalCart(totalCart - t)
    }

    const incrementProductToCart = (id) => {
        console.log("1Before : ", cartProducts)
        for (let i in cartProducts) {
            if (cartProducts[i].id === id) {
                cartProducts[i].quantity += 1;
                cartProducts[i].total += cartProducts[i].price;
                setProductsToCart(cartProducts)
                setCountProducts(countProducts + 1)
                setTotalCart(totalCart + cartProducts[i].price)
                break
            }
        }
        console.log("1After : ", cartProducts)
    }

    const decrementProductOfCart = (id) => {
        for (let i in cartProducts) {
            if (cartProducts[i].id === id) {
                let old_quantity = cartProducts[i].quantity;
                if (old_quantity > 1) {
                    cartProducts[i].quantity -= 1;
                    cartProducts[i].total -= cartProducts[i].price;
                    setProductsToCart(cartProducts)
                    setCountProducts(countProducts - 1)
                    setTotalCart(totalCart - cartProducts[i].price)
                } else {
                    setProductsToCart(cartProducts.filter(product => product.id !== id))
                    setCountProducts(countProducts - 1)
                    setTotalCart(totalCart - cartProducts[i].price)
                    cartProducts[i].total -= cartProducts[i].price;
                }
            }
        }
    }


    return (
        <CartContext.Provider
            value={{
                cartProducts,
                countProducts,
                addProductToCart,
                removeProductToCart,
                decrementProductOfCart,
                incrementProductToCart,
                totalCart
            }}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider