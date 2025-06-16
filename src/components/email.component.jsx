import React, { useState, useRef, useEffect } from "react";
import { Mail } from "lucide-react";
import { MdCheckCircle, MdOutlineInfo } from "react-icons/md";

export default function OTPModal() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [status, setStatus] = useState(""); // 'correct', 'wrong', or ''
  const [isOpen, setIsOpen] = useState(true);
  const inputRefs = useRef([]);

  const correctCode = "3660";

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last digit
    setOtp(newOtp);
    setStatus(""); // Reset status when typing

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all 4 digits are entered
    if (newOtp.every((digit) => digit !== "")) {
      const enteredCode = newOtp.join("");
      if (enteredCode === correctCode) {
        setStatus("correct");
      } else {
        setStatus("wrong");
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = otp.join("");
    if (enteredCode === correctCode) {
      setStatus("correct");
      alert("Verification successful!");
    } else {
      setStatus("wrong");
      alert("Invalid Code. Retry again.");
    }
  };

  const handleCancel = () => {
    setOtp(["", "", "", ""]);
    setStatus("");
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-sm shadow-xl">
        {/* Icon */}
        <div className="text-center mb-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={28} className="text-purple-600" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Please check your email.
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6">
            We've sent a code to{" "}
            <span className="font-medium">stev@gmail.com</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center space-x-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 h-14 text-center text-2xl font-bold border-2 rounded-lg focus:outline-none transition-all ${
                status === "wrong"
                  ? "border-red-400 text-red-600"
                  : "border-gray-200 text-purple-600 focus:border-purple-400"
              }`}
            />
          ))}
        </div>

        {/* Helper text */}
        <p className="text-center text-sm text-gray-500 mb-8">
          Didn't get a code?{" "}
          <span className="text-purple-600 cursor-pointer hover:underline">
            Click to resend
          </span>
        </p>

        {/* Status message */}
        {status === "wrong" && (
          <div className="text-center mb-4">
            <div className="text-red-600 text-sm font-medium flex items-center justify-center gap-2">
              <MdOutlineInfo className="text-red-600 text-base" />
              <span>Invalid Code. Retry again.</span>
            </div>
          </div>
        )}

        {status === "correct" && (
          <div className="text-center mb-4">
            <div className="text-green-600 text-sm font-medium flex items-center justify-center gap-2">
              <MdCheckCircle className="text-green-600 text-base" />
              <span> Code verified successfully!</span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <button
            onClick={handleCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            disabled={otp.some((digit) => digit === "")}
            className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Verify
          </button>
        </div>

        <p className="text-center text-purple-600 text-sm mt-4">
          Hint: Try code 3660
        </p>
      </div>
    </div>
  );
}
