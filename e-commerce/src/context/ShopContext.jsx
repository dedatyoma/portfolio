import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from "../redux/slices/cartSlice";
import all_product from '../assets/all_product'

const ShopContext = createContext(null);
export {ShopContext};

const ShopContextProvider = (props) => {
  
 const dispatch = useDispatch();

 const cartItems = useSelector((state) => state.cart.items);
 const totalAmount = useSelector((state) => state.cart.totalAmount)

 const addToCart = (itemId) => {
  dispatch(addToCartAction(itemId))
 }

 const removeFromCart = (itemId) => {
  dispatch(removeFromCartAction(itemId))
 }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item]
        }
      }
    }
    return totalAmount
  }

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount};
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
