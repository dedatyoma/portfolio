import React from 'react';
import { useProducts } from '../hooks/useProducts';
import Item from '../components/Item/Item';
import './styles/Shop.css';

const Shop = () => {
  const { 
    products, 
    isLoading, 
    isError, 
    error, 
    isEmpty 
  } = useProducts();

  if (isLoading) {
    return (
      <div className="shop">
        <h1>Our Products</h1>
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="shop">
        <h1>Our Products</h1>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="shop">
        <h1>Our Products</h1>
        <div className="empty">No products available</div>
      </div>
    );
  }

  return (
    <div className="shop">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((item) => (
          <Item 
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
