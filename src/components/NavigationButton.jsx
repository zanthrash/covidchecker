import React from "react"


export const NavigationButton = ({onClick, children, className}) => {
  return <button className={`rounded-md 
  font-bold  ${className}`} onClick={onClick}>
      {children}
  </button>
}