import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import './Item.css'

import p1_img from '../Assets/product_1.png'
import p2_img from '../Assets/product_2.png'
import p3_img from '../Assets/product_3.png'
import p4_img from '../Assets/product_4.png'
import p5_img from '../Assets/product_5.png'
import p6_img from '../Assets/product_6.png'
import p7_img from '../Assets/product_7.png'
import p8_img from '../Assets/product_8.png'
import p9_img from '../Assets/product_9.png'
import p10_img from '../Assets/product_10.png'
import p11_img from '../Assets/product_11.png'
import p12_img from '../Assets/product_12.png'
import p13_img from '../Assets/product_13.png'
import p14_img from '../Assets/product_14.png'
import p15_img from '../Assets/product_15.png'
import p16_img from '../Assets/product_16.png'
import p17_img from '../Assets/product_17.png'
import p18_img from '../Assets/product_18.png'
import p19_img from '../Assets/product_19.png'
import p20_img from '../Assets/product_20.png'
import p21_img from '../Assets/product_21.png'
import p22_img from '../Assets/product_22.png'
import p23_img from '../Assets/product_23.png'
import p24_img from '../Assets/product_24.png'
import p25_img from '../Assets/product_25.png'
import p26_img from '../Assets/product_26.png'
import p27_img from '../Assets/product_27.png'
import p28_img from '../Assets/product_28.png'
import p29_img from '../Assets/product_29.png'
import p30_img from '../Assets/product_30.png'
import p31_img from '../Assets/product_31.png'
import p32_img from '../Assets/product_32.png'
import p33_img from '../Assets/product_33.png'
import p34_img from '../Assets/product_34.png'
import p35_img from '../Assets/product_35.png'
import p36_img from '../Assets/product_36.png'

export const images = {
  'product_1.png': p1_img,
  'product_2.png': p2_img,
  'product_3.png': p3_img,
  'product_4.png': p4_img,
  'product_5.png': p5_img,
  'product_6.png': p6_img,
  'product_7.png': p7_img,
  'product_8.png': p8_img,
  'product_9.png': p9_img,
  'product_10.png': p10_img,
  'product_11.png': p11_img,
  'product_12.png': p12_img,
  'product_13.png': p13_img,
  'product_14.png': p14_img,
  'product_15.png': p15_img,
  'product_16.png': p16_img,
  'product_17.png': p17_img,
  'product_18.png': p18_img,
  'product_19.png': p19_img,
  'product_20.png': p20_img,
  'product_21.png': p21_img,
  'product_22.png': p22_img,
  'product_23.png': p23_img,
  'product_24.png': p24_img,
  'product_25.png': p25_img,
  'product_26.png': p26_img,
  'product_27.png': p27_img,
  'product_28.png': p28_img,
  'product_29.png': p29_img,
  'product_30.png': p30_img,
  'product_31.png': p31_img,
  'product_32.png': p32_img,
  'product_33.png': p33_img,
  'product_34.png': p34_img,
  'product_35.png': p35_img,
  'product_36.png': p36_img,
};

const Item = (props) => {
  const dispatch = useDispatch();
  
  console.log('Item props:', props);
  console.log('Image path:', props.image);
  console.log('Resolved image:', images[props.image]);
  
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={images[props.image]} alt={props.name} />
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
        onClick={() => dispatch(addToCart(props.id))}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Item
