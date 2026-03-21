import React from "react";
import { readFile } from "fs/promises";
import path from "path";
import { marked } from "marked";

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

  const html = marked(fileContent);

  return (
    <div className="prose prose-neutral max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Page;
