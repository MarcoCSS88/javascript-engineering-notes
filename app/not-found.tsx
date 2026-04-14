import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start h-[60vh] text-center">
      <h1 className="text-4xl font-bold">Non found</h1>
      <p className="mt-2 text-gray-600">This page does not exist.</p>

      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-gray-900 border-b border-transparent hover:border-gray-900 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  );
};

export default NotFound;
