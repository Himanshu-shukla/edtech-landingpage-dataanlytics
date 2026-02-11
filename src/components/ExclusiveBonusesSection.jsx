import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';

import RegistrationModal from './RegistrationModal';

// --- Main Component ---
const ExclusiveBonusesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bonuses = [
    {
      id: 1,
      title: "BONUS 1",
      description: "The SQL & Python Cheat Sheet for Analysts",
      img: "https://static.vecteezy.com/system/resources/previews/053/143/940/non_2x/roadmap-icon-logo-sign-set-outline-vector.jpg",
      glow: "hover:shadow-cyan-100",
    },
    {
      id: 2,
      title: "BONUS 2",
      description: "15+ High-Impact PowerBI & Tableau Templates",
      img: "https://img.freepik.com/free-vector/ebooks-collection-library-archive-e-reading-literature-male-cartoon-character-loading-books-ereader-man-putting-novels-covers-bookshelf_335657-3447.jpg",
      glow: "hover:shadow-purple-100",
    },
    {
      id: 3,
      title: "BONUS 3",
      description: "Data Cleaning & Prep Automation Scripts",
      img: "https://media.istockphoto.com/id/953520974/vector/tick-mark-approved-icon-shield-vector-on-white-background.jpg?s=612x612&w=0&k=20&c=lalLRIXMNvWP6JuqHjoz_h0q-iQXSgOgI5pztVZ6SN8=",
      glow: "hover:shadow-emerald-100",
    },
    {
      id: 4,
      title: "BONUS 4",
      description: "Resume & LinkedIn Optimization for Data Roles",
      img: "https://cdn.vectorstock.com/i/1000v/69/15/team-collaboration-logo-vector-25686915.jpg",
      glow: "hover:shadow-amber-100",
    },
    {
      id: 5,
      title: "BONUS 5",
      description: "The 'Insight-to-Action' Pitch Deck Template",
      img: "https://static.vecteezy.com/system/resources/thumbnails/020/815/881/small/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg",
      glow: "hover:shadow-pink-100",
    },
    {
      id: 6,
      title: "BONUS 6",
      description: "Industrial Certification of Data Analytics Excellence",
      img: "https://img.freepik.com/premium-vector/badge-icon-vector-image-can-be-used-shooting_120816-40993.jpg?semt=ais_user_personalization&w=740&q=80",
      glow: "hover:shadow-orange-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="reviews" className="relative pb-8 md:pb-6 px-4 bg-white font-sans overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Gift className="w-3.5 h-3.5" />
            Exclusive Attendee Perks
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
            Supercharge Your Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              With $2,500 In Bonuses
            </span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">Fast-track your transition into Senior Data roles with these premium toolkits.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {bonuses.map((bonus) => (
            <motion.div key={bonus.id} variants={itemVariants} whileHover={{ y: -5 }} className={`relative bg-white rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-neutral-200 hover:border-neutral-300 transition-all duration-300 group shadow-sm hover:shadow-2xl ${bonus.glow}`}>
              <h4 className="text-neutral-400 font-black text-sm uppercase tracking-[0.2em] mb-4 group-hover:text-neutral-900 transition-colors">{bonus.title}</h4>
              <div className="mb-4 p-6 rounded-full bg-neutral-50 border border-neutral-100 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <img src={bonus.img} alt={bonus.description} className="w-20 h-20 object-contain rounded-full" loading="lazy" />
              </div>
              <p className="text-neutral-800 font-bold text-lg md:text-xl leading-snug">{bonus.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Trigger */}
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
              whileHover={{ scale: 1.02 }} // Removed y: -4 to avoid conflict with the bounce
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

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ExclusiveBonusesSection;