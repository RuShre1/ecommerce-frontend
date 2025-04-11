//Rushina Sherstha Latest Collection

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// LatestCollection component displays the most recent products
const LatestCollection = () => {
    // Access products from the ShopContext
    const { products } = useContext(ShopContext);
    // State to store the latest products
    const [latestProducts, setLatestProducts] = useState([]);

    // useEffect hook to set the latest products when component mounts
    // Takes first 10 products from the products array
    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    // Main container with margin
    <div className='my-10'>
        {/* Header section with title and description */}
        <div className='text-center py-8 text-3xl'>
            {/* Title component with "LATEST COLLECTIONS" text */}
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            {/* Description text with responsive sizing */}
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Fresh arrivals you'll love—our latest collection blends modern style with everyday ease.
            </p>
        </div> 
      
      {/* Grid layout for product items with responsive columns */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            // Map through latestProducts to render each product
            latestProducts.map((item,index) => (
                <ProductItem 
                    key={index} 
                    id={item.id} 
                    image={item.images} 
                    name={item.name} 
                    price={item.price}
                />
            ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
