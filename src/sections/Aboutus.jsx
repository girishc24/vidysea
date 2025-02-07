import React from 'react';
import { key_services } from "@/assets/images"; // Ensure you have the correct import for your image

const Aboutus = () => {
  return (
    <section className="container mx-auto px-4 py-12 max-sm:px-0">
      <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden shadow-lg">
        {/* Left Content */}
        <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col space-y-4">
          <h2 className="text-[32px] font-bold text-[#002C5F]">
            About Vidysea
          </h2>
          
          <p className="text-[#002C5F] text-xl font-medium">
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
          
          <p className="text-[#002C5F] text-lg font-medium pt-4">
            Let's write your sucess story together
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <img
            src={key_services}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;