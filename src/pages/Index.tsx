
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingStars from "@/components/FloatingStars";
import LogoCarousel from "@/components/LogoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingStars />
      <Navigation />
      <Hero />
      <Services />
      <LogoCarousel />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
