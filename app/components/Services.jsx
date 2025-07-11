import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({ isDarkMode }) => {
  return (
    <div id="services" className='w-full px-[12%] py-6 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg text-gray-600 dark:text-gray-400'>What I offer</h4>
      <h2 className='text-center text-5xl text-gray-900 dark:text-white'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300'>
        Motivated MCA student with a strong foundation in software development, AI, and full-stack technologies. 
                Skilled in Python, Java, JavaScript, and experienced in React.js, Firebase, TensorFlow, and OpenCV. 
                Passionate about problem-solving, continuous learning, and eager to contribute to impactful projects 
                while growing as a software engineer.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index}
            className='border border-grey-400 dark:border-gray-600 rounded-lg px-8 py-12 
            hover:shadow-lg dark:hover:shadow-white/10 cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-800
            hover:-translate-y-1 duration-500 transition-all bg-white dark:bg-gray-900'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-grey-700 dark:text-gray-200'>{title}</h3>
                <p className='text-sm text-grey-600 dark:text-gray-400 leading-5'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'>
                    Read more <Image alt='' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow} className='w-4' />
                </a>
            </div>

        ))}
      </div>
    </div>
  )
}

export default Services
