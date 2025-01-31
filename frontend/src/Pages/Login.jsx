import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div>
          <a href="/" className="px-4 py-2 text-blue-600 hover:underline">
            Home
          </a>
          <a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </a>
        </div>
      </nav>

      {/* Login Box */}
      <div className="mt-10 max-w-md mx-auto p-5 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email address</label>
            <input type="email" id="email" className="w-full p-2 border rounded" required />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-2 border rounded pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <div className="mb-4">
            <a href="/forgot-password" className="text-blue-500">Forgot your password?</a>
          </div>

          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>

        <p className="mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
