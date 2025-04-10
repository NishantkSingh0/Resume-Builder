import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Import all template components
import T1 from './T1.jsx';
import T2 from './T2.jsx';
import T3 from './T3.jsx';
import T4 from './T4.jsx';
import T5 from './T5.jsx';
import T6 from './T6.jsx';

const Result = () => {
  const [countdown, setCountdown] = useState(10);
  const location = useLocation();
  const { jsonData } = location.state || {};

  const selectedTemplate = jsonData?.selectedTemplate || "1";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1500);
      return () => clearTimeout(timer);
    } else {
      generateAndDownloadPDF(); // Call backend to download PDF
    }
  }, [countdown]);

  const generateAndDownloadPDF = async () => {
    const content = document.getElementById('capture-content').innerHTML;

    const cssURL = `https://cdn.jsdelivr.net/gh/NishantkSingh0/Generated-Templates/CSS%20linking/T${selectedTemplate}.css?v=dev123`;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Designed by BRAVERS</title>
        <link rel="stylesheet" href=${cssURL}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
      </head>
      <body>${content}</body>
      </html>
    `;

    try {
      const response = await fetch('https://your-backend.onrender.com/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: htmlContent }),
      });

      if (!response.ok) {
        throw new Error('PDF generation failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Function to render the selected template component with jsonData
  const renderSelectedTemplate = () => {
    switch(selectedTemplate) {
      case "1":
        return <T1 jsonData={jsonData} />;
      case "2":
        return <T2 jsonData={jsonData} />;
      case "3":
        return <T3 jsonData={jsonData} />;
      case "4":
        return <T4 jsonData={jsonData} />;
      case "5":
        return <T5 jsonData={jsonData} />;
      case "6":
        return <T6 jsonData={jsonData} />;
      default:
        return <T1 jsonData={jsonData} />;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen text-center transition-colors duration-300 bg-gray-100 dark:bg-slate-800">
      {countdown > 0 ? (
        <div className="relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300">
          
        {/* Blob with custom animation */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"></div>

        {/* Foreground card */}
        <div className="absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300">
          <p>Designing ...</p>
        </div>
      </div>
      ) : (
        <div id="capture-content" className='scale-[0.4] text-left'>
          {renderSelectedTemplate()}
        </div>
      )}
    </div>
  );
};

export default Result;