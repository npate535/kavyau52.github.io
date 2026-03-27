import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import candidateTeam from "@/assets/candidate-team.jpg";
import candidateApp from "@/assets/candidate-app.jpg";
import squishyTeam from "@/assets/squishy-team.jpg";
import squishyLogo from "@/assets/squishy-logo.jpg";
import { ReactNode } from "react";

interface PostData {
  title: string;
  date: string;
  tag: string;
  content: ReactNode;
}

const postContent: Record<string, PostData> = {
  "hackathon-season-2026": {
    title: "Hackathon Season 2026: CandiDate & Squishy",
    date: "March 2026",
    tag: "Projects",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed text-base">
          At the start of 2026, I created a Luma and a Devpost account, resolving to compete in more
          hackathons and case competitions this year, so I thought I'd share 2 projects I've worked on so far!
        </p>

        <div className="my-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            🗳️ CandiDate
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={candidateApp} alt="CandiDate app interface" className="w-full h-auto" />
            </motion.div>
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={candidateTeam} alt="CandiDate team at the hackathon" className="w-full h-auto" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            CandiDate is an ML-powered application that takes a user-first approach to voting that
            Aminah Bilal, Anna Gerasimenko, Cecilia Hernandez, and I collaborated on to win the{" "}
            <span className="text-accent font-medium">Best for Chicago Track</span> at the Chicago
            Google DeepMind Vibecoding Hackathon.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            We prompt users to write just a few words on the policy topics most important to them.
            Then, their responses are used to transparently connect them to politicians with similar
            values and opinions. In a time when it may be daunting to navigate political information,
            it is imperative to have a trusted site like CandiDate that removes the confusion and
            redundancy from political surveys.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            We originally created CandiDate to tackle this problem for the Illinois primary elections,
            but now, with the support from the DeepMind team and the organizers of this hackathon,
            Kaya J., Salvador Dueñas, and Landon W. Campbell, we are excited to scale this idea for
            the 2026 Midterms and beyond.
          </p>
        </div>

        <div className="h-px w-full bg-border my-12" />

        <div className="my-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            🤖 Squishy
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={squishyLogo} alt="Squishy logo" className="w-full h-auto" />
            </motion.div>
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={squishyTeam} alt="Squishy team at the hackathon" className="w-full h-auto" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Pivoting to soft hybrid robotics, Advayth Pashupati, Aashima Singh Sisodia, Neev Patel,
            and I placed <span className="text-accent font-medium">3rd on the TRAE track</span> at
            the Respan (formerly Keywords AI) Hackathon, creating Squishy, a multi-agent orchestrated
            platform that streamlines the soft body robotics modeling process.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Our creation allows researchers to generate, visualize, and produce PyElastica code with
            minimized hallucinations by routing inputs through Respan to LLMs backed by the Cosserat
            Rod theory.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            We have more information, including our tech stack and inspiration on{" "}
            <a
              href="https://lnkd.in/ghb7qEQ4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Devpost
            </a>
            .
          </p>
        </div>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? postContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <p className="text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        <AnimatedSection>
          <span className="text-xs tracking-[0.15em] text-accent uppercase">{post.tag}</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">{post.date}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6">{post.content}</div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPost;
