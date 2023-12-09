import React from 'react'


const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen bg-violet-950 '>
     <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white'>Work</p>
            <p className='py-6'> // Chect ot some of my recent work</p>
          </div>
            
          <div className=' w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 '>
       
              <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/muss.png' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto '> 
                <span className="text-2xl font bold text-white tracking-wider">MUSIC APP</span>
               <a href='https://github.com/Meenakshishrivastava/music-app'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>
              
            <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/ecomm.png' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto '> 
                <span className="text-2xl font bold text-white tracking-wider">E-COMMERCE APP</span>
              <a href='https://github.com/Meenakshishrivastava'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>

            <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/pokem.png' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto'> 
                <span className="text-2xl font bold text-white tracking-wider">POKEMON CARD GEN</span>
              <a href='https://github.com/Meenakshishrivastava/pokemonAPP'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>

            <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/land.webp' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto '> 
                <span className="text-2xl font bold text-white tracking-wider">LANDING PAGE</span>
              <a href='https://github.com/Meenakshishrivastava/landing-page-Codsoft-Task2-'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>

            <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/TODO.PNG' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto '> 
                <span className="text-2xl font bold text-white tracking-wider">TODO APP</span>
              <a href='https://github.com/Meenakshishrivastava/to-do-list'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>

            <div className='content-div shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img  src='./images/WEA.png' alt="HTML icon"/> 
             <div  className=' group container rounded-md flex justify-center text-center items-center mx-auto '> 
                <span className="text-2xl font bold text-white tracking-wider">WEATHER APP</span>
              <a href='https://github.com/Meenakshishrivastava/weatherapp'>  
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>code</button>
                </a>
              </div>
               
            </div>

         
        </div>

     </div>
    </div>
  )
}

export default Work
