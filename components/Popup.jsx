"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          ref={popupRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="fixed bottom-10 left-10 z-50 max-w-sm w-[90%] sm:w-[400px] bg-sky-600 text-white p-6 rounded-2xl shadow-2xl flex justify-between gap-4"
          style={{
            backgroundImage: "url('/images/popup-bg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">Фото до и после</h3>
            <p className="text-sm">
              Нажмите, чтобы увидеть фотографии наших пациентов
            </p>
            <Link
              href="https://istanbulpsoriasiscenter.pixieset.com/oncesonra/"
              target="_blank"
              className="inline-block mt-3 bg-white text-sky-600 font-bold text-sm px-4 py-2 rounded-lg shadow hover:bg-sky-100 transition"
            >
              Смотреть
            </Link>
          </div>

          <button
            onClick={() => setShowPopup(false)}
            className="text-white text-xl hover:text-gray-300 transition self-start"
            aria-label="Close popup"
          >
            <IoClose />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
