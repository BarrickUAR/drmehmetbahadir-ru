"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
    { label: "Услуги", href: "/diseases" },
    { label: "Видео", href: "/videos" },
    { label: "Блог", href: "/blogs" },
    { label: "ЧаВо", href: "/faq" },
  ];

  return (
    <header
      className="hidden md:flex fixed top-50 right-0 h-3/6 w-[200px] z-50 border-t-3
     border-b-3 border-sky-500 bg-[#67636281] opacity-85 text-white 
     flex-col items-center py-10 px-6 shadow-lg"
    >
      {/* Logo */}
      <div className="mb-10">
        <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="Логотип"
            width={120}
            height={80}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-8 w-full text-center">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg font-medium transition-all duration-200 ${
              pathname === href
                ? "border-x-2 border-[#25B4F8] opacity-100"
                : "opacity-80 hover:underline hover:opacity-100"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Admin Avatar */}
      <div className="flex flex-col justify-center items-center mx-auto  ">
        {/* CTA Button */}
        <div className="mt-auto pt-10">
          <Link href="/contact" className="btn-primary">
            Запись
          </Link>
        </div>
      
      </div>
    </header>
  );
};

export default Header;
