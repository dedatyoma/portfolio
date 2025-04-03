import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import { useToast } from '../../context/ToastContext'
import { getImage } from '../../utils/imageUtils'
import './Item.css'

export { commonImages as images } from '../../utils/imageUtils';

const Item = (props) => {
  const dispatch = useDispatch();
  const { showToast } = useToast();

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={getImage(props.image)}/>
        <p className='item-name'>{props.name}</p>
      </Link>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
      <button 
        className="item-add-cart"
        onClick={() => {
          dispatch(addToCart(props.id));
          showToast('Success!', 'Item added to your cart successfully.', 'success');
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Item
