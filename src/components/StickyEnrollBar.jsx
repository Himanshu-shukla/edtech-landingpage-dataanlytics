import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import { Sparkles, Users, Clock, Star, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationModal from './RegistrationModal'; 

const socialProofData = [
  { text: "Oliver from London just registered", icon: <Clock className="w-3 h-3" /> },
  { text: "10,000+ professionals trained", icon: <Users className="w-3 h-3" /> },
  { text: "Mohammad purchased 2 minutes ago", icon: <Clock className="w-3 h-3" /> },
  { text: "Rated 4.5/5 by 2000+ professionals", icon: <Star className="w-3 h-3" /> },
  { text: "Only 7 seats left in this batch!", icon: <Flame className="w-3 h-3" /> }
];

const StickyEnrollBar = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 13, seconds: 2 });
  const [proofIndex, setProofIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Ref to track if an animation frame is already requested
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const shouldBeVisible = window.scrollY > 500;
          // Only update state if the value actually changes to prevent re-renders
          setIsVisible((prev) => {
            if (prev !== shouldBeVisible) {
              return shouldBeVisible;
            }
            return prev;
          });
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // 'passive: true' improves scroll performance
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(isVisible);
    }
  }, [isVisible, onVisibilityChange]);

  // ... (Keep Timer and Proof Logic the same) ...
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        else return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const proofTimer = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % socialProofData.length);
    }, 3500);
    return () => clearInterval(proofTimer);
  }, []);

  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }} // Added damping for stability
        // OPTIMIZATION: 'will-change-transform' tells browser to keep this in GPU memory
        className="fixed bottom-0 left-0 right-0 z-50 will-change-transform translate-z-0"
      >
        {/* ... (Keep your existing JSX content exactly the same) ... */}
        
        {/* --- SOCIAL PROOF STRIP --- */}
        <div className="bg-indigo-900 text-indigo-100 text-xs py-2 relative overflow-hidden border-t border-indigo-800">
           {/* Shimmer Effect - Reduced duration to save GPU */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_4s_infinite]" />

          <div className="max-w-5xl mx-auto px-4 flex justify-center items-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={proofIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 font-semibold tracking-wide"
              >
                <span className="text-amber-400">
                  {socialProofData[proofIndex].icon}
                </span>
                <span>{socialProofData[proofIndex].text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- MAIN CTA BAR --- */}
        <div className="bg-gradient-to-r from-indigo-50 to-white border-t border-indigo-100 shadow-2xl">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-extrabold text-indigo-900">FREE</span>
                <span className="text-sm text-neutral-400 line-through">£299</span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">🔥 Limited Offer</span>
              </div>
              <p className="text-sm font-semibold text-neutral-700">
                Offer ends in <span className="text-red-600 font-extrabold tabular-nums tracking-widest">{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }} // Reduced scale slightly for performance
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="relative group flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all"
            >
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <span>Enroll Now</span>
              <span className="absolute inset-0 rounded-full bg-amber-400 opacity-0 group-hover:opacity-30 blur-xl transition-all"></span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default StickyEnrollBar;