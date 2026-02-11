import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Check, ChevronDown, BarChart3, Globe,
  User, Mail, Phone, ShieldCheck, Lock, Sparkles
} from 'lucide-react';

// Country Data (Same as before)
const countries = [
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  // ... add other countries as needed
];

export default function RegistrationModal({ isOpen, onClose }) {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCountryDropdown && !event.target.closest('.country-dropdown-container')) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCountryDropdown]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 5) {
      newErrors.phone = 'Invalid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">

          {/* Darkened Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer transition-all"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[90vh]"
          >

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Premium Header */}
            <div className="px-8 pt-10 pb-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-slate-100 shadow-sm rounded-xl">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Secure Your Spot
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Join the <span className="text-emerald-700 font-semibold">Data Analytics Mastery</span> program.
                  </p>
                </div>
              </div>

              {/* Value Props Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                  <Sparkles className="w-3.5 h-3.5" /> 100% Placement Support
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                  <ShieldCheck className="w-3.5 h-3.5" /> Certified Course
                </div>
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="px-8 py-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs font-semibold ml-1">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Work Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs font-semibold ml-1">{errors.email}</p>}
                </div>

                {/* Phone Input with Country Code */}
                <div className="space-y-1.5 country-dropdown-container">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
                  <div className="flex gap-3">

                    {/* Country Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-2 h-[52px] px-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all min-w-[110px] text-slate-800 font-medium focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none"
                      >
                        <span className="text-xl leading-none">{selectedCountry.flag}</span>
                        <span className="text-sm font-semibold">{selectedCountry.code}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 ml-auto transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {showCountryDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto custom-scrollbar"
                          >
                            <div className="p-1">
                              {countries.map((c) => (
                                <div
                                  key={c.code}
                                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-colors"
                                  onClick={() => { setSelectedCountry(c); setShowCountryDropdown(false); }}
                                >
                                  <span className="text-xl">{c.flag}</span>
                                  <span className="text-sm font-medium text-slate-700">{c.name}</span>
                                  <span className="text-xs font-bold text-slate-400 ml-auto bg-slate-100 px-1.5 py-0.5 rounded">{c.code}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Input */}
                    <div className="relative group flex-1">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        className={`w-full h-[52px] bg-slate-50 border ${errors.phone ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4`}
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setFormData({ ...formData, phone: val });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                      />
                    </div>
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs font-semibold ml-1">{errors.phone}</p>}
                </div>

                {/* Footer Section */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200/50 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving Your Seat...</span>
                      </div>
                    ) : (
                      <>
                        <span className="text-lg">Get My Free Access</span>
                        <Check className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-400">
                    <Lock className="w-3 h-3" />
                    <p className="text-[11px] font-medium">
                      Your information is 100% secure and confidential.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}