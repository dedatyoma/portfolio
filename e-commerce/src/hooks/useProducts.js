import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectAllProducts, 
  selectProductsStatus, 
  selectProductsError,
  fetchProducts 
} from '../redux/slices/productsSlice';

export const useProducts = (options = {}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const getRandomProducts = (count = 8) => {
    if (!products.length) return [];
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const getProductsByCategory = (category) => {
    return products.filter(item => item.category === category);
  };

  return {
    products,
    status,
    error,
    isLoading: status === 'loading',
    isError: status === 'failed',
    isEmpty: !products.length,
    getRandomProducts,
    getProductsByCategory
  };
}; 