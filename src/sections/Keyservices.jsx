import React from 'react';
import { key_services } from "@/assets/images";

const Keyservices = () => {
  return (
    <section className="container mx-auto px-6 py-12 max-sm:p-0">
      <div className='max-w-[1000px] mx-auto text-center'>
        <h2 className='text-[48px] max-sm:text-[35px] font-bold text-[#333] mb-8 max-sm:px-10 max-sm:py-10 '>
          Key Services by Vidysea
        </h2>
        
      </div>
      <div className="flex flex-col lg:flex-row bg-[#002b5b] rounded-[24px] overflow-hidden shadow-lg max-sm:rounded-none ">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 lg:pl-12 text-white flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Finding Your Fit</h3>
          <p className="text-base lg:text-lg mb-6">
            We’ll help you discover the ideal course, university, and country that aligns with your goals and passions.
          </p>
          <button className="bg-white text-[#002b5b] py-2 px-6 rounded-full font-medium hover:bg-[#f3f3f3] transition">
            Know More
          </button>
          <ul className="mt-8 space-y-4 text-[#d1d5db]">
            <li>• Acing Your Tests</li>
            <li>• Crafting Your Application</li>
            <li>• Securing Scholarships & Loan</li>
            <li>• Navigating the Visa Process</li>
            <li>• Getting You Ready</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src={key_services}
            alt="Key Services"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Keyservices;
