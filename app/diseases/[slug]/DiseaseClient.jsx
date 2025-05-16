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
          className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 text-xl font-medium transition hover:underline  mt-15"
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
        <div className="w-full md:w-2/5">
          <Image
            src={disease.image}
            alt={disease.title}
            width={800}
            height={600}
            className="rounded-xl w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">
            {disease.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {disease.description}
          </p>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
