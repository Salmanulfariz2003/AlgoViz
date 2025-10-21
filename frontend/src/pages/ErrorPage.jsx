import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar'; // Using AuthNavbar as it's simpler and less likely to fail

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let title = "An unexpected error occurred!";
  let message = "We're sorry, but something went wrong.";

  // Check if this is a 404 error
  if (error.status === 404) {
    title = "404 - Page Not Found";
    message = "The page you are looking for does not exist.";
  }

  // Use the router's status text if available
  if (error.statusText) {
    message = error.statusText;
  }

  return (
    <>
      {/* We include a navbar so the user isn't stuck */}
      <AuthNavbar />
      <div 
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6 text-gray-800"
        // Apply padding to account for the fixed navbar
        style={{ paddingTop: '80px' }} 
      >
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          💿 {title}
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          {message}
        </p>
        
        {/* Optional: Show developer-facing error message */}
        <pre className="text-sm text-gray-500 bg-gray-200 p-4 rounded-md mb-8 overflow-auto">
          {error.message || JSON.stringify(error)}
        </pre>
        
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}