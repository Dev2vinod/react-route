
import React from 'react'
import SingleProduct from './SingleProduct'
import { useNavigate } from 'react-router-dom'

const Card = ({category,image,title,count,description,price,rate,id,showBtn =true}) => {

  const navigate =useNavigate()
   function SingleProductPage(){
    navigate(`/singleProduct/${id}`)
     

   }

    




  return (

    <> 
    <div className=''>

    <div className="card bg-base-100 w-[258px] h-[360px] shadow-xl">
  <figure>
    <img
      src={image} className='w-[200px] h-[200px] rounded pt-5  mt-1'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="badge badge-secondary">Price: ${price} </div>
    </h2>
    <p>Title-= {title}... </p>
    <p>Category== {category} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Rate {rate} </div>
      <div className="badge badge-outline">Count {count}</div>
      {/* <div className="badge badge-outline">{description}... </div> */}

     {showBtn ?  <button className='bg-blue-500 px-5 p-1 m-1 rounded hover:bg-blue-400 font-semibold'  onClick={SingleProductPage} >Show Now</button>:null}
    </div>
  </div>
        </div>

</div>

    
    
    </>
  )
}

export default Card