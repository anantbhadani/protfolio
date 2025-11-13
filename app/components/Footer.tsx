import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className='mt-8' role="contentinfo">
      <div className='text-center'>
        <Image 
          src={isDarkMode ? assets.logo_dark : assets.logo} 
          alt='Anant Bhadani Logo' 
          className='w-32 mx-auto mb-2'
          width={128}
          height={128}
        />

        <div className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300'>
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt='' 
            className='w-6'
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            aria-hidden="true"
          />
          <a 
            href="mailto:anant2001.bhadani@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
            aria-label="Send email to anant2001.bhadani@gmail.com"
          >
            anant2001.bhadani@gmail.com
          </a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
      border-grey-400 dark:border-gray-600 mx-[10%] mt-6 py-6'>
        <p className="text-gray-700 dark:text-gray-300">
          @ {new Date().getFullYear()} Anant Bhadani. All rights reserved.
        </p>
        <nav aria-label="Social media links">
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0' role="list">
            <li role="listitem">
              <a 
                target='_blank' 
                rel="noopener noreferrer"
                href="https://github.com/anantbhadani" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </a>
            </li>
            <li role="listitem">
              <a 
                target='_blank' 
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anantbhadani/" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
            </li>
            <li role="listitem">
              <a 
                target='_blank' 
                rel="noopener noreferrer"
                href="https://www.instagram.com/anant_bhadni19" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded"
                aria-label="Visit my Instagram profile"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

