//Rushina Sherstha Best Seller 

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    // Get products from the ShopContext
    const {products} = useContext(ShopContext);
    // Create state to store best-selling products
    const [bestSeller,setBestSeller] = useState([]);

    // Filter and set best-selling products when component mounts
    useEffect(() => {
        // Filter products to only include those marked as bestsellers
        const bestProduct = products.filter((item)=>(item.bestseller));
        // Take only the first 5 best-selling products
        setBestSeller(bestProduct.slice(0,5));
    },[])

  return (
    // Main container with margin
    <div className='my-10'>
        {/* Section header with title and description */}
        <div className='text-center text-3xl py-8'>
           <Title text1={'BEST'} text2={'SELLERS'}/> 
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Our top-selling styles, loved for their comfort, style, and versatility.
            </p>
        </div>
        {/* Grid layout for displaying best-selling products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                // Map through best-selling products and render each as a ProductItem
                bestSeller.map((item,index) => (
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

export default BestSeller
