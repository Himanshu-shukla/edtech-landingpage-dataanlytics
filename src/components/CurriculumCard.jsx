import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Database, Search, LineChart } from 'lucide-react';

const CurriculumSection = () => {
  const curriculumData = [
    {
      dayLabel: "DAY 01",
      icon: <Database className="w-4 h-4" />,
      title: "Data Foundations & Advanced SQL Architectures",
      time: "10 AM - 6 PM IST",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Analytical Mindset Foundations:",
          text: "Master the art of translating complex business problems into measurable data metrics and KPIs."
        },
        {
          id: 2,
          highlight: "SQL for Big Data:",
          text: "Beyond basic queries. Master CTEs, Window Functions, and Joins to extract intelligence from millions of rows."
        },
        {
          id: 3,
          highlight: "Data Hygiene & Python:",
          text: "Hands-on project: Use Pandas to automate the cleaning of messy datasets in seconds, not hours."
        },
        {
          id: 4,
          highlight: "Exploratory Intelligence:",
          text: "Uncover hidden correlations and outliers that reveal the 'Why' behind the numbers."
        }
      ]
    },
    {
      dayLabel: "DAY 02",
      icon: <LineChart className="w-4 h-4" />,
      title: "Predictive Modeling & Executive Dashboards",
      time: "10 AM - 6 PM IST",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Executive Dashboard Design:",
          text: "Build high-impact, interactive visuals in PowerBI/Tableau that drive board-room decisions."
        },
        {
          id: 2,
          highlight: "Predictive Forecasting:",
          text: "Implement Linear Regression and Time-Series modeling to predict next quarter's growth with precision."
        },
        {
          id: 3,
          highlight: "Automated Insights Pipeline:",
          text: "Introduction to 'Set-and-Forget' reporting. Connect live data sources to refresh your insights automatically."
        },
        {
          id: 4,
          highlight: "The Data Storytelling Pitch:",
          text: "Learn the framework to present data to non-technical stakeholders and secure buy-in for your strategies."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-12 md:py-20 px-4 bg-neutral-50 font-sans overflow-hidden border-t border-neutral-100">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-100/40 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Live Implementation Agenda</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 leading-tight tracking-tight">
            From Raw Data to <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              Strategic Insight.
            </span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            16+ Hours of Intensive Execution. Move from basic Excel to Advanced SQL & Predictive Analytics.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch"
        >
          {curriculumData.map((day, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <CurriculumCard content={day} index={index} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const CurriculumCard = ({ content, index }) => {
  const isDayOne = index === 0;
  const accentColor = isDayOne ? "text-emerald-600" : "text-cyan-600";
  const accentBg = isDayOne ? "bg-emerald-600" : "bg-cyan-600";
  const hoverBorder = isDayOne ? "group-hover:border-emerald-300" : "group-hover:border-cyan-300";

  return (
    <div className={`group bg-white w-full h-full rounded-[2.5rem] shadow-xl hover:shadow-2xl overflow-hidden border border-neutral-200 flex flex-col transition-all duration-500 ${hoverBorder}`}>
      <div className="relative h-72 w-full overflow-hidden">
        <img src={content.imageSrc} alt={content.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90" />
        
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-sm z-20">
          <span className={`${accentColor}`}>{content.icon}</span>
          <span className="text-neutral-900 font-black text-xs tracking-widest uppercase">{content.dayLabel}</span>
        </div>
        <div className="absolute top-6 right-6 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
          {content.time}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
      </div>

      <div className="p-8 md:p-12 flex-grow flex flex-col relative z-20 -mt-10">
        <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-10 leading-tight">{content.title}</h3>
        
        <ul className="space-y-8 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-neutral-100" />
          
          {content.items.map((item) => (
            <li key={item.id} className="relative flex items-start gap-6">
              <div className="flex-shrink-0 mt-1 relative z-10">
                <div className={`w-6 h-6 rounded-full border-[2px] border-white ${accentBg} flex items-center justify-center shadow-md`}>
                  <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed flex-1">
                <span className="font-black text-neutral-900 mr-1">{item.highlight}</span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurriculumSection;