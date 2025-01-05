import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader';
import Error from '../../Components/Error';
import Card from './Card';
import Warning from './Warning';
import Order from './Order';

const Cart = () => {
const {isLoading, error, cart} = useSelector((store)=>store.cartReducer);


  useEffect(()=>{
    api.get("/cart")
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
  },[]);
  return (
    <div className='container'>
      <h1 className="text-2xl font-bold mb-5">CART</h1>

      <div className='grid md:grid-cols-[1fr_300px] gap-4'>
        <div>
          {isLoading ? (<Loader/>) : error ? (<Error info={error}/>) : cart.length===0 ? (<Warning/>
          ) : (
            cart.map((item)=> <Card key={item.id} product={item}/>)
          ) }
        </div>
        <Order cart={cart}/>
      </div>
    </div>
  )
}

export default Cart