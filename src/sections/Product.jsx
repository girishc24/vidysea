import React, { useState } from 'react';
import { products } from "../constants";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full py-12 px-8 max-sm:px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Slider Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="min-w-[400px] max-w-[400px] h-[200px] snap-start rounded-3xl overflow-hidden flex-shrink-0"
            >
              <img 
                src={product.imgPath} 
                alt={product.label} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;