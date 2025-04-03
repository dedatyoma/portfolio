import React, { useState, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Banner } from '../components/Banner/Banner'
import './styles/ShopCategory.css'
import Item from '../components/Item/Item'
import { selectProductsByCategory } from '../redux/slices/productsSlice'
import { useProducts } from '../hooks/useProducts'

const PRODUCTS_PER_PAGE = 12;

const ShopCategory = (props) => {
  const { 
    products, 
    isLoading, 
    isError, 
    error, 
    isEmpty 
  } = useProducts();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');

  const categoryProducts = useSelector(state => selectProductsByCategory(state, props.category));
  const sortedProducts = useMemo(() => {
    let result = [...categoryProducts];
    
    switch(sortOption) {
      case 'price-asc':
        return result.sort((a, b) => a.new_price - b.new_price);
      case 'price-desc':
        return result.sort((a, b) => b.new_price - a.new_price);
      case 'newest':
        return result.sort((a, b) => b.id - a.id);
      case 'popular':
        return result;
      default:
        return result;
    }
  }, [categoryProducts, sortOption]);
  
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts);
  
  const currentPageProducts = useMemo(() => {
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, startIndex, endIndex]);
  
  const handlePageChange = useCallback((newPage) => {
    window.scrollTo(0, 0);
    setCurrentPage(newPage);
  }, []);
  
  const handleSortChange = useCallback((e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  }, []);
  
  const renderProducts = () => {
    if (isLoading) {
      return <div className="loading-message">Loading products...</div>;
    }
    
    if (isError) {
      return <div className="error-message">Error: {error || 'Unable to load products'}</div>;
    }
    
    if (isEmpty || sortedProducts.length === 0) {
      return <div className="empty-message">No products found in this category</div>;
    }
    
    return (
      <div className="shopcategory-products">
        {currentPageProducts.map((item) => (
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
    );
  };
  
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    return (
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        
        <div className="page-numbers">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}
          
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <span className="ellipsis">...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
        
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className='shop-category'>
      <Banner bannerType={props.category}/>
      
      {!isLoading && !isError && !isEmpty && (
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing {startIndex + 1}-{endIndex}</span> out of {totalProducts} products
          </p>
          <div className="shopcategory-sort">
            <select 
              className="sort" 
              name="sortBy" 
              id="sortBy" 
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      )}
      
      {renderProducts()}
      
      {!isLoading && !isError && !isEmpty && renderPagination()}
    </div>
  )
}

export default React.memo(ShopCategory);
