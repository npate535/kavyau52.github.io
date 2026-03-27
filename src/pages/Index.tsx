import headshot from "@/assets/headshot.jpg";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedSection from "@/components/AnimatedSection";

const researchAreas = [
  {
    number: "01",
    title: "Quantum Computing & Error Correction",
    description:
      "Ensuring that quantum error correction technologies and the broader quantum market are scalable for the upcoming quantum revolution.",
  },
  {
    number: "02",
    title: "Responsible AIs",
    description:
      "Striving to mitigate biased algorithms and maltech, especially within generative AI systems and their downstream societal impacts.",
  },
  {
    number: "03",
    title: "Computational Persuasion",
    description:
      "Studying the sycophantic behaviors of multi-agent AI workflows and their implications for trustworthy AI interactions.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <FloatingParticles count={35} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center pt-16">
          <div className="space-y-8">
            <div>
              <motion.p
                className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Researcher · Engineer · Builder
              </motion.p>
              <motion.h1
                className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-foreground"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Kavya
                <br />
                Uppal
              </motion.h1>
            </div>
            <motion.div
              className="h-px w-24 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Computer Science student at the University of Illinois at Urbana–Champaign,
              exploring the intersection of quantum computing, responsible AI, and computational persuasion.
            </motion.p>
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
              >
                View Experience
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-sm">
                <motion.img
                  src={headshot}
                  alt="Kavya Uppal professional headshot"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-full h-full border border-accent/30 rounded-sm -z-10"
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        </motion.div>
      </section>

      {/* Research Interests */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <FloatingParticles count={15} />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">
              Research Focuses
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16 max-w-2xl">
              Driving impact at the frontier of technology.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {researchAreas.map((area, i) => (
              <AnimatedSection key={area.number} delay={i * 0.15}>
                <motion.div
                  className="border-t border-border py-10 md:py-14 grid md:grid-cols-12 gap-6 items-start group hover:bg-secondary/30 transition-colors px-4 -mx-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="md:col-span-1 text-xs text-muted-foreground font-display">
                    {area.number}
                  </span>
                  <h3 className="md:col-span-4 font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="md:col-span-7 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Goals */}
      <section className="py-24 md:py-32 border-t border-border bg-secondary/20 relative overflow-hidden">
        <FloatingParticles count={10} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building technology that serves everyone.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I believe in creating AI systems that are transparent, equitable, and designed with human welfare at their core.
              My work spans reducing bias in generative models, strengthening quantum error correction, and understanding
              how AI persuades — all in service of a more trustworthy technological future.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Goals</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              From research to real-world impact.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I aim to bridge the gap between cutting-edge research and practical applications —
              whether that's making quantum computing more accessible, deploying fair AI at scale,
              or contributing to open-source tools that empower the next generation of builders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Strip */}
      <AnimatedSection>
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase">Get in Touch</p>
              <p className="text-foreground font-display text-lg">ukavya8@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <motion.a
                href="mailto:ukavya8@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kavya-uppal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/kavyau52"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;
