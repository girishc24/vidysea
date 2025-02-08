import React from 'react';

const StudentsCard = ({ content, imgPath }) => {
  return (
    <div className="bg-white hover:bg-[#002b5b]  rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-[300px] h-[350px] group transition-colors duration-300">
      
      <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">{content}</h3>

     
      <button className="mt-4 px-4 py-2 border border-[#033864] text-[#033864] group-hover:text-white group-hover:border-white  rounded-full 
                         hover:bg-[#033864] hover:text-white transition-colors duration-300">
        Know More
      </button>

      
      <div className="flex-grow"></div>

      
      <img src={imgPath} alt={content} className="w-full h-[180px] object-cover rounded-lg mt-auto" />
    </div>
  );
};

export default StudentsCard;
