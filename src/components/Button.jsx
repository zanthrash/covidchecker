import React from "react";

export const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`rounded-md 
  py-4
  px-8
  font-bold  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
