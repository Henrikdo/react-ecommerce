import React from 'react';
import SearchBar from '../searchbar/SearchBar';

import './header.css';
import CartButton from '../cartbutton/CartButton';

function Header() {
  return (
    <header className="header">
      <div className="container" >
        <div></div>
        <SearchBar/>
        <CartButton/>
      </div>
     
    </header>
  );
}

export default Header;
