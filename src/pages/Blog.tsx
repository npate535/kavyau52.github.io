import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import candidateApp from "@/assets/candidate-app.jpg";
import squishyLogo from "@/assets/squishy-logo.jpg";

const posts = [
  {
    slug: "hackathon-season-2026",
    date: "March 2026",
    title: "Hackathon Season 2026: CandiDate & Squishy",
    excerpt:
      "Two months into 2026 and I'm so excited to already have two hackathon wins under my belt. Take a look at my projects CandiDate and Squishy!",
    tag: "Projects",
    image: candidateApp,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">
              Thoughts & Writing
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Blog</h1>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <Lock size={12} />
              <p className="text-xs tracking-wide">Only Kavya Uppal can publish posts on this blog.</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-0">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="border-t border-border py-12 md:py-16 grid md:grid-cols-12 gap-6 items-center group hover:bg-secondary/30 transition-colors px-4 -mx-4 block"
              >
                <div className="md:col-span-3">
                  <motion.div
                    className="w-full aspect-video rounded-sm overflow-hidden mb-3"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </motion.div>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
