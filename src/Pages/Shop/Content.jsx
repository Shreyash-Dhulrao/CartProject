import React, { useState } from 'react'
import {useCart} from '../../Context/CartContext'

const Content = (props) => {
    const {addToCart} = useCart()
    const {id, name, image , price} = props.items

    let amount = price.toLocaleString()

  return (
    <div>
      <div className='bg-white rounded-xl gap-2 overflow-hidden p-3 items-center justify-center flex flex-col w-full h-auto '>
        <div className='w-full h-1/2'>
        <img src={image} alt="" className='w-full'/>
        </div>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-md'>Rs: {amount} /-</p>
        <button className='bg-zinc-200 hover:bg-zinc-700 hover:text-white transition duration-300 px-5 py-2 rounded-lg' onClick={()=>{addToCart(id)}}>Add to Cart </button>
      </div>
    </div>
  )
}

export default Content
