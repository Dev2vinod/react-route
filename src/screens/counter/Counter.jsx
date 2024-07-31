
    
    import React, { useState } from 'react'
    
    const Counter = () => {

         const[count,setCount] = useState(0);

         function hello(){
            // console.log("hello ")
            setCount(count+1)
         }

         function sad(){
            setCount(count-1)
         }
         
         function zero(){
            setCount(count==0)
         }


      return (
        <>

        

        <div className='bg-gray-600 text-lime-400 flex mx-auto items-center  flex-col w-[50%] my-9 rounded shadow-lg p-2 '>

        <div>  A simple   Counter</div>

            <div>
                <p className='text-3xl font-bold'>   {count} </p>
            </div>

            <div>

         <button onClick={hello} className='bg-blue-500 hover:bg-blue-400 px-6 rounded-lg m-3' >+</button>
         <button onClick={zero} className='bg-rose-500 hover:bg-rose-400 px-6 rounded-lg m-3' >Reset</button>

         <button onClick={sad}className='bg-green-500 hover:bg-green-400 px-6 rounded-lg' >-</button>

            </div>
        </div>

        </>
      )
    }
    
    export default Counter