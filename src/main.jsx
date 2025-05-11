/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React from 'react';
import { Routes, Router , HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'  
import { ThemeProvider } from "./components/ThemeContext"; 
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </HashRouter>
);
