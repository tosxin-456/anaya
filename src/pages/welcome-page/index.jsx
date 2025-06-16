import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";

export default function AnayaWelcome() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  // SVG background pattern
  const backgroundSVG = `data:image/svg+xml;base64,${btoa(`
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#e0d4f7" opacity="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#f8f6ff"/>
      <rect width="100%" height="100%" fill="url(#dots)"/>
    </svg>
  `)}`;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url("${backgroundSVG}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Header */}
      <div className="flex justify-end p-4">
        <div className="text-sm text-gray-600">
          Not ojaprincewill@gmail.com?
          <button className="ml-1 text-purple-600 underline hover:text-purple-700">
            Sign out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo and Welcome Card */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
                <img
                  className="mx-auto mb-2 w-[5rem] "
                  src={logo}
                  alt="Anaya Logo"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Welcome to Anaya
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Discover skincare that truly fits you — powered by smart
                insights and real community trust.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white bg-opacity-80"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white bg-opacity-80"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <button
                onClick={() => navigate("/onboarding")}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
