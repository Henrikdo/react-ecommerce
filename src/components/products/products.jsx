import React, {useEffect, useContext } from 'react';
import './products.css';
import fetchProducts from '../../api/fetchproducts';
import ProductCard from '../productcard/ProductCard';
import Loading from '../loading/Loading';
import AppContext from '../../context/appcontext';

function Products() {

  const {products,setProducts,loading,setLoading} = useContext(AppContext);


  useEffect(() => { 
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      setLoading(false);
    });

  },[]);

  
  return (
    (loading && <Loading/>) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key = {product.id} data = {product}/>)
        }
      </section>
    )
    
  );
}

export default Products;
