"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Главная", href: "/" }, // Home
    { label: "О нас", href: "/about" }, // About
    { label: "Контакты", href: "/contact" }, // Contact
    { label: "Услуги", href: "/diseases" }, // Diseases
    { label: "Контакты", href: "/videos" }, // Videos
    { label: "Блог", href: "/blogs" }, // Blogs
    { label: "FAQ", href: "/faq" }, // FAQ
  ];

  return (
    <footer className="w-full text-black opacity-90 pt-10 pb-5 px-4 shadow-inner border-t border-sky-500 bg-white">
      <div className="wrapper max-w-6xl mx-auto flex flex-wrap sm:flex-row justify-between items-center gap-6 border-b pb-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Логотип"
              width={100}
              height={70}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                pathname === href
                  ? "underline underline-offset-4 decoration-[#25B4F8] text-[#25B4F8]"
                  : "opacity-80 hover:text-[#25B4F8] hover:underline"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright / CTA */}
        <div className="text-xs sm:text-sm text-center sm:text-right mt-4 sm:mt-0">
          <p>© {new Date().getFullYear()} Д-р Мехмет Ильтебер Бахадыр</p>
          <Link
            href="/contact"
            className="text-[#25B4F8] hover:underline block"
          >
            Записаться на приём
          </Link>
        </div>
      </div>

      {/* Social Media */}
      <div className="socialMedia flex justify-center gap-6 mt-4 text-black text-xl">
        <Link
          href="https://www.facebook.com/drmehmetilteberbahadir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.instagram.com/dr.mehmetilteberbahadir/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.youtube.com/@DrMehmet%C4%B0lteberBahadir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
