import { students } from '@/constants'
import React from 'react'

const StudentCard = ({ title, imgPath }) => (
  <div className="bg-white hover:bg-[#002b5b] rounded-[32px] p-8 flex flex-col group transition-colors duration-300">
    <div className="mb-4">
      <h3 className="text-[24px] font-medium text-[#333] group-hover:text-white mb-2 transition-colors duration-300">
        {title}
      </h3>
      <button className="text-[#2196F3] text-base group-hover:text-white  transition-colors duration-300">
        Know More
      </button>
    </div>
    <div className="mt-auto">
      <img 
        src={imgPath} 
        alt={title} 
        className="w-full h-auto"
      />
    </div>
  </div>
);


const Students = () => {
  return (
    <section className='w-full py-16'>
      <div className='container mx-auto px-8'>
        <div className='max-w-[1400px] mx-auto'>
          {/* Header Content */}
          <div className='flex justify-between items-start mb-16 gap-8 flex-wrap'>
            <h2 className='text-[48px] font-bold text-[#333] max-w-[500px] leading-[1.2]'>
              Uncertain about your future? We're here to help!
            </h2>
            
            <div className='max-w-[400px]'>
              <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
                We recognize that each journey is unique. Whether you're a 
                student, recent grad, or professional, we provide tailored 
                support to match your strengths and goals.
              </p>
              <button className='bg-[#2196F3] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors'>
                Discover Your True Potential!
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <StudentCard 
              title="School Students"
              imgPath={students[0].imgPath}
            />
            <StudentCard 
              title="College Students"
              imgPath={students[1].imgPath}
            />
            <StudentCard 
              title="Graduates"
              imgPath={students[2].imgPath}
            />
            <StudentCard 
              title="Working Professionals"
              imgPath={students[3].imgPath}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Students
