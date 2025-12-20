/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React, { useState } from "react";

const GoogleVarification = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = async () => {
   try {
     const response = await fetch("https://your-api.com/verify-mail", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email, password }),
     });
 
     const data = await response.json();
     alert(data.message || "Verification successful!");
   } catch (error) {
     alert("Verification failed! Please try again.");
   }
 };
 

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 shadow-xl rounded-lg w-96 text-center border border-gray-300">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Google Mail Verification
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between">
          <button
            onClick={handleContinue}
            className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleVarification;