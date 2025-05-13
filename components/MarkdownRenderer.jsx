"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function MarkdownRenderer({ content }) {
  return <MarkdownPreview source={content} />;
}
