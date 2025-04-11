// Rushina Sherstha Navbar

import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import cart from '../assets/cart.png';
import menu from '../assets/menu.png';
import dropdown from '../assets/dropdown.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    
    // Local state to track if the mobile menu is visible
    const [visible,setVisible] = useState(false);

    // Get values from the ShopContext: showSearch state, setShowSearch function, and getCartCount function
    const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);

    // Function that toggles the search bar visibility when search icon is clicked
    const handleSearchClick = (e) => {
        // Prevent default form behavior (if used in a form)
        e.preventDefault();
        // Toggle the showSearch state
        setShowSearch(!showSearch);
    };

  // JSX return statement to render the Navbar
  return (
    // Main navbar container with flex layout, spacing, and font styling
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo image that links to the home page */}
      <Link to='/'><img src={logo} className='w-36' alt="Logo" /></Link>

      {/* Navigation links (hidden on small screens) */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        {/* NavLink for HOME page with active state styling */}
        <NavLink to='/' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 active' : 'flex flex-col items-center gap-1'}>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        {/* NavLink for COLLECTION page */}
        <NavLink to='/collection' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 active' : 'flex flex-col items-center gap-1'}>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
        {/* NavLink for ABOUT page */}
        <NavLink to='/about' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 active' : 'flex flex-col items-center gap-1'}>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
        {/* NavLink for CONTACT page */}
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 active' : 'flex flex-col items-center gap-1'}>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      {/* Container for the right-side icons */}
      <div className='flex items-center gap-6'>

        {/* Search icon that toggles the search bar on click */}
        <img onClick={handleSearchClick} src={search} className='w-5 cursor-pointer' alt="Search" />

        {/* Profile icon with dropdown on hover */}
        <div className='group relative'>

          {/* Profile icon linking to login page */}
          <Link to='/login'><img  src={profile} className='w-5 cursor-pointer' alt="Profile" /></Link>

          {/* Dropdown menu that appears on hover */}
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

            {/* Dropdown content */}
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart icon that links to the cart page */}
        <Link to='/cart' className='relative'>
          <img src={cart} className='w-5 min-w-5' alt="Cart" />
          {/* Cart item count badge, pulled from getCartCount() */}
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        {/* Menu icon for small screens that opens the sidebar menu */}
        <img onClick={()=>setVisible(true)} src={menu} className='w-5 cursor-pointer sm:hidden' alt="Menu"/>
      </div>

      {/* Sidebar menu that slides in on small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

          {/* Container for the sidebar navigation links */}
          <div className='flex flex-col text-gray-600'>

              {/* Back button to close the sidebar menu */}
              <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img className='h-4 rotate-180' src={dropdown} alt=""/>
                <p>Back</p>
              </div>

              {/* Sidebar HOME link */}
              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border active' : 'py-2 pl-6 border'} to='/'>HOME</NavLink>

              {/* Sidebar COLLECTION link */}
              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border active' : 'py-2 pl-6 border'} to='/collection'>COLLECTION</NavLink>

              {/* Sidebar ABOUT link */}
              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border active' : 'py-2 pl-6 border'} to='/about'>ABOUT</NavLink>

              {/* Sidebar CONTACT link */}
              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border active' : 'py-2 pl-6 border'} to='/contact'>CONTACT</NavLink>
          </div>
      </div>
    </div>
  );
}

// Export the Navbar component so it can be used in other files
export default Navbar;
