import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import './ProductList.css';
import {CartContext} from "../../contexts/CartContext";

function ProductList() {

    const {addProductToCart} = useContext(CartContext)

    const products = [
        {id: 1, title: "کفش ورزشی1", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 2, title: "کفش ورزشی2", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 3, title: "کفش ورزشی3", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 4, title: "کفش ورزشی4", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 5, title: "کفش ورزشی5", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 6, title: "کفش ورزشی6", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 7, title: "کفش ورزشی7", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
        {id: 8, title: "کفش ورزشی8", price: 200000, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    ]


    return (
        <>
            {products && products.map(product => {
                return (
                    <div className="column" key={product.id}>
                        <div className="card">
                            <img src="" alt="Denim Jeans"/>
                            <h3>{product.title}</h3>
                            <p className="price">{product.price} تومان</p>
                            <p>{product.description}</p>
                            <p>
                                <button type="submit" onClick={ () => addProductToCart(product.id, product.title, 1, product.price)}>افزودن به سبد خرید</button>
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ProductList;