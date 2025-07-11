import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9848e1e2-1e3f-4b2e-9c8d-b4e3683bba39");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-6 scroll-mt-20 bg-gray-50 dark:bg-gray-900'
    >
      <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">Connect with me</h4>
      <h2 className="text-center text-5xl text-gray-900 dark:text-white">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-6 text-gray-600 dark:text-gray-300">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, Please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
                rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-gray-600 dark:focus:border-gray-400 transition-colors duration-300"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
                rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                focus:border-gray-600 dark:focus:border-gray-400 transition-colors duration-300"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-grey-400 dark:border-gray-600
            rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
            focus:border-gray-600 dark:focus:border-gray-400 transition-colors duration-300 mb-6"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black dark:bg-white
            text-white dark:text-black rounded-full mx-auto hover:bg-gray-800 dark:hover:bg-gray-200 duration-500 transition-colors"
        >
          Submit now
          <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="m-4 text-center text-gray-600 dark:text-gray-400">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
