import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import { useProducts } from '../../hooks/useProducts';

const NewCollections = () => {
  const { 
    isLoading, 
    isError, 
    getRandomProducts 
  } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  const newCollections = getRandomProducts(8);

  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item) => (
          <Item 
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
 