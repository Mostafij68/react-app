import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name, price, image} = props.product;
    console.log(name)
    return (
        <div className='products-comp'>
            <img src={image} alt="" />
            <div className='products-info'>
                <h3>{name}</h3>
                <p>Price: {price} ৳</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Products;