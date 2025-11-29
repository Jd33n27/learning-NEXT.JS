import React from "react";

export default function About() {
  return (
    // 1. "min-h-screen" makes the div take up the full height of your monitor
    // 2. "flex justify-center items-center" puts the card exactly in the middle
    // 3. "bg-gray-100" gives a light grey background to the whole page
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* CARD CONTAINER */}
      {/* Task: Add 'shadow-xl' to make it pop, and 'rounded-2xl' for smooth corners */}
      <div className="bg-white p-8 max-w-sm w-full border border-gray-200">
        {/* HEADER / TITLE */}
        {/* Task: Make the text larger (text-2xl) and bold (font-bold) */}
        <h1 className="text-gray-800 mb-4">About Me</h1>

        {/* CONTENT */}
        <p className="text-gray-600 leading-relaxed mb-6">
          Hello! I am a software engineer building SwiftPay. I specialize in
          React, Next.js, and making money online.
        </p>

        {/* BUTTON */}
        {/* Task: Make the background black (bg-black), text white (text-white), and round the corners */}
        <button className="w-full py-3 hover:bg-gray-800 transition-colors">
          Contact Me
        </button>
      </div>
    </div>
  );
}

// Success Criteria:

// The page should not look like a Word document.

// It should look like a clean, modern card centered on a grey background.

// The button should slightly change color when you hover over it (that's what hover:bg-gray-800 does).
