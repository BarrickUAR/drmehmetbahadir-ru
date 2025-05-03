"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-50 right-0 h-3/6 w-[200px] z-50 border-t-3
     border-b-3 border-sky-500 bg-[#67636281] opacity-85 text-white 
     flex flex-col items-center py-10 px-6 shadow-lg"
    >
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/images/logo.png"
          alt="Header Logo"
          width={120}
          height={80}
          className="cursor-pointer"
        />
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

      {/* Button */}
      <div className="mt-auto pt-10">
        <Link href="#" className="btn-primary">
          Randevu Al
        </Link>
      </div>
    </header>
  );
};

export default Header;
