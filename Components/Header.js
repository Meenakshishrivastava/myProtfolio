import React, { useState } from 'react'
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Header = () => {

  const [nav, setnav] = useState(false)
  
  const handlenav = () => {
    setnav(!nav)
  }
  return (

    <div className=' w-full h-[80px] flex justify-between items-center px-4 bg-violet-950 text-black'>
        <div className='w-[175px] h-[80px] m-[-12px] p-[11px]'>
          <img src="./images/bot.png" alt='Load Image' style={{width:'78px', height: '70px', margin: '-8px' }}  className='transition duration-300 ease-in-out hover:scale-110'/>
          </div>
         <ul className='hidden md:flex font-bold'>
            <li className='p-4'>
            <Link to="Home" smooth={true} duration={500}>Home</Link>
            </li>
           <li className='p-4' >
           <Link to="About" smooth={true} duration={500}>About</Link>
           </li>
           <li className='p-4'>
           <Link to="Skills" smooth={true} duration={500}>Skills</Link>
           </li>
           <li className='p-4'>
           <Link to="Work" smooth={true} duration={500}>Work</Link>
           </li>
           <li className='p-4'>  
           <Link to="Contact" smooth={true} duration={500}>Contact</Link>
           </li> 
            
         </ul>
           <div onClick={handlenav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          
        </div>
        <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-600 bg-indigo-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
       
        
        <div className='w-[126px] h-[106pxpx] m-[-1px] p-[28px]'>
          <img src="./images/bot.png" alt='Load Image' style={{width:'78px', height: '70px', margin: '-8px' }} className='transition duration-300 ease-in-out hover:scale-110'/>
          </div>

          <ul className='p-4  uppercase font-bold'>
          <li className='p-4 border-b border-gray-600'>Home</li>
           <li className='p-4 border-b border-gray-600' >Skills</li>
           <li className='p-4 border-b border-gray-600'>Projects</li>
           <li className='p-4 border-b border-gray-600'>About</li>
           <li className='p-4 '>Contact</li> 

          </ul>
        </div>
    </div>
  )
}

export default Header