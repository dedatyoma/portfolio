import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectTotalCartItems } from '../../redux/slices/cartSlice'
import NavLinks from './NavLinks'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalItems = useSelector(selectTotalCartItems);

  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Store Logo" />
        <p>UrbanFit</p>
      </div>
      <NavLinks />
      <div className="nav-login-cart">
        <Link to='/login' className={location.pathname === '/login' ? 'active' : ''}>
          <button className={location.pathname === '/login' ? 'active' : ''}>Login</button>
        </Link>
        <Link to='/cart' className={location.pathname === '/cart' ? 'active' : ''}>
          <img src={cart_icon} alt="Cart" />
        </Link>
        {totalItems > 0 && <div className="nav-cart-count">{totalItems}</div>}
      </div>
    </div>
  )
}

export default Navbar