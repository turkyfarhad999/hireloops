import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <header className="fixed top-6 inset-x-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-neutral-900/70 backdrop-blur-md border border-neutral-800/80 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white flex items-center gap-1">
          hire<span className="text-orange-500">loop</span>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <Link href="#" className="hover:text-white transition-colors">Browse Jobs</Link>
          <Link href="#" className="hover:text-white transition-colors">Company</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-5">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-indigo-500/20"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
    );
};

export default Navbar;