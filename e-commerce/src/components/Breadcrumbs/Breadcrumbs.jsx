import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const Breadcrumbs = ({ product }) => {
  return (
    <div className='breadcrumbs'>
      <span>Home</span>
      <img src={arrow_icon} alt="" />
      <span>Shop</span>
      {product && (
        <>
          <img src={arrow_icon} alt="" />
          <span>{product.category}</span>
          <img src={arrow_icon} alt="" />
          <span>{product.name}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs; 