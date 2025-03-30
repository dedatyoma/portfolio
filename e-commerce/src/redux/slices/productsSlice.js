import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:3001/products');
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await axios.get(`http://localhost:3001/products/${productId}`);
    return response.data;
  }
);

const initialState = {
  items: [],
  currentProduct: null,
  status: 'idle',
  currentProductStatus: 'idle',
  error: null,
  currentProductError: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.map(product => ({
          ...product,
          image: product.image
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      .addCase(fetchProductById.pending, (state) => {
        state.currentProductStatus = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProductStatus = 'succeeded';
        state.currentProduct = action.payload;
        state.currentProductError = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.currentProductStatus = 'failed';
        state.currentProductError = action.error.message;
      });
  },
});

const selectProductsState = state => state.products;

export const selectAllProducts = createSelector(
  [selectProductsState],
  products => products.items
);

export const selectProductsStatus = createSelector(
  [selectProductsState],
  products => products.status
);

export const selectProductsError = createSelector(
  [selectProductsState],
  products => products.error
);

export const selectWomenProducts = createSelector(
  [selectAllProducts],
  products => products.filter(item => item.category === 'women')
);

export const selectCurrentProduct = createSelector(
  [selectProductsState],
  products => products.currentProduct
);

export const selectCurrentProductStatus = createSelector(
  [selectProductsState],
  products => products.currentProductStatus
);

export const selectCurrentProductError = createSelector(
  [selectProductsState],
  products => products.currentProductError
);

export default productsSlice.reducer;