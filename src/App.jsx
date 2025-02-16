import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import FrontPage from './components/FrontPage.jsx';
import GetInfo from './components/GetInfo.jsx';
import Result from './components/Result.jsx';

const App = () => {
  return (
    // <>
    //   <Result/>
    // </>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/GetInfo" element={<GetInfo />} />
        <Route path="/Result" element={<Result />} /> 
      </Routes>
  );
}

export default App;