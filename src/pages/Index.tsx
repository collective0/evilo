
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingStars from "@/components/FloatingStars";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingStars />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
