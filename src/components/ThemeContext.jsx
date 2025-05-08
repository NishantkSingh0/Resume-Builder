/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import {createContext,useState} from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children}) => {
  const [isDark,setIsDark]=useState(Math.random()<0.5);

  return (
    <ThemeContext.Provider value={{isDark,setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
};