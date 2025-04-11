//Rushina Sherstha Shop Context

import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Creates a context for sharing data across components
export const ShopContext = createContext();

/**
 * ShopContextProvider Component
 * Manages global state for the e-commerce application including:
 * - Currency settings
 * - Delivery fees
 * - Search functionality
 * - Cart management
 * - Product data
 */
const ShopContextProvider = (props) => {
    // Store the currency symbol (default $)
    const [currency, setCurrency] = useState('$');
    // Store the delivery fee amount (default 5)
    const [delivery_fee, setDeliveryFee] = useState(5);
    // Store the search text
    const [search, setSearch] = useState('');
    // Control whether search bar is visible
    const [showSearch, setShowSearch] = useState(false);
    // Store items in cart with their sizes and quantities
    const [cartItems, setCartItems] = useState({});
    // Store all available products
    const [allProducts, setAllProducts] = useState(products);
    // Hook for navigation between pages
    const navigate = useNavigate();

    
    const addToCart = (itemId, size) => {
        // Show error if no size is selected
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        // Update cart with new item
        setCartItems((prev) => {
            const newCart = { ...prev };
            // Create entry for new item if it doesn't exist
            if (!newCart[itemId]) {
                newCart[itemId] = {};
            }
            // Initialize size count if it doesn't exist
            if (!newCart[itemId][size]) {
                newCart[itemId][size] = 0;
            }
            // Increase quantity by 1
            newCart[itemId][size] += 1;
            return newCart;
        });
    }

    const removeFromCart = (itemId, size) => {
        // Create a copy of current cart
        let cartData = structuredClone(cartItems);
        
        // Check if item exists in cart
        if (cartData[itemId] && cartData[itemId][size]) {
            // Decrease quantity by 1
            cartData[itemId][size] -= 1;
            
            // Remove size if quantity becomes 0
            if (cartData[itemId][size] <= 0) {
                delete cartData[itemId][size];
                
                // Remove item if no sizes left
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        }
        
        // Update cart with new data
        setCartItems(cartData);
    }


    const getCartCount = () => {
        let totalCount = 0;
        // Loop through all items and sizes to count total
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size];
            }
        }
        return totalCount;
    }

   
    const updateQuantity = (itemId, size, newQuantity) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            // Create entry for new item if it doesn't exist
            if (!newCart[itemId]) {
                newCart[itemId] = {};
            }
            // Remove item if quantity is 0
            if (newQuantity === 0) {
                delete newCart[itemId][size];
                // Remove item if no sizes left
                if (Object.keys(newCart[itemId]).length === 0) {
                    delete newCart[itemId];
                }
            } else {
                // Update quantity
                newCart[itemId][size] = newQuantity;
            }
            return newCart;
        });
    }

    
    const getCartAmount = () => {
        let total = 0;
        if (cartItems) {
            // Loop through all items and sizes
            for (const itemId in cartItems) {
                for (const size in cartItems[itemId]) {
                    // Find product price and multiply by quantity
                    const product = allProducts.find((p) => p.id === parseInt(itemId));
                    if (product) {
                        total += product.price * cartItems[itemId][size];
                    }
                }
            }
        }
        return total;
    }

    // Debug effect to log cart changes
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Context value object containing all state and functions
    const value = {
        products: allProducts,
        currency,
        setCurrency,
        delivery_fee,
        setDeliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    // Provider component that makes the context available to all children
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;