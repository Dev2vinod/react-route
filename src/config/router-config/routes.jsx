 
 import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom';

 import About from '../../screens/about/About';
 import Contact from '../../screens/contact/Contact';
 import Home from '../../screens/home/Home'
 import Counter from '../../screens/counter/Counter';
import Navbar from '../../components/Navbar';
import Product from '../../screens/product/Product';
 
 const Router = () => {
   return (
     
  <BrowserRouter>
     
      <Navbar />
    <Routes>

    <Route path='/' element = {<Home />}  />
    <Route path='about' element = {<About />}  />
    <Route path='contact' element = {<Contact/>}  />
    <Route path='counter' element = {<Counter/>}  />
    <Route path='product/:id' element = {<Product/>}  />


     

    </Routes>
  
  </BrowserRouter>

   )
 }
 
 export default Router