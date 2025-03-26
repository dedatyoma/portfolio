import React from 'react'
import { useDispatch } from 'react-redux'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { addToCart } from '../../redux/slices/cartSlice'
import './ProductDisplay.css'

// Импортируем все изображения
const importImage = (imageName) => {
  return new URL(`../Assets/${imageName}`, import.meta.url).href;
};

const ProductDisplay = (props) => {
  const {product} = props;
  const dispatch = useDispatch();
  
  return (
    <div className='product-display'>
      <div className="left">
        <div className="list">
          <img src={importImage(product.image)} alt="" />
          <img src={importImage(product.image)} alt="" />
          <img src={importImage(product.image)} alt="" />
          <img src={importImage(product.image)} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='main-img' src={importImage(product.image)} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={() => {dispatch(addToCart(product.id))
            return alert("Item added to the cart.")
          }}
        >
          ADD TO CART
        </button>
        <p className="product-category"><span>Category:</span> {product.category}</p>
        <p className="product-category"><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay