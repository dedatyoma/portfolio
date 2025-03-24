import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Store Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        {getTotalCartItems() > 0 && <div className="nav-cart-count">{getTotalCartItems()}</div>}
      </div>
    </div>
  )
}

export default Navbar