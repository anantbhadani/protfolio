'use client'
import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load components below the fold
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading skeleton component
const ComponentSkeleton = () => (
  <div className="w-full px-[12%] py-6 animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto mb-4"></div>
    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-6"></div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if we're in the browser (client-side)
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    // Only update if we're in the browser
    if (typeof window !== 'undefined' && isMounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }
  }, [isDarkMode, isMounted]);

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <Suspense fallback={<ComponentSkeleton />}>
        <About isDarkMode={isDarkMode} />
      </Suspense>
      <Suspense fallback={<ComponentSkeleton />}>
        <Services isDarkMode={isDarkMode} />
      </Suspense>
      <Suspense fallback={<ComponentSkeleton />}>
        <Work isDarkMode={isDarkMode} />
      </Suspense>
      <Suspense fallback={<ComponentSkeleton />}>
        <Contact isDarkMode={isDarkMode} />
      </Suspense>
      <Suspense fallback={<ComponentSkeleton />}>
        <Footer isDarkMode={isDarkMode} />
      </Suspense>
      <ScrollToTop isDarkMode={isDarkMode} />
    </ErrorBoundary>
  );
}
