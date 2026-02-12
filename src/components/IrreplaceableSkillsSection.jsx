import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, PieChart, TrendingUp, Cpu } from 'lucide-react';

const IrreplaceableSkillsSection = () => {
  const benefitsData = [
    {
      id: 1,
      icon: <Database className="w-5 h-5" />,
      title: "Master the Modern Stack",
      description: "Stop wrestling with messy spreadsheets. Get hands-on mastery of the Elite Data Stack: Advanced SQL, Python for Data Science, and PowerBI. You’ll build live, automated pipelines that refresh in real-time."
    },
    {
      id: 2,
      icon: <LineChart className="w-5 h-5" />,
      title: "Predictive Decision Making",
      description: "Don't just report what happened—predict what's next. Learn to apply statistical modeling and trend forecasting to business problems, transforming you from a 'number cruncher' into a high-value Strategic Advisor."
    },
    {
      id: 3,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Launch Your Consultancy",
      description: "Take the 'Analytics-as-a-Service' blueprint home. Use our proprietary dashboard templates and client reporting frameworks to land high-ticket freelance projects or secure senior leadership roles within 30 days."
    }
  ];

  return (
    <section className="relative pt-6 pb-24 px-4 bg-neutral-50 font-sans overflow-hidden border-t border-neutral-100">
      
      {/* Light Mode Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 leading-tight tracking-tight">
            From "Data Curious" to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Insight Architect.
            </span>
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Data is the new oil, but only if you know how to refine it. This is the exact trajectory you will follow to become an indispensable data leader.
          </p>
        </motion.div>

        <div className="relative pl-4 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[38px] md:left-[2.1rem] top-8 bottom-8 w-px bg-neutral-200"></div>
          
          <div className="flex flex-col gap-16 md:gap-20">
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={benefit.id} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group pl-8 md:pl-20"
              >
                {/* Step Circle */}
                <div className="absolute left-0 md:left-2 top-0 md:top-6 w-12 h-12 md:w-14 md:h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:border-emerald-400 group-hover:shadow-emerald-100 transition-all duration-300">
                  <span className="text-emerald-600 group-hover:text-cyan-600 transition-colors">{benefit.icon}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4 mt-2 md:mt-6 flex items-center gap-3">
                  {/* <span className="text-emerald-700 font-black text-xs md:text-sm bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 uppercase tracking-tighter shadow-sm">Phase 0{benefit.id}</span> */}
                  {benefit.title}
                </h3>
                
                <motion.div whileHover={{ y: -5 }} className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm group-hover:border-emerald-200 group-hover:shadow-xl transition-all duration-300">
                  <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-medium">{benefit.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IrreplaceableSkillsSection;