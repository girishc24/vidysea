import React from 'react';
import { Group_01, Group_02, subscribe_bg, subscribe_group } from "@/assets/images";

const Subscribe = () => {
  return (
    <div 
      className="relative flex flex-col md:flex-row items-center justify-between bg-blue-100 p-10 rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${subscribe_bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Left Side: Text and Button */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to turn your dream into reality?
        </h2>
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-medium rounded-full shadow-md hover:shadow-lg transition">
          Get in Touch
        </button>
      </div>

      {/* Right Side: Image and Floating Elements */}
      <div className="relative flex justify-center mt-6 md:mt-0">
        <img 
          src={subscribe_group} 
          alt="Student holding globe" 
          className="relative z-10 w-[250px] md:w-[320px]"
        />

        {/* Floating Elements */}
        <img 
          src={Group_01} 
          alt="AI Driven Evaluations" 
          className="absolute top-[-20px] right-[-10px] md:top-4 md:right-[-40px] w-[60px] md:w-[80px]"
        />
        <img 
          src={Group_02} 
          alt="Comprehensive Support" 
          className="absolute bottom-[-20px] left-[-10px] md:bottom-4 md:left-[-40px] w-[60px] md:w-[80px]"
        />
      </div>
    </div>
  );
};

export default Subscribe;
