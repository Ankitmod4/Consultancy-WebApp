// File: src/pages/SignupPage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "../components/icons";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gray-50 min-h-screen flex flex-col items-center justify-start pt-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      }}
    >
      {/* Back Button */}
      <div className="w-full max-w-md mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="signup-email"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="signup-email"
              placeholder="your@email.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="signup-password"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-base sm:text-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default SignupPage;
