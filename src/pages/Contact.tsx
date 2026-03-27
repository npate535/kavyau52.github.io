import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <FloatingParticles count={15} />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">
              Let's Connect
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Contact</h1>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="space-y-10">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                I'm always open to discussing research collaborations, opportunities, or just connecting
                over shared interests in quantum computing and AI.
              </p>

              <div className="space-y-6">
                {[
                  { href: "mailto:ukavya8@gmail.com", icon: Mail, label: "Email", value: "ukavya8@gmail.com" },
                  { href: "tel:+16309099918", icon: Phone, label: "Phone", value: "(630) 909-9918" },
                  { href: "https://linkedin.com/in/kavya-uppal", icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kavya-uppal", external: true },
                  { href: "https://github.com/kavyau52", icon: Github, label: "GitHub", value: "github.com/kavyau52", external: true },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                      <item.icon size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">{item.label}</p>
                      <p className="text-foreground text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              className="border border-border rounded-sm p-8 md:p-10 bg-card"
              whileHover={{ borderColor: "hsl(45 100% 60% / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  window.location.href = `mailto:ukavya8@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
                }}
              >
                <div>
                  <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2 block">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-foreground text-background font-medium text-sm py-3 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
