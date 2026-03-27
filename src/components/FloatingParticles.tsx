import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 60% / 0.06), transparent 70%)",
          right: "-5%",
          top: "20%",
        }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 60% / 0.04), transparent 70%)",
          left: "10%",
          bottom: "15%",
        }}
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
};

export default FloatingParticles;
