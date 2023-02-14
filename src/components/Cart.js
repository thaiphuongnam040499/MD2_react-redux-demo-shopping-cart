import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_del, act_update } from '../actions';

export default function Cart(props) {
    let {cart, stt} = props;
    const [quantity,setQuantity]= useState(1)
    useEffect(()=>{
        setQuantity(cart.quantity)
    },[cart.quantity])
    let dispatch= useDispatch()
    const handleDelete=(idDel)=>{
        dispatch(act_del(idDel))
    }
    const handleUpdate=()=>{
        dispatch(act_update(cart.product,quantity))
    }
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e)=>setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong>{cart.product.price*cart.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleUpdate}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={()=>handleDelete(cart.product.productId)}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
