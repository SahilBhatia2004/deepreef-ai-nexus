import { motion } from "framer-motion";
import { Eye, Brain, Bot, Cpu } from "lucide-react";
import capVision from "@/assets/capability-vision.webp";
import capAutomation from "@/assets/capability-automation.webp";
import capSecure from "@/assets/capability-secure.webp";

const capabilities = [
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Advanced object detection, image classification, and real-time visual analytics for surveillance, reconnaissance, and quality inspection.",
    image: capVision,
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description:
      "Intelligent workflow agents that automate complex decision-making pipelines, from logistics routing to intelligence analysis.",
    image: capAutomation,
  },
  {
    icon: Cpu,
    title: "Secure Deployments",
    description:
      "On-premise and air-gapped deployment options ensuring full data sovereignty. Your infrastructure, your control.",
    image: capSecure,
  },
];

const moreCapabilities = [
  {
    icon: Brain,
    title: "Multimodal AI",
    description: "Process text, images, video, and sensor data through unified intelligence pipelines.",
  },
  {
    icon: Eye,
    title: "Document Intelligence",
    description: "Extract, classify, and analyze information from complex documents at scale.",
  },
  {
    icon: Bot,
    title: "Predictive Analytics",
    description: "Anticipate outcomes with ML models trained on your operational data.",
  },
  {
    icon: Cpu,
    title: "Offline Copilots",
    description: "AI assistants that work without internet, built for field and classified environments.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Capabilities = () => {
  return (
    <section id="capabilities" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our <span className="gradient-text">Core Capabilities</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From computer vision to autonomous agents, we deliver AI that works in the most demanding environments.
          </p>
        </motion.div>

        {/* Featured capabilities with images */}
        <div className="space-y-24">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className={`flex flex-col gap-12 items-center ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-primary">
                  <cap.icon className="h-4 w-4" />
                  <span className="font-medium">{cap.title}</span>
                </div>
                <h3 className="text-2xl font-bold sm:text-3xl">{cap.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cap.description}
                </p>
              </div>
              <div className="flex-1 max-w-lg">
                <div className="overflow-hidden rounded-2xl border border-border/50 glow-box">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional capabilities grid */}
        <div className="mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moreCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="rounded-2xl border border-border/50 bg-card p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <cap.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{cap.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
