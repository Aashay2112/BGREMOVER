import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-44 py-5 bg-gray-50 border-t border-gray-200">
      {/* Logo */}
      <img width={150} src={assets.logo} alt="logo" className="object-contain" />

      {/* Copyright Text */}
      <p className="flex-1 text-center sm:text-left text-sm text-gray-500 border-t sm:border-t-0 sm:border-l border-gray-300 sm:pl-4 pt-3 sm:pt-0">
        © {new Date().getFullYear()} aashay.dev | All rights reserved
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <img width={32} src={assets.facebook_icon} alt="Facebook" className="cursor-pointer hover:opacity-80 transition" />
        <img width={32} src={assets.twitter_icon} alt="Twitter" className="cursor-pointer hover:opacity-80 transition" />
        <img width={32} src={assets.google_plus_icon} alt="Google Plus" className="cursor-pointer hover:opacity-80 transition" />
      </div>
    </div>
  )
}

export default Footer
