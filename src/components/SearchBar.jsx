import React, { useContext, useEffect, useState } from 'react'
import cross from '../assets/cross.png'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

/**
 * SearchBar Component
 * Displays a search input field with a search icon and close button
 * The component visibility is controlled by the ShopContext and only shows on collections page
 */
const SearchBar = () => {
    // Access search-related state and functions from ShopContext
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    // Local state to control component visibility
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    // Only show search bar when showSearch is true
    useEffect(() => {
        if (showSearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [showSearch]);

    // Only render the search bar if visible is true
    return visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            {/* Search input container with rounded border */}
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                {/* Search input field */}
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search' 
                />
                {/* Search icon */}
                <img className='w-4 h-4 ml-2' src="/src/assets/search.png" alt="Search"/>
            </div>
            {/* Close button to hide the search bar */}
            <img 
                onClick={() => {
                    setShowSearch(false);
                    setVisible(false);
                }} 
                className='inline w-3 cursor-pointer'
                src={cross} 
                alt="cross"
            />
        </div>
    ) : null
}

export default SearchBar
