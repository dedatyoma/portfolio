import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Unable to load products';
      return rejectWithValue({ message: errorMessage, status: error.response?.status });
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${productId}`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Product not found';
      return rejectWithValue({ 
        message: errorMessage, 
        status: error.response?.status,
        productId 
      });
    }
  }
);


const initialState = {
  items: [],
  byCategory: {},
  paginationData: {
    totalItems: 0,
    currentPage: 1,
  },
  status: 'idle',
  error: null
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
  }
});

export const selectAllProducts = state => state.products.items;
export const selectProductsStatus = state => state.products.status;
export const selectProductsError = state => state.products.error;
export const selectCurrentProduct = state => state.products.currentProduct;
export const selectCurrentProductStatus = state => state.products.currentProductStatus;
export const selectCurrentProductError = state => state.products.currentProductError;
export const selectPaginationData = state => state.products.paginationData;

export const selectProductsByCategory = createSelector(
  [selectAllProducts, (_, category) => category],
  (products, category) => {
    return products.filter(product => product.category === category);
  }
);

export default productsSlice.reducer;