/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React, { useState } from "react";

const HtmlToPdfConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [step, setStep] = useState("upload"); // upload -> generate -> download

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".html")) {
      setSelectedFile(file);
      setStatus("");
      setStep("generate");
    } else {
      setSelectedFile(null);
      setStatus("Please select a valid .html file.");
      setStep("upload");
    }
  };

  const handleGeneratePDF = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setStatus("Generating PDF...");

    const reader = new FileReader();

    reader.onload = async (event) => {
      const htmlContent = event.target.result;

      try {
        const response = await fetch("https://html2pdfviabravers.onrender.com/generate-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ html: htmlContent }),
        });

        if (!response.ok) throw new Error("Failed to generate PDF.");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        setPdfUrl(url);
        setStep("download");
        setStatus("");
      } catch (error) {
        setStatus(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setStatus("Error reading file.");
      setLoading(false);
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-slate-800/95 bg-gray-100">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
        <h2 className="text-2xl dark:text-stone-300 font-semibold mb-6">HTML to PDF Converter</h2>

        <input
          type="file"
          accept=".html"
          id="fileInput"
          onChange={handleFileChange}
          className="hidden"
        />

        {step === "upload" && (
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          >
            Upload our HTML
          </button>
        )}

        {step === "generate" && (
          <button
            onClick={handleGeneratePDF}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="w-5 h-5 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mr-2"></span>
                Generating PDF...
              </span>
            ) : (
              "Generate PDF"
            )}
          </button>
        )}

        {step === "download" && (
          <a
            href={pdfUrl}
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          >
            Download Resume
          </a>
        )}

        {/* {status && <div className="mt-4 text-red-600 text-sm">{status}</div>} */}
      </div>
    </div>
  );
};

export default HtmlToPdfConverter;
