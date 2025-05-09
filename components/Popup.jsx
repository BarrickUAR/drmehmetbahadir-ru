"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // Direkt açık başlasın

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="fixed bottom-10 left-10 z-50 max-w-sm w-[90%] sm:w-[400px] bg-sky-600 text-white p-6 rounded-2xl shadow-2xl flex items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-bold mb-1">Фото до и после</h3>
            <p className="text-sm">
              Нажмите, чтобы увидеть фотографии наших пациентов
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://istanbulpsoriasiscenter.pixieset.com/oncesonra/"
              target="_blank"
              className="bg-white text-sky-600 font-bold text-sm px-4 py-2 rounded-lg shadow hover:bg-sky-100 transition"
            >
              Смотреть
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
