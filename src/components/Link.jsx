import React from "react";

export const Link = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-purple-600 cursor-pointer hover:underline hover:text-purple-800"
    >
      {children}
    </a>
  );
};
