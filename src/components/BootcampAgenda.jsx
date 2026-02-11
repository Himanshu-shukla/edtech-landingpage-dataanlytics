import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, Video, MessageCircle, X, BarChart3 } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';


// --- Main Component ---
const BootcampAgenda = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pb-8 md:pb-12 px-4 bg-neutral-50">
            <div className="max-w-6xl mx-auto pt-6">

                {/* Grid Container: Instructor vs Agenda */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">

                    {/* LEFT: Instructor & Logistics */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="relative group rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
                                alt="Lead Data Strategist"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-white text-2xl font-black mt-2">Yashdeep Rana</h3>
                                <p className="text-neutral-200 text-sm">Lead Data Strategist | Founder, EdTech Informative</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Calendar, text: "07 - 08 Feb 2026", label: "Date" },
                                { icon: Clock, text: "11 AM GMT", label: "Time" },
                                { icon: BarChart3, text: "Industrial Projects", label: "Training" },
                                { icon: MessageCircle, text: "Live Lab Support", label: "Guidance" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                    <item.icon className="w-6 h-6 text-emerald-600 mb-2" />
                                    <span className="text-neutral-900 font-bold text-sm">{item.text}</span>
                                    <span className="text-neutral-500 text-xs uppercase">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: Agenda Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-neutral-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl group"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-full shadow-md"></div>

                        <div className="text-center mb-10 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-3 tracking-tight">
                                 Action Plan
                            </h3>
                            <p className="text-purple-700 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                                (LIVE IMPLEMENTATION BOOTCAMP)
                            </p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {[
                                "Master a High-Income Data Career Blueprint 6X faster than traditional degrees",
                                "Architect Industrial-Grade Dashboards that stakeholders actually use",
                                "Deploy Automated Data Pipelines to eliminate manual spreadsheet work forever",
                                "Build an Interview-Cracking Portfolio with 3 live production projects"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                                    className="flex gap-5 items-start p-4 rounded-2xl border border-transparent hover:border-purple-200 transition-all duration-300 cursor-default group"
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="bg-purple-50 border border-purple-100 rounded-full p-1.5 shadow-sm group-hover:bg-purple-100 transition-all">
                                            <CheckCircle2 className="w-5 h-5 text-purple-600" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <p className="text-neutral-700 font-medium text-base md:text-lg leading-snug group-hover:text-neutral-900 transition-colors">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM: Pricing & CTA */}
                
            </div>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default BootcampAgenda;