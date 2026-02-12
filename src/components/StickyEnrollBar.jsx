import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const StickyEnrollBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 13, seconds: 2 });

  // 1. Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past 600px (approx 1 screen height)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Timer Logic (Countdown)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset timer loop for demo purposes
          return { minutes: 15, seconds: 0 }; 
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to format time as MM:SS
  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-purple-50 border-t border-purple-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left Side: Price & Timer */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">₹699</span>
            <span className="text-sm text-slate-500 line-through decoration-slate-400">₹49,999</span>
          </div>
          <p className="text-xs md:text-sm font-medium text-slate-600">
            Offer ends in <span className="text-red-600 font-bold">{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
          </p>
        </div>

        {/* Right Side: CTA Button */}
        <button 
          onClick={() => window.location.href = '#pricing'} // Or open your modal
          className="flex items-center gap-2 bg-[#8B00F7] hover:bg-[#7200cc] text-white px-6 md:px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all active:scale-95"
        >
          <Sparkles className="w-5 h-5 fill-yellow-300 text-yellow-300 animate-pulse" />
          <span>Enroll Now</span>
        </button>

      </div>
    </div>
  );
};

export default StickyEnrollBar;