import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    
    

    <div name='Home' className='w-full h-screen bg-bg-gradient-to-b indigo-900 justify-center items-center text-center'>
          
         
        
   

        {/* container*/}
        <div className='bg-violet-950 max-auto items-center px-8 flex flex-col justify-center h-full '>
        <img src='./images/icon3.gif'/>
            <p className='text-black-600'>Hi, my name is</p>
            <h1 className='text-4xl sa:text-7xl font-bold text-[#f2f3f5]'>Meenakshi Shrivastava</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#f3f3f5]'>I'm a Full-stack developer.</h2>
            <p className='text-black py-4 max-w-[700px]'> I'm a Full-stack developer specializing in building (and occasionally Designing) exceptional digital expriences. Currently, i'm focused on building responsive full-stack web applications.</p>
        
    <div>

     {/* button */}
     <Link to="Work" smooth={true} duration={500}>
     <button className=' text-white group rounded-xl border-2 px-6 py-3 flex items-center hover:bg-black hover:border-white'>View Work
     <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
     </button>
     </Link>
    </div>
    </div>
    </div>
  )
}

export default Home