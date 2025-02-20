import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center">
      <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Join our community</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Already have an account? <a href="/login" className="text-blue-500 font-bold">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
