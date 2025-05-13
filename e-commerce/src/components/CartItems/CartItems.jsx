import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, selectCartItems, addToCart, selectCalculatedTotalAmount } from '../../redux/slices/cartSlice';
import { selectAllProducts } from '../../redux/slices/productsSlice';
import remove_icon from '../../assets/cart_cross_icon.png';
import './CartItems.css';
import { getImage } from '../../utils/imageUtils';

const CartItem = React.memo(({ product, quantity, onIncrease, onDecrease, onRemove }) => {
  const totalPrice = useMemo(() => product.new_price * quantity, [product.new_price, quantity]);
  
  return (
    <tr className='cartitems-format format-main'>
      <td><img src={getImage(product.image)} alt={`${product.name} product`} className='product-icon'/></td>
      <td>{product.name}</td>
      <td className='price'>${product.new_price}</td>
      <td className='quantity-item'>
        <button 
          className='add-remove-item' 
          onClick={onDecrease}
          aria-label={`Decrease quantity of ${product.name}`}
        >-</button>
        <button className='quantity' aria-label={`Quantity of ${product.name}`}>{quantity}</button>
        <button 
          className='add-remove-item' 
          onClick={onIncrease}
          aria-label={`Increase quantity of ${product.name}`}
        >+</button>
      </td>
      <td className='total'>${totalPrice}</td>
      <td>
        <button 
          className='cart-remove-icon' 
          onClick={onRemove}
          aria-label={`Remove ${product.name} from cart`}
        >
          <img src={remove_icon} alt="" />
        </button>
      </td>
    </tr>
  );
});

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectAllProducts);
  const totalAmount = useSelector(selectCalculatedTotalAmount);
  
  const cartProducts = useMemo(() => {
    if (!products.length) return [];
    
    return products
      .filter(product => cartItems[product.id] && cartItems[product.id] > 0)
      .map(product => ({
        product,
        quantity: cartItems[product.id]
      }));
  }, [products, cartItems]);
  
  const handleIncrease = useCallback((productId) => {
    dispatch(addToCart(productId));
  }, [dispatch]);
  
  const handleDecrease = useCallback((productId) => {
    dispatch(removeFromCart(productId));
  }, [dispatch]);
  
  const handleRemove = useCallback((productId) => {
    
    while (cartItems[productId] > 0) {
      dispatch(removeFromCart(productId));
    }
  }, [dispatch, cartItems]);
  
  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (cartProducts.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here.</p>
      </div>
    );
  }

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
          {cartProducts.map(({ product, quantity }) => (
            <CartItem 
              key={product.id}
              product={product}
              quantity={quantity}
              onIncrease={() => handleIncrease(product.id)}
              onDecrease={() => handleDecrease(product.id)}
              onRemove={() => handleRemove(product.id)}
            />
          ))}
        </tbody>
      </table>

      <article className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className='cartitems-total-item'>
            <h3>Subtotal</h3>
            <h3>${totalAmount}</h3>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Shipping Fee</h3>
            <h3>Free</h3>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${totalAmount}</h3>
          </div>
          <div className="cart-buttons">
            <button className="checkout-button">Proceed to Checkout</button>
            <button 
              className="clear-cart-button" 
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default React.memo(CartItems);