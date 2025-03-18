import { useState } from "react";

export default function ExpandButton({ content, message, linkText, linkUrl }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {typeof content === "string" ? (
          <img src={content} alt="Logo" className="w-7 h-7 ml-3 md:ml-4 rounded-full" />
        ) : (
          <span className="cursor-pointer text-blue-500 font-bold">{content}</span>
        )}
      </div>

      {hovered && (
        <div
          className="absolute left-[52px] top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-6 py-4 rounded-md w-80 text-left"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {message} {linkText && linkUrl && (
            <a href={linkUrl} target="_blank" className="text-blue-400 no-underline hover:underline"><b>{linkText}</b></a>
          )}
        </div>
      )}
    </div>
  );
}