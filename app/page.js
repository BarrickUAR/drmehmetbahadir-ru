"use client";

import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="containerHome min-h-screen w-full px-0 py-20 bg-white flex  text-white justify-between items-center mb-10  ">
        <div className="wrapper flex flex-col items-center justify-center relative border-t border-b p-5 mx-auto">
          <div className="text-center flex flex-col items-center justify-center  ">
            <h1 className="mb-3 ">
              Get ready for your best ever Dental Experience!
            </h1>
            <p className="text-lg">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <div>
              <button className="btn-primary">Randevu Oluştur</button>
            </div>
            <a
              href="tel:+905527533464"
              className="flex border-l-4 border-r-4 px-3 items-center gap-2 hover:opacity-80 transition-all duration-200"
            >
              <FaPhone className="text-4xl w-[50px] h-[50px] text-white  text-primary border-2 border-[#25B4F8] p-2 rounded-lg" />
              <div>
                <h4>Randevu İçin Arayabilirsiniz</h4>
                <p>+90 (552) 753 34 64</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* Testimonial Section */}

      <section className="testimonialSection flex justify-center items-center mx-auto mb-20 p-20">
        <div className="flex flex-col gap-20 w-full">
          <div className="wrapper flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Sol metin */}
            <div className="testimonalLeft border-l-2 border-r-2 border-sky-500 p-10">
              <div className="text-start">
                <h1 className="mb-4">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  molestiae?
                </p>
              </div>
              <div className="inputForm flex justify-start items-center mt-10 ">
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    placeholder="Telefon numaranız"
                    className="pl-10 pr-4 py-3 rounded-l-md border-2 border-gray-300 w-[400px]  focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <button className="bg-sky-500 text-white px-6 py-3.5  hover:bg-sky-600 transition-all duration-200">
                  Submit
                </button>
              </div>
            </div>

            {/* Sağ görsel */}
            <div className="testimonalWrapper relative w-[600px] h-[500px] p-10 overflow-hidden">
              <Image
                src="/images/bg-blue.jpg"
                alt="Descriptive text"
                fill
                className="object-cover opacity-80 z-0"
              />
              <div className="testimonalRight relative z-10 flex justify-center items-center h-full">
                <Image
                  src="/images/hoca.jpg"
                  alt="Descriptive text"
                  width={700}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="wrapper flex flex-col md:flex-row-reverse justify-center items-center gap-10">
            {/* Sağ metin */}
            <div className="testimonalLeft flex flex-col justify-start border-sky-500 p-10">
              <div className="text-start">
                <h1 className="mb-4">Lorem ipsum dolor sit amet.</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  molestiae?
                </p>
              </div>
              <div className="listItems flex justify-start items-center mt-10 gap-2 ">
                <ol className="mb-10">
                  <li className="flex items-center gap-2 text-2xl">
                    <MdVerifiedUser className="text-sky-600" />
                    <span className="text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </li>

                  <li className="flex items-center gap-2 text-2xl">
                    <MdVerifiedUser className="text-sky-600" />
                    <span className="text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </li>

                  <li className="flex items-center gap-2 text-2xl">
                    <MdVerifiedUser className="text-sky-600" />
                    <span className="text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </li>

                  <li className="flex items-center gap-2 text-2xl">
                    <MdVerifiedUser className="text-sky-600" />
                    <span className="text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </li>
                </ol>
              </div>
              <button className="btn-primary w-[50%]">
                Book an Appointment
              </button>
            </div>

            {/* Sol görsel */}
            <div className="testimonalWrapper relative w-[600px] h-[500px] p-10 overflow-hidden">
              <Image
                src="/images/bg-blue.jpg"
                alt="Descriptive text"
                fill
                className="object-cover opacity-80 z-0"
              />
              <div className="testimonalRight relative z-10 flex justify-center items-center h-full">
                <Image
                  src="/images/hoca.jpg"
                  alt="Descriptive text"
                  width={700}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      {/* Service Section */}

      <h1 className="text-center p-10  mt-10 border-l-4 border-r-4 mb-20 border-sky-400  w-fit mx-auto text-2xl font-bold text-sky-500">
        Hizmetlerimiz
      </h1>

      <section className="serviceSection p-20">
        <Swiper
          slidesPerView={6}
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
          {[
            {
              src: "/images/sedef.jpg",
              title: "Псориаз",
              description:
                "Псориаз — это хроническое кожное заболевание, характеризующееся покраснением и шелушением.",
            },
            {
              src: "/images/egzama.jpg",
              title: "Экзема",
              description:
                "Экзема вызывает воспаление кожи, сопровождающееся зудом, трещинами и сухостью.",
            },
            {
              src: "/images/akne.jpg",
              title: "Проблема акне",
              description:
                "Акне — это распространённое заболевание кожи, особенно в подростковом возрасте.",
            },
            {
              src: "/images/iktiyoz.jpg",
              title: "Ихтиоз",
              description:
                "Ихтиоз характеризуется чрезмерным ороговением и сухостью кожи.",
            },
            {
              src: "/images/liken.jpg",
              title: "Лишай планус",
              description:
                "Лишай планус вызывает фиолетовые, зудящие высыпания на коже и слизистых.",
            },
            {
              src: "/images/ankilozan.jpg",
              title: "Анкилозирующий спондилит",
              description:
                "Хроническое воспаление позвоночника, вызывающее скованность и боль в спине.",
            },
            {
              src: "/images/romatizma.jpg",
              title: "Тиреоидит Хашимото",
              description:
                "Аутоиммунное заболевание щитовидной железы, приводящее к гипотиреозу.",
            },
            {
              src: "/images/haşimato.jpg",
              title: "Сердечно-сосудистые заболевания",
              description:
                "Группа заболеваний сердца и сосудов, включая гипертонию и инфаркт.",
            },
            {
              src: "/images/kalp.jpg",
              title: "Болезнь Альцгеймера",
              description:
                "Неврологическое расстройство, ведущее к ухудшению памяти и когнитивных функций.",
            },
            {
              src: "/images/beyin.jpg",
              title: "Аутизм",
              description:
                "Аутизм влияет на развитие общения, поведения и социального взаимодействия.",
            },
            {
              src: "/images/otizm.jpg",
              title: "Половое здоровье",
              description:
                "Важный аспект общего здоровья, включающий репродуктивное и сексуальное благополучие.",
            },
            {
              src: "/images/cinsellik.jpg",
              title: "Рак",
              description:
                "Онкологическое заболевание, характеризующееся аномальным ростом клеток.",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg shadow-lg p-5 h-full flex flex-col items-center justify-between hover:scale-105 transition-all duration-200 cursor-pointer">
                <Image
                  src={item.src}
                  className="mx-auto mb-5 mt-3 rounded-xl"
                  alt="image"
                  width={300}
                  height={300}
                />
                <div className="text-center">
                  <h4 className="text-lg mb-3">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
                <div className="flex items-center gap-1 mx-auto mt-5">
                  <a className="hover:underline hover:opacity-100" href="#">
                    Learn More
                  </a>
                  <FaArrowRight />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Service Section */}
    </React.Fragment>
  );
}
