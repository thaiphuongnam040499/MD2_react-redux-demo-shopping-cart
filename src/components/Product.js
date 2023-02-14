import React from 'react'
import { useDispatch } from 'react-redux';
import { act_buy } from '../actions';
import { useState } from 'react';
export default function Product(props) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    let {product} = props
    let isShow = true;
    let elementBuy = '';
    if (product.quantity==0){
        isShow=false
    }
    if (isShow) {
        elementBuy = <div>
            <input
                name="quantity-product-1"
                type="number"
                value={quantity}
                min={1}
                onChange={(e)=>setQuantity(e.target.value)}
            />
            <a data-product={1} href="#" className="price" onClick={()=>dispatch(act_buy(product,quantity))}>
                {" "}
                {product.price} USD{" "}
            </a>
        </div>
    }else{
        elementBuy = <span className="price"> {product.price} USD</span>
    }
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.image}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.productName}</h4>
                <p>
                    {product.title}
                </p>
                {elementBuy}
            </div>
        </div>
    )
}
