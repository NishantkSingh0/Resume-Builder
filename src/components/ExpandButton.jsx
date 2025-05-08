/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import { useState } from "react";

export default function ExpandButton({ content, message, linkText, linkUrl }) {
  const [hovered, setHovered] = useState(false);

  const isImage = (str) => {
    return typeof str === "string" && (str.startsWith("resume-builder") || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(str));
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isImage(content) ? (
          <img src={content} alt="Logo" className="w-7 h-7 ml-3 md:ml-4 rounded-full" />
        ) : (
          <span className="cursor-pointer text-blue-500 font-bold ml-2">{content}</span>
        )}
      </div>

      {hovered && (
        <div
        className={`absolute top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-4 py-4 rounded-md 
          ${Array.isArray(message) && message.length > 1 ? "w-[440px] left-[30px]" : "w-72 left-[50px]"} text-left`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Check if message is an array and has more than one item */}
        {Array.isArray(message) && message.length > 1 ? (
          <ul className="list-disc list-inside">
            {message.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        ) : (
          <p>{Array.isArray(message) ? message[0] : message}</p>
        )}
      
        {/* Show link only if both linkText and linkUrl exist */}
        {linkText && linkUrl && (
          <a href={linkUrl} target="_blank" className="text-blue-400 no-underline hover:underline">
            <b>{linkText}</b>
          </a>
        )}
      </div>
      
      )}
    </div>
  );
}
