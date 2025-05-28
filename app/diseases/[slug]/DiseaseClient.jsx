"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import diseases from "@/lib/data/diseases";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function DiseaseClient({ slug }) {
  const disease = diseases.find((d) => d.id === slug);

  if (!disease) {
    return (
      <div className="p-10 text-center text-red-600 text-lg">
        Заболевание не найдено. Вернитесь на{" "}
        <Link href="/diseases" className="underline text-sky-600">
          страницу заболеваний
        </Link>
        .
      </div>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 sm:p-10 lg:p-20 bg-white min-h-screen"
    >
      <MotionDiv
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-10"
      >
        <Link
          href="/diseases"
          className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 text-xl font-medium transition hover:underline mt-15"
        >
          <ArrowLeft size={18} /> Назад к списку заболеваний
        </Link>
      </MotionDiv>

      <MotionDiv
        className="rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-8 items-center justify-center bg-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="w-3/4 lg:w-2/6 xl:3/5">
          <Image
            src={disease.image}
            alt={disease.title}
            width={800}
            height={600}
            className="rounded-xl w-full h-auto "
          />

          {/* Sadece psoriasis için 5 link liste */}
          {slug === "psoriasis" && (
            <nav className="mt-6 flex flex-col gap-2">
              <Link
                href="/diseases/psoriasis/what-is-psoriasis"
                className="text-sky-700 hover:underline text-lg"
              >
                Что такое псориаз?
              </Link>
              <Link
                href="/diseases/psoriasis/psoriasis-tratement"
                className="text-sky-700 hover:underline text-lg"
              >
                Лечение псориаза
              </Link>
              <Link
                href="/diseases/psoriasis/what-is-the-role"
                className="text-sky-700 hover:underline text-lg"
              >
                Какова роль иммунной системы при псориазе?
              </Link>
              <Link
                href="/diseases/psoriasis/symptoms"
                className="text-sky-700 hover:underline text-lg"
              >
                Симптомы псориаза
              </Link>
              <Link
                href="/diseases/psoriasis/results"
                className="text-sky-700 hover:underline text-lg"
              >
                Последствия псориаза
              </Link>
              <Link
                href="/diseases/psoriasis/is-it-contagious"
                className="text-sky-700 hover:underline text-lg"
              >
                Можно ли заразиться псориазом?
              </Link>
            </nav>
          )}
        </div>
        {/* Sadece psoriasis için 5 link liste */}

        {/* Psoriasis Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">{disease.title}</h2>
          <div className="p-10 max-w-3xl mx-auto bg-white rounded-lg shadow-md">

            <Link className=" px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition " href="/diseases">
              ← Назад
            </Link>

            <h1 className="text-4xl font-bold mb-6 mt-5 text-sky-700">Что такое псориаз?</h1>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Психологический стресс может спровоцировать или усугубить псориаз; поэтому психологическая поддержка важна.
              Инфекционные заболевания (тонзиллит, кариес, инфекции мочевых путей) и механические повреждения кожи могут вызвать вспышки псориаза.
              Стресс активирует вещества, запускающие иммунную систему, что способствует развитию псориаза.
              У детей псориаз часто возникает после инфекции стрептококка в горле — необходимо полное лечение.
              Лечение хронических очагов инфекции (например, кариеса) обязательно при псориазе.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Солнечный свет благоприятен при псориазе, но зимой болезнь обостряется; сухой воздух усиливает зуд и шелушение.
              Пациентам рекомендуется пребывание в климате с высокой влажностью и использование увлажняющих кремов зимой.
              Феномен Кебнера: новые очаги псориаза могут возникнуть на местах кожных повреждений, включая татуировки и солнечные ожоги.
              Женщины немного чаще подвержены псориазу, болезнь может начаться в любом возрасте, чаще всего — около 28 лет.
              Диагноз псориаза ставится на основе дерматологического осмотра; при сомнении — биопсия кожи.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Псориаз проявляется в разных формах — чаще всего в виде красной сыпи с серебристым налётом на локтях, коленях и голове.
              У 50% пациентов поражена кожа головы; у некоторых — только она.
              У детей симптомы часто проявляются в виде мелких красных пятен и усиливаются после ОРВИ.
              Иногда поражаются только складки (пах, подмышки, под грудью), где возникает покраснение и отёк без шелушения.
              Существуют формы с гнойничками — ограниченные (ладони, стопы) или распространённые по телу.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Псориаз ногтей проявляется утолщением, расслаиванием, точечными кровоизлияниями и жёлтым цветом.
              У 10% пациентов псориаз сопровождается поражением суставов; диагностика проще при наличии кожных проявлений.
              Распространённые формы могут вызывать лихорадку, озноб и слабость.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Специальной диеты нет, но Омега-3 полезны, а насыщенные жиры и ожирение ухудшают течение болезни.
              Псориаз не вызывает выпадение волос напрямую, но это может случиться при травмировании кожи головы или из-за лекарств.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Чаще всего псориаз проявляется на коже головы, коленях, локтях, теле, ногтях, ладонях, подошвах, половых органах и лице.
              Очаги обычно симметричны — на обеих сторонах тела.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Рекомендации: избегать ненужных лекарств, соблюдать диету, не курить, не пить, лечить инфекции, заниматься спортом, избегать стресса и солнца.
              Иммунная система играет ключевую роль — сбой её работы приводит к ускоренному делению клеток кожи.
              Причина сбоя иммунной системы неизвестна, но определённые факторы играют важную роль в запуске псориаза.
            </p>

          </div>
        </div>
        {/* Psoriasis Text */}

      </MotionDiv>
    </MotionDiv>
  );
}
