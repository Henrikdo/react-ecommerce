import React from 'react';
import Header from './components/header/header';
import Products from './components/products/products';
import Provider from './context/Provider';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Products/>
      <Cart/>
    </Provider>
    
  );
}

export default App;
