import React from 'react';
import './Cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Cart(props) {
    return (
        <div className="div-table">
            <table className="table-cart">
                <thead>
                <tr>
                    <th className="th-image-tag">حذف</th>
                    <th>تصویر</th>
                    <th>نام کالا</th>
                    <th>تعداد</th>
                    <th className="th-remove-tag">قیمت</th>

                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className="td-remove-tag-right"><FontAwesomeIcon icon={faTrash} className="trash-icon-cart"/></td>
                    <td>image<img src="" height={50} width={50} alt=""/></td>
                    <td>کفش</td>
                    <td>5</td>
                    <td className="td-remove-tag-left">200,000</td>

                </tr>
                <tr>
                    <td className="td-remove-tag-right"><FontAwesomeIcon icon={faTrash} className="trash-icon-cart"/></td>
                    <td>image<img src="" height={50} width={50} alt=""/></td>
                    <td>کفش</td>
                    <td>5</td>
                    <td className="td-remove-tag-left">200,000</td>

                </tr>
                <tr>
                    <td className="td-remove-tag-right"><FontAwesomeIcon icon={faTrash} className="trash-icon-cart"/></td>
                    <td>image<img src="" height={50} width={50} alt=""/></td>
                    <td>کفش</td>
                    <td>5</td>
                    <td className="td-remove-tag-left">200,000</td>

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