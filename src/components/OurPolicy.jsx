//Rushina Sherstha Our Policy

import React from 'react'
import { assets } from '../assets/assets'
import exchange from '../assets/exchange.png'
import quality from '../assets/quality.png'
import support from '../assets/support.png'

const OurPolicy = () => {
  return (
    // Main container with responsive flex layout and spacing
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
     
      {/* Exchange Policy Section */}
      <div>
        {/* Exchange policy icon */}
        <img src={exchange} className='w-12 m-auto mb-5' alt="Exchange"/>
        {/* Exchange policy heading */}
        <p className='font-semibold'>Easy Exchange Policy</p>
        {/* Exchange policy description */}
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      {/* Return Policy Section */}
      <div>
        {/* Quality/Return policy icon */}
        <img src={quality} className='w-12 m-auto mb-5' alt="Quality"/>
        {/* Return policy heading */}
        <p className='font-semibold'>7 Days Return Policy</p>
        {/* Return policy description */}
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      {/* Customer Support Section */}
      <div>
        {/* Customer support icon */}
        <img src={support} className='w-12 m-auto mb-5' alt="Support"/>
        {/* Customer support heading */}
        <p className='font-semibold'>Best customer support</p>
        {/* Customer support description */}
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>

    </div>
  )
}

// Export OurPolicy component for use in other files
export default OurPolicy

