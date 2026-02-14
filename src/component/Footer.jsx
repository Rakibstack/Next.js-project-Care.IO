'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-sky-900 to-indigo-900 text-gray-300 ">
      
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 py-18 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Care.IO</h3>
          <p className="text-gray-300 text-sm">
            Trusted baby, elderly & sick care services at your doorstep. 
            Professional, verified caregivers always ready for your family.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Baby Care", "Elderly Care", "Sick Care"].map((service) => (
              <li key={service} className="hover:text-indigo-400 transition cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm hover:text-indigo-400 transition cursor-pointer">
            support@care.IO
          </p>
          <p className="text-sm mt-1 hover:text-indigo-400 transition cursor-pointer">
            +880 1234 567890
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm border-t border-indigo-800 py-4 text-gray-400">
        © {new Date().getFullYear()} Care.IO — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
