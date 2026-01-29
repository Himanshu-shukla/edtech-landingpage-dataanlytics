import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Bot, Briefcase } from 'lucide-react';

/* ✅ Your Image Imports */
import oliver from '../assets/testimonials/oliver-bennett.jpeg';
import sarah from '../assets/testimonials/sarah-williams.jpeg';
import daniel from '../assets/testimonials/daniel-foster.jpeg';
import aisha from '../assets/testimonials/aisha-khan.jpeg';
import james from '../assets/testimonials/james-thornton.jpeg';
import emily from '../assets/testimonials/emily-carter.jpeg';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Oliver Bennett",
      role: "Automation Consultant",
      type: "Bootcamp Graduate",
      rating: 4.5,
      image: oliver,
      text: "The client case studies were extremely practical. I secured a £4,500 automation project within three weeks. Some parts were intense, but the value delivered was outstanding."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "SME Business Owner",
      type: "Business Owner",
      rating: 5,
      image: sarah,
      text: "I automated our lead follow-ups and invoice processing in under a month. It honestly feels like hiring an extra operations manager."
    },
    {
      id: 3,
      name: "Daniel Foster",
      role: "Digital Marketing Consultant",
      type: "Freelancer",
      rating: 4,
      image: daniel,
      text: "Very hands-on and practical. I needed to rewatch a few sessions, but I’ve since built a LinkedIn outreach agent that clients are paying for monthly."
    },
    {
      id: 4,
      name: "Aisha Khan",
      role: "Software Engineer",
      type: "Bootcamp Graduate",
      rating: 5,
      image: aisha,
      text: "From basic workflows to pitching a £9,000 AI agent solution — this bootcamp completely changed how I approach consulting."
    },
    {
      id: 5,
      name: "James Thornton",
      role: "Operations Manager",
      type: "Business Owner",
      rating: 4.5,
      image: james,
      text: "The automation demos were brilliant. It took some effort to adapt them, but I’m now saving 12–15 hours a week."
    },
    {
      id: 6,
      name: "Emily Carter",
      role: "Freelance Developer",
      type: "Freelancer",
      rating: 5,
      image: emily,
      text: "Within a month, I signed my first £14,000 automation contract. The biggest takeaway was learning how to sell outcomes instead of hours."
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => {
          const isFull = i + 1 <= Math.floor(rating);
          const isHalf = !isFull && i < rating;
          return (
            <div key={i} className="relative">
              <Star className="w-4 h-4 text-neutral-300" />
              {(isFull || isHalf) && (
                <Star 
                  className="w-4 h-4 fill-emerald-500 text-emerald-500 absolute top-0 left-0" 
                  style={isHalf ? { clipPath: 'inset(0 50% 0 0)' } : {}}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="reviews" className="relative pb-16 md:pb-24 px-4 bg-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold mb-6">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">Verified UK Participant Feedback</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tight">
            What UK Professionals Say About Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              2-Day Live Agentic AI Bootcamp
            </span>
          </h2>
        </motion.div>

        {/* ✅ Changed from columns-3 to grid for equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col hover:border-emerald-300 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="absolute top-6 right-6 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-100 text-emerald-700">
                {review.type}
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm flex-shrink-0 bg-neutral-100">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 leading-tight text-lg">
                    {review.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-600">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                {renderStars(review.rating)}
              </div>

              {/* ✅ flex-grow ensures text area expands, pushing footer icon down */}
              <p className="text-neutral-600 italic leading-relaxed text-base flex-grow">
                “{review.text}”
              </p>

              <div className="flex justify-end opacity-20 mt-6">
                {review.type === "Business Owner" ? (
                  <Bot className="w-6 h-6 text-cyan-600" />
                ) : (
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;