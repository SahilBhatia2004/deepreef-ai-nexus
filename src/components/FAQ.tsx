import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of AI solutions does DeepReef build?",
    a: "We build a range of AI systems including computer vision, autonomous workflow agents, offline copilots, document intelligence platforms, predictive analytics, and real-time monitoring tools — all designed for secure, mission-critical environments.",
  },
  {
    q: "Can your solutions run in air-gapped environments?",
    a: "Yes. We specialize in on-premise and air-gapped deployments, ensuring organizations maintain full control of their data and infrastructure without any cloud dependency.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve defense, intelligence, and enterprise organizations. Our solutions range from defense logistics and ISR analytics to enterprise workflow automation and predictive maintenance.",
  },
  {
    q: "How does DeepReef handle data security?",
    a: "Security is foundational to everything we build. Our systems are designed for classified and sensitive environments with full data sovereignty, encryption at rest and in transit, and compliance with defense-grade security standards.",
  },
  {
    q: "How do I get started with DeepReef?",
    a: "Reach out to us via email at contact@deepreef.ai. We'll discuss your operational needs and propose a tailored AI solution for your mission.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Questions & Answers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have more questions? Email us at{" "}
            <a href="mailto:contact@deepreef.ai" className="text-primary hover:underline">
              contact@deepreef.ai
            </a>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border/50 bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-mono text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{faq.q}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pl-16 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
