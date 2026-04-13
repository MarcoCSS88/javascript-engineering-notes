import React from "react";
import Link from "next/link";
import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const getPosts = async () => {
  const dir = path.join(process.cwd(), "content/posts");
  const files = await readdir(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const content = await readFile(filePath, "utf8");
      const { data } = matter(content);

      return {
        slug: file.replace(".md", ""),
        title: data.title,
        date: data.date,
        description: data.description,
      };
    }),
  );

  return posts;
};

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <Link key={post.slug} href={`/${post.slug}`}>
          <article>
            <h2 className="text-xl font-semibold hover:underline cursor-pointer">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.description}</p>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default Home;
