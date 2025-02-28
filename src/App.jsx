import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';
import Examples from './components/Examplepage.jsx';
import AboutUs from './components/aboutus.jsx';
// import ExpandButton from './components/ExpandButton.jsx'

const App = () => {
  return (
    // <>
    //   <ExpandButton/>
    // </>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Examples" element={<Examples />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
      </Routes>
  );
}

export default App;