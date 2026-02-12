import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Check, ChevronDown, BarChart3,
  User, Mail, Phone, ShieldCheck, Lock, Sparkles, AlertCircle, CheckCircle2,
  MessageCircle, Info
} from 'lucide-react';

// Country Data
const countries = [
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
];

export default function RegistrationModal({ isOpen, onClose }) {
  // State for Main Phone Dropdown
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default UK (+44)

  // State for WhatsApp Dropdown
  const [showWhatsappDropdown, setShowWhatsappDropdown] = useState(false);
  const [selectedWhatsappCountry, setSelectedWhatsappCountry] = useState(countries[0]); // Default UK (+44)

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', whatsapp: '' });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', whatsapp: '' });
      setErrors({});
      setApiError(null);
      // Reset countries to default if needed, or keep last selection
      setSelectedCountry(countries[0]);
      setSelectedWhatsappCountry(countries[0]);
    }
  }, [isOpen]);

  // Click Outside Listener for BOTH dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close Main Phone Dropdown
      if (showCountryDropdown && !event.target.closest('.country-dropdown-main')) {
        setShowCountryDropdown(false);
      }
      // Close WhatsApp Dropdown
      if (showWhatsappDropdown && !event.target.closest('.country-dropdown-whatsapp')) {
        setShowWhatsappDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCountryDropdown, showWhatsappDropdown]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name Validation
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name should only contain letters';
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 5) {
      newErrors.phone = 'Phone number is too short';
    }

    // WhatsApp Validation
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (formData.whatsapp.length < 5) {
      newErrors.whatsapp = 'Invalid WhatsApp number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setApiError(null);

      const response = await fetch(
        `https://api.edtechinformative.uk/api/contact/strategy-call`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: `${selectedCountry.code}${formData.phone}`,
            whatsapp: `${selectedWhatsappCountry.code}${formData.whatsapp}`,
            source: 'data_analytics_landing_page',
            position: 'Data Analytics Mastery'
          })
        }
      );

      const textResponse = await response.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (err) {
        throw new Error("Server error. Please contact support or try again.");
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitting(false);
      setIsSuccess(true);

    } catch (error) {
      console.error('Submission error:', error);
      setApiError(error.message || "Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer transition-all"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[95vh]"
          >

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-50"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* ---------------- SUCCESS VIEW ---------------- */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center text-center p-10 min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.5, delay: 0.1 }}
                    className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-2">You're All Set!</h2>
                  <p className="text-slate-500 max-w-xs mx-auto mb-8">
                    Thanks for registering, <span className="font-semibold text-slate-800">{formData.name}</span>.
                  </p>

                  <button
                    onClick={onClose}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg active:scale-[0.98]"
                  >
                    Done
                  </button>
                </motion.div>

              ) : (
                /* ---------------- FORM VIEW ---------------- */
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                  {/* Header */}
                  <div className="px-8 pt-10 pb-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 relative">
                    <div className="flex items-start gap-4 pr-12">
                      <div className="p-3 bg-white border border-slate-100 shadow-sm rounded-xl shrink-0">
                        <BarChart3 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                          Secure Your Spot
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">
                          Join the <span className="text-emerald-700 font-semibold">Data Analytics Mastery</span> program.
                        </p>
                      </div>
                    </div>

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
                  <div className="px-8 py-6 overflow-y-auto max-h-[60vh] custom-scrollbar">

                    {apiError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-center gap-2 animate-pulse">
                        <AlertCircle className="w-4 h-4" />
                        {apiError}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>

                        </div>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                          <input
                            type="text"
                            placeholder="John Doe"
                            disabled={isSubmitting}
                            className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed`}
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
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Work Email</label>

                        </div>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                          <input
                            type="email"
                            placeholder="john@company.com"
                            disabled={isSubmitting}
                            className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed`}
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: null });
                              if (apiError) setApiError(null);
                            }}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs font-semibold ml-1">{errors.email}</p>}
                      </div>

                      {/* Phone Input with Dropdown */}
                      <div className="space-y-1.5 country-dropdown-main">
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>

                        </div>
                        <div className="flex gap-3">

                          {/* Main Country Dropdown */}
                          <div className="relative">
                            <button
                              type="button"
                              disabled={isSubmitting}
                              onClick={() => {
                                setShowCountryDropdown(!showCountryDropdown);
                                setShowWhatsappDropdown(false); // Close other dropdown
                              }}
                              className="flex items-center gap-2 h-[52px] px-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all min-w-[110px] text-slate-800 font-medium focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                              <span className="text-xl leading-none">{selectedCountry.flag}</span>
                              <span className="text-sm font-semibold">{selectedCountry.code}</span>
                              <ChevronDown className={`w-4 h-4 text-slate-400 ml-auto transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                              {showCountryDropdown && !isSubmitting && (
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
                                        key={`main-${c.code}-${c.name}`}
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

                          <div className="relative group flex-1">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                            <input
                              type="tel"
                              placeholder="98765 43210"
                              disabled={isSubmitting}
                              className={`w-full h-[52px] bg-slate-50 border ${errors.phone ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed`}
                              value={formData.phone}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                if (val.length <= 16) {
                                  setFormData({ ...formData, phone: val });
                                  if (errors.phone) setErrors({ ...errors, phone: null });
                                }
                              }}
                            />
                          </div>
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs font-semibold ml-1">{errors.phone}</p>}
                      </div>

                      {/* WhatsApp Input with Independent Dropdown */}
                      <div className="space-y-1.5 country-dropdown-whatsapp">
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">WhatsApp Number</label>
                          {/* Tooltip */}
                          <div className="group/tooltip relative">
                            <Info className="w-4 h-4 text-emerald-500 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 shadow-xl z-50 pointer-events-none">
                              <p className="font-medium text-center leading-relaxed">
                                We use this to send you our <span className="text-emerald-400 font-bold">Program Brochure, Curriculum, Roadmaps, and Bonuses.</span>
                              </p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">

                          {/* WhatsApp Country Dropdown */}
                          <div className="relative">
                            <button
                              type="button"
                              disabled={isSubmitting}
                              onClick={() => {
                                setShowWhatsappDropdown(!showWhatsappDropdown);
                                setShowCountryDropdown(false); // Close other dropdown
                              }}
                              className="flex items-center gap-2 h-[52px] px-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all min-w-[110px] text-slate-800 font-medium focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                              <span className="text-xl leading-none">{selectedWhatsappCountry.flag}</span>
                              <span className="text-sm font-semibold">{selectedWhatsappCountry.code}</span>
                              <ChevronDown className={`w-4 h-4 text-slate-400 ml-auto transition-transform duration-200 ${showWhatsappDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                              {showWhatsappDropdown && !isSubmitting && (
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
                                        key={`wa-${c.code}-${c.name}`}
                                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-colors"
                                        onClick={() => { setSelectedWhatsappCountry(c); setShowWhatsappDropdown(false); }}
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

                          <div className="relative group flex-1">
                            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 group-focus-within:text-emerald-600 transition-colors" />
                            <input
                              type="tel"
                              placeholder="WhatsApp Number"
                              disabled={isSubmitting}
                              className={`w-full h-[52px] bg-slate-50 border ${errors.whatsapp ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-50'} rounded-xl pl-12 pr-4 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed`}
                              value={formData.whatsapp}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                if (val.length <= 16) {
                                  setFormData({ ...formData, whatsapp: val });
                                  if (errors.whatsapp) setErrors({ ...errors, whatsapp: null });
                                }
                              }}
                            />
                          </div>
                        </div>
                        {errors.whatsapp && <p className="text-red-500 text-xs font-semibold ml-1">{errors.whatsapp}</p>}
                      </div>

                      {/* Footer Section */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200/50 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Reserving Your Seat...</span>
                            </div>
                          ) : (
                            <>
                              <span className="text-lg">Get In Touch</span>
                              <Check className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}

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
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}