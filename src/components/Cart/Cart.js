import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let products = cart.slice(0, 4);
    
    const chooneOne = (products) => {
        console.log(products.name)
    };

    return (
        <div className='cart-comp'>
            <h2>Selected Mobile</h2>
            {
                products.map(product => 
                    <div className='selected-items'>
                        <img src={product.image} alt="" />
                        <p>{product.name}</p>
                    </div>)
            }
            <div>
                <button onClick={() => chooneOne(products)} className='btn-choose'>Choose one</button>
                <button className='btn-choose'>Choose again</button>
            </div>
        </div>
    );
};

export default Cart;