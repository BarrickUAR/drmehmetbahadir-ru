"use client";

import { notFound } from "next/navigation";
import blogData from "@/data/blogs.json";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function BlogDetail({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog || blog.published === false) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-700 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
      {blog.category && (
        <p className="text-sm text-gray-500 italic mb-4">
          Kategori: {blog.category}
        </p>
      )}

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-6 shadow"
        />
      )}

      <div className="prose prose-lg max-w-none bg-white p-6 rounded-xl shadow-md">
        <MarkdownPreview source={blog.content} />
      </div>
    </div>
  );
}
