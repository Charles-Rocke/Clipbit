import React, { useRef, useState } from "react";
import "./index.css";

function Clipbit({ children }) {
  const inputRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const [highlightClicked, setHighlightClicked] = useState(false); // State for highlight effect

  function handleCopy() {
    if (inputRef.current) {
      const valueToCopy = inputRef.current.value;
      navigator.clipboard.writeText(valueToCopy);
      setIsCopied(true);
      setHighlightClicked(true); // Activate highlight effect
      setTimeout(() => {
        setIsCopied(false);
        setHighlightClicked(false); // Reset highlight effect after 3 seconds
      }, 3000);
    }
  }

  return (
    <div
      className={`mt-2 flex rounded-md shadow-sm ${
        highlightClicked ? "highlight" : ""
      }`}
    >
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <input
          ref={inputRef}
          type="text"
          className={
            isCopied
              ? "block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pointer-events-none"
              : "block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pointer-events-none"
          }
          placeholder="Enter your code here"
          value={children}
          readOnly
        />
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className={
          isCopied
            ? "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-blue-300 hover:bg-gray-50"
            : "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        }
      >
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Clipbit;
