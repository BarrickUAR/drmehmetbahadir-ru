"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const diseases = [
  {
    id: "psoriasis",
    title: "Псориаз",
    image: "/images/sedef.jpg",
    description:
      "Псориаз — это хроническое кожное заболевание, характеризующееся покраснением и шелушением.",
  },
  {
    id: "eczema",
    title: "Экзема",
    image: "/images/egzama.jpg",
    description:
      "Экзема вызывает воспаление кожи, сопровождающееся зудом, трещинами и сухостью.",
  },
  {
    id: "acne",
    title: "Проблема акне",
    image: "/images/akne.jpg",
    description:
      "Акне — это распространённое заболевание кожи, особенно в подростковом возрасте.",
  },
  {
    id: "ichthyosis",
    title: "Ихтиоз",
    image: "/images/iktiyoz.jpg",
    description:
      "Ихтиоз характеризуется чрезмерным ороговением и сухостью кожи.",
  },
  {
    id: "lichen",
    title: "Лишай планус",
    image: "/images/liken.jpg",
    description:
      "Лишай планус вызывает фиолетовые, зудящие высыпания на коже и слизистых.",
  },
  {
    id: "ankylosing",
    title: "Анкилозирующий спондилит",
    image: "/images/ankilozan.jpg",
    description:
      "Хроническое воспаление позвоночника, вызывающее скованность и боль в спине.",
  },
  {
    id: "hashimoto",
    title: "Тиреоидит Хашимото",
    image: "/images/romatizma.jpg",
    description:
      "Аутоиммунное заболевание щитовидной железы, приводящее к гипотиреозу.",
  },
  {
    id: "cardio",
    title: "Сердечно-сосудистые заболевания",
    image: "/images/haşimato.jpg",
    description:
      "Группа заболеваний сердца и сосудов, включая гипертонию и инфаркт.",
  },
  {
    id: "alzheimer",
    title: "Болезнь Альцгеймера",
    image: "/images/kalp.jpg",
    description:
      "Неврологическое расстройство, ведущее к ухудшению памяти и когнитивных функций.",
  },
  {
    id: "autism",
    title: "Аутизм",
    image: "/images/beyin.jpg",
    description:
      "Аутизм влияет на развитие общения, поведения и социального взаимодействия.",
  },
  {
    id: "sexual",
    title: "Половое здоровье",
    image: "/images/otizm.jpg",
    description:
      "Важный аспект общего здоровья, включающий репродуктивное и сексуальное благополучие.",
  },
  {
    id: "cancer",
    title: "Рак",
    image: "/images/cinsellik.jpg",
    description:
      "Онкологическое заболевание, характеризующееся аномальным ростом клеток.",
  },
];

const DiseasesPage = () => {
  const searchParams = useSearchParams();
  const defaultId = searchParams.get("acil"); // URL'den hastalık ID'si alınır
  const [activeId, setActiveId] = useState(defaultId);

  const activeDisease = diseases.find((d) => d.id === activeId);

  return (
    <div className="p-6 sm:p-10 lg:p-20 bg-white ">
      <h1 className="text-3xl font-bold text-sky-600 text-center mb-10">
        Наши заболевания
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {diseases.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`border rounded-lg p-3 text-sm font-medium transition hover:bg-sky-100 hover:text-sky-600 shadow-sm text-center truncate
              ${
                activeId === item.id
                  ? "bg-sky-500 text-white"
                  : "bg-white text-sky-700"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {activeDisease && (
        <div className=" rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-2/10">
            <Image
              src={activeDisease.image}
              alt={activeDisease.title}
              width={800}
              height={600}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              {activeDisease.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {activeDisease.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseasesPage;
