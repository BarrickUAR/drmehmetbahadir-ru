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
    <footer className="w-full text-black opacity-90 pt-20 mb-5 shadow-inner border-sky-500">
      <div className="wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 border-b-2 pb-5">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Логотип"
              width={120}
              height={80}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-6 text-center">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium transition-all duration-200 ${
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
        <div className="text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} Д-р Мехмет Ильтебер Бахадыр</p>
          <Link href="/contact" className="text-[#25B4F8] hover:underline">
            Записаться на приём
          </Link>
        </div>
      </div>

      {/* Social Media */}
      <div className="socialMedia flex justify-center gap-6 mt-6 text-black text-xl">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25B4F8] transition-all duration-200"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://youtube.com"
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
