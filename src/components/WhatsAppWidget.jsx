import React from 'react';
// You likely have lucide-react installed based on your other components
import { MessageCircle } from 'lucide-react'; 

const WhatsAppWidget = () => {
  // Your Bot's Number
  const phoneNumber = "919810249170"; 
  // Trigger Word that wakes up your bot (matches your bot.js logic)
  const message = "Hi"; 
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] group"
    >
      {/* The Green Button */}
      <div className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>

      {/* Notification Badge (Optional - makes it look 'alive') */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-bold text-white items-center justify-center">1</span>
      </span>

      {/* Hover Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-neutral-900 px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="font-bold text-sm">Chat with AI Advisor</p>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;