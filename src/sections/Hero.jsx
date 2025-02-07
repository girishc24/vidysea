import React from 'react'
import { banner } from "@/assets/images"

const Hero = () => {
  return (
    <section className='container mx-auto px-8 py-6 max-sm:p-0'>
      <div className='w-full flex xl:flex-row flex-col min-h-[65vh] rounded-[2.5rem] max-sm:rounded-none bg-[#002B5B] p-16 max-sm:p-6 relative overflow-hidden max-sm:w-screen max-sm:min-h-[80vh]'>
        {/* Left Content - 60% width */}
        <div className='xl:w-[60%] flex flex-col justify-center pl-8 max-sm:pl-0 max-sm:items-center max-sm:text-center'>
          <h1 className='text-white font-poppins font-bold text-[5.5rem] leading-[1.1] max-w-3xl max-sm:text-[35px] max-sm:pt-[4.5rem] max-sm:leading-[1.2]'>
            Find your Unique
            <br />
            Academic Path
          </h1>
          <button className='mt-12 max-sm:mt-6 bg-coral-blue   hover:bg-blue-600 text-white px-10 py-4 rounded-full font-medium w-fit text-sm max-sm:text-base max-sm:px-8 max-sm:py-3'>
            Start Your Journey
          </button>
        </div>

        {/* Right Content - 40% width */}
        <div className='xl:w-[40%] relative flex items-end justify-end max-sm:mt-8 max-sm:justify-center'>
          <img 
            src={banner} 
            alt="Graduate Student"
            className="h-full w-full object-cover object-center relative z-10 bottom-[-63px]  max-sm:bottom-[-23px] max-sm:h-[300px] max-sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
