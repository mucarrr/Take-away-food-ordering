import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useParams } from 'react-router-dom'
import Error from "../../Components/Error";
import Loader from "../../components/Loader";
import { FaFire } from 'react-icons/fa';
import Card from './Card';

const Products = () => {
    const {id} = useParams()
    const [products, setProducts] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        api.get(`/products?restaurantId=${id}`)
        .then((res)=>setProducts(res.data))
        .catch((err)=> setError(err.message))
    },[])
    if (error) return <Error info={error}/>;
    if (!products) return <Loader/>;
    if (products.length === 0) return <p>The restaurant is outside service hours</p>
  return (
    <div>
        <h2 className='flex items-center gap-2 text-2xl font-bold '><FaFire className='text-red-500'/> Popular Products</h2>
        <p className='text-gray-700'>The most preferred products of the restaurant</p>
        <div className='grid lg:grid-cols-2 gap-5 mt-4'>
            {products.map((item)=>(
                <Card key={item.id} product={item}/>
            ))}
        </div>
    </div>
  )
}

export default Products