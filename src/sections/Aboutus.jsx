import React from 'react';
import { about_vidya } from "@/assets/images"; 
import { about_shape } from "@/assets/icons"; 

const Aboutus = () => {
  return (
    <section className="container mx-auto px-4 py-12 max-sm:px-0">
      <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden shadow-lg">
        {/* Left Content */}
        <div className="lg:w-1/2 p-10 lg:p-12 py-9 flex flex-col space-y-4">
          <h2 className="text-[48px] max-sm:text-[35px] font-bold ">
            About Vidysea
          </h2>
          
          <p className=" text-xl font-medium">
            At Vidysea, we believe in more than just applications--we believe in possibilities
          </p>
          
          <p className="text-[#4A4A4A] text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          
          <p className="text-[#4A4A4A] text-lg font-medium pt-4">
            Let's write your sucess story together
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <img
            src={about_vidya}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-10 max-sm:top-[-0.5rem] left-10 max-sm:left-[-3.5rem] w-[18rem] h-[12rem]">
            <img src={about_shape} alt="Vidysea Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;