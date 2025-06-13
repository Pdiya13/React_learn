import React from 'react';
import { useCart } from '../context/CardContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4 bg-gray-300 text-center mt-10 mb-5 ">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2 ">
          {cartItems.map(item => (
            <li key={item.id} className="bg-gray-500 flex justify-between border p-2">
              <span>{item.name} - ₹{item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
