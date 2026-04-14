import React from "react";
import { readFile } from "fs/promises";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;

  let fileContent: string | null = null;

  const pagePath = path.join(process.cwd(), "content/pages", `${slug}.md`);
  const postPath = path.join(process.cwd(), "content/posts", `${slug}.md`);

  try {
    fileContent = await readFile(pagePath, "utf8");
  } catch {
    try {
      fileContent = await readFile(postPath, "utf8");
    } catch {
      notFound();
    }
  }

  if (!fileContent) {
    notFound();
  }

  const { content } = matter(fileContent);
  const html = await marked(content);

  return (
    <div className="prose prose-neutral prose-lg leading-relaxed prose-headings:font-semibold prose-h1:text-3xl prose-a:no-underline hover:prose-a:underline prose-p:mt-4 prose-h2:mt-10">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Page;
