import React from "react"
import "./button.css"

export default function Button({width="fit", children}){

  return (
    <button 
      style={{width}}
      className="button"
    >
      {children}
    </button>
  )
}