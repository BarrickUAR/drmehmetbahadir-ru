import blogs from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center text-red-600 text-xl">
        Блог не найден.{" "}
        <Link href="/blogs" className="underline text-sky-700">
          Все статьи
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 text-gray-800">
      <Link
        href="/blogs"
        className="inline-block mb-6 mt-20 text-xl text-sky-600 hover:underline"
      >
        ← Назад к блогам
      </Link>

      <h6 className="text-4xl font-bold text-sky-700 mb-4">{blog.title}</h6>
      <p className="text- text-gray-500 mb-6">{blog.date}</p>

      {blog.image && (
        <div className="relative  w-100  h-100 mb-8 rounded overflow-hidden shadow-md">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-center rounded"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none text-gray-900">
        {blog.content
          .split("\n")
          .filter(Boolean)
          .map((paragraph, index) => (
            <p key={index} className="mb-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
      </article>
    </div>
  );
}
