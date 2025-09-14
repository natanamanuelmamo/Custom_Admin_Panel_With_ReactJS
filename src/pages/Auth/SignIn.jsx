import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const SignIn = () => {
  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/SigninBackground.jpg')" }}
    >
      {/* Left side with background image and form */}
      <div className="flex-1 relative bg-cover bg-center flex items-center justify-center">

        {/* Login Form Card */}
        <div className="relative z-10 bg-white/10 bg-opacity-70 backdrop-blur-md p-8 rounded-lg w-full max-w-md mx-auto text-white shadow-lg">
          <h2 className="text-3xl font-semibold text-center">Welcome back to</h2>
          <h1 className="text-4xl font-bold text-center mb-6">Admin</h1>

          <form className="space-y-4">
            <div className="text-sm text-gray-300 text-center">
              Don’t have an account?{' '}
              <a href="/signup" className="underline hover:text-violet-300">
                Signup
              </a>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-violet-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="underline hover:text-violet-300">
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6E54B5] hover:bg-violet-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              Sign in
            </button>
          </form>

          <div className="text-center my-4 text-gray-400 text-sm">Or login with</div>

          <div className="flex justify-between space-x-4">
            <button className="flex-1 flex items-center justify-center space-x-2 border border-white/20 px-4 py-2 rounded hover:bg-white/10">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 border border-white/20 px-4 py-2 rounded hover:bg-white/10">
              <FaApple />
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right side*/}
      <div className="w-[30%] min-h-screen bg-[#6E54B5] opacity-80 text-white flex items-center justify-center relative">
        <h1 className="text-8xl font-bold text-center z-10">ADMIN <br /><span className="text-5xl font-bold">Panel</span></h1>
      </div>
    </div>
  );
};

export default SignIn;