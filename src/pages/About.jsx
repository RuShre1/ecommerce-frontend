//Rushina Sherstha About Page

import React from 'react'
import Title from '../components/Title'
import about from '../assets/about.png'
import NewsletterBox from '../components/NewsletterBox'

// About page component showing company information
const About = () => {
  return (
    <div>
      {/* Main title section */}
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      {/* Company information section with image and text */}
      <div className='my-10 flex flec-col md:flex-row gap-16'>
        {/* Company image */}
        <img className='w-full md:max-w-[400px]' src={about} alt="" />
        {/* Company description text */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p> dummy text COME BACK LATER</p>
            <p> anotehr dummy text for about</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>another pagraph but for out mission </p>
        </div>
      </div>

      {/* Why choose us section title */}
      <div className='text-xl py-4'>
          <Title  text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      {/* Three feature boxes explaining company benefits */}
      <div className='flex fles-col md:flex-row text-sm mb-20'>
        {/* Quality assurance feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>another dummby propt of how we select our product </p>
        </div>

        {/* Convenience feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>another one </p>
        </div>

        {/* Customer service feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>another one </p>
        </div>  
      </div>

      {/* Newsletter subscription section */}
      <NewsletterBox/>
    </div>
  )
}

export default About
