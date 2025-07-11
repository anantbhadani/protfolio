import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
          setIsScroll(true)
      }else{
          setIsScroll(false)
      }
    })
  },[])


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] 
    dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
      justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-900 dark:bg-opacity-50 dark:shadow-white/20" : ""}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-12 
            cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
        px-12 py-3 transition-all duration-300 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-gray-900 dark:bg-opacity-50"}`}>
            <li><a href="#top" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">About me</a></li>
            <li><a href="#services" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Services</a></li>
            <li><a href="#work" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">My Work</a></li>
            <li><a href="#contact" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button onClick={()=> setIsDarkMode(prev => !prev)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3
            px-10 py-2.5 border border-grey-500 dark:border-gray-400 rounded-full ml-4 font-Ovo
            text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'>Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
            alt="" className='w-3' /></a>

            <button className='block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>
          { /* ------ mobile menu ---------- */ }

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 transition 
          duration-500 shadow-lg'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 
              cursor-pointer' />
            </div>

            <li><a onClick={closeMenu} href="#top" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Home</a></li>
            <li><a onClick={closeMenu} href="#about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">About me</a></li>
            <li><a onClick={closeMenu} href="#services" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Services</a></li>
            <li><a onClick={closeMenu} href="#work" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">My Work</a></li>
            <li><a onClick={closeMenu} href="#contact" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">Contact me</a></li>
          </ul>

      </nav>
    </>
  )
}

export default Navbar
