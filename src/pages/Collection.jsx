//Rushina Sherstha Collection Page

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import dropdown from '../assets/dropdown.png';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

// Collection page showing all products with filtering and sorting options
const Collection = () => {
  // Get products and search data from context
  const { products, search, showSearch } = useContext(ShopContext);
  // State for filter visibility (mobile)
  const [showFilter, setShowFilter] = useState(false);
  // State for filtered products
  const [filterProducts, setFilterProducts] = useState(products);
  // State for selected categories
  const [category, setCategory] = useState([]);
  // State for selected subcategories
  const [SubCategory, setSubCategory] = useState([]);
  // State for sort type
  const [sortType, setSortType] = useState('relavent');

  // Toggle category selection
  const toggleCategory = (e) => {
    console.log('Checkbox clicked:', e.target.value);
    if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  // Toggle subcategory selection
  const toggleSubCategory = (e) => {
    console.log('Subcategory checkbox clicked:', e.target.value);
    if (SubCategory.includes(e.target.value)) {
        setSubCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  // Apply filters based on search, categories, and subcategories
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filter by search text
    if (search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by selected categories
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    // Filter by selected subcategories
    if (SubCategory.length > 0) {
      productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  // Apply filters when category or subcategory changes
  useEffect(() => {
    console.log('Applying filter with category:', category, 'and subCategory:', SubCategory);
    applyFilter();
  }, [category, SubCategory])

  // Sort products based on selected sort type
  useEffect(() => {
    let fpCopy = [...filterProducts];
    
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a,b) => (a.price - b.price));
        break;
      case 'high-low':
        fpCopy.sort((a,b) => (b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
    
    setFilterProducts(fpCopy);
  }, [sortType])

  // Update filtered products when any filter changes
  useEffect(()=> {
    applyFilter();
  }, [category,SubCategory,search,showSearch])

  // Reset filtered products when products change
  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       {/* Left side - Filter options */}
       <div className='min-w-60'>
         {/* Filter toggle button (mobile) */}
         <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2' >FILTERS
           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={dropdown} alt="dropdown"/>
         </p>
          {/* Category filter section */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Topwear" onChange={toggleCategory}/> Topwear
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Bottomwear" onChange={toggleCategory}/> Bottomwear
               </p>
              </div>
           </div>
           {/* Subcategory filter section */}
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Tube Top" onChange={toggleSubCategory}/> Tube Top
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Cardigan" onChange={toggleSubCategory}/> Cardigan
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Faux Leather" onChange={toggleSubCategory}/> Faux Leather
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Jeans" onChange={toggleSubCategory}/> Jeans
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Skirts" onChange={toggleSubCategory}/> Skirts
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Shorts" onChange={toggleSubCategory}/> Shorts
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Long Sleeve" onChange={toggleSubCategory}/> Long Sleeve
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Shirts" onChange={toggleSubCategory}/> Shirts
               </p>
               <p className='flex gap-2'>
                 <input className='w-3' type="checkbox" value="Dresses" onChange={toggleSubCategory}/> Dresses
               </p>
              </div>
           </div>
         </div>
       {/* Right side - Products display */}
       <div className='flex-1'>
             <div className='flex justify-between text-base sm:text-2xl mb-4'>
                 {/* Page title */}
                 <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                 {/* Sort dropdown */}
                 <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                   <option value="relavent">Sort by: Relavent</option>
                   <option value="low-high">Sort by: Low to High</option>
                   <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

             {/* Products grid or no results message */}
             {filterProducts.length === 0 ? (
               <div className='text-center py-8'>
                 <p className='text-gray-500'>No result</p>
               </div>
             ) : (
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                 {filterProducts.map((item,index)=>(
                   <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.images[0]}/>
                 ))}
               </div>
             )}
        </div>
      </div>
   )
}

export default Collection
