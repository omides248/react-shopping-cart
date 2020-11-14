import React, {useState, useContext, useEffect} from 'react';
// import {v4 as uuidv4} from 'uuid';
import axios from 'axios'
import host from '../../config/config'
import './ProductList.css';
import {CartContext} from "../../contexts/CartContext";
import {useFetch} from "../../hooks/UseFetch"


function ProductList() {

    const {data, success} = useFetch("products")

    const {addProductToCart} = useContext(CartContext)


    // const products = [
    //     {id: 1, title: "کفش ورزشی1", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 2, title: "کفش ورزشی2", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 3, title: "کفش ورزشی3", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 4, title: "کفش ورزشی4", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 5, title: "کفش ورزشی5", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 6, title: "کفش ورزشی6", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 7, title: "کفش ورزشی7", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    //     {id: 8, title: "کفش ورزشی8", price: 200, description: "این کفش با رنگ ها و سایز های مختلف موجود است"},
    // ]


    return (
        <>
            {!success ? <div style={{textAlign: "center"}}>loading</div> : data && data.map(product => {
                return (
                    <div className="column" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt="Denim Jeans"
                                 style={{width: "100px", height: "100px", objectFit: "contain"}}/>
                            <h3>{product.name}</h3>
                            <p className="price">{product.price} تومان</p>
                            <p>{product.description ? product.description.substring(0, 10) : ""}</p>
                            <p>
                                <button type="submit"
                                        onClick={() => addProductToCart(product.id, product.name, product.price, product.image)}>افزودن
                                    به سبد خرید
                                </button>
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ProductList;