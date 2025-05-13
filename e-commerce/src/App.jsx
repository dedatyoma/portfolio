import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './components/CartItems/CartItems'
import Footer from './components/Footer/Footer'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kid' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
