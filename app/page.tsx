import React from "react";

const posts = [
  {
    title: "Understanding JavaScript Closures",
    date: "2026-03-15",
    description:
      "A clear explanation of how closures work in JavaScript and why they matter.",
  },
  {
    title: "How the Event Loop Really Works",
    date: "2026-03-10",
    description:
      "Breaking down the JavaScript event loop and the mechanics behind async code.",
  },
  {
    title: "JavaScript Scope Explained",
    date: "2026-03-05",
    description:
      "An overview of lexical scope and how variable resolution works in JavaScript.",
  },
  {
    title: "Promises vs Async/Await",
    date: "2026-02-28",
    description:
      "Understanding the differences between Promises and async/await in modern JavaScript.",
  },
  {
    title: "Debouncing and Throttling",
    date: "2026-02-20",
    description:
      "Two essential techniques for controlling function execution in JavaScript.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <article key={post.title}>
          <h2 className="text-xl font-semibold hover:underline cursor-pointer">
            {post.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">{post.date}</p>

          <p className="text-gray-700 mt-2">{post.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Home;
