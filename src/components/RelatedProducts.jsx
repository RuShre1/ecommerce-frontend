//Rushina Sherstha Related Products

import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    // Access the products array from the ShopContext
    const { products } = useContext(ShopContext);
    // State to store the filtered related products
    const [related,setRelated] = useState([]);

    // Effect to filter and set related products whenever products array changes
    useEffect(()=> {
        if (products.length > 0) {
            // Create a copy of products array to avoid mutating the original
            let productsCopy = products.slice();
            // Filter products by matching category
            productsCopy = productsCopy.filter((item)=>category === item.category);
            // Further filter by matching subCategory
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
            // Take first 5 matching products and update state
            setRelated(productsCopy.slice(0,5));
        }
    },[products])

  return (
    <div className='my-24'>
      {/* Section title */}
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={"PRODUCTS"}/>
      </div>

      {/* Grid layout for related products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/* Map through related products and render each as a ProductItem */}
        {related.map((item,index)=>
        <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.images[0]}/>
        )}
      </div>
    </div>
  )
}

export default RelatedProducts
