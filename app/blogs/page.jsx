"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blogs.json"; // JSON'dan veri alıyoruz

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Blog verilerini JSON'dan alıyoruz
    const publishedOnly = blogData.filter((item) => item.published);
    setBlogPosts(publishedOnly);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-sky-700">
        Блог
      </h1>

      {blogPosts.length === 0 ? (
        <p className="text-center text-gray-500">
          Henüz blog yazısı bulunmuyor.
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.01] transition duration-300 overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h2 className="text-xl font-semibold text-sky-700 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.summary}</p>
                {post.category && (
                  <p className="text-xs text-gray-500 italic mt-2">
                    {post.category}
                  </p>
                )}
                <span className="text-sky-600 font-semibold text-sm mt-3 inline-block underline">
                  Читать далее →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
