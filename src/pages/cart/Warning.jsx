import React from 'react'
import { Link } from 'react-router-dom'

const Warning = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-20'>
        There isn't any item in the cart
        <Link to="/" className='border p-2 shadow rounded hover:bg-gray-100'>See the products</Link>
    </div>
  )
}

export default Warning