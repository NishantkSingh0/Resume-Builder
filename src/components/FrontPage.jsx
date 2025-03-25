import React, { useContext, useEffect } from "react";
import Typed from "typed.js"; 
import Examplepages from './Examplepage.jsx'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "./ThemeContext.jsx";
// import { MdDarkMode } from "react-icons/md";
import Switch from "./Switch.jsx";

const features=[
  "Build your resume easily",
  "No need to worry about what to add what to not",
  "Get high rated, ATS freindly resumes",
  "Different variants of resume templates available",
  "We carefully selected strong resume data inputs from users after a high research.",
  "Download your resume in pdf or web formate",
  "Use AI to create a perfect summary for your resume",
  "Completely free to use",
  "We didn't store your entered data and generated resumes (for user privacy)",
  "Light weight application. just take 1.8MB of RAM and approximately 0 CPU time"
]

const FrontPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/GetInfo');
  };

  const handleViewTemplates = () => {
    navigate('/ViewTemplates');
  };

  const handleAboutUs = () => {
    navigate('/AboutUs');
  };

  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const typedMobile = new Typed("#mobile-typing-text", {
      strings: features,
      loop: true,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 500,
      cursorChar: " ",
    });

    const typed = new Typed("#desktop-typing-text", {
      strings: features,
      loop: true,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 500,
      cursorChar: " "
    });

    return () => {
      typedMobile.destroy();
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-300 text-center px-4 dark:bg-slate-950">
      <div className="hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-2xl mt-3 dark:bg-slate-800">
        <div className="flex items-center">
          <button 
            className="mr-6"
            title="The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode."
            onClick={handleTheme}>
              <Switch/>
          </button>
         
          <button
            className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105"
            onClick={handleViewTemplates}
            title="View Generated resume samples"
          >
            Generated Resumes
          </button>
        </div>
        
        <h1 className="text-xl font-bold text-gray-800 dark:text-white no-underline">
          <a href="https://github.com/NishantkSingh0/Resume-Builder" title="Address to GitHub repository of this project" target="_blank">
            <span className="lg:hidden">Resume Builder</span>
            <span className="hidden lg:block">Resume Builder Web Application</span>
          </a>
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleAboutUs}>
            About Us
          </button>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleContinue}>
            Continue ➤
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center flex-1 mt-3 mb-3">
        <Examplepages />    
        <span id="desktop-typing-text" className="hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 dark:text-white"></span>
      </div>


      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center w-full h-12 px-6 py-3 bg-white shadow-md mt-6 rounded-3xl dark:bg-slate-800">
        <button 
          className="text-2xl mr-8"
          title="The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode."
          onClick={handleTheme}>
            <Switch/>
        </button>

        <div className="md:hidden flex space-x-4">
          {/* <button
            className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105"
            onClick={handleViewTemplates}
            title="View Generated resume samples"
          >
            Generated
          </button> */}
          <button className=" px-4 py-[3px] bg-blue-500 text-white rounded-full hover:bg-blue-700" onClick={handleContinue}>
            Continue
          </button>

        </div>
      </div>

      <div className="md:hidden flex justify-center flex-col items-center flex-grow">
        <h1 className="text-2xl md:hidden sm:text-3xl font-bold mb-3 dark:text-white">
          Resume Builder
        </h1>
        <p className="text-sm sm:text-lg text-gray-500 font-semibold mb-4">   {/* Here the mobile span are with desktop id  */}
          <span id="mobile-typing-text" className="md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-4 dark:text-white"></span>
        </p>
        </div>

      <div className="md:hidden absolute bottom-4 font-bold text-gray-800 left-1/2 -translate-x-1/2 text-center dark:text-white/80">
        <a
          onClick={handleViewTemplates}
          className="cursor-pointer dark:text-gray-300"
        >
          Generated Templates
        </a>
      </div>

      {/* <p className="text-sm sm:text-lg text-gray-500 font-semibold mb-4">       Here the desktop span are with mobile id
        <span id="mobile-typing-text" className="hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 mb-3 dark:text-white"></span>
      </p> */}
    </div>

  );
};

export default FrontPage;
