"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaPhone, FaArrowRight } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";
import { animate } from "animejs";
import TextReveal from "@/components/TextReveal";
import Topbar from "@/components/Topbar";
import { useRouter } from "next/navigation";

const reviews = [
  {
    author_name: "Наталья Петрова",
    rating: 5,
    text: "Доктор Бахадир — настоящий профессионал. Его методы лечения помогли мне справиться с псориазом без медикаментов. Рекомендую всем!",
  },
  {
    author_name: "Алексей Иванов",
    rating: 4,
    text: "Клиника очень чистая и персонал дружелюбный. Единственный минус — немного долго ждать приема.",
  },
  {
    author_name: "Мария Смирнова",
    rating: 5,
    text: "После нескольких месяцев лечения у доктора Бахадира мои симптомы значительно уменьшились. Благодарна за профессионализм и заботу.",
  },
  {
    author_name: "Иван Козлов",
    rating: 5,
    text: "Очень уютная атмосфера и современное оборудование. Доктор подробно объяснил все этапы лечения.",
  },
  {
    author_name: "Екатерина Сидорова",
    rating: 5,
    text: "Результаты превзошли все мои ожидания. Спасибо доктору Бахадиру за его чуткость и профессионализм!",
  },
];

export default function ServiceSection() {
  const router = useRouter();

  const handleCardClick = (id) => {
    router.push(`/diseases?disease=${id}`);
  };
  const services = [
    {
      id: "psoriasis",
      src: "/images/sedef.jpg",
      title: "Псориаз",
      description:
        "Псориаз — это хроническое кожное заболевание, характеризующееся покраснением и шелушением.",
    },
    {
      id: "eczema",
      src: "/images/egzama.jpg",
      title: "Экзема",
      description:
        "Экзема вызывает воспаление кожи, сопровождающееся зудом, трещинами и сухостью.",
    },
    {
      id: "acne",
      src: "/images/akne.jpg",
      title: "Проблема акне",
      description:
        "Акне — это распространённое заболевание кожи, особенно в подростковом возрасте.",
    },
    {
      id: "ichthyosis",
      src: "/images/iktiyoz.jpg",
      title: "Ихтиоз",
      description:
        "Ихтиоз характеризуется чрезмерным ороговением и сухостью кожи.",
    },
    {
      id: "lichen",
      src: "/images/liken.jpg",
      title: "Лишай планус",
      description:
        "Лишай планус вызывает фиолетовые, зудящие высыпания на коже и слизистых.",
    },
    {
      id: "ankylosing",
      src: "/images/ankilozan.jpg",
      title: "Анкилозирующий спондилит",
      description:
        "Хроническое воспаление позвоночника, вызывающее скованность и боль в спине.",
    },
    {
      id: "rheumatism",
      src: "/images/romatizma.jpg",
      title: "Тиреоидит Хашимото",
      description:
        "Аутоиммунное заболевание щитовидной железы, приводящее к гипотиреозу.",
    },
    {
      id: "hashimoto",
      src: "/images/haşimato.jpg",
      title: "Сердечно-сосудистые заболевания",
      description:
        "Группа заболеваний сердца и сосудов, включая гипертонию и инфаркт.",
    },
    {
      id: "alzheimer",
      src: "/images/kalp.jpg",
      title: "Болезнь Альцгеймера",
      description:
        "Неврологическое расстройство, ведущее к ухудшению памяти и когнитивных функций.",
    },
    {
      id: "autism",
      src: "/images/beyin.jpg",
      title: "Аутизм",
      description:
        "Аутизм влияет на развитие общения, поведения и социального взаимодействия.",
    },
    {
      id: "sexual",
      src: "/images/otizm.jpg",
      title: "Половое здоровье",
      description:
        "Важный аспект общего здоровья, включающий репродуктивное и сексуальное благополучие.",
    },
    {
      id: "cancer",
      src: "/images/cinsellik.jpg",
      title: "Рак",
      description:
        "Онкологическое заболевание, характеризующееся аномальным ростом клеток.",
    },
  ];

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="containerHome min-h-screen w-full px-0 py-20 bg-white flex text-white justify-between items-center mb-10 relative">
        {/* Bang Bang efektleri */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[
            "Псориаз, экзема и ревматизм — родственные заболевания!",
            "Мы не используем кортизон или химические препараты!",
            "Лечение очень лёгкое, простое и без побочных эффектов.",
          ].map((text, index) => {
            // Yukarı mı aşağı mı rastgele seç
            const isTop = Math.random() > 0.5;
            const top = isTop
              ? `${Math.random() * 30 + 5}%` // Yukarı alan (5% – 35%)
              : `${Math.random() * 30 + 65}%`; // Aşağı alan (65% – 95%)

            return (
              <span
                key={index}
                className="absolute text-black font-semibold bg-white/70 px-3 py-2 md:px-4 md:py-3 rounded-full shadow-xl transition-opacity duration-1000 text-xs sm:text-sm md:text-base max-w-[90vw] text-center backdrop-blur-sm border border-white/50"
                style={{
                  top,
                  left: `${Math.random() * 80 + 10}%`,
                  transform: "translate(-50%, -50%)",
                  animation: `bangFade ${6 + index}s infinite`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>

        <div className="wrapper flex flex-col items-center justify-center relative border-t border-b p-5 mx-auto bg-black/30 rounded-lg animate-fade-in z-20">
          <div className="text-center flex flex-col items-center justify-center">
            <div>
              <TextReveal clas text="Dr. Mehmet Ilteber BAHADIR" />
            </div>
            <p className="text-lg font-extrabold">
              В нашей клинике проводится лечение следующих заболеваний: псориаз,
              экзема, себорейный дерматит, лишай, ихтиоз
              <br />и ревматические заболевания (остеоартрит, анкилозирующий
              спондилит, тиреоидит Хашимото).
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <div>
              <Link
                href="/contact"
                className="btn-primary inline-block text-center"
              >
                Записаться на приём
              </Link>
            </div>
            <a
              href="tel:+905527533464"
              className="flex border-l-4 border-r-4 px-3 items-center gap-2 hover:opacity-80 transition-all duration-200"
            >
              <FaPhone className="text-4xl w-[50px] h-[50px] text-white text-primary border-2 border-[#25B4F8] p-2 rounded-lg" />
              <div>
                <h4 className="font-extrabold">
                  Вы можете позвонить для записи
                </h4>
                <p className="font-extrabold">+90 (552) 753 34 64</p>
              </div>
            </a>
          </div>
        </div>

        {/* Ekstra stil tanımı */}
        <style jsx>{`
          @keyframes bangFade {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.5);
            }
            20% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            80% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.5);
            }
          }
        `}</style>
      </section>
      {/* Hero Section */}

      {/* Testimonial Section */}
      <section className="testimonialSection flex justify-center items-center mx-auto mb-20 px-4 py-10 md:p-20">
        <div className="flex flex-col gap-20 w-full">
          {/* İlk blok */}
          <div className="wrapper flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Sol metin */}
            <div className="testimonalLeft border-l-2 border-r-2 border-sky-500 p-6 md:p-10 w-full md:max-w-[600px]">
              <div className="text-start">
                <h1 className="mb-4 text-xl font-bold">О нас.</h1>
                <p className="text-gray-500 text-justify">
                  Доктор родился в 1971 году в Анталии. Начальное и среднее
                  образование он получил в начальной школе Барбарос (Анталия) и
                  Анталийской анатолийской школе. <br /> <br /> 1989 по 1996 год
                  учился в медицинском факультете Стамбульского университета.Он
                  прошел обучение по мезотерапии и озонотерапии в рамках
                  обучения Министерства здравоохранения. <br /> <br /> Работал в
                  фонде помощи детям с лейкемией и участвовал в экстренной
                  помощи 112. Работал врачом в нескольких частных больницах.
                </p>
              </div>
              <div className="flex items-center text-center mx-auto mt-5 ">
                <Image
                  src="/images/sign.png"
                  alt="Descriptive Alt Text"
                  width={300}
                  height={100}
                />
              </div>
              <div className="aboutBtn flex justify-start items-center mt-10">
                <Link href="/about" className="btn-primary">
                  О нас
                </Link>
              </div>
            </div>

            {/* Sağ görsel */}
            <div className="relative w-full md:w-[500px] h-[300px] sm:h-[400px] p-5 overflow-hidden">
              <Image
                src="/images/bg-blue.jpg"
                alt="Background"
                fill
                className="object-cover opacity-80 z-0"
              />
              <div className="relative z-10 flex justify-center items-center h-full">
                <Image
                  src="/images/heroimg.jpg"
                  alt="Descriptive"
                  width={700}
                  height={600}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* İkinci blok */}
          <div className="wrapper flex flex-col md:flex-row-reverse justify-center items-center gap-10">
            {/* Sağ metin */}
            <ol className="mb-10 mt-6 flex flex-col gap-5">
              {[
                "Наши методы лечения не имеют побочных эффектов",
                "Мы не оставляем ни одного пациента без улучшений.",
                "Мы проводим контроль за состоянием пациента в течение 2 лет.",
                "Мы делаем акцент на пробиотиках в наших диетах.",
                "Мы предоставляем поддержку через Whatsapp для пациентов, живущих вдали.",
                "Мы предлагаем лечение без кортизона.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-lg">
                  <MdVerifiedUser className="text-sky-600 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{text}</span>
                </li>
              ))}
            </ol>

            {/* Sol görsel */}
            <div className="relative w-full md:w-[500px] h-[300px] sm:h-[400px] p-5 overflow-hidden">
              <Image
                src="/images/bg-blue.jpg"
                alt="Background"
                fill
                className="object-cover opacity-80 z-0"
              />
              <div className="relative z-10 flex justify-center items-center h-full">
                <Image
                  src="/images/whyus.png"
                  alt="Descriptive"
                  width={700}
                  height={600}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}

      {/* Tratments */}
      <h1 className="text-center p-10 mt-10 border-l-4 border-r-4 mb-20 border-sky-400 w-fit mx-auto text-2xl font-bold text-sky-500">
        лечения
      </h1>
      <div className="containerTratements w-full bg-gray-200 py-10 px-4 sm:px-6 lg:px-10">
        <div className="tratementWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:px-40  ">
          {/* Card 1 */}
          <div className="tratementCard cursor-pointer group flex flex-col w-full bg-white rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl duration-300 p-4">
            <Image
              src="/images/mezoterapi.jpg"
              alt="Mezoterapi"
              className="rounded-lg mb-4 w-full max-w-md h-auto mx-auto"
              width={300}
              height={300}
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
              Мезотерапия
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Методика омоложения кожи, повышение ее тонуса и упругости
              посредством мало дозированного трансдермального введения
              стимулирующих препаратов.
              <br />
              <br />
              Данные препараты увеличивают эластичность кожи и объем коллагена.
              Уровень влажности и жира кожи очень важен при заболеваниях кожи.
              <br />
              <br />
              Данный метод используется врачами, получившими квалификацию
              Министерства здравоохранения.
            </p>
          </div>

          {/* Card 2 */}
          <div className="tratementCard cursor-pointer group flex flex-col w-full bg-white rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl duration-300 p-4">
            <Image
              src="/images/ozon.jpg"
              alt="Ozon"
              className="rounded-lg mb-4 w-full max-w-md h-auto mx-auto"
              width={300}
              height={300}
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
              Озонотерапия
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Метод лечения, который осуществляется за счёт применения газа
              озона на организм.
              <br />
              <br />
              Очень важна форма применения при заболеваниях кожи. Озонотерапия
              регулирует иммунную систему (очень часто используется при псориазе
              и экземе), эффективна при кожных бактериях, грибках и вирусах.
              <br />
              <br />
              Данный метод используется врачами, получившими квалификацию
              Министерства здравоохранения.
            </p>
          </div>

          {/* Card 3 */}
          <div className="tratementCard cursor-pointer group flex flex-col w-full bg-white rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl duration-300 p-4">
            <Image
              src="/images/fitoterapi.jpg"
              alt="Fitoterapi"
              className="rounded-lg mb-4 w-full max-w-md h-auto mx-auto"
              width={300}
              height={300}
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
              Фитотерапия
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Метод профилактики и лечения различных заболеваний, основанный на
              использовании лекарственных растений и комплексных препаратов из
              них.
              <br />
              <br />
              Благодаря фитотерапии, с помощью медицинских препаратов,
              содержащих растительные масла и экстракты растений, многие
              заболевания кожи (псориаз, экзема и т. д.) могут находиться в
              стадии ремиссии.
              <br />
              <br />
              Данный метод используется врачами, получившими квалификацию
              Министерства здравоохранения.
            </p>
          </div>
        </div>
      </div>
      {/* Tratments */}

      {/* Happy Clients Section */}
      <h1 className="text-center p-10 mt-10 border-l-4 border-r-4 mb-10 border-sky-400 w-fit mx-auto text-2xl font-bold text-sky-500">
        Что говорят наши пациенты?
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mb-6 mx-auto max-w-[1200px]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-xl w-full min-h-[200px] flex flex-col justify-between transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">
                  {review.author_name}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.805c.969 0 1.371 1.24.588 1.81l-3.08 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.538 1.118l-3.08-2.24a1 1 0 00-1.176 0l-3.08 2.24c-.783.57-1.838-.197-1.538-1.118l1.177-3.617a1 1 0 00-.364-1.118l-3.08-2.24c-.783-.57-.38-1.81.588-1.81h3.805a1 1 0 00.95-.69l1.177-3.617z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.text}</p>
            </div>
          </div>
        ))}
      </section>
      <a
        href="https://www.google.com/maps/place/?q=place_id:ChIJBYqbRW27yhQR0VJeRjVbo7w"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 underline text-sm mt-4 block text-center hover:text-sky-800 transition"
      >
        Посмотреть все отзывы на Google →
      </a>
      {/* Happy Clients Section */}

      {/* Service Section */}
      <h1 className="text-center p-10 mt-10 border-l-4 border-r-4 mb-20 border-sky-400 w-fit mx-auto text-2xl font-bold text-sky-500">
        Наши услуги
      </h1>

      <section className="serviceSection p-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={`/diseases/${item.id}`}>
                <div className="bg-white rounded-lg shadow-lg p-10 h-full flex flex-col items-center justify-between hover:scale-105 transition-all duration-200 cursor-pointer">
                  <Image
                    src={item.src}
                    className="mx-auto mb-5 mt-3 rounded-xl"
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                  <div className="text-center">
                    <h4 className="text-lg mb-3">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1 mx-auto mt-5">
                    <span className="hover:underline hover:opacity-100">
                      Learn More
                    </span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Service Section */}

      {/* Videos Section */}
      <section className="py-20 px-5 bg-gray-50">
        <h2 className="text-center text-2xl font-bold text-sky-600 mb-10">
          Видеогалерея
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Video 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/XAJjWlb9adA"
              title="Пациент делится опытом лечения"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Опыт лечения</h3>
              <p className="text-sm text-gray-600">
                Пациент рассказывает о результатах после 2 месяцев терапии.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/bCmYvduvGUg"
              title="Объяснение метода лечения"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Методы лечения</h3>
              <p className="text-sm text-gray-600">
                Доктор Бахадир объясняет, как проводится комплексная терапия.
              </p>
            </div>
          </div>

          {/* Video 3 - örnek boş video kutusu */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/XAJjWlb9adA"
              title="Название видео"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Название видео</h3>
              <p className="text-sm text-gray-600">
                Краткое описание на русском языке.
              </p>
            </div>
          </div>

          {/* Video 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/TgioDLLmhro"
              title="Пациент делится опытом лечения"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Опыт лечения</h3>
              <p className="text-sm text-gray-600">
                Пациент рассказывает о результатах после 2 месяцев терапии.
              </p>
            </div>
          </div>

          {/* Video 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/j6ga9eN0JOk"
              title="Объяснение метода лечения"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Методы лечения</h3>
              <p className="text-sm text-gray-600">
                Доктор Бахадир объясняет, как проводится комплексная терапия.
              </p>
            </div>
          </div>

          {/* Video 6 - örnek boş video kutusu */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/FYcjkhDN2Mg"
              title="Название видео"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Название видео</h3>
              <p className="text-sm text-gray-600">
                Краткое описание на русском языке.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Videos Section */}
    </React.Fragment>
  );
}
