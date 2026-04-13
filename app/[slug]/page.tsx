import React from "react";
import { readFile } from "fs/promises";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;

  let filePath = path.join(process.cwd(), "content/pages", `${slug}.md`);
  let fileContent: string;

  try {
    fileContent = await readFile(filePath, "utf8");
  } catch {
    filePath = path.join(process.cwd(), "content/posts", `${slug}.md`);
    fileContent = await readFile(filePath, "utf8");
  }

  const { content } = matter(fileContent);
  const html = marked(content);

  return (
    <div className="prose prose-neutral prose-lg leading-relaxed prose-headings:font-semibold prose-h1:text-3xl prose-a:no-underline hover:prose-a:underline prose-p:mt-4 prose-h2:mt-10">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Page;
