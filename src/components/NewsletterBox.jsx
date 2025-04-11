//Rushina Sherstha NewsletterBox

import React from 'react'

// Define NewsletterBox functional component
const NewsletterBox = () => {
    // Event handler for form submission
    const onSubmitHandler = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();
    }
  return (
    // Main container div with centered text
    <div className='text-center'>
      {/* Heading text with styling */}
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      {/* Subheading text with margin top and gray color */}
      <p className='text-gray-400 mt-3'>
      Join our newsletter and get exclusive updates, offers, and 20% off your next purchase.


      </p>
      {/* Form element with responsive width, flex layout, and border */}
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        {/* Email input field with full width and no outline */}
        <input className='w-full sm:flex-l outline-none' type="email" placeholder='Enter your email' required/>
        {/* Submit button with black background and white text */}
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

// Export NewsletterBox component for use in other files
export default NewsletterBox
