import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { addToCart } from '../../redux/slices/cartSlice'
import { getImage } from '../../utils/imageUtils'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  return (
    <div className='product-display'>
      <div className="left">
        <div className="list">
          <img src={getImage(product.image)} alt="" />
          <img src={getImage(product.image)} alt="" />
          <img src={getImage(product.image)} alt="" />
          <img src={getImage(product.image)} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='main-img' src={getImage(product.image)} alt="" />
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
          onClick={() => {
            dispatch(addToCart(product.id))
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