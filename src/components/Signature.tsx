import React from 'react';

export const Signature: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 240 80"
        className="w-44 sm:w-52 h-auto text-[#191816]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 'R' */}
        <path
          d="M 22 62 L 28 26 C 30 18 42 16 48 24 C 53 31 46 41 33 42 M 34 38 L 52 64"
          strokeWidth="2.2"
        />
        {/* 'ahul' */}
        <path
          d="M 52 60 C 53 50 56 46 62 46 C 66 46 65 58 64 61 M 65 48 C 65 43 73 24 73 34 L 72 61 C 74 53 79 47 84 48 C 88 49 87 56 86 60 M 93 49 L 93 57 C 93 61 97 61 100 58 L 100 48 M 108 30 L 107 60"
          strokeWidth="2"
        />

        {/* 'N' */}
        <path
          d="M 126 62 L 132 26 L 149 61 L 152 28"
          strokeWidth="2.2"
        />
        {/* 'anda' */}
        <path
          d="M 157 56 C 157 48 163 46 167 49 C 170 52 169 59 168 61 M 168 50 C 170 47 175 46 178 49 L 176 60 M 184 32 L 183 60 C 182 54 186 47 190 47 C 194 47 193 58 192 60 M 198 56 C 199 48 205 46 209 49 L 208 61"
          strokeWidth="2"
        />

        {/* Underline flourish sweeping beneath */}
        <path
          d="M 20 70 C 60 67 140 57 215 50"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
};
