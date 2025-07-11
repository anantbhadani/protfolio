import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className='w-full px-[12%] py-6 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">My portfolio</h4>
      <h2 className="text-center text-5xl text-gray-900 dark:text-white">My latest work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300'>
        Welcome to my web development protfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-6 gap-5'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
                relative cursor-pointer group hover:scale-105 transition-transform duration-300'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5
            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
            justify-between duration-500 group-hover:bottom-7 shadow-lg'>
              <div>
                <h2 className='font-semibold text-gray-900 dark:text-white'>{project.title}</h2>
                <p className='text-sm text-grey-700 dark:text-gray-400'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black dark:border-white w-9
              aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] 
              group-hover:bg-lime-300 dark:group-hover:bg-lime-400 transition-colors duration-300'>
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

        <a href="" className='w-max flex items-center justify-center gap-2 
        text-grey-700 dark:text-gray-300 border-[0.5px] border-grey-700 dark:border-gray-400 rounded-full py-3 px-10 mx-auto
        my-8 hover:bg-lightHover dark:hover:bg-gray-800 duration-500 transition-colors'>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow'
            className='w-4' />
        </a>

    </div>
  );
};

export default Work;
