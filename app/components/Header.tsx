import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  return (
    <header className='w-11/12 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-3' role="banner">
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mx-auto flex items-center justify-center">
          <Image 
            src={assets.profile_img} 
            alt='Anant Bhadani - Frontend Web Developer Profile Picture' 
            className='w-full h-full object-cover' 
            priority
            width={160}
            height={160}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-2 text-gray-800 dark:text-white'>
        Hi! I&apos;m Anant Bhadani{' '}
        <Image 
          src={assets.hand_icon} 
          alt='Waving hand emoji' 
          className='w-6'
          width={24}
          height={24}
          style={{ width: 'auto', height: 'auto' }}
          aria-hidden="true"
        />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[45px] text-gray-900 dark:text-white'>
        Full Stack Developer & AI Enthusiast
      </h1>
      <p className='max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
        Currently pursuing MCA from SRM Institute of Science and Technology. 
        A passionate full-stack developer with expertise in modern web technologies, 
        data analytics, and AI/ML. Building scalable applications and exploring 
        the intersection of technology and innovation.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a 
          href="#contact"
          className='px-10 py-3 border border-gray-800 dark:border-white rounded-full bg-black dark:bg-white
          text-white dark:text-black flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 
          transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2'
          aria-label="Contact me"
        >
          contact me{' '}
          <Image 
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} 
            alt="" 
            className='w-4'
            width={16}
            height={16}
            style={{ width: 'auto', height: 'auto' }}
            aria-hidden="true"
          />
        </a>

        <a 
          href="/resume.pdf" 
          download 
          className='px-10 py-3 border rounded-full border-grey-500 dark:border-gray-400 flex
          items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
          transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2'
          aria-label="Download my resume"
        >
          my resume{' '}
          <Image 
            src={assets.download_icon} 
            alt="" 
            className='w-4'
            width={16}
            height={16}
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  )
}

export default Header

