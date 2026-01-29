import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code } from 'lucide-react';
// Ensure the video file exists at this path or update it
import whatsappVideo from '../assets/Video_Generation_for_WhatsApp_Chat.mp4';

const VideoShowcase = () => {
  return (
    // Changed: bg-neutral-950 -> bg-white, text-white -> text-neutral-900
    <section className="relative py-8 md:py-12 bg-white font-sans overflow-hidden border-t border-neutral-100">
      
      {/* Background Effects: Adjusted for Light Mode grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966908_1px,transparent_1px),linear-gradient(to_bottom,#05966908_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge: Adjusted colors for light background */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black tracking-[0.2em] uppercase mb-6">
            <Code className="w-3.5 h-3.5" />
            <span>Builds, Not Slides</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight tracking-tighter">
            Build Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">Agentic Systems.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto font-medium">
            Watch us build this exact WhatsApp Automation Agent live in class. It handles leads, answers queries, and books appointments—without you typing a word.
          </p>
        </motion.div>
        
        {/* Video Container: Switched to light "Browser" look with soft shadow */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-5xl aspect-video rounded-[2.5rem] bg-white border border-neutral-200 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          {/* Top Bar: MacOS/Browser Window Style */}
          <div className="absolute top-0 inset-x-0 h-12 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 z-20 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Agent_Build_Demo_4K.mp4
            </span>
          </div>

          <video 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 pt-12"
            autoPlay 
            loop 
            muted 
            playsInline
            key={whatsappVideo} 
          >
            <source src={whatsappVideo} type="video/mp4" />
          </video>

          {/* Overlays for depth */}
          <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-neutral-200/50 pointer-events-none z-30" />
          
          {/* Bottom Bar: High contrast for legibility */}
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-white via-white/60 to-transparent z-20 flex justify-between items-end">
             <div className="flex gap-8">
                <MetricSmall label="Tool Stack" value="n8n + OpenAI" />
                <MetricSmall label="Live Build" value="45 Mins" />
             </div>
             <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-600/20">
                <ShieldCheck className="w-4 h-4" />
                No-Code Build
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetricSmall = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">{label}</span>
    <span className="text-neutral-900 font-black text-base">{value}</span>
  </div>
);

export default VideoShowcase;