"use client";

import Link from "next/link";
import AuthButton from "./AuthButton";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50  bg-white border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Care
          <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
            .IO
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {["Home", "My Bookings"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : "/my-bookings"}
              className="relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          <AuthButton></AuthButton>
          <Link
            href="/register"
            className="px-5 py-2 rounded-full text-white 
            bg-gradient-to-r from-indigo-600 to-sky-500
            hover:shadow-lg hover:shadow-indigo-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
