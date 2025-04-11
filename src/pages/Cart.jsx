//Rushina Sherstha Cart Page

import React, { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import trash from '../assets/trash.png'
import CartTotal from '../components/CartTotal'

// Cart page component showing all items in cart
const Cart = () => {
  // Get cart data and functions from context
  const { products, currency, cartItems, setCartItems, updateQuantity, navigate } = useContext(ShopContext)
  // State to store formatted cart data
  const [cartData, setCartData] = useState([])

  // Format cart items into a more usable structure
  useEffect(() => {
    const tempData = [];
    if (cartItems) {
      // Loop through all items in cart
      for(const itemId in cartItems){
        // Loop through all sizes for each item
        for(const size in cartItems[itemId]){
          // Only add items with quantity > 0
          if (cartItems[itemId][size] > 0) {
            tempData.push({
              id: parseInt(itemId),
              size: size,
              quantity: cartItems[itemId][size]
            })
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      {/* Cart title */}
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Show empty cart message or cart items */}
      {cartData.length === 0 ? (
        <div className='text-center py-8'>
          <p className='text-gray-500'>Your cart is empty</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {/* Map through each item in cart */}
          {cartData.map((item, index) => {
            // Find product details for current item
            const productData = products.find((product) => product.id === item.id);
            
            if (!productData) {
              return null;
            }

            return(
              // Cart item card
              <div key={index} className='flex items-center gap-4 p-4 border rounded-lg'>
                {/* Product image */}
                <img 
                  className='w-24 h-24 object-cover rounded' 
                  src={productData?.images[0] || "/placeholder.svg"} 
                  alt={productData?.name || 'Product'} 
                />
                <div className='flex-1'>
                  {/* Product name */}
                  <h3 className='text-lg font-semibold'>{productData?.name || 'Unknown Product'}</h3>
                  <div className='flex items-center justify-between mt-2'>
                    {/* Price and size */}
                    <div className='flex items-center gap-3'>
                      <p className='text-gray-600'>{currency}{productData?.price}</p>
                      <button className='border py-1 px-3 bg-gray-100 border-black text-sm'>{item.size}</button>
                    </div>
                    {/* Quantity controls and remove button */}
                    <div className='flex items-center gap-4'>
                      {/* Quantity input */}
                      <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '') {
                            updateQuantity(item.id, item.size, 0);
                          } else {
                            const numValue = parseInt(value);
                            if (!isNaN(numValue) && numValue >= 0) {
                              updateQuantity(item.id, item.size, numValue);
                            }
                          }
                        }}
                        className='w-16 text-center border rounded focus:outline-none'
                      />
                      {/* Remove item button */}
                      <img 
                        src={trash} 
                        alt="Remove" 
                        className='w-5 h-5 cursor-pointer hover:opacity-70' 
                        onClick={() => updateQuantity(item.id, item.size, 0)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {/* Cart total and checkout section */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          {/* Show cart total */}
          <CartTotal />
          {/* Checkout button */}
          <div className='w-full text-end'>
              <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart