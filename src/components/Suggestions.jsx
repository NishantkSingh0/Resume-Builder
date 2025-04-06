import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

const AutoSuggestInput = ({
  label,
  placeholder,
  value,
  onChange,
  suggestions,
  isTextArea=false,
  isMultiSuggestion = true,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fuse = new Fuse(suggestions, { threshold: 0.3 });

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onChange(val);

    const searchText = isMultiSuggestion ? val.split(/[,\s]+/).pop() : val;

    if (searchText.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const results = fuse.search(searchText).map((res) => res.item);
    setFilteredSuggestions(results);
    setActiveIndex(0);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    replaceWord(suggestion);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev + 1 < filteredSuggestions.length ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev - 1 >= 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredSuggestions.length > 0) {
        replaceWord(filteredSuggestions[activeIndex]);
      }
    }
  };

  const replaceWord = (suggestion) => {
    let newValue = suggestion;

    if (isMultiSuggestion) {
      const words = inputValue.trim().split(/[,\s]+/);
      words[words.length - 1] = suggestion;
      newValue = words.join(", ") + ", ";
    }

    setInputValue(newValue);
    onChange(newValue);
    setShowSuggestions(false);
  };

  return (
    <div className="relative space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className="w-full h-56 sm:h-48 md:h-44 lg:h-[120px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setShowSuggestions(false)}
          onFocus={() =>
            inputValue &&
            setFilteredSuggestions(
              fuse
                .search(isMultiSuggestion ? inputValue.split(/[,\s]+/).pop() : inputValue)
                .map((res) => res.item)
            )
          }
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setShowSuggestions(false)}
          onFocus={() =>
            inputValue &&
            setFilteredSuggestions(
              fuse
                .search(isMultiSuggestion ? inputValue.split(/[,\s]+/).pop() : inputValue)
                .map((res) => res.item)
            )
          }
        />
      )}

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
          {filteredSuggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className={`px-3 py-2 cursor-pointer text-sm ${
                idx === activeIndex
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
              }`}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestInput;
