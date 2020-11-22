import React from "react";

export const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`rounded-md 
      border-gray-700 border-2
  py-2
  px-4
  font-bold  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
