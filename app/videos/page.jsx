"use client";

import React, { useState } from "react";

const allVideos = [
  {
    url: "https://www.youtube.com/embed/XAJjWlb9adA",
    title: "Опыт лечения",
    description: "Пациент рассказывает о результатах после 2 месяцев терапии.",
  },
  {
    url: "https://www.youtube.com/embed/bCmYvduvGUg",
    title: "Методы лечения",
    description:
      "Доктор Бахадир объясняет, как проводится комплексная терапия.",
  },
  {
    url: "https://www.youtube.com/embed/TgioDLLmhro",
    title: "Пациент делится опытом",
    description: "История пациента с псориазом до и после лечения.",
  },
  {
    url: "https://www.youtube.com/embed/j6ga9eN0JOk",
    title: "Озонотерапия",
    description: "Применение озонотерапии при кожных заболеваниях.",
  },
  {
    url: "https://www.youtube.com/embed/FYcjkhDN2Mg",
    title: "Подход к пациенту",
    description: "Важность индивидуального подхода в терапии.",
  },
  {
    url: "https://www.youtube.com/embed/XAJjWlb9adA",
    title: "Обратная связь",
    description: "Пациенты делятся своим мнением о клинике.",
  },
];

const VideosPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleVideos = allVideos.slice(0, visibleCount);

  return (
    <div className="py-20 px-5 bg-gray-50 min-h-screen">
      <h2 className="text-center text-3xl font-bold text-sky-600 mb-10">
        Видеогалерея
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleVideos.map((video, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <iframe
              className="w-full aspect-video"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allVideos.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
