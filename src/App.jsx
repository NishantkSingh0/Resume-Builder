import React, { useContext,useEffect }  from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';
import Examples from './components/Examplepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import { Toaster } from "react-hot-toast";
import { ThemeContext } from './components/ThemeContext.jsx';

const App = () => {

  const {isDark} = useContext(ThemeContext)
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      console.log("is dark from App.jsx");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("is light from App.jsx");
    }
  }, [isDark]);

  return (
    // <>
    //   <ExpandButton/>
    // </>
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Examples" element={<Examples />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
      </Routes>  
    </div>
  );
}

export default App;