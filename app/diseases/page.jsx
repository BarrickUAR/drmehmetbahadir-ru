"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownAZ, ArrowUpAZ, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import diseases from "@/lib/data/diseases";

export default function DiseasesPage() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredDiseases = useMemo(() => {
    const sorted = [...diseases].sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    return sorted.filter((d) =>
      d.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortAsc]);

  return (
    <div className=" bg-gradient-to-b from-white to-blue-50 py-20 px-6 sm:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h6 className="text-4xl sm:text-5xl font-bold text-sky-700 mb-4">
          Заболевания, которые мы лечим
        </h6>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Мы используем инновационные и природные подходы для лечения кожных,
          аутоиммунных и хронических заболеваний.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-2/3">
          <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <Input
            placeholder="Поиск по названию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 py-2 rounded-lg"
          />
        </div>
        <button
          onClick={() => setSortAsc((prev) => !prev)}
          className="flex items-center gap-2 text-sm text-sky-700 hover:underline"
        >
          {sortAsc ? <ArrowDownAZ size={18} /> : <ArrowUpAZ size={18} />}
          {sortAsc ? "A–Z" : "Z–A"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {filteredDiseases.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href={`/diseases/${item.id}`}
              className="group h-50 relative flex flex-col items-center justify-center border border-gray-200 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-full border-2 border-sky-300 group-hover:border-sky-500 transition-all"
                />
              </div>
              <div className="text-center text-base font-semibold text-sky-800 group-hover:text-sky-600">
                {item.title}
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
