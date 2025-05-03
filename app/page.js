import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="containerHome min-h-screen w-full px-0 py-20 bg-white flex  text-white justify-between items-center  ">
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

      {/* Service Section */}
      <section className="serviceSection flex justify-center items-center mx-auto p-10">
        <div className="bg-[#E6F6FE] w-3/6 content-center items-center grid grid-cols-4 gap-10 p-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid sm:grid-cols-1  align-content: center;">
          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% 
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% 
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% h
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className="ServiceItem bg-white rounded-lg shadow-lg p-5 w-100% 
           flex flex-col items-center justify-center gap-5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Image
              src="images/icon.svg"
              className="mx-auto mb-5 mt-3"
              alt="image"
              width={50}
              height={50}
            />{" "}
            <div className="">
              <h4 className="text-lg mb-3 text-center">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, voluptatibus.
              </p>
            </div>
            <div className="flex items-center gap-1 mx-auto mt-5 ">
              <a className="hover:underline hover:opacity-100" href="#">
                Learn More
              </a>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}

      {/* Testimonial Section */}
      <section className="testimonialSection flex justify-center items-center  mx-auto"></section>
      {/* Testimonial Section */}
    </React.Fragment>
  );
}
