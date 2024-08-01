
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import Card from './Card';

const SingleProduct = () => {
 
    const params =useParams()

    const[data,setData] =useState(null)  
    
    // setPid(params.id)
    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
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
    <div>SingleProduct {params.id} </div>
     
     {data ? <Card 
      
      
      title ={data.title}
      description={data.description}
      image={data.image}
      price={data.price}
      rate={data.rating.rate}
      count={data.rating.count}
     category ={data.category}
      id ={data.id}

      showBtn ={false}
     /> :<h1>Loading ....</h1>}

   




    
    </>
  )
}

export default SingleProduct