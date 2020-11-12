import React, {useContext} from 'react';
import './Cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../contexts/CartContext";

function Cart(props) {

    const {cartProducts, removeProductToCart, decrementProductOfCart, incrementProductToCart} = useContext(CartContext)
    return (
        <div className="div-table">
            <table className="table-cart">
                <thead>
                <tr>
                    <th className="th-image-tag">حذف</th>
                    <th>تصویر</th>
                    <th>نام کالا</th>
                    <th>تعداد</th>
                    <th>قیمت</th>
                    <th className="th-remove-tag">قیمت کل</th>

                </tr>
                </thead>

                <tbody>
                { cartProducts.items && cartProducts.items.map(product => {
                    return (
                        <tr key={product.id}>
                            <td className="td-remove-tag-right"><FontAwesomeIcon icon={faTrash} className="trash-icon-cart" onClick={() => removeProductToCart(product.id)}/></td>
                            <td><img src={product.image} style={{width: "50px", height: "50px", objectFit: "contain"}} alt={product.name}/></td>
                            <td>{product.title}</td>
                            <td><FontAwesomeIcon icon={faMinus} onClick={() => decrementProductOfCart(product.id)}/> {product.quantity} <FontAwesomeIcon icon={faPlus} onClick={() => incrementProductToCart(product.id)}/></td>
                            <td>{product.price}</td>
                            <td className="td-remove-tag-left">{product.total || product.price}</td>

                        </tr>
                    )
                })}
                <tr>
                    <td className="td-remove-tag-right"/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td className="td-remove-tag-left">{cartProducts.total}</td>

                </tr>
                </tbody>

            </table>
            <form action="">
                <div className="div-button">
                    <button className="button-cart">پرداخت</button>
                </div>
            </form>
        </div>
    );
}

export default Cart;