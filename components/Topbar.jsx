import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topBar desktop-only fixed top-0 left-0 w-full h-[40px] bg-gray-600 bg-opacity-90 text-white z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        {/* Sol taraf: Doktor adı */}
        <div className="text-sm font-medium whitespace-nowrap">
          Dr. Mehmet İlteber Bahadır – Клиника лечения псориаза
        </div>

        {/* Orta: Sosyal Medya */}
        <div className="hidden sm:flex justify-center gap-4 text-white text-lg">
          <a
            href="https://www.facebook.com/drmehmetilteberbahadir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/dr.mehmetilteberbahadir/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@DrMehmet%C4%B0lteberBahadir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Sağ taraf: E-posta, Telefon & Buton */}
        <div className="flex items-center gap-4 text-sm whitespace-nowrap">
          {/* Mail */}
          <a
            href="mailto:randevu@drmehmetilteberbahadir.net"
            className="hover:underline hidden md:flex items-center gap-1"
          >
            <FaEnvelope className="text-base" />
            randevu@drmehmetilteberbahadir.net
          </a>

          {/* Telefon */}
          <a
            href="tel:+905555555555"
            className="hover:underline flex items-center gap-1"
          >
            <FaPhoneAlt className="text-base" />
            +90 (552) 753 34 64
          </a>

          {/* Randevu Butonu */}
          <a href="/contact" className="btn-primary px-3 py-1 text-sm">
            Запись
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
