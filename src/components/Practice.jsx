import React, { useState } from 'react';
import Fuse from 'fuse.js';

const suggestions = {
  fullName: ["John Doe", "Jane Smith", "Alice Johnson"],
  jobTitle: ["Software Engineer", "Data Scientist", "Product Manager"],
};

const fuseOptions = { includeScore: true, threshold: 0.3 };

const Practice = ({ formData, handleInputChange, isExampleProcessing, ExampleJsonData }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState({});

  const handleSuggestion = (field, value) => {
    if (suggestions[field]) {
      const fuse = new Fuse(suggestions[field], fuseOptions);
      const results = fuse.search(value).map((res) => res.item);
      setFilteredSuggestions((prev) => ({ ...prev, [field]: results }));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl mb-4 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400">
        Contact Information
      </h2>
      
      {/* Full Name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-slate-300">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          value={isExampleProcessing ? ExampleJsonData.contactInfo.fullName : formData.contactInfo.fullName}
          onChange={(e) => {
            if (!isExampleProcessing) {
              handleInputChange("contactInfo", "fullName", e.target.value);
              handleSuggestion("fullName", e.target.value);
            }
          }}
        />
        {filteredSuggestions.fullName && (
          <ul className="bg-white border mt-1">
            {filteredSuggestions.fullName.map((suggestion, index) => (
              <li key={index} className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleInputChange("contactInfo", "fullName", suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Job Title */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-slate-300">Job Title</label>
        <input
          type="text"
          placeholder="Data Scientist"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          value={isExampleProcessing ? ExampleJsonData.contactInfo.jobTitle : formData.contactInfo.jobTitle}
          onChange={(e) => {
            if (!isExampleProcessing) {
              handleInputChange("contactInfo", "jobTitle", e.target.value);
              handleSuggestion("jobTitle", e.target.value);
            }
          }}
        />
        {filteredSuggestions.jobTitle && (
          <ul className="bg-white border mt-1">
            {filteredSuggestions.jobTitle.map((suggestion, index) => (
              <li key={index} className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleInputChange("contactInfo", "jobTitle", suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Practice;
