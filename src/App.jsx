import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Restaurant from './pages/restaurant';
import Cart from './pages/cart';
import Header from './components/Header.jsx'
import Footer from './Components/Footer.jsx';
import { useDispatch } from 'react-redux';
import { getRestaurants } from './redux/actions/restActions.js';
import { getCart } from './redux/actions/cartActions.js'
const App = () => {
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getRestaurants());
    dispatch(getCart())
  },[])
  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col'>
    <Header/>
    <div className='flex-1'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/restaurants/:id" element={<Restaurant/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App