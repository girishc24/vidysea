import { media } from '@/constants';
import React from 'react';

const Media = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <h2 className="text-[32px] font-bold text-center mb-12">Media</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {media.map((item, index) => (
          <div 
            key={index} 
            className="rounded-2xl overflow-hidden flex flex-col md:flex-row "
          >
            {/* Left Side - Image */}
            <div className="md:w-[250px] w-full h-[200px] md:h-auto">
              <img 
                src={item.imgPath} 
                alt={item.category} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700 mb-4">
                {item.category}
              </span>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.heading}
              </h3>

              <p className="text-sm text-gray-700 mb-4">
                {item.content}
              </p>

              <div className="text-blue-600 text-sm font-medium flex items-center">
                <button className="flex items-center text-xs px-3 py-1 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                  {item.category === 'Podcast' ? (
                    <>
                      <span className="mr-2">🎧 Listen</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Learn More →</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Section */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="px-4 py-2 text-blue-600 text-sm font-medium   flex items-center gap-2 transition duration-300 hover:bg-blue-600 hover:text-white">
          View all News →
        </button>
        <button className="px-4 py-2 text-blue-600 text-sm font-medium  flex items-center gap-2 transition duration-300 hover:bg-blue-600 hover:text-white">
          View all Blogs →
        </button>
      </div>
    </section>
  );
};

export default Media;
