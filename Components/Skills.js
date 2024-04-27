import React from 'react'

const Skills = () => {
  return (
    <div name = 'Skills' className='w-full h-screen bg-teal-600'>
       
       {/* container */}
       <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className=' text-4xl font-bold inline border-b-4 border-white-600 '>Experience</p>
            <p className=' py-4'>These are the technologies I've worked with</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8'>
              <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/html.png' alt="HTML icon"/>
                <p className='my-4'>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/css.png' alt="HTML icon"/>
                <p className='my-4'>CSS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/javascript.png' alt="HTML icon"/>
                <p className='my-4'>JAVASCRIPT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/node.png' alt="HTML icon"/>
                <p className='my-4'>NODEJS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/react.png' alt="HTML icon"/>
                <p className='my-4'>REACT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/mongo.png' alt="HTML icon"/>
                <p className='my-4'>MONGODB</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/tailwind.png' alt="HTML icon"/>
                <p className='my-4'>TAILWIND CSS</p>
              </div>


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src='./images/github.png' alt="HTML icon"/>
                <p className='my-4'>GITHUB</p>
              </div>
        </div>
       </div>

    </div>
  )
}

export default Skills
