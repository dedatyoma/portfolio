import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ product }) => {
  return (
    <div className='breadcrumbs'>
      <Link to="/">Home</Link>
      <img src={arrow_icon} alt="" />
      <Link to="/shop">Shop</Link>
      {product && (
        <>
          <img src={arrow_icon} alt="" />
          <Link to={`/${product.category}`}>{product.category}</Link>
          <img src={arrow_icon} alt="" />
          <span className="current-page">{product.name}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs; 