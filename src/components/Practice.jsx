<div className="flex flex-col h-screen bg-gray-200 text-center px-4 dark:bg-slate-950">
      <div className="hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-2xl mt-3 dark:bg-slate-800">
        <button 
          className="text-2xl mr-48"
          title="The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode."
          onClick={handleTheme}>
          {isDark?<MdDarkMode className="text-white" />:<MdDarkMode className="text-black" /> }
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Resume Builder Web Application</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleAboutUs}>
            About Us
          </button>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" onClick={handleContinue}>
            Continue ➤
          </button>
        </div>
      </div>
      <div className="hidden md:grid place-items-center mt-8 mb-3">
        <Examplepages />
      </div>