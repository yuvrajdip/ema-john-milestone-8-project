import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  // todo console.log(props);
  
  const {product , handleAddToCart} = props;

  const {name , img , seller, price, ratings, stock}= product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <p className='product-name'>{name}</p>
        <p className='price'>Price : ${price}</p>
        <p>Stock : {stock}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratings : {ratings} Star</p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className='button'>
        Add to Cart
        <FontAwesomeIcon style={{marginLeft:5}} icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;