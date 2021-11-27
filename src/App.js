//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import { commerce } from './lib/commerce';
//import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

const App= () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] =useState({});
  const fetchProducts = async() => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }
  const handleAddtoCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId,quantity);
    setCart(item.cart);
  }
   const handleUpdateCartQty = async (productId,quantity) =>{
     const {cart}= await commerce.cart.update(productId,quantity);
     setCart(cart);
   }
   const handleRemoveFromCart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
   }
   const handleEmptyCart =async () => {
     const {cart} = await commerce.cart.empty();
     setCart(cart);
   }
  useEffect(() =>{
    fetchProducts();
    fetchCart();
  },[]);
  console.log(cart);

  return (
 
    <div>
      <Navbar totalItems = {cart.total_items}/>
            <Products products= {products} onAddtoCart = {handleAddtoCart} />

            <Cart cart = {cart}
            handleUpdateCartQty ={handleUpdateCartQty}
            handleRemoveFromCart = {handleRemoveFromCart}
            handleEmptyCart  ={handleEmptyCart}
            />

    </div>

  );
}

export default App;
