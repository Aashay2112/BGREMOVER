import React from 'react'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const { openSignIn, signOut } = useClerk()
  const { isSignedIn, user } = useUser()

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32 sm:w-44 hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* Auth Buttons */}
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <UserButton/>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-3 sm:gap-4
                     px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full
                     hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Get Started
          <img src={assets.arrow_icon} alt="arrow" className="w-3 sm:w-4" />
        </button>
      )}
    </nav>
  )
}

export default Navbar
