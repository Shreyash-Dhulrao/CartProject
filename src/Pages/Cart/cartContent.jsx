import React, { useEffect } from 'react'
import { useCart } from '../../Context/CartContext'

const Content = (props) => {
  const { cartValue, addToCart, removeFromCart, clearCart } = useCart()
  const { id, name, image, price } = props.items

  let SubTotal = price * cartValue[id]
  let amount = SubTotal.toLocaleString()

  return (
    <div className=' flex overflow-hidden p-3 w-full h-auto '>
      <div className='w-1/4 h-1/2'>
        <img src={image} alt="" className='w-full' />
      </div>
      <div className='flex flex-col w-9/12 '>
        <div className='flex p-3 gap-5 w-full justify-evenly'>
          <h2 className='text-xl font-semibold '>{name}</h2>
          <p>Rs: {amount} /-</p>
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <button className='bg-zinc-200 hover:bg-zinc-800 hover:text-white transition duration-300 px-5 py-2 rounded-lg' onClick={() => { removeFromCart(id) }}> - </button>
          <p>{cartValue[id]}</p>
          <button className='bg-zinc-200 hover:bg-zinc-800 hover:text-white transition duration-300 px-5 py-2 rounded-lg' onClick={() => { addToCart(id) }}> + </button>
          <button onClick={() => { clearCart(id) }}>Remove</button>
        </div>
      </div>

    </div>
  )
}

export default Content
