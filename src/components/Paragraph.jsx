import React from "react";

export const Paragraph = ({ children, className = "" }) => {
  return <p className={`mb-5 text-base ${className}`}>{children}</p>;
};
