import React from "react";
import './Cart.css';

const Cart = ({cart}) => {
  console.log(cart);
  let totalPrice = 0 , totalShipping = 0 , quantity= 0 ;
  
  cart.forEach((singleCart)=>{
    singleCart.quantity = singleCart.quantity===0? 1:singleCart.quantity;

    quantity += singleCart.quantity;
    
    totalPrice += singleCart.price* singleCart.quantity;  
    
    singleCart.shipping = singleCart.shipping ===0? 1:singleCart.shipping;
    totalShipping += singleCart.shipping * quantity;
  })
  
  // converting a string to a number 
  // two ways -> 
  // 1 ) const tax = parseInt( totalPrice )
  // 2 ) using uninary Operator (+)
  //     const tax =  +totalPrice*0.10 ;

  const tax = +(totalPrice*0.10).toFixed(2);
  
  const grandTotal = totalPrice + totalShipping + tax ;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Product : {quantity}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping : ${totalShipping}</p>
      <p>Tax : ${tax}</p>
      <h4>Grand Total : {grandTotal}</h4>
    </div>
  );
};

export default Cart;
