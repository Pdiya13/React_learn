import React from 'react'
import { useCart } from '../context/CardContext'

export default function ProductList() {
    const items = [
        {id:1 , name : "iphone" , price : 80000},
        {id:2 , name : "Laptop" , price : 70000},
        {id:3 , name : "Headphones" , price : 2000},
    ]
    const {addToCart} = useCart();
  return (
    <div className='border m-4 p-2 shadow '>
      <div className='bg-gray-300 text-center text-4xl mt-2 mb-2 font-bold'>Items List</div>
      <div>
        {items.map(product => (
            <div className='border p-4 shadow flex flex-col '>
            <div className='bg-gray-200 mt-5 pl-10 gap-20 ' key={product.id}>
                <h3 className='text-2xl'>{product.name}</h3>
                <div className='-10'>price : {product.price}</div>
            </div> 
            <button className='mt-2 bg-blue-400 text-white px-4 py-1 rounded' onClick={()=>addToCart(product)}>Add item</button>   
            </div>
        ))}
      </div>
    </div>
  )
}
