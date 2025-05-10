import { promises as fs } from "fs";
import path from "path";

// JSON dosyasının yolunu tanımla
const filePath = path.join(process.cwd(), "data", "blogs.json");

// GET → blog listesini getir
export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return new Response(data, {
    headers: { "Content-Type": "application/json" },
  });
}

// POST → yeni blog ekle
export async function POST(req) {
  const newBlog = await req.json();
  const fileData = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const updatedBlogs = [...blogs, newBlog];
  await fs.writeFile(filePath, JSON.stringify(updatedBlogs, null, 2));

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}

// DELETE → slug'a göre blog sil
export async function DELETE(req) {
  const { slug } = await req.json();
  const fileData = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const filtered = blogs.filter((b) => b.slug !== slug);
  await fs.writeFile(filePath, JSON.stringify(filtered, null, 2));

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
