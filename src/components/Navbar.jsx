
  import React from 'react';

  import { Link } from 'react-router-dom';
  
  
  const Navbar = () => {
    return (

        <>
        
        <nav>
            

            <ul className='flex items-center justify-between p-2 m-2 '>
                <li> 
                    <Link to='/'>Home</Link>
                </li>
                <li> 
                    <Link to='about'>About</Link>
                </li>
                <li> 
                    <Link to='contact'>Contact</Link>
                </li>
                <li> 
                    <Link to='counter'>Counter</Link>
                </li>
                <li> 
                    <Link to='product/1234abcder'>Product </Link>
                </li>
                
            </ul>
        </nav>
      
      
        </>
    )
  }
  
  export default Navbar