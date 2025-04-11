//Rushina Sherstha Place Order Page

import React, { useState, useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import stripe_logo from '../assets/stripe.png'
import razorpay_logo from '../assets/razorpay_logo.png'
import { ShopContext } from '../context/ShopContext'

// PlaceOrder page component for checkout process
const PlaceOrder = () => {
  // State for selected payment method
  const [method, setMethod] = useState('cod');
  // Get navigation function from context
  const { navigate } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/*---------------LEFT SIDE------------------ */}
        <div className='flex flex-col gap-4 w-full sm:max-[480px] max-w-[453px]'>
            {/* Delivery information title */}
            <div className='text-xl sm:text-2xl sm:text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
              {/* Name inputs */}
              <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
              </div>
              {/* Email input */}
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
              {/* Address input */}
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
              
              {/* City and State inputs */}
              <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
              </div>

              {/* Zipcode and Country inputs */}
              <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
              </div>
              {/* Phone number input */}
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>
        </div>
           {/*---------------RIGHT SIDE------------------ */}
           <div className='mt-8'>
            {/* Cart total section */}
            <div className ='mt-8 min-w-80'>
                <CartTotal/>
            </div>
              {/* Payment method section */}
              <div className='mt-12 max-w-[500px]'>
                  <Title text1={'PAYMENT'} text2={'METHOD'}/>
           
           {/*---------------PPAYMENT METHOD------------------ */}
                  {/* Payment method options */}
                  <div className='flex gap-3 flex-col lg:flex-row'>
                      {/* Stripe payment option */}
                      <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-black' : ''}`}></p>
                          <img className='h-6 mx-4' src={stripe_logo} alt="Stripe" />
                      </div>

                      {/* Razorpay payment option */}
                      <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-black' : ''}`}></p>
                          <img className='h-6 mx-4' src={razorpay_logo} alt="Rayzor pay" />
                      </div>

                      {/* Cash on delivery option */}
                      <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-black' : ''}`}></p>
                          <p className='text-gray-700 text-xs font-medium mx-4'>CASH ON DELIVERY</p>
                      </div>
                  </div>

                  {/* Place order button */}
                  <div className='w-full text-end mt-8'>
                    <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                  </div>

              </div>
           </div>
    </div>
  )
}

export default PlaceOrder
