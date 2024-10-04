import React, { useState } from "react";

const changeBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" inline-block text-left right-36 top-3">
      <div className='relative w-full flex'>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-3xl border border-[#158B68] shadow-sm px-10 py-2 bg-white text-sm font-medium text-[#158B68] hover:bg-gray-50 focus:outline-none"
        >
          
        </button>
      </div>


    </div>
  );
};

export default changeBar ;