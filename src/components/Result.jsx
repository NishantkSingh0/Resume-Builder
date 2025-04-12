import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { html as html_beautify } from 'js-beautify';
import {T1,T1Css} from './T1.jsx';
import {T2,T2Css} from './T2.jsx';
import {T3,T3Css} from './T3.jsx';
import {T4,T4Css} from './T4.jsx';
import {T5,T5Css} from './T5.jsx';
import {T6,T6Css} from './T6.jsx';

const Result = () => {
  const [status, setStatus] = useState('preparing'); // 'preparing', 'waking', 'processing', 'completed', 'error'
  const [retryCount, setRetryCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadStatus, setDownloadStatus] = useState({ pdf: false, html: false });
  const location = useLocation();
  const { jsonData } = location.state || {};

  const selectedTemplate = jsonData?.selectedTemplate || "1";
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 10000; // 10 seconds

  useEffect(() => {
    if (!jsonData) {
      setStatus('error');
      setErrorMessage("No resume data found. Please go back and enter your information.");
      return;
    }

    setTimeout(() => {
      setStatus('waking');
      generateAndDownloadFiles();
    }, 1000);
  }, [jsonData]);

  const generateAndDownloadFiles = async () => {
    try {
      const unformattedHTML = document.getElementById('capture-content');

      if (!unformattedHTML) {
        throw new Error("Content element not found. Template may not be rendered correctly.");
      }
  
      if (!unformattedHTML.innerHTML.trim()) {
        throw new Error("Template content is empty. Please check the template rendering.");
      }
  
      console.log("Template HTML captured successfully");
  
      const Css = selectedTemplate==='1'?T1Css:selectedTemplate=='2'?T2Css:selectedTemplate=='3'?T3Css:selectedTemplate=='4'?T4Css:selectedTemplate=='5'?T5Css:T6Css;
  
      const generatedCode = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Designed by BRAVERS</title>
            <style>
              ${Css}
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
            <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
          </head>
          <body>
            ${unformattedHTML.innerHTML}
          </body>
        </html>
      `;
  
      const htmlContent = html_beautify(generatedCode);
  
      console.log("Sending request to generate PDF...");
      setStatus('processing');
  
      try {
        const response = await fetch('https://html2pdfviabravers.onrender.com/generate-pdf', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ html: htmlContent })
        });
    
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
    
        const pdfBlob = await response.blob();
    
        // Download PDF Blob
        const pdfUrl = window.URL.createObjectURL(pdfBlob);
        const pdfLink = document.createElement('a');
        pdfLink.href = pdfUrl;
        pdfLink.download = 'Resume.pdf';
        pdfLink.click();
        window.URL.revokeObjectURL(pdfUrl);
    
        console.log("PDF Downloaded Successfully",status);
        setDownloadStatus(prev => ({ ...prev, pdf: true }));
    
        // Generate HTML Blob for download
        const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
        const htmlUrl = window.URL.createObjectURL(htmlBlob);
        const htmlLink = document.createElement('a');
        htmlLink.href = htmlUrl;
        htmlLink.download = 'Resume.html';
        htmlLink.click();
        window.URL.revokeObjectURL(htmlUrl);
        setStatus('completed');
    
        console.log("HTML Downloaded Successfully",status);
        setDownloadStatus(prev => ({ ...prev, html: true }));
    
      } catch (error) {
        console.error('API Error:', error);
        if (retryCount < MAX_RETRIES) {
          setRetryCount(prev => prev + 1);
          setErrorMessage(`Request failed: ${error.message}. Retrying in ${RETRY_DELAY/1000} seconds...`);
          setTimeout(() => {
            setStatus('waking');
            generateAndDownloadFiles();
          }, RETRY_DELAY);
        } else {
          setErrorMessage(`Failed after ${MAX_RETRIES} attempts: ${error.message}`);
          setStatus('error');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.message || "An unknown error occurred");
      setStatus('error');
    }
  };
  
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

  // Determine what message to show based on status
  const getStatusMessage = () => {
    switch(status) {
      case 'preparing':
        return 'Preparing your resume...';
      case 'waking':
        return `Waking up our servers... ${retryCount > 0 ? `(Attempt ${retryCount + 1} of ${MAX_RETRIES + 1})` : ''}`;
      case 'processing':
        return 'Generating PDF...';
      case 'completed':
        return `Your resume ${downloadStatus.pdf ? '(PDF)' : ''} ${downloadStatus.html ? '(HTML)' : ''} has been downloaded!`;
      default:
        return 'Designing...';
    }
  };

  const handleTryAgain = () => {
    setRetryCount(0);
    setErrorMessage('');
    setStatus('preparing');
    setDownloadStatus({ pdf: false, html: false });
    setTimeout(() => {
      setStatus('waking');
      generateAndDownloadFiles();
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-slate-800 px-4 py-8 transition-colors duration-300">
      {/* Always render the template but keep it hidden during loading */}
      <div 
        id="capture-content" 
        className="scale-[0.4] text-left w-full mb-6"
        style={{ visibility: status === 'completed' ? 'visible' : 'hidden', position: status === 'completed' ? 'relative' : 'absolute' }}
      >
        {jsonData && renderSelectedTemplate()}
      </div>

      {/* Messages container - always positioned below */}
      <div className="w-full max-w-md mt-0">
        {status !== 'completed' && status !== 'error' ? (
          <div className="w-full flex flex-row items-center mb-6">
            <div className="relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300">
              <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"></div>
              <div className="absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex flex-col items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300">
                <p title='Server sometimes get sleep. waking them up may take some seconds. please wait'>{getStatusMessage()}</p>
                {status === 'waking' && (
                  <p className="text-xs mt-4 text-gray-500 dark:text-gray-400 max-w-[180px]">
                    Our server might be waking up from sleep mode. This can take up to a minute.
                  </p>
                )}
                {errorMessage && status !== 'error' && (
                  <p className="text-xs mt-4 text-yellow-600 dark:text-yellow-400 max-w-[180px]">
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : status === 'error' ? (
          // Show error message if there's an error
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {errorMessage}</span>
            <button 
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </div>
        ) : (
          // Show success message when completed
          <div className="w-full flex flex-col items-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-full mb-4 text-left">
              <span className="block sm:inline"> Your resume has been successfully generated and downloaded! I'm confident your ATS score will be <b>85+</b>. However, keep in mind — websites like EnhanceCV, LiveCareer, Resumake and other online resume builders often show lower scores intentionally to encourage users to rebuild their resumes using their platform. Focus on content quality, clarity, and relevance — that's what truly matters to recruiters and real-world ATS systems!</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleTryAgain}
              >
                Download Again
              </button>
              <button 
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.history.back()}
              >
                Back to Editor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;