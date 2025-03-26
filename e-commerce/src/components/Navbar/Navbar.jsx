import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector(state => state.cart.items);
  
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={() =>{ navigate("/")
        
      }}>
        <img src={logo} alt="Store Logo" />
        <p>UrbanFit</p>
      </div>
      <ul className="nav-menu">
        <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Shop</Link></li>
        <li><Link to='/men' className={location.pathname === '/men' ? 'active' : ''}>Men</Link></li>
        <li><Link to='/women' className={location.pathname === '/women' ? 'active' : ''}>Women</Link></li>
        <li><Link to='/kids' className={location.pathname === '/kids' ? 'active' : ''}>Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button className={location.pathname === '/login' ? 'active' : ''}>Login</button>
        </Link>
        <Link to='/cart' className={location.pathname === '/cart' ? 'active' : ''}>
          <img src={cart_icon} alt="Cart" />
        </Link>
        {getTotalCartItems() > 0 && <div className="nav-cart-count">{getTotalCartItems()}</div>}
      </div>
    </div>
  )
}

export default Navbar