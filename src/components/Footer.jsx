//Rushina Sherstha Footer

import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/logo.png'

// Footer component that displays website footer with company information and contact details
const Footer = () => {
  return (
    <div>
        {/* Main footer content container with responsive grid layout */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Company information section */}
            <div>
                {/* Company logo */}
                <img src={logo} className='mb-5 w-32' alt="Logo" />
                {/* Company description text */}
                <p className='w-full md:w-2/3 text-gray-600'>
                RAEVOLVE is a modern clothing brand built for movement, style, and self-expression. We create pieces that feel as good as they look—versatile, comfortable, and made to evolve with you. Fashion that fits your lifestyle, not the other way around.
                </p>
            </div>

            {/* Company links section */}
            <div>
                {/* Section title */}
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                {/* Navigation links list */}
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* Contact information section */}
            <div>
                {/* Section title */}
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                {/* Contact details list */}
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@raevolve.com</li>
                </ul>
            </div>
        </div>

        {/* Copyright and attribution section */}
        <div className='text-center text-gray-600 py-4 border-t'>
            {/* Copyright notice */}
            <p>Copyright 2025@RAEVOLVE.com - All Right Reserved.</p>
            {/* Project attribution */}
            E-Commerce Project :: Rushina Shrestha
        </div>
    </div>
  )
}

export default Footer
