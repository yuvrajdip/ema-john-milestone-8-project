import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../Utilities/fakeDataBase';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    // console.log(`products load before fetch`);
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      // console.log(`products loaded`);
    });
  },[]);
  //todo console.log(products[0]);

  useEffect(()=>{
    const storedCart = getStoredCart();
    const savedCart= [];
    for( const id in storedCart){
      const addedProduct = products.find( product=> product.id=== id );

      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  
  },[products]);


  /* 
  old code
  useEffect(
    ()=>{
    
      const storedCart = getStoredCart();

      const savedCart = [];

      for(const id in storedCart){
       
        const selectedProduct = products.find(
          (product)=>product.id===id
        )

        if(selectedProduct){
          selectedProduct.quantity = storedCart[id];

          savedCart.push(selectedProduct);

        }
          
      }

      setCart(savedCart);
    },[products]); */
  

  const [cart, setCart]= useState([]);
  const handleAddToCart=(product)=>{
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  }
  
  return (
    <div className='shop-container'>
      <div className="products">
        {
          products.map(
            (product) =>
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            >
            </Product>
          )
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;