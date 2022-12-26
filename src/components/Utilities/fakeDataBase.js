//? use local Storage to manage cart data

const addToDb = (id)=>{

  //! Store multiple data in an Object with local storage

  let shoppingCart ;
  
  //! get the shopping cart
  const storedCart = localStorage.getItem('shopping-cart');

  if(storedCart){
    // console.log(storedCart);
    shoppingCart = JSON.parse(storedCart);
  }
  else{
    shoppingCart ={};
  }

  //! add quantity
  const quantity = shoppingCart[id];
  
  if(quantity){
    const newQuantity = +quantity + 1 ;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1 ;
  }
  
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
  

  //! Intro to Local Storage to store data just one Item
  // let quantity = localStorage.getItem(id);
  // if(quantity){
    // console.log('already exists')
    // quantity++; 
    // localStorage.setItem(id , quantity);
  // }
  // else{
    // console.log('new item');
    // localStorage.setItem(id,  1);
  // }
}

const getStoredCart = () => {
  //! get the shoppingCart from localStorage
  let shoppingCart = {};
  let storedCart = localStorage.getItem('shopping-cart');

  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

const removeFromDb = id => {
  // console.log('inside fake db');
  const storedCart = localStorage.getItem('shopping-cart');

  if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
      // console.log('exists in the cart')
      delete shoppingCart[id];

      localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart');
}

export {
  addToDb,
  getStoredCart,
  removeFromDb,
  deleteShoppingCart
};