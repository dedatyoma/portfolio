import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, selectCartItems, addToCart } from '../../redux/slices/cartSlice';
import { selectAllProducts } from '../../redux/slices/productsSlice';
import remove_icon from '../../assets/cart_cross_icon.png';
import './CartItems.css';
import { images } from '../Item/Item';
import all_product from '../../assets/all_product'

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectAllProducts);

  const getTotalCartPrice = () => {
    let totalAmount = 0;
    for ( const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item)) 
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount
    }
  };

  const handleQuantityChange = (productId, action) => {
    if (action === 'increase') {
      dispatch(addToCart(productId));
    } else if (action === 'decrease') {
      dispatch(removeFromCart(productId));
    }
  };

  return (
    <section className="cartitems" aria-label="Shopping Cart">
      <table className="cart-table">
        <thead>
          <tr className="format-main">
            <th scope="col">Products</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr key={e.id} className='cartitems-format format-main'>
                  <td><img src={images[e.image]} alt={`${e.name} product`} className='product-icon'/></td>
                  <td>{e.name}</td>
                  <td className='price'>${e.new_price}</td>
                  <td className='quantity-item'>
                    <button 
                      className='add-remove-item' 
                      onClick={() => handleQuantityChange(e.id, 'increase')}
                      aria-label={`Increase quantity of ${e.name}`}
                    >+</button>
                    <button className='quantity' aria-label={`Quantity of ${e.name}`}>{cartItems[e.id]}</button>
                    <button 
                      className='add-remove-item' 
                      onClick={() => handleQuantityChange(e.id, 'decrease')}
                      aria-label={`Decrease quantity of ${e.name}`}
                    >-</button>
                  </td>
                  <td className='total'>${e.new_price * cartItems[e.id]}</td>
                  <td>
                    <button 
                      className='cart-remove-icon' 
                      onClick={() => dispatch(removeFromCart(e.id))}
                      aria-label={`Remove ${e.name} from cart`}
                    >
                      <img src={remove_icon} alt="" />
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <article className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className='cartitems-total-item'>
            <h3>Subtotal</h3>
            <h3>${getTotalCartPrice()}</h3>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Shipping Fee</h3>
            <h3>Free</h3>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartPrice()}</h3>
          </div>
          <div className="cart-buttons">
            <button className="checkout-button">Proceed to Checkout</button>
            <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CartItems;