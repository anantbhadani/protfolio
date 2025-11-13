'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface ScrollToTopProps {
  isDarkMode: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-black dark:bg-white text-white dark:text-black
        rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2
        animate-bounce"
      aria-label="Scroll to top"
      type="button"
    >
      <Image
        src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white}
        alt=""
        className="w-5 rotate-[-90deg]"
        width={20}
        height={20}
        style={{ width: 'auto', height: 'auto' }}
        aria-hidden="true"
      />
    </button>
  );
};

export default ScrollToTop;

