'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#1556EA'}}>
                <span className="text-white font-semibold">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">UniBot</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#features" className="text-gray-400 hover:text-gray-600">Features</Link>
            <Link href="#pricing" className="text-gray-400 hover:text-gray-600">About</Link>
            <Link href="#faq" className="text-gray-400 hover:text-gray-600">Contact</Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Link 
              href="#waitlist" 
              className="text-white px-6 py-2 rounded-lg transition-colors" style={{backgroundColor: '#1556EA'}} onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#0d47c7'} onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = '#1556EA'}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="#features" 
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            About
          </Link>
      
          <Link 
            href="#faq" 
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Contact
          </Link>
          <Link 
            href="#waitlist" 
            className="block px-3 py-2 text-center text-white rounded-lg" style={{backgroundColor: '#1556EA'}}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}