import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404! Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Oops! It seems like the page you are looking for doesn't exist.</p>
      <Link to='/' className="text-blue-500 hover:underline">Go back to Home</Link>
    </div>
  );
}
