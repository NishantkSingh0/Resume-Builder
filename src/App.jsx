import React, { useContext,useEffect,useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';
import AboutUs from './components/AboutUs.jsx';
import { Toaster } from "react-hot-toast";
import { ThemeContext } from './components/ThemeContext.jsx';
import GoogleVarification from './components/GoogleVarification.jsx';
import ViewTemplates from './components/ViewTemplates.jsx';
import FileUploadPage from './components/FileUploadPage.jsx';
import Loader from './components/Loader.jsx'
// import T5 from './components/T5.jsx'

const App = () => {

  const {isDark} = useContext(ThemeContext)
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loader />;
  }

  return (
    // <>
    //   <FileUploadPage/>
    // </>
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/VarifyMail" element={<GoogleVarification />} />
        <Route path="/FileUploadPage" element={<FileUploadPage />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
        <Route path="/ViewTemplates" element={<ViewTemplates/>} /> 
      </Routes>  
    </div>
  );
}

export default App;