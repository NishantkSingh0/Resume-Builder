import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UploadCloud } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const FileUploadPage = () => {
  const [jsonUploaded, setJsonUploaded] = useState(false);
  const [docUploaded, setDocUploaded] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const navigate=useNavigate();

  const handleJSONUpload = async (event) => {
    const expectedKeys=["contactInfo","skills","workExperience","projects","education","certificates","Description"]
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      try {
        const text = await file.text();
        const parsedData = JSON.parse(text);
        setJsonData(parsedData);
        const actualKeys = Object.keys(parsedData);
        if (expectedKeys.every((key) => actualKeys.includes(key))){
           toast.success("JSON file uploaded successfully! and matched with our formate", { duration: 3000 , position: "top-right"});
           setJsonUploaded(true);
         }else{
            toast.error("The provided json is not ours.", { duration: 3000,position: "top-right"});
         }
      } catch (err) {
        toast.error("Invalid JSON file!", { duration: 3000,position: "top-right" });
      }
    } else {
      toast.error("Please upload a valid JSON file.", { duration: 3000,position: "top-right" });
    }
  };

  async function ParseData(file) {
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("http://127.0.0.1:5000/parse-resume", {
      method: "POST",
      body: formData,
    });
  
    const json = await res.json();
    console.log(json);
  
    // Convert JSON to blob
    const blob = new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json",
    });
  
    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "parsed_resume.json";  // Download filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const handleDocUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type.includes("pdf") || file.type.includes("word"))) {
      setDocUploaded(true);
      toast.success("Document uploaded successfully!", { duration: 3000,position: "top-right" });
      // ParseData(file);
    } else {
      toast.error("Please upload a PDF or DOCX file.", { duration: 3000,position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex dark:bg-slate-900 flex-col items-center justify-center space-y-6 px-4">
    <Toaster position="top-right" />
  
    {/* JSON Upload Container */}
    <div className="w-[90%] lg:w-4/5 mx-4 bg-gray-200 dark:bg-slate-800 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 space-y-4 sm:space-y-0 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full sm:w-auto lg:ml-14">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {jsonUploaded ? "JSON uploaded" : "Upload json data..  Structured by us"}
        </p>
        <p className="text-md mt-1 font-semibold text-gray-500 dark:text-gray-400">
          {jsonUploaded ? "You can now proceed further" : "The fastest way to redesign resume without filling whole details again"}
        </p>
      </div>
      {jsonUploaded ? (
        <button
          className="w-full lg:mr-14 sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          onClick={() => navigate("/GetInfo", { state: { jsonData } })}
        >
          Continue &gt;
        </button>
      ) : (
        <label className="w-full lg:mr-12 sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition duration-300">
        <UploadCloud className="w-5 h-5 mr-2" /> Our&nbsp;JSON
          <input
            type="file"
            accept=".json"
            onChange={handleJSONUpload}
            className="hidden"
          />
        </label>
      )}
    </div>
  
    {/* Fill Form */}
    <div className="w-[90%] lg:w-4/5 mx-4 bg-gray-200 dark:bg-slate-800 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 space-y-4 sm:space-y-0 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full sm:w-auto lg:ml-14">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Start by filling your details...
        </p>
        <p className="text-md mt-1 font-semibold text-gray-500 dark:text-gray-400">
          it mostly take 8 to 10 minutes
        </p>
      </div>
      <button
        className="w-full sm:w-auto px-5 py-2 lg:mr-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        onClick={() => navigate("/GetInfo")}
      >
        Continue &gt;
      </button>
    </div>
  
    {/* PDF/DOCX Upload Container */}
    <div className="w-[90%] lg:w-4/5 mx-4 bg-gray-200 dark:bg-slate-800 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 space-y-4 sm:space-y-0 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full sm:w-auto lg:ml-14">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {docUploaded ? "Document uploaded" : "Upload your existing resume to make parse most data from them"}
        </p>
        <p className="text-md mt-1 font-semibold text-gray-500 dark:text-gray-400">
          {docUploaded
            ? "You can't proceed with this feature now.."
            : "This feature is based on an API by Affinda Resume Parser. We can't able to make this feature possible due to Security issue with API key and handling costs..."}
        </p>
      </div>
      {docUploaded ? (
        <button className="w-full lg:mr-14 sm:w-auto px-5 py-2 bg-red-600 text-white rounded-2xl hover:bg-red-700">
         X Continue
        </button>
      ) : (
        <label className="w-full lg:mr-12 sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition duration-300">
        <UploadCloud className="w-5 h-5 mr-2" /> .pdf/.docx
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleDocUpload}
            className="hidden"
          />
        </label>
      )}
    </div>
  </div>
  
  );
};

export default FileUploadPage;
