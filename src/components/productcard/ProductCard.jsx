import React, { useContext } from 'react';
import propTypes from 'prop-types';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import { FaCartPlus } from 'react-icons/fa';
import AppContext from '../../context/appcontext';

function ProductCard({ data }) {

  const {title,thumbnail,price} = data;
  const {cartItems,setCartItems} = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems,data]);

  return ( 
    <section className="product-card">
      <img 
        className = "card__image" 
        src={thumbnail.replace(/\w.jpg/gi, 'W.jpg')} 
        alt="product" 
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price,'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button 
        type="button"
        onClick={handleAddCart} 
        className="button__add-cart">
        <FaCartPlus/>
      </button> 
    </section> 
  );
}

export default ProductCard;
ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;
