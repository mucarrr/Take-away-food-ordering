import React from 'react'
import { Link } from 'react-router-dom'
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {
  const {restaurants} = useSelector((store)=> store.restaurantReducer)
  const {cart} = useSelector((store)=> store.cartReducer)

  const totalAmount = cart.reduce((total, item)=> total + item.amount, 0)
  return (
    <header className='shadow bg-[#EFF3EA]'>
      <div className='container flex justify-between items-center'>
        <Link to="/" className='text-red-500 font-[900] text-2xl font-mono md:text-3xl'>TAKEAWAY</Link>
      <div className='flex gap-5'>
        <Link to="/" className='flex items-center gap-1 hover:underline cursor-pointer '>{restaurants.length} nearby <IoRestaurant className='text-red-500'/> <span className='max-md:hidden'>restaurants</span></Link>

        <button className='button'>Sign In</button>
        <button className='button'>Sign Up</button>

        <Link to="/cart" className='flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded- transition'><BsBasket /><span>{totalAmount}</span></Link>
      </div> 
      </div>
    </header>
  )
}

export default Header