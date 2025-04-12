import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

// Orders page showing user's order history
const Orders = () => {
  // Get products, orders, and currency from context
  const { products, cartItems, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      {/* Page title */}
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      
      {/* Orders list */}
      <div>
        {/* Map through cartItems, fetching product details from products array */}
        {Object.keys(cartItems).slice(0, 3).map((itemId, index) => {
          // Find the product that matches the order's productId
          const product = products.find(p => p.id === parseInt(itemId));

          // Make sure the product exists before rendering
          if (!product) return null;

          // Get the quantity and size details from cartItems for this product
          const sizes = cartItems[itemId];
          return Object.keys(sizes).map((size, sizeIndex) => {
            const quantity = sizes[size];

            return (
              <div key={`${index}-${sizeIndex}`} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Order details section */}
                <div className="flex items-start gap-6 text-sm">
                  {/* Product image */}
                  <img className="w-16 sm:w-20" src={product.images[0]} alt={product.name} />
                  {/* Product information */}
                  <div>
                    {/* Product name */}
                    <p className="sm:text-base font-medium">{product.name}</p>
                    {/* Price and quantity details */}
                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                      <p className="text-lg">{currency}{product.price}</p>
                      <p>Quantity: {quantity}</p>
                      <p>Size: {size}</p>
                    </div>
                    {/* Order date */}
                    <p className="mt-2">Date: <span className="text-gray-400">25, Jul, 2025</span></p>
                  </div>
                </div>
                {/* Order status */}
                <div className="md:w-1/2 flex items-center gap-2">
                  {/* Status indicator dot */}
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  {/* Status text */}
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                {/* Track order button */}
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Orders;
