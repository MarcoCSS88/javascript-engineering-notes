"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const getLinkClass = (path: string) => {
    return `relative text-sm text-gray-600 hover:text-black ${
      isActive(path)
        ? "text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black"
        : ""
    }`;
  };

  return (
    <nav className="flex items-center justify-between py-6 sm:py-10 border-b border-gray-200">
      <h1 className="text-xl sm:text-3xl font-semibold tracking-tight leading-tight">
        JavaScript <br className="sm:hidden" />
        Engineering Notes
      </h1>

      <div className="flex gap-6">
        <Link href="/" className={getLinkClass("/")}>
          Home
        </Link>

        <Link href="/about" className={getLinkClass("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
