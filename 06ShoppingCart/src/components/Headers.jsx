import React from 'react'
import { useCart } from '../context/CardContext'

export default function Headers() {
   const {cartItems,totalPrice} = useCart();
  return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">🛒 React Shop</h1>
      <div>
        <span>Items: {cartItems.length} | </span>
        <span>Total: ₹{totalPrice}</span>
      </div>
    </header> 
  )
}
