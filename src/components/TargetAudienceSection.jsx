import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  GraduationCap,
  Database,
  LineChart,
} from "lucide-react";
import "react-phone-input-2/lib/style.css";
import RegistrationModal from './RegistrationModal';

// --- IMPORT YOUR LOCAL IMAGES HERE ---
// Ensure the file names and paths match exactly what is on your computer
import marketAnalysisImg from '../assets/32440.jpg';
import visualStorytellingImg from '../assets/analytics-comparison-information-networking-concept.jpg';
import dataPipelinesImg from '../assets/45210.jpg';

// --- Main Audience Section ---
const TargetAudienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audienceList = [
    {
      role: "Career Switchers & Aspirants",
      description:
        "Tired of manual reporting? Transition from basic Excel tasks into high-growth Data Analyst roles by mastering the modern SQL & Python stack.",
      icon: <GraduationCap className="w-4 h-4 text-emerald-600" />,
    },
    {
      role: "Corporate Analysts & Managers",
      description:
        "Move beyond simple charts. Learn to build executive-grade dashboards and predictive models that influence board-level strategy.",
      icon: <LineChart className="w-4 h-4 text-blue-600" />,
    },
    {
      role: "Engineers & Tech Professionals",
      description:
        "Add 'Data Architect' to your toolkit. Learn to design robust data pipelines and integrate analytics directly into production applications.",
      icon: <Database className="w-4 h-4 text-amber-600" />,
    },
    {
      role: "Founders & Business Owners",
      description:
        "Stop guessing and start growing. Learn how to audit your own business data to find hidden revenue leaks and scale your ROI.",
      icon: <Building2 className="w-4 h-4 text-purple-600" />,
    },
  ];

  // Map the imported image variables here
  const images = [
    {
      label: "Market Analysis",
      src: marketAnalysisImg, // Use the imported variable name, NOT a string
      colSpan: "md:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      label: "Visual Storytelling",
      src: visualStorytellingImg,
      colSpan: "",
      rowSpan: "row-span-1",
    },
    {
      label: "Data Pipelines",
      src: dataPipelinesImg,
      colSpan: "",
      rowSpan: "row-span-1",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full pb-16 md:pb-20 px-4 md:px-8 bg-white overflow-x-hidden font-sans border-t border-neutral-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
                Designed for the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">Data-Driven.</span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {audienceList.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-300">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-neutral-200 group-hover:border-emerald-500 group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-neutral-900 block mb-1">{item.role}</span>
                    <span className="text-neutral-600 text-base leading-relaxed">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Bento Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[200px]"
          >
            {images.map((img, index) => (
              <div key={index} className={`${img.colSpan} ${img.rowSpan} relative group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl`}>
                <img src={img.src} alt={img.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                  <div className="translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-900 font-bold text-xs tracking-wider uppercase shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
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
              whileHover={{ scale: 1.02 }} // Removed 'y' to avoid conflict with bounce animation
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

export default TargetAudienceSection;