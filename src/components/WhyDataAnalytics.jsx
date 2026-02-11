import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, TrendingUp, Rocket, ArrowRight, PieChart } from 'lucide-react';

const WhyDataAnalytics = () => {
  return (
    <section className="relative w-full bg-neutral-50 py-12 md:py-24 px-4 flex justify-center overflow-hidden font-sans border-t border-neutral-100">
      
      {/* Light Blueprint Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-[2.5rem] p-8 md:p-16 max-w-6xl w-full shadow-xl shadow-neutral-200/50"
      >
        <div className="flex flex-col items-center">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Rocket className="w-4 h-4" />
              <span>Industrial-Grade Training</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 text-center tracking-tight leading-tight max-w-3xl">
              Why this course is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Worth Your Time.</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
            
            <SpotlightCard 
              delay={0.1}
              number="01"
              icon={<Zap className="w-8 h-8 text-amber-500" />}
              text={
                <>
                  <span className="text-neutral-900 font-bold">Execution Over Theory:</span> Stop watching abstract lectures. We build <span className="text-neutral-900 font-bold">3+ real-world data projects</span> (Sales Forecasting, Churn Analysis, Finance Dashboards) live in class.
                </>
              }
            />

            <SpotlightCard 
              delay={0.2}
              number="02"
              icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              text={
                <>
                  <span className="text-neutral-900 font-bold">Predictive Intelligence:</span> Don't just look at the past. Learn to build models that <span className="text-neutral-900 font-bold">forecast future trends</span>, allowing you to drive 10x more value for your organization or clients.
                </>
              }
            />

            <SpotlightCard 
              delay={0.3}
              number="03"
              icon={<TrendingUp className="w-8 h-8 text-emerald-600" />}
              text={
                <>
                  <span className="text-neutral-900 font-bold">Consulting Blueprint:</span> High-end analytics is a high-ticket skill. Get the roadmap to launch an <span className="text-neutral-900 font-bold">Analytics Consultancy</span> and charge premium rates for automated reporting systems.
                </>
              }
            />

          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://wa.me/447441477106?text=Hi%2C%20I%20am%20interested%20in%20the%20Data%20Analytics%20bootcamp." target="_blank" rel="noreferrer">
              <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-10 shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-105 hover:bg-emerald-700">
                <span className="relative flex items-center gap-2 font-bold text-white text-lg md:text-xl">
                  Become a Data Expert Today
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

const SpotlightCard = ({ icon, text, number, delay }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative flex flex-col items-start min-h-[260px] p-8 overflow-hidden bg-white border border-neutral-200 rounded-2xl transition-all duration-300 hover:border-emerald-300 hover:shadow-xl group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.08), transparent 80%)`,
        }}
      />
      <span className="absolute top-6 right-6 font-black text-4xl text-neutral-100 select-none group-hover:text-emerald-50 transition-colors">{number}</span>
      
      <div className="relative z-10 mb-6 p-3 bg-neutral-50 rounded-xl border border-neutral-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all duration-300">
        {icon}
      </div>
      <p className="relative z-10 text-neutral-600 leading-relaxed text-base md:text-lg font-medium">{text}</p>
    </motion.div>
  );
};

export default WhyDataAnalytics;