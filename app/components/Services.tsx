import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

interface ServicesProps {
  isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  return (
    <section id="services" className='w-full px-[12%] py-6 scroll-mt-20' aria-labelledby="services-heading">
      <h4 className='text-center mb-2 text-lg text-gray-600 dark:text-gray-400'>What I offer</h4>
      <h2 id="services-heading" className='text-center text-5xl text-gray-900 dark:text-white'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300'>
        I offer comprehensive development services spanning frontend, backend, and AI/ML solutions. 
        From building responsive web applications to implementing data analytics and machine learning 
        models, I deliver end-to-end solutions tailored to your needs.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6' role="list">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <article
            key={index}
            className='border border-grey-400 dark:border-gray-600 rounded-lg px-8 py-12 
            hover:shadow-lg dark:hover:shadow-white/10 cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-800
            hover:-translate-y-1 duration-500 transition-all bg-white dark:bg-gray-900 focus-within:ring-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-500'
            tabIndex={0}
            role="listitem"
          >
            <Image 
              src={icon} 
              alt={`${title} service icon`} 
              className='w-10'
              width={40}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
            <h3 className='text-lg my-4 text-grey-700 dark:text-gray-200'>{title}</h3>
            <p className='text-sm text-grey-600 dark:text-gray-400 leading-5'>
              {description}
            </p>
            {link && (
              <a 
                href={link} 
                className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300 
                hover:text-gray-900 dark:hover:text-white transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded'
                aria-label={`Learn more about ${title}`}
              >
                Read more{' '}
                <Image 
                  alt="" 
                  src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow} 
                  className='w-4'
                  width={16}
                  height={16}
                  style={{ width: 'auto', height: 'auto' }}
                  aria-hidden="true"
                />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

