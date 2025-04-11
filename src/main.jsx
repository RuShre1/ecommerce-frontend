//Rushina Sherstha Main.jsx
// Entry point of the React application that sets up the root 
// component with routing and global state management

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
