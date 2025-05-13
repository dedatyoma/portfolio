import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { 
  selectCurrentProduct,
  selectCurrentProductStatus,
  selectCurrentProductError,
  fetchProductById
} from '../redux/slices/productsSlice'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const status = useSelector(selectCurrentProductStatus);
  const error = useSelector(selectCurrentProductError);
  
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [productId, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-page'>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product