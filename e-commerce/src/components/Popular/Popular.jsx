import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './popular.css'
import Item from '../Item/Item'
import { selectAllProducts, selectProductsStatus, fetchProducts } from '../../redux/slices/productsSlice'

const Popular = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const womenProducts = products.filter(item => item.category === 'women').slice(0, 4);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading products</div>;
  }

  return (
    <div className='popular'>
      <h1>POPULAR FOR WOMEN</h1>
      <hr />
      <div className="popular-item">
        {womenProducts.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
