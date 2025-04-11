//Rushina Sherstha Title

import React from 'react'

const Title = ({text1,text2}) => {
  return (
    // Container with flex layout and spacing
    <div className='inline-flex gap-2 items-center mb-3'>
      {/* Title text with two parts - first part in gray, second part in darker gray and bold */}
      <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      {/* Decorative line that scales with screen size */}
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
