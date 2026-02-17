import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="hero-gradient absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
            AI for Defense & Enterprise
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Mission-Critical{" "}
            <span className="gradient-text">AI Systems</span>{" "}
            for Secure Operations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            We build cloud and self-hosted AI software and agents for defense
            and enterprise, designed for secure, mission-critical environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-box"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#capabilities"
            className="rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground hover:border-primary/50 hover:bg-secondary transition-all"
          >
            Explore Capabilities
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 glow-box">
            <img
              src={heroImage}
              alt="DeepReef AI command center"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
