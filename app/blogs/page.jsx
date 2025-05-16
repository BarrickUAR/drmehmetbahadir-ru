"use client";

import { useEffect, useState } from "react";
import blogs from "@/data/blogs.json";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogs.filter((b) => b.published));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-5">
      <h6 className="text-4xl font-bold text-center mb-10 text-sky-700 mt-5">
        Блог
      </h6>

      {blogPosts.length === 0 ? (
        <p className="text-center text-gray-500">Блогов пока нет.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {blog.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-2xl! font-semibold text-sky-700 mb-4">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <p className="mt-4 text-gray-700">{blog.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
