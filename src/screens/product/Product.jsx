
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import {useEffect  } from "react";

 import Card from '../../components/Card';

    
    const Product = () => {
          const params =   useParams();
          const[data,setData] =useState([])


        //   https://fakestoreapi.com/products/1
        // console.log(params,'params')

        useEffect(() => {

            axios.get(`https://fakestoreapi.com/products`)
        .then(function (res) {
    // handle success
    console.log(res.data,"array of object");

    setData(res.data)

    //  const[category,description,price,image,rating] =res.data
    

     })
    .catch(function (error) {
    // handle error
    console.log(error);
  })


        }, [])
        

      return (
        <>
        
        <div className='flex flex-wrap gap-4 mt-3 ml-3 '>


        { data.length >0 ?data.map((item,index)=>{
            return <Card 
            key={item.id}
             title ={item.title}
             description={item.description}
             image={item.image}
             price={item.price}
             rate={item.rating.rate}
             count={item.rating.count}
            category ={item.category}
             id ={item.id}
            />
        }) :<h1>loading....</h1>}
        <Card/>
       
        </div>
        
        
        
        </>
      )
    }
    
    export default Product