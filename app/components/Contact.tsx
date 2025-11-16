'use client'
import { assets } from "@/assets/assets";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import toast, { Toaster } from "react-hot-toast";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [] });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get and sanitize form values
    const name = sanitizeInput(formData.get("name") as string);
    const email = sanitizeInput(formData.get("email") as string);
    const message = sanitizeInput(formData.get("message") as string);

    // Validation
    if (!name || name.length < 2) {
      toast.error("Please enter a valid name (at least 2 characters)");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    if (!message || message.length < 10) {
      toast.error("Please enter a message (at least 10 characters)");
      setIsSubmitting(false);
      return;
    }

    // Get access key from environment or use fallback for development
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 
      (process.env.NODE_ENV === 'development' ? '9848e1e2-1e3f-4b2e-9c8d-b4e3683bba39' : null);
    
    if (!accessKey) {
      toast.error(
        "Contact form is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env.local file. " +
        "Get your key from https://web3forms.com"
      );
      setIsSubmitting(false);
      return;
    }
    
    // Warn in development if using fallback key
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      console.warn('⚠️ Using fallback Web3Forms key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local for production.');
    }

    // Create new FormData with sanitized values
    const sanitizedFormData = new FormData();
    sanitizedFormData.append("access_key", accessKey);
    sanitizedFormData.append("name", name);
    sanitizedFormData.append("email", email);
    sanitizedFormData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sanitizedFormData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I&apos;ll get back to you soon.");
        form.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error instanceof Error 
          ? `Failed to send message: ${error.message}` 
          : "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDarkMode ? '#1f2937' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          },
        }}
      />
      <div
        id="contact"
        className='w-full px-[12%] py-6 scroll-mt-20 bg-gray-50 dark:bg-gray-900'
        role="region"
        aria-labelledby="contact-heading"
      >
        <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">Connect with me</h4>
        <h2 id="contact-heading" className="text-center text-5xl text-gray-900 dark:text-white">Get in touch</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300">
          I&apos;d love to hear from you! If you have any questions, comments, or
          feedback, Please use the form below.
        </p>

        <form 
          onSubmit={onSubmit} 
          className="max-w-2xl mx-auto"
          aria-label="Contact form"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                minLength={2}
                maxLength={100}
                className="w-full p-3 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
                    rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-gray-600 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500
                    transition-colors duration-300"
                name="name"
                aria-required="true"
                aria-label="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                maxLength={255}
                className="w-full p-3 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
                    rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-gray-600 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500
                    transition-colors duration-300"
                name="email"
                aria-required="true"
                aria-label="Your email address"
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Enter your message"
              required
              minLength={10}
              maxLength={1000}
              className="w-full p-4 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
                rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-gray-600 dark:focus:border-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500
                transition-colors duration-300 mb-6 resize-y"
              name="message"
              aria-required="true"
              aria-label="Your message"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black dark:bg-white
              text-white dark:text-black rounded-full mx-auto hover:bg-gray-800 dark:hover:bg-gray-200 
              duration-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Submit contact form"
          >
            {isSubmitting ? "Sending..." : "Submit now"}
            {!isSubmitting && (
              <Image 
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} 
                alt="" 
                className="w-4"
                width={16}
                height={16}
                style={{ width: 'auto', height: 'auto' }}
                aria-hidden="true"
              />
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

