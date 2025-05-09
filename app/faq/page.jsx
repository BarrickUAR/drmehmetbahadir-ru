"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Что усиливает псориаз?",
    answer:
      "У людей, предрасположенных к псориазу, психологический стресс и напряжение могут вызвать обострение болезни...",
  },
  {
    question:
      "Могут ли бактериальные и вирусные инфекции вызвать обострение псориаза?",
    answer:
      "Особенно у детей псориаз может обостряться при бактериальных инфекциях, таких как стрептококк...",
  },
  {
    question:
      "Летний сезон наступает! Как климатические изменения влияют на псориаз?",
    answer:
      "Псориаз уменьшается в солнечных климатах и особенно увеличивается зимой...",
  },
  {
    question:
      "Могут ли травмы кожи и удары по коже вызвать обострение псориаза?",
    answer:
      "Травма здоровой кожи может вызвать появление новых псориатических высыпаний в этой области...",
  },
  {
    question: "Как психологический стресс влияет на псориаз?",
    answer:
      "Исследования показали, что при серьезных изменениях в жизни псориаз может проявлять изменения...",
  },
  {
    question: "Когда псориаз чаще всего встречается у мужчин?",
    answer:
      "Псориаз встречается у мужчин любого возраста, особенно в периоды повышенного стресса...",
  },
  {
    question: "Помогает ли хиджама при псориазе?",
    answer:
      "Хиджама может помочь при болях, но в нашей клинике мы запрещаем пациентам делать хиджаму...",
  },
  {
    question: "Какие симптомы наиболее часто беспокоят пациентов с артритом?",
    answer:
      "Боль, отечность и ограниченная подвижность суставов, воспаление глаз, утренняя скованность и т.д...",
  },
  {
    question: "Можно ли получить псориаз на лице, и что этому способствует?",
    answer:
      "Лицо редко поражается псориазом из-за высокой увлажненности и меньшего воздействия...",
  },
  {
    question:
      "Как пациентам с анкилозирующим спондилитом работать за компьютером?",
    answer:
      "Рабочая жизнь с анкилозирующим спондилитом требует адаптации условий и регулярных перерывов...",
  },
  {
    question:
      "Экзема и связь с питанием: шаг к исцелению с правильными продуктами",
    answer:
      "Для лечения экземы недостаточно только кремов. Питание играет ключевую роль...",
  },
  {
    question: "Как одеваться в холодные зимние дни?",
    answer:
      "Следует носить облегающую хлопковую одежду, удерживающую влагу, избегая шерстяных свитеров...",
  },
  {
    question: "Симптомы и диагностика заболеваний, вызванных артритом",
    answer:
      "Скованность, боль, отечность суставов, усталость, лихорадка, потеря веса — все это может указывать на артрит...",
  },
  {
    question: "ОСТОРОЖНО: РЕЗУЛЬТАТЫ ВОСПАЛИТЕЛЬНОГО РОМАТИЗМА!",
    answer:
      "Ревматоидный артрит может повлиять на продолжительность жизни и привести к депрессии...",
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full px-60 pt-10  mx-auto bg-[#f9f9fb] h-full">
      <h1 className="text-4xl font-bold text-center mb-10 text-sky-700">
        Часто задаваемые вопросы
      </h1>

      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Поиск по вопросам..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-5 font-semibold text-lg bg-sky-100 hover:bg-sky-200 transition flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 text-base leading-relaxed animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
