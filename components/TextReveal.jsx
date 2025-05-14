"use client";

import React from "react";

const TextReveal = ({ text }) => {
  return (
    <h1 className="mb-3 font-extrabold text-2xl sm:text-3xl md:text-4xl flex flex-wrap">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in "
          style={{
            animationDelay: `${i * 0.05}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default TextReveal;
