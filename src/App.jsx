//Rushina Sherstha App.jsx

import React from 'react'
import {Routes,Route} from 'react-router-dom'
// Import all page components
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
// Import layout components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
// Import toast notification components
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    // Main container with responsive padding
    <div className='px-4 sm:px-[5vw] lg:px-[9vw]'>
      {/* Toast notification container */}
      <ToastContainer />
      {/* Navigation bar */}
      <Navbar />
      {/* Search functionality */}
      <SearchBar/>
      {/* Application routes */}
      <Routes>
        {/* Home page route */}
        <Route path='/' element={<Home/>} />
        {/* Collection page route */}
        <Route path='/collection' element={<Collection/>} />
        {/* About page route */}
        <Route path='/about' element={<About/>} />
        {/* Contact page route */}
        <Route path='/contact' element={<Contact/>} />
        {/* Product detail page route with dynamic productId parameter */}
        <Route path='/product/:productId' element={<Product/>} />
        {/* Shopping cart page route */}
        <Route path='/cart' element={<Cart/>} />
        {/* Login page route */}
        <Route path='/login' element={<Login/>} />
        {/* Checkout page route */}
        <Route path='/place-order' element={<PlaceOrder/>} />
        {/* Orders history page route */}
        <Route path='/orders' element={<Orders/>} />
      </Routes> 
      {/* Footer component */}
      <Footer />
    </div>
  )
}

export default App
