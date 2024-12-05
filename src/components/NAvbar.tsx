'use client'

import React, { useState, useEffect } from 'react';

const navItems = [
    ['About', 'about'],
    ['History', 'history'],
    ['Skills', 'skills'],
    ['Projects', 'expertise'],
    ['Contact', 'contact']
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-neutral-800' : 'bg-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-500 hover:text-gray-500 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
              onClick={handleDrawerToggle}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-2xl ">
              {navItems.map(([label, section]) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out relative"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems
            .filter(([label]) => label !== 'History')
            .map(([label, section]) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMobileOpen(false);
                }}
                className="text-gray-100 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition duration-150 ease-in-out"
              >
                {label}
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
}
