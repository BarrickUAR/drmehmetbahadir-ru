"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <Image
        src="/images/iron.png"
        alt="404 - Страница не найдена"
        width={1000}
        height={1000}
        className="mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-4">
        404 - Страница не найдена
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        К сожалению, запрашиваемая вами страница не существует. Но не волнуйтесь
        — наши герои перенаправят вас на главную!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 text-black bg-red-600 rounded-lg hover:bg-red-700 transition"
      >
        <FaArrowLeft /> Вернуться на главную
      </Link>
    </div>
  );
}
