import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <div id='about' className='w-full px-[12%] py-6 scroll-mt-20 -mt-16'>
      <h4 className='text-center mb-2 text-lg text-gray-600 dark:text-gray-400'>Introduction</h4>
      <h2 className='text-center text-5xl text-gray-900 dark:text-white'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center
      gap-20 my-8'>
        <div className='w-32 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.profile_img} alt='user' className='w-full 
          rounded-3xl'/>
        </div>
        <div className='flex-1'>
          <p className='mb-6 max-w-2xl text-gray-600 dark:text-gray-300'>
                Motivated MCA student with a strong foundation in software development, AI, and full-stack technologies. 
                Skilled in Python, Java, JavaScript, and experienced in React.js, Firebase, TensorFlow, and OpenCV. 
                Passionate about problem-solving, continuous learning, and eager to contribute to impactful projects 
                while growing as a software engineer.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
                max-w-2xl'>
                  {infoList.map(({icon, iconDark, title, description},
                    index)=>(
                    <li className='border-[0.5px] border-gray-400 dark:border-gray-600
                    rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover
                    hover:-translate-y-1 duration-500 hover:shadow-lg dark:hover:shadow-white/10
                    transition-all duration-300 bg-white dark:bg-gray-800' 
                    key={index}>
                      <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7
                      mt-3'/>
                      <h3 className='my-4 font-semibold
                      text-gray-700 dark:text-gray-200'>{title}</h3>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      {description}</p>
                    </li>
                  ))}
                </ul>

                <h4 className='my-6 text-gray-700 dark:text-gray-300'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center 
                    w-12 sm:w-14 aspect-square border border-grey-400 dark:border-gray-600
                    rounded-lg cursor-pointer hover:translate-y-1 
                    duration-500 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                    transition-all duration-300' 
                    key={index}>
                      <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                  ))}
                </ul>
        </div>
      </div>
    </div>
  )
}

export default About