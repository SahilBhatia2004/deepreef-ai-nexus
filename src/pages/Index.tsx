import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Capabilities />
      <About />
      <Solutions />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
