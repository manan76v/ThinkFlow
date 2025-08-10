import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Features', 
      href: '/features',
      dropdown: [
        { name: 'AI Brainstorming', href: '/features#brainstorming' },
        { name: 'Task Management', href: '/features#tasks' },
        { name: 'Content Creation', href: '/features#content' },
        { name: 'Integrations', href: '/features#integrations' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-gradient-to-r from-slate-900/70 via-purple-900/70 to-slate-900/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 p-2 rounded-xl">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              ThinkFlow
            </span>
          </Link>

         
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowFeaturesDropdown(true)}
                    onMouseLeave={() => setShowFeaturesDropdown(false)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-cyan-400'
                          : 'text-slate-300 hover:text-cyan-300'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </Link>
                    
                    {showFeaturesDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-cyan-400'
                        : 'text-slate-300 hover:text-cyan-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

      
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-slate-300 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

      
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-700/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-cyan-400/20 mt-2 rounded-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  to="/login"
                  className="block text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}