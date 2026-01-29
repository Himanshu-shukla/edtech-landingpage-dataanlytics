import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Building2 } from 'lucide-react';

const AlumniSection = () => {
  const row1 = [
    { name: "Barclays", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Barclays-Logo.svg" },
    { name: "Tesco", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Tesco_logo.png" },
    { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/PwC_Company_Logo.svg" },
    { name: "Deliveroo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Deliveroo_Logo.svg/1280px-Deliveroo_Logo.svg.png" },
    { name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png" },
    { name: "ASOS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Asos.svg/1280px-Asos.svg.png" },
    { name: "Vodafone", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/1280px-Vodafone_2017_logo.svg.png" }
  ];

  const row2 = [
    { name: "Sage", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sage-logo_svg.svg/1280px-Sage-logo_svg.svg.png" },
    { name: "AstraZeneca", logo: "https://1000logos.net/wp-content/uploads/2023/10/AstraZeneca-Logo.png" },
    { name: "Dyson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dyson_logo.svg/960px-Dyson_logo.svg.png" },
    { name: "Monzo", logo: "https://upload.wikimedia.org/wikipedia/en/archive/3/3a/20251111151609%21Monzo_logo.png" },
    { name: "Revolut", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Revolut_logo.svg/960px-Revolut_logo.svg.png" },
    { name: "Sky", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Sky_Group_logo_2020.svg/960px-Sky_Group_logo_2020.svg.png" },
    { name: "BP", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/BP_Helios_logo.svg/960px-BP_Helios_logo.svg.png" }
  ];

  return (
    <section
  id="reviews"
  className="relative pb-16 md:pb-20 px-4 bg-white font-sans overflow-hidden"
>

      
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
            <Building2 className="w-3 h-3" />
            <span>Global Corporate Network</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
            Our Professionals Work at <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              The UK's Industry Leaders
            </span>
          </h2>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative flex flex-col gap-10 md:gap-14 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 pt-6 border-t border-neutral-100"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span className="text-neutral-400 font-black text-[9px] tracking-widest uppercase">
              Network: <span className="text-neutral-900">16,000+ Alumni</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-neutral-400 font-black text-[9px] tracking-widest uppercase">
              Standard: <span className="text-neutral-900">UK Industry Certified</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction, speed }) => {
  return (
    <div className="flex w-full overflow-hidden select-none">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed || 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center gap-20 md:gap-28 px-10"
      >
        {[...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex items-center justify-center group"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 md:h-14 max-w-[140px] md:max-w-[180px] object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AlumniSection;