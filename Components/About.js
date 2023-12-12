import React from 'react'

const About = () => {
  return (
    <div name='About' className='bg-violet-950 w-full h-screen text-grey-300 '>
      <div className=' flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className=' text-4xl font-bold inline border-b-4 border-white'>About</p>
        </div>
      
      <div></div>
      </div>
      <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
        <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Meenakshi, nice to meet you, Please take a look around.</p>
        </div>
        <div>
            <p>I am passionate about building execellent software that improves the lives of those aroind me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. I speak human, not tech jargon. I believe in building websites that not only work like a charm but also make you grin like you just found a surprise cookie in your lunchbox. I'm the developer who understands that '404' is not just a number; it's an emotional state</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
