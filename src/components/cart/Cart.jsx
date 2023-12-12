import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../cartItem/CartItem';
import AppContext from '../../context/appcontext';
import formatCurrency from '../../utils/formatCurrency';
function Cart() {
  const {cartItems,isCartVisible} = useContext(AppContext);
  

  const totalPrice = cartItems.reduce((acc,item)=>{ return item.price + acc;}, 0);
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartitem) => <CartItem key={cartitem} data = {cartitem}/>)}
      </div>
      <div className="cart-resume">{'Total: '+formatCurrency(totalPrice,'BRL')}</div>
    </section> 
  );
}

export default Cart;
