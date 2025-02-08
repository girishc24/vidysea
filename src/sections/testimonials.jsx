import React from 'react';
import { reviews } from '../constants';
import { quotationmarks } from "../assets/icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16 flex flex-col items-center gap-8 md:flex-row">
      {/* Left Section: Heading */}
      <div className="text-center md:text-left w-full md:w-[30%]">
        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight">
          Here’s what our dreamers say about us
        </h2>
        <div className='flex gap-2 pt-4 max-sm:hidden'>
          {/* Left Arrow */}
          <button 
            className="p-3 rounded-2xl border  hover:bg-[#1B2128] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            onClick={() => scroll('left')}
          >
            <FaArrowLeft className="text-gray-700" />
          </button>


          {/* Right Arrow */}
          <button 
            className="p-3 rounded-2xl border  hover:bg-[#1B2128] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            onClick={() => scroll('right')}
          >
            <FaArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Right Section: Testimonials */}
      <div className="w-full md:w-[70%] relative flex flex-col items-center">
        {/* Testimonials Container */}
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto space-x-6 scrollbar-hide w-full px-4 md:px-0 snap-x snap-mandatory hide-scrollbar "
        >
          {reviews.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-xl flex flex-col md:flex-row p-6 w-full md:w-[570px] flex-shrink-0 snap-start "
            >
              {/* Profile Image */}
              <div className="w-[13rem] max-sm:w-16 flex-shrink-0 rounded-xl overflow-hidden">
                <img 
                  src={stat.imgURL} 
                  alt={stat.customerName} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="mt-4 md:ml-6 text-center md:text-left ">
                <img src={quotationmarks} alt="Quote" className="w-6 h-6 mb-3 mx-auto md:mx-0" />
                <p className="text-gray-700 text-lg italic">{stat.feedback}</p>
                <p className="font-bold mt-4">{stat.customerName}</p>
                <p className="text-sm text-gray-500">{stat.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='flex gap-2 mt-4 md:hidden'>
          <button 
            className="p-3 border rounded-full hover:bg-gray-200"
            onClick={() => scroll('left')}
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button 
            className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700"
            onClick={() => scroll('right')}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
