import React from "react";

export const NavigationButton = ({ onClick, children, className }) => {
  return (
    <button
      className={`rounded-full bg-gray-700 text-gray-200 px-6 py-2 
  font-bold  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
