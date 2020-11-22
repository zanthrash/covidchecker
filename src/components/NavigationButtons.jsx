import React from "react"
import {NavigationButton} from "./NavigationButton"



export const NavigationButtons = ({ onNext, onBack }) => {

  return (
    <div className="mt-20 flex justify-between">
      <NavigationButton onClick={onBack}>Back</NavigationButton>
      <NavigationButton onClick={onNext}>Next</NavigationButton>
    </div>
  )

}