import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Table,
  BarChart,
  LineChart,
  BrainCircuit,
  Search,
  Zap,
  Layers,
  Clock,
  CheckCircle2,
  X,
  ScatterChart,
  TrendingUp
} from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';

// --- Main Programs Section ---
const ProgramsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const curriculum = [
    {
      theme: "Data Foundations & SQL Mastery",
      subtext: "Focusing on data extraction, hygiene, and relational structures.",
      modules: [
        {
          title: "The Analyst Mindset",
          desc: "Learn to translate vague business questions into precise, measurable data requirements.",
          icon: <Search className="w-5 h-5 text-blue-600" />,
        },
        {
          title: "SQL for Business Intelligence",
          desc: "Master Joins, CTEs, and Window Functions to extract insights from massive databases.",
          icon: <Database className="w-5 h-5 text-purple-600" />,
        },
        {
          title: "Data Cleaning at Scale",
          desc: "Use Python and Pandas to automate the removal of duplicates and handle missing values in seconds.",
          icon: <Layers className="w-5 h-5 text-pink-600" />,
        },
        {
          title: "Exploratory Data Analysis",
          desc: "Uncover hidden patterns and correlations within your datasets using statistical profiling.",
          icon: <ScatterChart className="w-5 h-5 text-orange-600" />,
        },
      ],
    },
    {
      theme: "Visual Storytelling & Forecasting",
      subtext: "Transitioning from raw numbers to board-room ready dashboards.",
      modules: [
        {
          title: "Executive Dashboards",
          desc: "Build high-impact visualizations in PowerBI/Tableau that drive immediate action.",
          icon: <BarChart className="w-5 h-5 text-green-600" />,
        },
        {
          title: "Predictive Modeling",
          desc: "Implement Linear Regression and Time-Series forecasting to predict future business trends.",
          icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
        },
        {
          title: "Automated Reporting",
          desc: "Create 'Set and Forget' pipelines that update your insights as new data flows in.",
          icon: <Zap className="w-5 h-5 text-blue-700" />,
        },
        {
          title: "The Insight Pitch",
          desc: "Master data storytelling to present complex findings to stakeholders with total clarity.",
          icon: <BrainCircuit className="w-5 h-5 text-red-600" />,
        },
      ],
    },
  ];

  return (
    <section id="curriculum" className="relative pb-14 md:pb-16 px-4 bg-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8 md:pt-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
            The  <span className="text-emerald-600">Analytics Roadmap</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow a step-by-step path from Excel user to Strategic Data Architect. No fluff — only <span className="text-neutral-900 font-bold">industrial-grade insights</span>.
          </p>
        </div>

        <div className="space-y-10">
          {curriculum.map((day, dIndex) => (
            <div key={dIndex}>

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-neutral-900">{day.theme}</h3>
                <p className="text-neutral-500 text-sm mt-1">{day.subtext}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.modules.map((mod, i) => (
                  <motion.div key={i} whileHover={{ y: -4 }} className="flex gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-200 hover:shadow-xl transition-all group">
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                      {mod.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">{mod.title}</h4>
                      <p className="text-neutral-700 text-xs leading-relaxed font-medium">{mod.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 p-7 bg-neutral-900 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
          <p className="text-white text-base md:text-lg font-bold flex items-center justify-center gap-3 relative z-10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            Build 3+ End-to-End Projects & Launch Your Data Portfolio
          </p>
        </motion.div>

        {/* Updated CTA */}
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
              whileHover={{ scale: 1.02 }} // Removed y: -4 to allow smooth bouncing
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
                Claim Your Spot for Free
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

export default ProgramsSection;