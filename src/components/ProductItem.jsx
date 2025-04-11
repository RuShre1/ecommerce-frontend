//Rushina Sherstha Product Item

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

// Define ProductItem component with destructured props
const ProductItem = ({id, image, name, price}) => {
    // Get currency from ShopContext
    const {currency} = useContext(ShopContext);
  return (
    // Link wrapper for product navigation with styling
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      {/* Container for product image with aspect ratio and overflow handling */}
      <div className='overflow-hidden aspect-square'>
        {/* Product image with hover effect and transition */}
        <img 
          className='w-full h-full object-cover hover:scale-110 transition ease-in-out' 
          src={image} 
          alt={name} 
        />
      </div>
      {/* Product name with padding */}
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      {/* Product price with currency and medium font weight */}
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

// Export ProductItem component for use in other files
export default ProductItem
