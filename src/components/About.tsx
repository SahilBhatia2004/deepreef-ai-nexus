import { motion } from "framer-motion";
import { Lock, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Security First",
    description: "Every system we build is designed for classified and sensitive environments with zero-compromise security.",
  },
  {
    icon: Zap,
    title: "Operational Speed",
    description: "Our AI accelerates decision-making from hours to seconds, giving you a decisive strategic advantage.",
  },
  {
    icon: Globe,
    title: "Deploy Anywhere",
    description: "Cloud, on-premise, or air-gapped — our solutions run wherever your mission demands.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="section-fade absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Why DeepReef
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl max-w-3xl mx-auto">
            Transforming Operations Into{" "}
            <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We drive speed, accuracy, and strategic advantage across defense and enterprise operations with AI that's built to perform in the real world.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8"
            >
              <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-5">
                <v.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
