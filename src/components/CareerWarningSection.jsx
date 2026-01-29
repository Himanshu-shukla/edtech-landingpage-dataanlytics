import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, ChevronRight, Clock, Database, BarChart3 } from 'lucide-react';

const CareerWarningSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative py-12 md:py-20 bg-white px-4 md:px-8 font-sans flex flex-col items-center justify-center overflow-hidden border-t border-neutral-100">      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse" />
            Industry Alert
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mb-16 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-900 mb-6 leading-tight">
            The "Excel User" Era is Over. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Become an Insight Architect.</span>
          </h2>
          <p className="text-lg md:text-2xl text-neutral-600 font-medium max-w-3xl mx-auto">
            Knowing VLOOKUP makes you replaceable. Building <span className="text-neutral-900 font-bold">Predictive Data Pipelines</span> that drive revenue makes you an indispensable leader.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          
          <AceternityCard 
            icon={<ShieldAlert className="w-8 h-8 text-red-600" />}
            title="The Passive Learning Trap"
            glowColor="from-red-200 to-orange-200"
          >
            <p className="text-neutral-600 leading-relaxed">
              Most courses are just hours of dry theory with zero industrial context. We break the cycle by making you <span className="text-neutral-900 font-bold">architect live SQL & PowerBI projects</span> based on actual business datasets.
            </p>
          </AceternityCard>

          <AceternityCard 
            icon={<Clock className="w-8 h-8 text-emerald-600" />}
            title="Drowning in Manual Reports"
            glowColor="from-emerald-200 to-teal-200"
          >
            <p className="text-neutral-600 leading-relaxed">
              Stop spending 40+ hours/week on repetitive copy-pasting and data cleaning. Learn to build automated pipelines that <span className="text-neutral-900 font-bold">refresh your insights instantly</span>, freeing you for strategy.
            </p>
          </AceternityCard>

          <AceternityCard 
            icon={<TrendingUp className="w-8 h-8 text-amber-600" />}
            title="Zero Decision Influence"
            glowColor="from-amber-200 to-orange-200"
          >
            <p className="text-neutral-600 leading-relaxed">
              Reporting "what happened" isn't enough; predicting "what's next" is where the money is. Master the <span className="text-neutral-900 font-bold">Forecasting Blueprint</span> to move from a back-office analyst to a high-paid consultant.
            </p>
          </AceternityCard>

        </div>

        <motion.div variants={itemVariants}>
          <a href="https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20secure%20my%20career%20with%20Modern%20Data%20Analytics." target="_blank" rel="noreferrer">
            <button className="group relative inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-10 font-black text-white transition-all duration-300 hover:scale-[1.03] hover:bg-emerald-700 shadow-lg shadow-emerald-200">
              <span className="relative flex items-center gap-3 text-lg md:text-xl">
                Secure Your Career Today
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
              </span>
            </button>
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

const AceternityCard = ({ icon, title, children, glowColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${glowColor} rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      <div className="relative h-full bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col items-start shadow-sm transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-xl">
        <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-neutral-900 font-black text-xl mb-4 tracking-tight uppercase">{title}</h3>
        <div className="text-sm md:text-base leading-relaxed font-medium text-neutral-600">{children}</div>
      </div>
    </motion.div>
  );
};

export default CareerWarningSection;