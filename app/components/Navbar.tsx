'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sideMenuRef.current) {
        closeMenu()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] 
      dark:hidden' aria-hidden="true">
        <Image 
          src={assets.header_bg_color} 
          alt='' 
          className='w-full' 
          priority
        />
      </div>

      <nav 
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
        justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-900 dark:bg-opacity-50 dark:shadow-white/20" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#top" aria-label="Go to top of page">
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt="Anant Bhadani Logo" 
            className='w-12 cursor-pointer mr-14' 
            priority
          />
        </a>

        <ul 
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
          px-12 py-3 transition-all duration-300 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-gray-900 dark:bg-opacity-50"}`}
          role="menubar"
        >
          <li role="none">
            <a 
              href="#top" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Home
            </a>
          </li>
          <li role="none">
            <a 
              href="#about" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              About me
            </a>
          </li>
          <li role="none">
            <a 
              href="#services" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Services
            </a>
          </li>
          <li role="none">
            <a 
              href="#work" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              My Work
            </a>
          </li>
          <li role="none">
            <a 
              href="#contact" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button 
            onClick={() => setIsDarkMode(prev => !prev)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt="" 
              className='w-6' 
              aria-hidden="true"
            />
          </button>

          <a 
            href="#contact" 
            className='hidden lg:flex items-center gap-3
            px-10 py-2.5 border border-grey-500 dark:border-gray-400 rounded-full ml-4 font-Ovo
            text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500'
            aria-label="Contact me"
          >
            Contact 
            <Image 
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
              alt="" 
              className='w-3' 
              aria-hidden="true"
            />
          </a>

          <button 
            className='block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500' 
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded="false"
            type="button"
          >
            <Image 
              src={isDarkMode ? assets.menu_white : assets.menu_black} 
              alt="" 
              className='w-6' 
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul 
          ref={sideMenuRef} 
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 transition 
          duration-500 shadow-lg'
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div 
            className='absolute right-6 top-6' 
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeMenu();
              }
            }}
            aria-label="Close menu"
          >
            <Image 
              src={isDarkMode ? assets.close_white : assets.close_black} 
              alt="" 
              className='w-5 cursor-pointer' 
              aria-hidden="true"
            />
          </div>

          <li role="none">
            <a 
              onClick={closeMenu} 
              href="#top" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Home
            </a>
          </li>
          <li role="none">
            <a 
              onClick={closeMenu} 
              href="#about" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              About me
            </a>
          </li>
          <li role="none">
            <a 
              onClick={closeMenu} 
              href="#services" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Services
            </a>
          </li>
          <li role="none">
            <a 
              onClick={closeMenu} 
              href="#work" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              My Work
            </a>
          </li>
          <li role="none">
            <a 
              onClick={closeMenu} 
              href="#contact" 
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
              role="menuitem"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

