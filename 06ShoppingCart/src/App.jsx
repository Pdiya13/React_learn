import { useState } from 'react';
import './App.css';
import { CartContextProvider } from './context/CardContext';
import Headers from './components/headers';
import ProductList from './components/ProductList';
import Cart from './components/cart';
function App() {
  return (
    <CartContextProvider>
      <h1 className='text-7xl bg-gray-500 text-white text-center pt-10 pb-10'>Shopping Cart</h1>
      <Headers />
      <ProductList />
      <Cart />
    </CartContextProvider>
  );
}

export default App;
