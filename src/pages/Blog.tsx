import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "quantum-error-correction-future",
    date: "March 2026",
    title: "The Future of Quantum Error Correction",
    excerpt:
      "Exploring how recent advances in surface codes and logical qubits are paving the way for fault-tolerant quantum computing — and what it means for the industry.",
    tag: "Quantum Computing",
  },
  {
    slug: "ai-sycophancy-multi-agent",
    date: "March 2026",
    title: "Sycophancy in Multi-Agent AI: A Growing Concern",
    excerpt:
      "When AI agents agree too readily, the consequences can be subtle but significant. A deep dive into computational persuasion and the challenges of building truthful AI systems.",
    tag: "Responsible AI",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">
            Thoughts & Writing
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Blog</h1>
        </div>

        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="border-t border-border py-12 md:py-16 grid md:grid-cols-12 gap-6 items-start group hover:bg-secondary/30 transition-colors px-4 -mx-4 block"
            >
              <div className="md:col-span-3">
                <span className="text-xs tracking-[0.15em] text-accent uppercase">{post.tag}</span>
                <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
              </div>
              <div className="md:col-span-7">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start pt-2">
                <ArrowRight
                  size={18}
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
