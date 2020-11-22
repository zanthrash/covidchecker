import React from "react";

export const OptionsButton = ({ onClick, children, className }) => {
  return (
    <div>
      <button
        className={`rounded-md 
      border-gray-700 border-2
      bg-gray-100
  py-2
  px-4
   w-full
   text-left
  font-bold  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
