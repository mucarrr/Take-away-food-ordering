import React from 'react'

const Order = ({cart}) => {
const totalPrice = cart.reduce((total, item)=> total + item.amount*item.price, 0)
const totalAmount = cart.reduce((total, item)=> total + item.amount, 0)

  return (
    <div className='p-5 rounded-md border h-fit'>
       <h2 className='font-semibold text-2xl'>Order Details</h2>
       <p className='flex items-center gap-2 my-4 '>
        <span className='text-gray-600'>Amount: </span>
        <span className='text-lg font-bold text-red-500'>{totalAmount}</span>
       </p>

       <p className='flex items-center gap-2 my-4 '>
        <span className='text-gray-600'>Total Price: </span>
        <span className='text-lg font-bold text-red-500'>{totalPrice.toFixed(2)}</span>
       </p>
    </div>
  )
}

export default Order