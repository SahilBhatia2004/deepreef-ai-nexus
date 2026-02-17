import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-12 sm:p-16 text-center"
        >
          <div className="hero-gradient absolute inset-0 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6">
              Ready to Build Your{" "}
              <span className="gradient-text">AI Advantage</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Let's discuss how DeepReef.AI can transform your operations with
              secure, mission-grade AI systems.
            </p>
            <a
              href="mailto:contact@deepreef.ai"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-box"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
