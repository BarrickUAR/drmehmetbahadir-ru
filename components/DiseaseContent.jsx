"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const diseases = [
  {
    id: "psoriasis",
    title: "Псориаз",
    image: "/images/sedef.jpg",
    description:
      "Психологический стресс и другие факторы могут спровоцировать псориаз или ухудшить его течение.",
  },
  {
    id: "eczema",
    title: "Экзема",
    image: "/images/egzama.jpg",
    description:
      "Экзема — незаразное заболевание кожи, сопровождающееся сухостью, зудом и воспалением.",
  },
  {
    id: "acne",
    title: "Проблема акне",
    image: "/images/akne.jpg",
    description:
      "Акне — распространённое заболевание кожи, сопровождающееся прыщами и воспалениями.",
  },
  {
    id: "ichthyosis",
    title: "Ихтиоз",
    image: "/images/iktiyoz.jpg",
    description:
      "Ихтиоз — нарушение ороговения кожи, сопровождающееся её сухостью и шелушением.",
  },
  {
    id: "lichen",
    title: "Плоский лишай",
    image: "/images/liken.jpg",
    description:
      "Плоский лишай — воспалительное заболевание кожи и слизистых с зудящими высыпаниями.",
  },
  {
    id: "ankylosing",
    title: "Анкилозирующий спондилит",
    image: "/images/ankilozan.jpg",
    description:
      "Хроническое заболевание позвоночника, вызывающее боль и ограничение подвижности.",
  },
  {
    id: "rheumatism",
    title: "Тиреоидит Хашимото",
    image: "/images/romatizma.jpg",
    description:
      "Аутоиммунное воспаление щитовидной железы, вызывающее гипотиреоз и усталость.",
  },
  {
    id: "hashimoto",
    title: "Сердечно-сосудистые заболевания",
    image: "/images/haşimato.jpg",
    description:
      "Заболевания сердца и сосудов, включая гипертонию, инфаркты и инсульты.",
  },
  {
    id: "alzheimer",
    title: "Болезнь Альцгеймера",
    image: "/images/kalp.jpg",
    description:
      "Прогрессирующее заболевание, вызывающее ухудшение памяти и когнитивных функций.",
  },
  {
    id: "autism",
    title: "Аутизм",
    image: "/images/beyin.jpg",
    description:
      "Аутизм — расстройство развития с трудностями в коммуникации и поведении.",
  },
  {
    id: "sexual",
    title: "Половое здоровье",
    image: "/images/otizm.jpg",
    description:
      "Проблемы сексуального здоровья могут быть вызваны физическими или психологическими факторами.",
  },
  {
    id: "cancer",
    title: "Рак",
    image: "/images/cinsellik.jpg",
    description:
      "Рак — группа заболеваний, при которых клетки начинают бесконтрольно делиться.",
  },
];

const DiseaseContent = ({ selectedId }) => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(selectedId || diseases[0].id);

  useEffect(() => {
    if (selectedId && selectedId !== activeId) {
      setActiveId(selectedId);
    }
  }, [selectedId]);

  const activeDisease = diseases.find((d) => d.id === activeId);

  const handleChange = (id) => {
    setActiveId(id);
    router.push(`/diseases?disease=${id}`);
  };

  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap gap-3 justify-center">
          {diseases.map((d) => (
            <button
              key={d.id}
              onClick={() => handleChange(d.id)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                activeId === d.id
                  ? "bg-sky-500 text-white"
                  : "bg-white text-sky-700 hover:bg-sky-100"
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>
      </div>
      {activeDisease && (
        <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center justify-center p-5">
          <Image
            src={activeDisease.image}
            alt={activeDisease.title}
            width={300}
            height={300}
            className="rounded-lg w-full lg:w-150 md:w-1/2"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              {activeDisease.title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {activeDisease.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseContent;
