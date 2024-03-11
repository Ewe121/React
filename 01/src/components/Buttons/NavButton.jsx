import React from 'react';

const Button = () => {
  // Destructure props to get the properties you want to use


  return (
    <button
      type='button'
       className="px-5 py-2 bg-gradient-to-br from-red-200 via-red-400 to-fuchsia-500 rounded-lg justify-center items-center gap-1.5 inline-flex ">
      <div className="Label text-justify text-gray-100 text-base font-semibold text-[12px]">
                Get Started
      </div>
    </button>
  );
}

export default Button;