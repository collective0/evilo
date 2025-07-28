
import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";
import InteractiveVisual from "./InteractiveVisual";

const About = () => {
  const achievements = [
    "Affordable and Flexible Pricing",
    "95% Client Satisfaction Rate", 
    "24/7 Dedicated Support",
    "Industry-Leading Expertise"
  ];

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Leading the <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:300%_300%]">AI Revolution</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
              At Evilo, we're not just implementing AI solutions – we're <span className="text-primary font-medium">reshaping the future</span> of business automation.
              Our cutting-edge technologies and expert team deliver transformative results that drive real growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-4 glass-strong rounded-2xl p-6 border border-primary/20 hover-glow group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-primary flex-shrink-0" size={28} />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">Expert Team</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">AI specialists & engineers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 glass-strong rounded-2xl p-6 border border-primary/20 hover-glow group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-accent flex-shrink-0" size={28} />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg group-hover:text-accent transition-colors">Proven Results</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Measurable ROI & growth</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 glass-strong rounded-2xl p-6 border border-primary/20 hover-glow group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="text-primary flex-shrink-0" size={28} />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">Innovation</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Cutting-edge solutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 glass-strong rounded-2xl p-6 border border-primary/20 hover-glow group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-accent flex-shrink-0" size={28} />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg group-hover:text-accent transition-colors">Quality</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Enterprise-grade reliability</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-primary flex-shrink-0 group-hover:text-accent transition-colors duration-300" size={24} />
                  </div>
                  <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="flex justify-center items-center">
            <InteractiveVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
