import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className="f-container">
        <div>
          {`Copyright (c) ${new Date().getFullYear()} Govind Maheshwari`}
        </div>
        <div>
           Made In React
        </div>
    </div>
  )
}
