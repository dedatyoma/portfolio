import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllProducts, selectProductsStatus, selectProductsError, fetchProducts } from '../redux/slices/productsSlice'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Breadcrum from '../components/Breadcrums/Breadcrum'

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  console.log('ProductId:', productId);
  console.log('Products:', products);
  console.log('Status:', status);
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (status === 'succeeded' && products.length === 0) {
    return <div>No products available</div>;
  }

  const product = products.find((item) => Number(item.id) === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product