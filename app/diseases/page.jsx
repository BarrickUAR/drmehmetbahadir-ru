"use client"; // Bu direktif, yalnızca client-side rendering'i etkinleştirir.

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // SearchParams'ı doğru import ediyoruz.

const diseases = [
  {
    id: "psoriasis",
    title: "Псориаз",
    image: "/images/sedef.jpg",
    description: `Психологический стресс и психоэмоциональный статус пациентов с предрасположенностью к псориазу, может спровоцировать псориаз или стать причиной увеличения имеющейся сыпи. По этой причине, получение психологической помощи пациентами, подверженными стрессам, является важным фактором снижения уровня тяжести болезни. Кроме того, наличие инфекционных заболеваний, таких как инфекции мочевых путей, кариес, тонзиллит, а так же такие механические повреждения кожи как трения, удар, расчесывание, излишнее потребление алкоголя, некоторые метаболические расстройства (гипокальциемия) и прием лекарственных препаратов могут спровоцировать появление признаков псориаза.`,
  },
  {
    id: "eczema",
    title: "Экзема",
    image: "/images/egzama.jpg",
    description: `Экзема – это кожное заболевание, известное также как дерматит. Экзема, называемая также атопический дерматит, это незаразное заболевание, которое характеризуется сухой и зудящей кожей. Как правило, развивается из-за аллергии, вызванных пищей или ингаляционными средствами. Различается острый, хронический, возрастной и сухой виды заболевания, с такими клиническим проявлениями как покраснение кожи, отеки, зуд. Психосоматический и неприглядный на внешний вид дерматит. Встречается у 10 из 100 человек.`,
  },
  {
    id: "acne",
    title: "Проблема акне",
    image: "/images/akne.jpg",
    description: `Акне — это распространённое кожное заболевание, проявляющееся прыщами, чёрными точками и воспалёнными высыпаниями.\n\nСимптомы:\n- Чёрные и белые точки;\n- Воспалённые прыщи и кисты;\n- Покраснение и чувствительность кожи.\n\nПричины:\n- Гормональные изменения;\n- Жирная косметика;\n- Стресс и плохой сон;\n- Диета с высоким содержанием сахара.`,
  },
  {
    id: "ichthyosis",
    title: "Ихтиоз",
    image: "/images/iktiyoz.jpg",
    description: `Ихтиоз – это заболевание при котором нарушается процесс ороговения кожи с накоплением кератина с измененной структурой в эпидермисе.`,
  },
  {
    id: "lichen",
    title: "Плоский лишай",
    image: "/images/liken.jpg",
    description: `Красный плоский лишай представляет собой воспалительное заболевание кожи и слизистых оболочек. Этология болезни неизвестна однако иммунно-патогенетические аспекты заболеваний являются преобладающими. Проявляется в виде круглых, гладких, зудящих лиловых папул,возможны сетчатые налеты на папулах. Папул может быть несколько или много.`,
  },
  {
    id: "ankylosing",
    title: "Анкилозирующий спондилит",
    image: "/images/ankilozan.jpg",
    description: `Анкилозирующий спондилит — хроническое ревматическое заболевание позвоночника и суставов.\n\nСимптомы:\n- Боль в пояснице по утрам;\n- Ограничение подвижности;\n- В тяжёлых случаях — деформация позвоночника.\n\nПричины:\n- Аутоиммунная атака на суставы;\n- Генетика, особенно ген HLA‑B27.`,
  },
  {
    id: "rheumatism",
    title: "Тиреоидит Хашимото",
    image: "/images/romatizma.jpg",
    description: `Тиреоидит Хашимото — аутоиммунное воспаление щитовидной железы.\n\nСимптомы:\n- Усталость и слабость;\n- Сдавленность в горле;\n- Отёки, набор веса, сухость кожи;\n- Депрессия, забывчивость, выпадение волос.\n\nПричины:\n- Генетическая предрасположенность;\n- Внешние факторы. У женщин чаще.`,
  },
  {
    id: "hashimoto",
    title: "Сердечно-сосудистые заболевания",
    image: "/images/haşimato.jpg",
    description: `Сердечно-сосудистые заболевания возникают при сужении или блокировке артерий.\n\nСимптомы:\n- Боль или давление в груди;\n- Одышка;\n- Онемение в ногах;\n- Обморок.\n\nФакторы риска:\n- Холестерин, гипертония;\n- Курение, малоподвижность;\n- Диабет, ожирение, стресс.`,
  },
  {
    id: "alzheimer",
    title: "Болезнь Альцгеймера",
    image: "/images/kalp.jpg",
    description: `Альцгеймер — прогрессирующее неврологическое заболевание, приводящее к потере памяти и когнитивных функций.\n\nСимптомы:\n- Потеря памяти;\n- Затруднения с речью и повседневными задачами;\n- Изменения личности.\n\nПричины:\n- Старение, генетика, отмирание нейронов.`,
  },
  {
    id: "autism",
    title: "Аутизм",
    image: "/images/beyin.jpg",
    description: `Аутизм — это расстройство развития, характеризующееся трудностями в социальном взаимодействии.\n\nСимптомы:\n- Нет зрительного контакта;\n- Повторяющиеся действия;\n- Проблемы с речью;\n- Ограниченные интересы.\n\nПоддержка:\n- Здоровое питание, сон, фитотерапия, антиоксиданты.`,
  },
  {
    id: "sexual",
    title: "Половое здоровье",
    image: "/images/otizm.jpg",
    description: `Проблемы сексуального здоровья могут быть вызваны как физическими, так и психологическими факторами.\n\nСимптомы:\n- Снижение либидо;\n- Гормональный дисбаланс;\n- Хроническая усталость.\n\nПриродные подходы:\n- Травяные добавки и озонотерапия поддерживают баланс и энергию.`,
  },
  {
    id: "cancer",
    title: "Рак",
    image: "/images/cinsellik.jpg",
    description: `Рак — это группа заболеваний, при которых происходит неконтролируемое деление клеток.\n\nСимптомы:\n- Незаживающие язвы;\n- Потеря веса;\n- Кашель, опухоли.\n\nФакторы риска:\n- Курение, алкоголь;\n- Радиация, токсины;\n- Генетика, плохое питание.`,
  },
];

const DiseasesPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    // Use searchParams only on the client side
    const params = new URLSearchParams(window.location.search);
    const disease = params.get("disease"); // URL'den hastalık id'si alınıyor
    setActiveId(disease); // Aktif hastalığı set ediyoruz
    setSearchParams(params);
  }, []); // Yalnızca component mount olduğunda çalışacak

  const activeDisease = diseases.find((d) => d.id === activeId); // Aktif hastalığı buluyoruz

  return (
    <div className="p-6 sm:p-10 lg:p-20 bg-white">
      <h1 className="text-3xl font-bold text-sky-600 text-center mb-10">
        Наши заболевания
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10 px-30">
        {diseases.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)} // Handle disease selection
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

      {/* Suspense boundary to handle client-side rendering */}
      <div className="rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-8 items-center justify-center">
        {activeDisease && (
          <div className="w-full md:w-2/10">
            <Image
              src={activeDisease.image}
              alt={activeDisease.title}
              width={800}
              height={600}
              className="rounded-xl w-full h-auto"
            />
          </div>
        )}

        {activeDisease && (
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              {activeDisease.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {activeDisease.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasesPage;
