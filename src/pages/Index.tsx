import FloatingChatbot from "@/components/FloatingChatbot";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
    return (
        <div>
            <Navigation />
            <main>
                <section id="home">
                    <Hero />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="benefits">
                    <Benefits />
                </section>
                <section id="testimonials">
                    <Testimonials />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                
                {/* Compliance Certifications Section */}
                <section className="py-16 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Built for Regulated & High Velocity Work
                        </h2>
                        <div className="flex justify-center mt-8">
                            <img 
                                src="/lovable-uploads/584038c1-1457-4316-babe-6ef3c302c384.png" 
                                alt="Compliance Certifications - HIPAA, GDPR, AICPA SOC, ISO 27001" 
                                className="max-w-full h-auto max-h-96 object-contain"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <FloatingChatbot />
        </div>
    );
};

export default Index;