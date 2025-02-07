import React from 'react'
import { dashboard } from '../assets/images' // Make sure to import your dashboard image

const Services = () => {
  return (
    <section className='container mx-auto px-8 py-16'>
      <div className='max-w-[1200px] mx-auto'>  
        {/* Main Heading */}
        <h2 className='text-[48px] font-bold text-[#333] mb-24 text-center max-sm:text-[30px]'> 
          Here's how we turn your dream into reality
        </h2>
      
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Content */}
          <div className='flex flex-col text-left'>
            <h3 className='text-[40px] font-bold text-[#333] mb-6'>
              Tell us about your dreams
            </h3>

            <p className='text-gray-600 text-lg leading-relaxed'>
              What is your dream career? Which is your dream country 
              and institution? Whether you have it all planned or you're 
              starting off, we're here for you. Tell us all about it and we'll 
              kickstart your academic journey!
            </p>

            {/* Light Gray Text */}
            <p className='text-gray-300 text-[40px] font-medium mt-20 max-sm:hidden'>
              We Find Your
              <br />
              Academic Match
            </p>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className='relative'>
            <img 
              src={dashboard} 
              alt="Dashboard Interface"
              className='w-full h-auto rounded-[2rem] shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
