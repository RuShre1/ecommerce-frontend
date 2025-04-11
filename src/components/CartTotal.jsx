//Rushina Sherstha Cart Total

import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    // Get necessary values from ShopContext
    const { currency, delivery_fee, getCartAmount, cartItems } = useContext(ShopContext);
    
    // Calculate subtotal and round to 2 decimal places
    const subtotal = Math.round(getCartAmount() * 100) / 100;
    
    // Check if cart is empty by checking if cartItems object has any keys
    const isCartEmpty = Object.keys(cartItems).length === 0;
    
    // Calculate total: if cart is empty, total is 0, otherwise add subtotal and delivery fee
    const total = isCartEmpty ? 0 : Math.round((subtotal + delivery_fee) * 100) / 100;

    // Helper function to format numbers to always show 2 decimal places
    const formatNumber = (num) => {
        return num.toFixed(2);
    }

    return (
        <div className='w-full'>
            {/* Cart Totals Title */}
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'}/>
            </div>
            
            {/* Cart Totals Details */}
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                {/* Subtotal Row */}
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    {/* Show 0.00 if cart is empty, otherwise show formatted subtotal */}
                    <p>{currency}{formatNumber(isCartEmpty ? 0 : subtotal)}</p>
                </div>
                <hr />
                
                {/* Shipping Fee Row */}
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    {/* Always show shipping fee as 5.00 */}
                    <p>{currency}{formatNumber(delivery_fee)}</p>
                </div>
                <hr />
                
                {/* Total Row */}
                <div className='flex justify-between'>  
                    <b>Total</b>
                    {/* Show 0.00 if cart is empty, otherwise show formatted total */}
                    <b>{currency}{formatNumber(total)}</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
