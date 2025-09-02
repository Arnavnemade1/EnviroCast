import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Star, Instagram, Github, Mail, Phone, MapPin, Users, Cpu, Globe, ChevronUp } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Models', href: '/models', icon: null },
    { name: 'Research', href: '/research', icon: null },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-center py-3 relative z-50 overflow-hidden">
        <div className="animate-slide-text">
          <div className="flex items-center justify-center space-x-3">
            <Star className="w-4 h-4 animate-spin text-yellow-300" />
            <span className="text-sm font-medium">
              🚀 New: Real-time quantum predictions now available | 
              🎯 99.2% accuracy achieved | 
              🌍 15+ cities protected
            </span>
            <Star className="w-4 h-4 animate-spin text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Leaf className="w-8 h-8 text-green-400 animate-pulse group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping group-hover:animate-none"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  EnviroCast
                </span>
                <div className="text-xs text-gray-400">Quantum Environmental AI</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="relative group py-2 px-1 hover:text-green-400 transition-all duration-300"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com/envirocast_tech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/envirocast" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 py-6">
              <div className="container mx-auto px-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="block py-3 text-lg hover:text-green-400 transition-colors border-b border-slate-700/30 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-6 pt-4">
                  <a href="https://instagram.com/envirocast_tech" className="text-pink-400">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/envirocast" className="text-purple-400">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-full font-semibold mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 group"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-700/50 py-16 px-6 relative z-10 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Leaf className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping group-hover:animate-none"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    EnviroCast
                  </span>
                  <div className="text-xs text-gray-400">Powered by IBM Quantum</div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Revolutionizing environmental monitoring through quantum-enhanced predictions. 
                Our mission is to protect our planet with cutting-edge technology and actionable insights.
              </p>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://instagram.com/envirocast_tech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-3 rounded-xl hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-pink-400" />
                </a>
                <a 
                  href="https://github.com/envirocast" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-500/20 to-slate-500/20 p-3 rounded-xl hover:from-gray-500/30 hover:to-slate-500/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="mailto:hello@envirocast.tech"
                  className="group bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 rounded-xl hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-cyan-400" />
                Product
              </h3>
              <div className="space-y-3">
                <a href="/models" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Interactive Models
                </a>
                <a href="/about" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Quantum Technology
                </a>
                <a href="/api" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  API Access
                </a>
                <a href="/docs" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Documentation
                </a>
                <a href="/pricing" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Pricing
                </a>
              </div>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                Company
              </h3>
              <div className="space-y-3">
                <a href="/about" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  About Us
                </a>
                <a href="/team" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Our Team
                </a>
                <a href="/careers" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Careers
                </a>
                <a href="/press" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Press Kit
                </a>
                <a href="/blog" className="block text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-300">
                  Blog
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">hello@envirocast.tech</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="flex-1 bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-slate-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 EnviroCast Technologies. All rights reserved. | 
                <span className="text-cyan-400 ml-1">Powered by IBM Quantum Computing</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            {/* Tech Stack Credits */}
            <div className="mt-8 p-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">Built with cutting-edge technology</div>
                <div className="flex flex-wrap justify-center items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Cpu className="w-3 h-3" />
                    <span>IBM Quantum</span>
                  </span>
                  <span>•</span>
                  <span>Next.js 14</span>
                  <span>•</span>
                  <span>Tailwind CSS</span>
                  <span>•</span>
                  <span>Qiskit</span>
                  <span>•</span>
                  <span>NASA MODIS API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        @keyframes slide-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-text {
          animation: slide-text 30s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Layout;
