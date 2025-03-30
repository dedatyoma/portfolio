import React from 'react'
import { useSelector } from 'react-redux'
import './styles/ShopCategory.css'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import { selectAllProducts } from '../redux/slices/productsSlice'

const ShopCategory = (props) => {
  const products = useSelector(selectAllProducts);

  return (
    <div className='shop-category'>
      <img className='banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item) => {
          if(props.category === item.category) {
            return (
              <Item 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            )
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
