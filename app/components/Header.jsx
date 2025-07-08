import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12  text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-3'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-25'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-2'>
            Hi! I'm Anant Bhadani <Image src={assets.hand_icon} alt=''
            className='w-6'/> </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[45px]'>
            frontend web developer based in India.</h1>
            <p className='max-w-2xl mx-auto'>
                Motivated MCA student with a strong foundation in software development, AI, and full-stack technologies. 
                Skilled in Python, Java, JavaScript, and experienced in React.js, Firebase, TensorFlow, and OpenCV. 
                Passionate about problem-solving, continuous learning, and eager to contribute to impactful projects 
                while growing as a software engineer.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black
                text-white flex items-center gap-2'>
                    contact me <Image src={assets.right_arrow_white} alt='' 
                className='w-4'/></a>

                <a href="/resume.pdf" download 
                className='px-10 py-3 border rounded-full border-grey-500 flex
                items-center gap-2'>
                    my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
