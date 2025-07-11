import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-3'>
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mx-auto flex items-center justify-center">
          <Image src={assets.profile_img} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-2 text-gray-800 dark:text-white'>
            Hi! I'm Anant Bhadani <Image src={assets.hand_icon} alt=''
            className='w-6'/> </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[45px] text-gray-900 dark:text-white'>
            frontend web developer based in India.</h1>
            <p className='max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
                Motivated MCA student with a strong foundation in software development, AI, and full-stack technologies. 
                Skilled in Python, Java, JavaScript, and experienced in React.js, Firebase, TensorFlow, and OpenCV. 
                Passionate about problem-solving, continuous learning, and eager to contribute to impactful projects 
                while growing as a software engineer.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-gray-800 dark:border-white rounded-full bg-black dark:bg-white
                text-white dark:text-black flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300'>
                    contact me <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} alt='' 
                className='w-4'/></a>

                <a href="/resume.pdf" download 
                className='px-10 py-3 border rounded-full border-grey-500 dark:border-gray-400 flex
                items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'>
                    my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
