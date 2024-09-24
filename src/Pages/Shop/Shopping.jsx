import React from 'react'
import Data from '../../Data/Data'
import Content from './Content'

const Shopping = () => {
  return (
    <div className='grid grid-cols-4 bg-zinc-200 p-3 overflow-y-scroll w-2/3 h-screen gap-3'>
      {Data.map((items)=>{
        return (
            <div key={items.id}>
                <Content items={items} />
            </div>
        )
      })}
    </div>
  )
}

export default Shopping
