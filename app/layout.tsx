import React, { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
            <Navbar />

            <main className="py-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
