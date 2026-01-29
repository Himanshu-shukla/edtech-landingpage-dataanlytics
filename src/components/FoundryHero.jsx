import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Calendar, BarChart3, Database, TrendingUp } from 'lucide-react';

const FoundryHero = () => {
  return (
<section className="relative min-h-[70vh] bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated Background Layer 1: Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 -left-40 w-96 h-48 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-violet-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Animated Background Layer 2: Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: Math.random() * 800,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Animated Background Layer 3: Grid with Perspective */}
      <div className="absolute inset-0 [perspective:1000px]">
        <motion.div
          animate={{
            rotateX: [0, 2, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#fff_70%,transparent_100%)] [transform-style:preserve-3d]"
          style={{ transformOrigin: 'center top' }}
        />
      </div>

      {/* Animated Background Layer 4: Noise Texture Overlay */}
      <motion.div
        animate={{
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"
      />

      {/* Animated Background Layer 5: Scanning Line Effect */}
      <motion.div
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        style={{ top: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-16">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-sm md:text-base font-black tracking-[0.3em] uppercase mb-8 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            2 day bootcamp for data analytics
          </div>
        </motion.div>

        {/* Attention Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-block"
        >
          <div className="px-6 py-2 rounded-lg bg-red-50 border border-red-100 text-red-600 font-bold text-sm md:text-base tracking-wide backdrop-blur-sm">
            Attention: Aspiring Analysts, Product Managers, Founders & Data Enthusiasts
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-4 text-neutral-900"
        >
          Turn Raw Information Into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-gradient">
            Profitable Business Intelligence
          </span>
        </motion.h1>

        {/* Secondary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-neutral-800 tracking-tight mb-8"
        >
          Master{"  "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
            Advanced Data Science
          </span>{" "}
          In One Comprehensive Program
        </motion.h2>

        {/* Sub Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Go beyond spreadsheets. Learn to clean, visualize, and model complex datasets using Python, SQL, and PowerBI. Build predictive dashboards that drive growth and solve real-world industry challenges.
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default FoundryHero;