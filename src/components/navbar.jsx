import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Career Tracks', href: '#programs', hasDropdown: true },
    { name: 'Mentorship', href: '#mentorship', hasDropdown: false },
    { name: 'Success Stories', href: '#reviews', hasDropdown: false },
    { name: 'Blog', href: '#blog', hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/60 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer flex items-center gap-2">
          {/* Using a text fallback if image fails, or keep your image */}
          <div className="font-black text-xl tracking-tighter text-white">
            EDTECH<span className="text-emerald-500">INFORMATIVE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.1em]
                         text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            className="text-[13px] font-bold uppercase tracking-widest
                       text-neutral-300 hover:text-white transition-colors"
          >
            Student Login
          </button>

          <button
            className="group relative bg-white text-neutral-950 px-6 py-2.5 rounded-lg
                       font-black text-xs uppercase tracking-widest
                       transition-all duration-300
                       hover:bg-emerald-400 hover:text-black
                       hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]
                       active:scale-95"
          >
            <span className="flex items-center gap-2">
              Get Counseling
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[76px] bg-neutral-950 p-8 lg:hidden flex flex-col gap-8 border-t border-neutral-800"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xl font-black uppercase
                           text-neutral-200 hover:text-emerald-400 transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
              </a>
            ))}

            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full bg-neutral-900 border border-neutral-800
                                 text-white py-4 rounded-xl font-bold uppercase tracking-widest
                                 hover:border-emerald-600 transition-colors">
                Student Login
              </button>

              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl
                                 font-black uppercase tracking-widest
                                 hover:bg-emerald-500
                                 shadow-lg shadow-emerald-900/30">
                Book Free Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;