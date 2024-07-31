
import React from 'react'

const Card = ({category,image,title,count,description,price,rate}) => {




  return (

    <> 
    <div className=''>

    <div className="card bg-base-100 w-[258px] shadow-xl">
  <figure>
    <img
      src={image} className='w-[200px] p-1'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">Price: ${price} </div>
    </h2>
    <p>Title-= {title} </p>
    <p>Category== {category} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Rate {rate} </div>
      <div className="badge badge-outline">Count {count}</div>
      {/* <div className="badge badge-outline">{description}... </div> */}
    </div>
  </div>
        </div>

</div>

    
    
    </>
  )
}

export default Card