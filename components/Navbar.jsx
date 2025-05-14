"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
    { label: "Услуги", href: "/diseases" },
    { label: "Видео", href: "/videos" },
    { label: "Блог", href: "/blogs" }, // Aktif edildi
    { label: "ЧаВо", href: "/faq" },
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
              className="py-2 text-gray-700 hover:text-sky-600 text-center"
            >
              {item.label}
            </Link>
          ))}

          <button className="btn-primary mt-3">Запись</button>
          {/* Admin girişi */}
          <Link
            href="/admin"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 text-sm text-sky-700 mt-4 hover:underline"
          >
            <UserCircle size={20} />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
