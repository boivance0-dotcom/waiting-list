import React from 'react'
import { GradientButton } from './ui/gradient-button'

const Navbar = () => {
  return (
    <nav className="relative z-50 w-full p-4 bg-black/80 backdrop-blur-md
    h-16 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center space-x-8">
        <h1 className="text-white text-xl font-bold">Biovance</h1>
        <div className="hidden md:flex space-x-8 ml-10">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <GradientButton variant="variant">
        Book Now
      </GradientButton>
    </nav>
  )
}

export default Navbar
