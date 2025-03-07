import React, { useContext,useEffect }  from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';
import AboutUs from './components/AboutUs.jsx';
import { Toaster } from "react-hot-toast";
import { ThemeContext } from './components/ThemeContext.jsx';
import GoogleVarification from './components/GoogleVarification.jsx';
// import VarifyMob from './components/VarifyMob.jsx';

const App = () => {

  const {isDark} = useContext(ThemeContext)
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    // <>
    //   <VarifyMob/>
    // </>
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/VarifyMail" element={<GoogleVarification />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
      </Routes>  
    </div>
  );
}

export default App;