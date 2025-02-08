import React, { useState, useRef } from "react";
import { students } from "@/constants";
import StudentsCard from "@/components/StudentsCard";

const Students = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Scroll to specific slide when clicking dots
  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 24; // Adjust for margin
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  // Update active dot on scroll
  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 24;
      const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Content */}
          <div className="flex justify-between items-start mb-10 gap-8 flex-wrap">
            <h2 className="text-[40px] max-sm:text-[38px] font-bold text-[#333] max-w-[500px] leading-[1.2]">
              Uncertain about your future? We're here to help!
            </h2>
            <div className="max-w-[400px]">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We recognize that each journey is unique. Whether you're a 
                student, recent grad, or professional, we provide tailored 
                support to match your strengths and goals.
              </p>
              <button className="bg-[#2196F3] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                Discover Your True Potential!
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {students.map((student, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] snap-start flex-shrink-0"
              >
                <StudentsCard {...student} />
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {students.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
