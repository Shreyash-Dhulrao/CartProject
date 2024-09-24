import React  from 'react'
import { useCart } from '../../Context/CartContext'
import Content from './cartContent'
import Data from '../../Data/Data'

const Cart = () => {
    const { cartValue, totalAmount , clear} = useCart()
    let amount = totalAmount()
    
    let Total = amount.toLocaleString()
    return (
        <div className='w-1/3 h-screen overflow-y-scroll'>
            <div className=' bg-zinc-200 text-black text-center py-3'>
                <h2 className='text-2xl font-medium '>Cart</h2>
            </div>
            <div className='w-full'>
            <button className='w-1/2 bg-zinc-100 hover:bg-zinc-700 hover:text-white transition duration-300 py-2' onClick={()=>clear()}>Clear Cart</button>
            <button className='w-1/2 bg-zinc-100 hover:bg-zinc-700 hover:text-white transition duration-300 py-2'>Checkout</button>
            </div>
            <div className='w-full bg-zinc-200 text-center py-2'>
                Total : <b>{Total}</b> /-
            </div>

            <div>
                {Data.map((items) => {
                    if(cartValue[items.id] !== 0){
                        return (
                            <div key={items.id} >
                                <Content items={items} />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Cart
