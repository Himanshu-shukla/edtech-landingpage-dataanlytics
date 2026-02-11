import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Scale, ArrowRight, X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';

// --- Main Comparison Section ---
const ComparisonSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonData = [
    {
      bad: "Surface-Level Excel: You spend hours learning basic pivot tables and VLOOKUPs.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Industrial Data Stack:</span> Master SQL, Python, and PowerBI for big-data processing.
        </>
      ),
    },
    {
      bad: "Passive Theory: Watching an instructor explain 'Mean, Median, Mode' on slides.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Project-Led Execution:</span> Build 3+ real-world dashboards (E-comm, Finance, SaaS) live.
        </>
      ),
    },
    {
      bad: "The Teaser Trap: A 2-hour free session that's actually a 90% sales pitch.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Zero-Fluff Training:</span> 16 hours of pure technical implementation from minute one.
        </>
      ),
    },
    {
      bad: "Old School Reporting: Learning to say 'what happened' in the past.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Predictive Analytics:</span> Learn to build forecasting models that predict future trends.
        </>
      ),
    },
    {
      bad: "Stagnant Portfolio: No guidance on how to actually showcase your skills to recruiters.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Consulting Blueprint:</span> Portfolio templates & LinkedIn frameworks to land ₹15LPA+ roles.
        </>
      ),
    },
  ];

  return (
    <section className="relative pb-12 md:pb-16 px-4 bg-white font-sans overflow-hidden border-t border-neutral-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto pt-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-[10px] font-black tracking-widest uppercase mb-4">
            <Scale className="w-3 h-3 text-emerald-600" />
            <span>The Reality Check</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-2 leading-tight">
            Not All Data Courses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              Are Built The Same.
            </span>
          </h2>
        </motion.div>

        <div className="relative bg-white rounded-[1.5rem] border border-neutral-200 p-4 md:p-8 shadow-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-8">
            <div className="flex items-center justify-center gap-2 text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.15em] p-2.5 bg-red-50/50 rounded-xl border border-red-100">
              <AlertTriangle className="w-4 h-4" />
              Typical Data Masterclasses
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-700 font-black text-[10px] md:text-xs uppercase tracking-[0.15em] p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <Sparkles className="w-4 h-4" />
              Industrial Analytics Bootcamp
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 group"
              >
                <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50/50 border border-neutral-100">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-500 text-xs md:text-sm font-medium">{row.bad}</p>
                </div>

                <div className="relative flex items-start gap-3 p-4 rounded-xl bg-emerald-50/30 border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-800 text-xs md:text-sm font-medium">{row.good}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative py-4 md:py-6"
        >
          {/* Continuous Bounce Wrapper */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-3xl z-20"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-3xl font-black py-6 md:py-7 px-6 rounded-3xl shadow-[0_12px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.15)] transition-all flex flex-col md:flex-row items-center justify-center overflow-hidden border-t border-green-300/30 cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 text-white text-2xl md:text-3xl px-5 py-2 rounded-xl font-extrabold drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] mr-3 md:mr-4">
                Register for Free
              </span>
              <span className="relative z-10 bg-yellow-400 text-black px-3 py-1 rounded-lg text-lg md:text-xl font-extrabold -rotate-2 shadow-sm border-2 border-black/10">
                FULL BUNDLE INCLUDED
              </span>
            </motion.button>
          </motion.div>

          {/* Progress Bar Component */}
          <div className="w-full max-w-lg mt-6 md:mt-8 relative z-10">
            <div className="flex gap-1.5 h-3">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: i * 0.03, type: "spring" }}
                  className={`flex-1 rounded-full ${i < 17 ? 'bg-gradient-to-t from-red-600 to-red-500 shadow-sm' : 'bg-neutral-200'}`}
                />
              ))}
            </div>
            <p className="text-red-600 text-center font-bold text-xs md:text-sm mt-3 uppercase tracking-widest animate-pulse">
              🔥 Batch Status: 17/20 Seats Claimed
            </p>
          </div>
        </motion.div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ComparisonSection;