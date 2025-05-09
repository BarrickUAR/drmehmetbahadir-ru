import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse">
      <a
        href="https://api.whatsapp.com/send/?phone=905527533464&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D0%BA%D0%B0%D0%BA+%D1%8F+%D0%BC%D0%BE%D0%B3%D1%83+%D0%B2%D0%B0%D0%BC+%D0%BF%D0%BE%D0%BC%D0%BE%D1%87%D1%8C%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="font-semibold">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsappIcon;
