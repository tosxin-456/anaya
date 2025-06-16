import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import google from "../../assets/google.svg";
import OTPModal from "../../components/email.component";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {modal && <OTPModal />}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-80 p-6 space-y-4">
          <div className="text-center">
            <img
              className="mx-auto mb-2 w-[5rem] "
              src={logo}
              alt="Anaya Logo"
            />
            <h1 className="text-2xl font-bold">Welcome to Anaya</h1>
            <p className="text-sm text-gray-600">
              Skincare isn’t one-size-fits-all. Let’s keep it personal.
            </p>
          </div>

          <button className="w-full border border-gray-300 rounded-md flex items-center justify-center gap-2 py-2 hover:bg-gray-100 transition">
            <img src={google} alt="Google Icon" className="w-5 h-5" />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <div className="h-px w-full bg-gray-300"></div>
            <span>OR</span>
            <div className="h-px w-full bg-gray-300"></div>
          </div>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
            type="text"
          />

          <button
            onClick={() => navigate("/welcome")}
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition"
          >
            Login{" "}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-purple-600 hover:underline cursor-pointer">
              Sign Up{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
