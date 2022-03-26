import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
    const {name, price, image} = props.product;
    const {addToCart} = props;
    
    return (
        <div className='products-comp'>
            <img src={image} alt="" />
            <div className='products-info'>
                <h3>{name}</h3>
                <p>Price: {price} BDT</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Products;