import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Sparkles, CheckCircle2, ArrowRight, Play, Zap, BarChart3, Database, X, LineChart } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';


// --- Main WorkshopLanding Component ---
const WorkshopLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pb-16 md:pb-20 bg-neutral-50 text-neutral-900 font-sans overflow-hidden px-4 md:px-8">

      {/* Top-attached badge strip */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10">

        <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-center mb-14 max-w-4xl mx-auto"
>
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
    Kill The Guesswork.
    {/* Removed className="hidden md:block" so it breaks on all devices now */}
    <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
      Master Professional Analytics.
    </span>
  </h1>

  <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
    Stop drowning in messy spreadsheets. We build 3+ production-ready dashboards live — Sales Forecasting, Marketing ROI, and Customer Churn.
  </p>
</motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Updated Container: Added 'transform-gpu' to enforce clipping */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-xl aspect-video group transform-gpu">
              {/* Image placeholder updated for data context */}
              <img
                src="https://cdn.dribbble.com/userupload/42070034/file/original-b8cd7ae9ac9164c57b6f930d8612699d.gif"
                alt="Building Advanced Data Dashboards"
                // Updated Class: Added 'rounded-2xl' to match parent border radius
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-emerald-600 ml-1 fill-emerald-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InfoCard icon={<Database className="w-5 h-5 text-amber-600" />} label="Stack" value="SQL, Python, PowerBI" />
              <InfoCard icon={<BarChart3 className="w-5 h-5 text-blue-600" />} label="Focus" value="High-Impact ROI" />
              <InfoCard icon={<Globe className="w-5 h-5 text-indigo-600" />} label="Language" value="English (Live)" />
              <InfoCard icon={<Zap className="w-5 h-5 text-purple-600" />} label="Outcome" value="3 Live Projects" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-xl flex flex-col gap-6">
              <BenefitItem><strong>Predictive Sales Engine:</strong> Build models that forecast next month’s revenue.</BenefitItem>
              <BenefitItem><strong>Automated SQL Pipelines:</strong> Clean and transform data while you sleep.</BenefitItem>
              <BenefitItem><strong>Executive Reporting:</strong> Design board-ready, interactive PowerBI visuals.</BenefitItem>
              <BenefitItem border={false}><strong>Consulting Blueprint:</strong> Sell analytics services for £50k+/month.</BenefitItem>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center relative py-4 md:py-6"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98, y: 6 }}
                  className="relative w-full max-w-3xl bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-3xl font-black py-6 md:py-7 px-6 rounded-3xl shadow-[0_12px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.15)] transition-all flex flex-col md:flex-row items-center justify-center overflow-hidden border-t border-green-300/30 cursor-pointer"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  {/* Text and Icon Container */}
                  <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-0 md:mr-4">
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
                    <span className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)]">
                      Register
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="relative z-10 bg-yellow-400 text-black px-3 py-1 rounded-lg text-lg md:text-xl font-extrabold -rotate-2 shadow-sm border-2 border-black/10">
                    FULL BUNDLE INCLUDED
                  </span>
                </motion.button>

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
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">{icon}</div>
    <div>
      <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">{label}</p>
      <div className="text-neutral-800 font-bold">{value}</div>
    </div>
  </div>
);

const BenefitItem = ({ children, border = true }) => (
  <div className={`flex gap-4 ${border ? 'border-b border-neutral-100 pb-5' : ''}`}>
    <div className="bg-emerald-100 p-1.5 rounded-full border border-emerald-200 mt-1 flex-shrink-0">
      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    </div>
    <div className="text-neutral-600 text-base">{children}</div>
  </div>
);

export default WorkshopLanding;