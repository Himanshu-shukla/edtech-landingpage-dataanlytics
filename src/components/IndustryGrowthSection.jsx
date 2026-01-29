import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';
import { TrendingUp, BarChart3, X, Database, PieChart } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';

// --- Main Industry Growth Section ---
const IndustryGrowthSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data represents the Big Data & Analytics Market Growth
  const data = [
    { year: '2020', value: 37, color: '#dc2626', label: '$37B' },
    { year: '2030 (Proj)', value: 274, color: '#059669', label: '$274B' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 p-3 border border-neutral-200 rounded-lg shadow-lg">
          <p className="text-xs font-bold text-neutral-800 mb-1">{label}</p>
          <p className="text-sm font-black" style={{ color: payload[0].payload.color }}>
            Market Value: ${payload[0].value}B
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative pb-14 md:pb-20 px-4 font-sans bg-neutral-50 text-neutral-900 overflow-hidden border-t border-neutral-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10 pt-8 md:pt-12">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] md:text-xs font-black tracking-widest uppercase mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Big Data Intelligence</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-neutral-900">
            Dominate the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              $274 Billion
            </span>{' '}
            Analytics Era
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white border border-neutral-200 rounded-[2rem] p-6 md:p-10 shadow-2xl mb-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
            <h3 className="text-base md:text-xl font-bold text-neutral-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Global Big Data Market Projection (USD)
            </h3>
            <div className="flex flex-col items-end">
               <span className="text-[10px] md:text-xs font-black text-neutral-400 uppercase">CAGR: ~13.5%</span>
               <span className="text-[10px] text-emerald-600 font-bold">Data-Driven Decade</span>
            </div>
          </div>

          <div className="w-full h-[320px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fill: '#737373', fontSize: 12, fontWeight: 'bold' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis hide domain={[0, 300]} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
                <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={100}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#10b981' : '#ef4444'} />
                  ))}
                  <LabelList dataKey="label" position="top" fill="#171717" fontWeight="900" fontSize={20} offset={15} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-xl inline-block">
            <p className="text-emerald-800 font-bold text-sm md:text-lg">
              📊 Organizations are <span className="underline decoration-4 underline-offset-4">paying 3x more</span> for certified Data Analysts
            </p>
          </div>
        </motion.div>

        {/* Updated CTA Section */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center relative py-3">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-lg bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-2xl font-black py-5 px-8 rounded-2xl shadow-xl flex flex-col items-center gap-1 border-t border-green-300/30 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span>Join the Analytics Bootcamp</span>
              <span className="text-green-900 line-through decoration-red-600 opacity-60 text-base">£299</span>
            </div>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-black uppercase">
              Limited £99 Early Bird Offer
            </span>
          </motion.button>

          <div className="w-full max-w-sm mt-6">
            <div className="flex gap-1.5 h-2">
              {[...Array(15)].map((_, i) => (
                <div key={i} className={`flex-1 rounded-full transition-colors duration-500 ${i < 12 ? 'bg-red-500' : 'bg-neutral-200'}`} />
              ))}
            </div>
            <p className="text-red-600 text-center font-black text-xs mt-3 uppercase tracking-widest animate-pulse">
              🔥 Rare Opportunity: 12/15 Spots Taken
            </p>
          </div>
        </motion.div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default IndustryGrowthSection;