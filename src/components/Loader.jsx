/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
      <img
        src="https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true"
        alt="Wait a while 😐"
        title='Wait a while 😐. Content is loading'
        className="w-15 h-15 animate-step-rotate"
      />
    </div>
  );
};

export default Loader;