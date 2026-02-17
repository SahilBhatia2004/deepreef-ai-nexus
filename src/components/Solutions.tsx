import { motion } from "framer-motion";
import { Shield, Rocket, Target, Workflow } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Defense & Intelligence",
    description:
      "AI-powered ISR analytics, logistics optimization, and intelligence support systems built for classified environments.",
  },
  {
    icon: Rocket,
    title: "Enterprise Automation",
    description:
      "Transform complex workflows with intelligent automation that scales across departments and operations.",
  },
  {
    icon: Target,
    title: "Real-Time Monitoring",
    description:
      "Continuous situational awareness with AI-driven anomaly detection and predictive alerting systems.",
  },
  {
    icon: Workflow,
    title: "Custom AI Systems",
    description:
      "Bespoke AI solutions tailored to your operational needs — from copilots to full autonomous decision pipelines.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-32">
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
            Solutions
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Built for <span className="gradient-text">Your Mission</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From defense logistics to enterprise workflow automation, our AI transforms complex operations into scalable, intelligent systems.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card p-10 hover:border-primary/30 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                <sol.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
