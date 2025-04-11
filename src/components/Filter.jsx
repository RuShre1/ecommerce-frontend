
 // Filter Component for product filtering in the e-commerce application.
 // Provides category, price range, size, and color filters with proper accessibility support.
 
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: 0, max: 1000 },
    size: '',
    color: ''
  });

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home'];
  const sizes = ['All', 'S', 'M', 'L', 'XL'];
  const colors = ['All', 'Red', 'Blue', 'Green', 'Black', 'White'];

  const handleFilterChange = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
        <select
          id="category"
          className="w-full p-2 border rounded"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <div className="block text-sm font-medium mb-2">Price Range</div>
        <div className="flex items-center space-x-2">
          <div>
            <label htmlFor="price-min" className="sr-only">Minimum Price</label>
            <input
              id="price-min"
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Min"
              value={filters.priceRange.min}
              onChange={(e) => handleFilterChange('priceRange', {
                ...filters.priceRange,
                min: Number(e.target.value)
              })}
            />
          </div>
          <div>
            <label htmlFor="price-max" className="sr-only">Maximum Price</label>
            <input
              id="price-max"
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Max"
              value={filters.priceRange.max}
              onChange={(e) => handleFilterChange('priceRange', {
                ...filters.priceRange,
                max: Number(e.target.value)
              })}
            />
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <label htmlFor="size" className="block text-sm font-medium mb-2">Size</label>
        <select
          id="size"
          className="w-full p-2 border rounded"
          value={filters.size}
          onChange={(e) => handleFilterChange('size', e.target.value)}
        >
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label htmlFor="color" className="block text-sm font-medium mb-2">Color</label>
        <select
          id="color"
          className="w-full p-2 border rounded"
          value={filters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
        >
          {colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter; 