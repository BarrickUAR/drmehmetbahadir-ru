"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0 z-50
    h-[60%] w-[160px] lg:w-[180px] xl:w-[200px]
    border-t-4 border-b-4 border-sky-500
    bg-[#67636281] opacity-85 text-white 
    flex-col items-center py-10 px-4 shadow-lg justify-around"
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
