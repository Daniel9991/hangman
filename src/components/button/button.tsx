import React from "react"
import "./button.css"

export default function Button({width="fit", onClick, disabled, children}){

  return (
    <button
      onClick={onClick}
      style={{width}}
      className="button"
      disabled={disabled}
    >
      {children}
    </button>
  )
}