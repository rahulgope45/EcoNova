import React,{useState} from 'react'
import menu from '/Menu.png'
import Doorbell from '/Doorbell.png'
import account3 from '/Account3.jpg'
import { NavLink } from "react-router-dom";

function Navbar() {

const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Left - Menu */}
      <img
        src={menu}
        alt="menu"
       
        onClick={() => setIsOpen(true)}
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
      />

      {/* Center - Logo */}
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 tracking-wide">
        Econova
      </p>

      {/* Right - Account */}
      <div className='flex gap-1'>
        <img 
        src={Doorbell}
        alt="account"
        className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200  rounded-full object-cover"
        />

        <img
        src={account3}
        alt="account"
        className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200  rounded-full object-cover"
      />

      </div>
      



      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Sidebar content */}
        <nav className="flex flex-col mt-16 space-y-6 px-6">
          <NavLink
            href="#home"
            className="text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            href="#learn"
            className="text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors"
            to="/learn"
          >
            Learn
          </NavLink>
          <NavLink
            href="#quiz"
            className="text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors"
            to='/quiz'
          >
            Quiz / Tasks
          </NavLink>
          <a
            href="#About Us"
            className="text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors"
          >
            About Us
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Navbar
