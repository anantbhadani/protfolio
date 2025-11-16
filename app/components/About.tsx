import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import TechStack from './TechStack'

interface AboutProps {
  isDarkMode: boolean;
}

const toolNames = ['VS Code', 'Firebase', 'MongoDB', 'Figma', 'Git'];

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id='about' className='w-full px-[12%] py-6 scroll-mt-20 -mt-16' aria-labelledby="about-heading">
      <h4 className='text-center mb-2 text-lg text-gray-600 dark:text-gray-400'>Introduction</h4>
      <h2 id="about-heading" className='text-center text-5xl text-gray-900 dark:text-white'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-start lg:items-center
      gap-12 lg:gap-20 my-8'>
        <div className='w-full sm:w-64 lg:w-80 mx-auto lg:mx-0 flex-shrink-0'>
          <div className='relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg'>
            <Image 
              src={assets.profile_img} 
              alt='Anant Bhadani - Profile picture' 
              className='w-full h-full object-cover rounded-3xl'
              width={320}
              height={320}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
        <div className='flex-1'>
          <p className='mb-6 max-w-2xl text-gray-600 dark:text-gray-300'>
            Hello! I&apos;m Anant Bhadani, a full-stack developer and AI enthusiast currently pursuing 
            my Master&apos;s in Computer Applications (MCA) from SRM Institute of Science and Technology. 
            I completed my Bachelor&apos;s in Computer Applications (BCA) from Dayananda Sagar University, 
            where I earned several achievements during my graduation.
          </p>
          
          <p className='mb-6 max-w-2xl text-gray-600 dark:text-gray-300'>
            I specialize in building modern, scalable web applications using cutting-edge technologies. 
            With strong expertise in data analytics and a passion for artificial intelligence, I create 
            solutions that combine robust backend systems with intuitive frontend experiences. My work 
            spans full-stack development, AI/ML integration, and data-driven applications.
          </p>

          <p className='mb-6 max-w-2xl text-gray-600 dark:text-gray-300'>
            I&apos;m passionate about solving complex problems, writing clean code, and continuously 
            learning new technologies. Whether it&apos;s building RESTful APIs, creating responsive UIs, 
            or implementing machine learning models, I bring a data-driven approach to every project.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl' role="list">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li 
                className='border-[0.5px] border-gray-400 dark:border-gray-600
                rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover
                hover:-translate-y-1 duration-500 hover:shadow-lg dark:hover:shadow-white/10
                transition-all duration-300 bg-white dark:bg-gray-800 focus-within:ring-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-500' 
                key={index}
                tabIndex={0}
                role="listitem"
              >
                <Image 
                  src={isDarkMode ? iconDark : icon} 
                  alt={`${title} icon`} 
                  className='w-7 mt-3'
                  width={28}
                  height={28}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 dark:text-gray-300'>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5 mb-8' role="list" aria-label="Development tools">
            {toolsData.map((tool, index) => (
              <li 
                className='flex items-center justify-center 
                w-12 sm:w-14 aspect-square border border-grey-400 dark:border-gray-600
                rounded-lg cursor-pointer hover:translate-y-1 
                duration-500 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                transition-all duration-300 focus-within:ring-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-500' 
                key={index}
                tabIndex={0}
                role="listitem"
                aria-label={toolNames[index] || `Tool ${index + 1}`}
              >
                <Image 
                  src={tool} 
                  alt={`${toolNames[index] || 'Development tool'} logo`} 
                  className='w-5 sm:w-7'
                  width={28}
                  height={28}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </li>
            ))}
          </ul>

          <TechStack />
        </div>
      </div>
    </section>
  )
}

export default About

