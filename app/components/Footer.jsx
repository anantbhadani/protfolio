import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-8'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-32 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            anant2001.bhadani@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
      border-grey-400 dark:border-gray-600 mx-[10%] mt-6 py-6'>
        <p className="text-gray-700 dark:text-gray-300">@ 2025 Anant Bhadani. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/anantbhadani" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/anantbhadani/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.instagram.com/anant_bhadni19" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
