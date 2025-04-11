//Rushina Sherstha Orders Page

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

// Orders page showing user's order history
const Orders = () => {
  // Get products and currency from context
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      {/* Page title */}
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      
      {/* Orders list */}
      <div>
        {/* Map through first 3 products as example orders */}
        {products && products.slice(1,4).map((item,index) => (
          // Order card
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            {/* Order details section */}
            <div className='flex items-start gap-6 text-sm'>
              {/* Product image */}
              <img className='w-16 sm:w-20' src={item.images[0]} alt={item.name} />
              {/* Product information */}
              <div>
                {/* Product name */}
                <p className='sm:text-base font-medium'>{item.name}</p>
                {/* Price and quantity details */}
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                {/* Order date */}
                <p className='mt-2'>Date: <span className='text-gray-400'>25, Jul, 2025</span></p>
              </div>
            </div>
            {/* Order status */}
            <div className='md:w-1/2 flex items-center gap-2'>
              {/* Status indicator dot */}
              <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
              {/* Status text */}
              <p className='text-sm md:text-base'>Ready to ship</p>
            </div>
            {/* Track order button */}
            <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
