import React, { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "JavaScript Engineering Notes",
  description:
    "Personal notes and deep dives while studying modern JavaScript and software engineering.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="min-h-screen px-6">
          <div className="w-full max-w-3xl mx-auto">
            <nav className="flex items-center justify-between py-10 border-b border-gray-200">
              <h1 className="text-3xl font-semibold tracking-tight">
                JavaScript Engineering Notes
              </h1>

              <div className="flex gap-6">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black text-sm"
                >
                  About
                </Link>
              </div>
            </nav>

            <main className="py-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
