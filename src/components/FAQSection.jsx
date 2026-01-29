import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Zap, ShieldCheck, Target, Minus, BookOpen, Currency } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "I'm a beginner. Can I really learn Agentic AI?",
      icon: <Target className="w-5 h-5" />,
      answer: "Absolutely. Our Agentic AI certification is designed for beginners and professionals alike. We cover everything from the basics of AI workflows to advanced autonomous agent deployment. No prior coding experience is required as we use powerful no-code/low-code tools."
    },
    {
      id: 2,
      question: "How is Agentic AI different from Data Analytics?",
      icon: <Zap className="w-5 h-5" />,
      answer: "Data Analytics focuses on analyzing historical data to generate insights using tools like Excel and Power BI. Agentic AI focuses on creating intelligent systems that act, decide, and automate tasks independently. One is about 'insight', the other is about 'action'."
    },
    {
      id: 3,
      question: "What tools will I learn in the Agentic AI program?",
      icon: <BookOpen className="w-5 h-5" />,
      answer: "You will master a suite of cutting-edge tools including Python & AI APIs, Prompt Engineering, Autonomous Agent Frameworks (like n8n or LangChain), and Workflow Automation tools. You'll build real-world AI implementations during the course."
    },
    {
      id: 4,
      question: "What job roles can I apply for after this course?",
      icon: <ShieldCheck className="w-5 h-5" />,
      answer: "Graduates can apply for high-demand roles such as AI Analyst, AI Automation Specialist, Junior AI Engineer, and AI Solutions Associate. The industry demand for these roles is growing rapidly."
    },
    {
      id: 5,
      question: "Do you offer placement support?",
      icon: <Sparkles className="w-5 h-5" />,
      answer: "Yes! We provide a 100% Placement Support for eligible learners. This includes job-ready training, resume & LinkedIn optimization, mock interviews, and continuous job opportunities until you secure a position."
    },
    {
      id: 6,
      question: "Is there a 'Pay After Placement' option?",
      icon: <Currency className="w-5 h-5" />,
      answer: "Yes. Eligible candidates can opt for our Pay After Placement model, allowing you to pay the course fees only after you have successfully secured employment, as per the agreement terms."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    // Background changed to neutral-50 for a clean light aesthetic
    <section 
      className="relative pt-6 pb-20 px-4 bg-neutral-50 font-sans overflow-hidden"
      style={{ backgroundColor: '#f9fafb', color: '#171717' }}
    >
      
      {/* Soft Emerald Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Admissions & Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="text-neutral-500 text-lg font-medium">
            Everything you need to know about joining EdTech Informative.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Switched to white cards with subtle borders and shadows
                className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-emerald-500 shadow-xl' 
                    : 'bg-white border-neutral-200 hover:border-emerald-300 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)} 
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon - Deepened color for light mode */}
                    <div className={`transition-colors duration-300 ${isOpen ? 'text-emerald-600' : 'text-neutral-400 group-hover:text-emerald-500'}`}>
                      {item.icon}
                    </div>
                    
                    {/* Question Text */}
                    <span 
                      className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                        isOpen ? 'text-neutral-900' : 'text-neutral-700 group-hover:text-neutral-900'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Button */}
                  <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-emerald-600 text-white border-emerald-500 rotate-180' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-400 group-hover:bg-emerald-50 group-hover:border-emerald-500/50 group-hover:text-emerald-600'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-neutral-600 leading-relaxed text-base font-medium">
                        <div className="pt-4 border-t border-neutral-100">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;