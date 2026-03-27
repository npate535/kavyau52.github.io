import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";

const experiences = [
  {
    org: "UIUC ConvAI Lab",
    role: "Student Researcher — Computational Persuasion",
    location: "Urbana, IL",
    dates: "Oct 2025 – Present",
    bullets: [
      "Studying the persuasive and sycophantic behaviors of various generative AI models within a collaborative environment",
      "Developing a framework to model and evaluate computational persuasion in 7 multi-turn LLM interactions, analyzing cooperative vs. competitive debate settings",
      "Designing 10+ structured interaction protocols and prompts to detect persuasion strategies and reduce hallucinations",
    ],
  },
  {
    org: "Google Quantum AI Labs",
    role: "Student Researcher — Post Quantum Cryptography & Quantum ML",
    location: "Remote / Hybrid",
    dates: "May 2024 – Aug 2025",
    bullets: [
      "Extended a summer internship to develop error correction algorithms for the Variational Quantum Eigensolver",
      "Developed and presented an original research project to 50+ Google engineers and faculty reviewers, applying quantum ML and quantum cryptography principles",
    ],
  },
  {
    org: "Illinois Institute of Technology",
    role: "Undergraduate Researcher — Computer Vision Lab",
    location: "Chicago, IL",
    dates: "May 2023 – May 2024",
    bullets: [
      "Integrated 2 explainable AIs into a deepfake detection model and developed a framework to measure performance",
      "Developed a model based on fairness evaluation metrics to reduce gender and racial bias in a text-to-image model by 80%",
    ],
  },
];

const leadership = [
  {
    org: "Illini Blockchain",
    role: "Member — Algo Trading & Development Teams",
    dates: "Sep 2025 – Present",
    bullets: [
      "Conducting research on decentralized financial prediction markets, developing visualization tools",
      "Leading NLP integration for a scalable, AI-assisted analytics platform",
    ],
  },
  {
    org: "Office of Technical Consulting and Research",
    role: "Initiative Project Manager, Consultant",
    dates: "Sep 2025 – Present",
    bullets: [
      "Conducting technical market analysis of 30+ AI systems for a global management consulting firm",
      "Leading alumni relations and external initiatives, organizing 5+ panels and sourcing 12+ projects",
    ],
  },
  {
    org: "CUBEC",
    role: "Technical Consultant",
    dates: "Sep 2025 – Present",
    bullets: [
      "Designing an AI-enhanced meeting page with OpenAI, Zoom, and Google STT APIs",
      "Selected for consulting mentorship with Accenture professionals",
    ],
  },
  {
    org: "UIUC ACM",
    role: "Corporate Committee Member",
    dates: "Sep 2025 – Present",
    bullets: [
      "Maintaining Fortune 50 partnerships for the world's largest ACM chapter, organizing 15+ events with 2k+ attendees",
      "Piloting a portfolio-building initiative for 19 ACM Special Interest Groups",
    ],
  },
  {
    org: "HeySteamer.com",
    role: "Founder",
    dates: "Jun 2020 – Present",
    bullets: [
      "Developed a learning platform engaging 500+ youth through quizzes, stories, and STEM research",
      "Rebranded and expanded with an embedded AI chatbot and doubled content output in 2024",
    ],
  },
];

const skills = {
  languages: "Python, C++, C#, HTML, CSS, JavaScript, R, Java",
  frameworks: "NumPy, TensorFlow, Django, Qiskit, Cirq, LaTeX",
  tools: "GitHub, Google Cloud, VS Code, Eclipse, MS Office",
};

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <FloatingParticles count={12} />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">
                Professional Background
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
                Experience
              </h1>
            </div>
            <motion.a
              href="/Kavya_Uppal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="gap-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all">
                <Download size={14} />
                Download Resume
              </Button>
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <section className="mb-20">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">Education</p>
            <div className="border-t border-border py-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                University of Illinois at Urbana–Champaign
              </h3>
              <p className="text-muted-foreground mt-2">
                B.S. in Computer Science, James Scholar, Grainger College of Engineering — GPA: 3.8
              </p>
              <p className="text-sm text-muted-foreground mt-1">Aug 2025 – May 2028 · Urbana, IL</p>
            </div>
          </section>
        </AnimatedSection>

        {/* Research Experience */}
        <section className="mb-20">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              Research Experience
            </p>
          </AnimatedSection>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.org} delay={i * 0.1}>
                <motion.div
                  className="border-t border-border py-10 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{exp.org}</h3>
                      <p className="text-accent text-sm mt-1">{exp.role}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right shrink-0">
                      <p>{exp.dates}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent/50 before:rounded-full">
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              Leadership & Extracurriculars
            </p>
          </AnimatedSection>
          <div className="space-y-0">
            {leadership.map((exp, i) => (
              <AnimatedSection key={exp.org} delay={i * 0.08}>
                <motion.div
                  className="border-t border-border py-8 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.org}</h3>
                      <p className="text-accent text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground shrink-0">{exp.dates}</p>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent/50 before:rounded-full">
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Skills */}
        <AnimatedSection>
          <section>
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              Technical Skills
            </p>
            <div className="border-t border-border py-8 grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([key, val]) => (
                <div key={key}>
                  <p className="text-xs tracking-[0.15em] text-accent mb-2 uppercase">{key}</p>
                  <p className="text-muted-foreground text-sm">{val}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Experience;
