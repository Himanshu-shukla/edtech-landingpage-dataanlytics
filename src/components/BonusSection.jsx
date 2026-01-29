import React from 'react';
import { motion } from 'framer-motion';
import { FileJson, LayoutTemplate, Gift, Check, Briefcase, Video, Database, BarChart3 } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      id: 1,
      label: "BONUS 1",
      value: "₹15,000",
      title: "The Ultimate SQL & Python Library",
      text: "Never write a complex query from scratch again. Get our collection of pre-built scripts for automated data cleaning, funnel analysis, and financial modeling.",
      icon: <Database className="w-16 h-16 md:w-20 md:h-20 text-emerald-600" strokeWidth={1.5} />,
      color: "from-emerald-500",
      glow: "from-emerald-500/10 to-teal-500/5"
    },
    {
      id: 2,
      label: "BONUS 2",
      value: "₹10,000",
      title: "Industrial Dashboard Templates",
      text: "Get the exact PowerBI and Tableau frameworks used by top-tier firms. Professional-grade visuals that you can plug your data into and present immediately.",
      icon: <BarChart3 className="w-16 h-16 md:w-20 md:h-20 text-cyan-600" strokeWidth={1.5} />,
      color: "from-cyan-500",
      glow: "from-cyan-500/10 to-blue-500/5"
    },
    {
      id: 3,
      label: "BONUS 3",
      value: "₹5,000",
      title: "Lifetime Recording Access",
      text: "Data science is a practice. Get lifetime access to every live session recording in 4K HD so you can re-watch the implementation steps whenever you need.",
      icon: <Video className="w-16 h-16 md:w-20 md:h-20 text-purple-600" strokeWidth={1.5} />,
      color: "from-purple-500",
      glow: "from-purple-500/10 to-indigo-500/5"
    },
    {
      id: 4,
      label: "BONUS 4",
      value: "Priceless",
      title: "The Data Career Roadmap",
      text: "Includes a resume overhaul guide for Data roles, LinkedIn networking scripts, and our internal portfolio-building blueprint to land ₹15LPA+ jobs.",
      icon: <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-blue-600" strokeWidth={1.5} />,
      color: "from-blue-500",
      glow: "from-blue-500/10 to-cyan-500/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
<section className="relative pt-4 pb-12 md:pb-20 px-4 bg-white font-sans overflow-hidden border-t border-neutral-100">
      {/* Light Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Gift className="w-4 h-4" />
            <span>Total Value: ₹30,000+ In Career Assets</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 leading-tight tracking-tight">
            Included <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">FREE</span> With This Batch
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            We don't just teach you the tools; we provide the professional frameworks to dominate the data industry.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {bonuses.map((bonus) => (
            <motion.div 
              key={bonus.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-neutral-200 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 shadow-xl hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${bonus.color} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Soft Ambient Glow on Hover */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${bonus.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="relative flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-emerald-50 blur-xl rounded-full opacity-50"></div>
                <div className="relative p-2 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm">
                  {bonus.icon}
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-4">
                  <span className="text-neutral-400 font-black tracking-[0.2em] text-xs uppercase">{bonus.label}</span>
                  <div className="mt-2 md:mt-0 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                      Value: <span className="line-through opacity-50 ml-0.5">{bonus.value}</span> FREE
                    </span>
                  </div>
                </div>
                <h3 className="text-neutral-900 font-black text-xl md:text-2xl mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">{bonus.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed text-sm md:text-base">{bonus.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;