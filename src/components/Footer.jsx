import React from 'react'
import "./Footer.css"


export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
        <footer className='foot'>©Copyright {year} - Jay Joshi</footer>
    </div>
  )
}
