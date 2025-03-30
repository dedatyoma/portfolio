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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  if (isEmpty) {
    return <div>No products available</div>;
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
