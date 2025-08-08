'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isProductActive = () => {
    return pathname === '/bi' || pathname === '/heuristics' || pathname === '/agents';
  };

  const isAboutActive = () => {
    return pathname === '/datawalt' || pathname === '/team';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-md px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/assets/Logo.png"
              alt="DataWalt Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            href="/" 
            className={`font-medium transition-colors ${
              isActive('/') 
                ? 'text-red-500' 
                : 'text-gray-600 hover:text-red-500'
            }`}
          >
            HOME
          </Link>
          
          {/* Productos Dropdown */}
          <div className="relative group">
            <button 
              className={`font-medium flex items-center transition-colors ${
                isProductActive() 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              PRODUCTOS
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link 
                  href="/bi" 
                  className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                    isActive('/bi') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  BI - Visualiza el presente
                </Link>
                <Link 
                  href="/heuristics" 
                  className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                    isActive('/heuristics') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Heuristics - Optimiza el futuro
                </Link>
                <Link 
                  href="/agents" 
                  className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                    isActive('/agents') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agents - Agentes personalizados
                </Link>
              </div>
            </div>
          </div>

          {/* Quiénes Somos Dropdown */}
          <div className="relative group">
            <button 
              className={`font-medium flex items-center transition-colors ${
                isAboutActive() 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              QUIÉNES SOMOS
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link 
                  href="/datawalt" 
                  className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                    isActive('/datawalt') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DataWalt
                </Link>
                <Link 
                  href="/team" 
                  className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                    isActive('/team') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/blog" 
            className={`font-medium transition-colors ${
              isActive('/blog') 
                ? 'text-red-500' 
                : 'text-gray-600 hover:text-red-500'
            }`}
          >
            BLOG
          </Link>
        </div>

        {/* Desktop/Tablet CTA */}
        <div className="hidden md:block">
          <button 
            className="px-4 py-2 lg:px-6 lg:py-2 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm lg:text-base"
            style={{ 
              backgroundColor: 'var(--datawalt-red)'
            }}
          >
            Contáctanos
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            
            {/* Mobile Productos */}
            <div className="px-3 py-2">
              <div className={`text-base font-medium mb-2 ${
                isProductActive() ? 'text-red-500' : 'text-gray-600'
              }`}>
                PRODUCTOS
              </div>
              <div className="pl-4 space-y-1">
                <Link
                  href="/bi"
                  className={`block py-1 text-sm transition-colors ${
                    isActive('/bi') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  BI - Visualiza el presente
                </Link>
                <Link
                  href="/heuristics"
                  className={`block py-1 text-sm transition-colors ${
                    isActive('/heuristics') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Heuristics - Optimiza el futuro
                </Link>
                <Link
                  href="/agents"
                  className={`block py-1 text-sm transition-colors ${
                    isActive('/agents') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agents - Agentes personalizados
                </Link>
              </div>
            </div>

            {/* Mobile Quiénes Somos */}
            <div className="px-3 py-2">
              <div className={`text-base font-medium mb-2 ${
                isAboutActive() ? 'text-red-500' : 'text-gray-600'
              }`}>
                QUIÉNES SOMOS
              </div>
              <div className="pl-4 space-y-1">
                <Link
                  href="/datawalt"
                  className={`block py-1 text-sm transition-colors ${
                    isActive('/datawalt') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DataWalt
                </Link>
                <Link
                  href="/team"
                  className={`block py-1 text-sm transition-colors ${
                    isActive('/team') 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/blog') 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>

            {/* Mobile CTA */}
            <div className="px-3 py-2">
              <button 
                className="w-full px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--datawalt-red)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda una demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}