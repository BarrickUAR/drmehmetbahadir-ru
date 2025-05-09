"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="md:hidden w-full bg-[#67636281] opacity-85 shadow-md fixed top-0 left-0 z-50 ">
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <Image
          src="/images/logo-white.png"
          alt="Company Logo"
          width={150}
          height={60}
          priority
        />

        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="bg-white border-t px-4 pb-4 flex flex-col gap-2 pt-3">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-gray-700 hover:text-sky-600 text-center border-1"
            >
              {item.label}
            </Link>
          ))}
          <button className="btn-primary mt-2">Randevu</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
