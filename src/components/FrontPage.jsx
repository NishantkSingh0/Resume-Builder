import React, { useEffect } from "react";
import Typed from "typed.js"; 
import Examplepages from './Examplepage.jsx'
import { useNavigate } from 'react-router-dom';

const features=[
  "Build your resume easily",
  "No need to worry about what to add what to not",
  "Get high rated resumes",
  "Different variants of resume templates available",
  "Download your resume in pdf or web formate",
  "Use AI to create a perfect description for your resume",
  "Completely free to use",
]

const FrontPage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/GetInfo');
  };
  // const handleExamples = () => {
  //   navigate('/Examples');
  // };
  const handleAboutUs = () => {
    navigate('/AboutUs');
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
    <div className="flex flex-col h-screen bg-gray-100 text-center px-4">
      <div className="hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-2xl mt-3">
        <h1 className="text-xl font-bold text-gray-800">Resume Builder Web Application</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleAboutUs}>
            About Us
          </button>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleContinue}>
            Continue ➤
          </button>
        </div>
      </div>

      
      {/* Desktop View */}
      <div className="hidden md:grid place-items-center mt-8 mb-2">
        <Examplepages />
      </div>


      {/* Mobile View */}
      <div className="md:hidden flex justify-center items-center flex-grow">
        <h1 className="text-2xl md:hidden sm:text-3xl font-bold mb-3">
          Resume Builder Web Application
        </h1>
        <span id="desktop-typing-text" className="md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-3 "></span>
        <div className="md:hidden flex space-x-6 mt-5">
          <button className=" px-4 py-[5px] bg-blue-500 text-white rounded-full hover:bg-blue-700" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>

      <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();  
            handleAboutUs();
            }}
        >
            BRAVERS
        </a> 
      </div>

      <p className="text-sm sm:text-lg text-gray-500 font-semibold mb-4">
        <span id="mobile-typing-text" className="hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 mb-3 "></span>
      </p>
    </div>

  );
};

export default FrontPage;
