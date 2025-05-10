import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
  const filePath = path.join(uploadDir, filename);

  await writeFile(filePath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
