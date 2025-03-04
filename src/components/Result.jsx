import React, { useState, useEffect } from 'react';

const Result = () => {
  const [countdown, setCountdown] = useState(10);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1500);
      return () => clearTimeout(timer);
    } else {
      setError(true);
    }
  }, [countdown]);

  return (
    <div className="flex items-center justify-center h-screen w-screen text-center transition-colors duration-300 bg-gray-100 dark:bg-slate-800">
      {error ? (
        <p className="text-[16px] text-red-500 dark:text-amber-300 font-bold text-center">
          Server is not connected to Frontend. <br />
          Please read instructions mentioned on Git Repository <br />
          <a 
            href="https://github.com/NishantkSingh0/resume-builder-web-application" 
            target='_blank'
            className="text-blue-600 dark:text-blue-400 no-underline hover:underline"
          >
            <strong>NishantkSingh0/resume-builder-web-application</strong>
          </a>
        </p>
      ) : (
        <div className="relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300">
          
          {/* Blob with custom animation */}
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"></div>

          {/* Foreground card */}
          <div className="absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300">
            <p>Designing ...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;